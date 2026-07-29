-- ============================================
-- FileFlow Database Schema
-- ============================================
-- Run this in your Supabase SQL Editor to set up the database.

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- Enums
-- ============================================

create type plan_type as enum ('free', 'pro', 'enterprise');
create type conversion_status as enum ('pending', 'processing', 'completed', 'failed', 'cancelled');
create type feedback_type as enum ('bug', 'feature', 'general', 'support');
create type feedback_status as enum ('open', 'in_progress', 'resolved', 'closed');

-- ============================================
-- Profiles (extends auth.users)
-- ============================================

create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text not null,
  full_name text default '',
  avatar_url text,
  plan plan_type default 'free' not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.raw_user_meta_data->>'avatar_url', null)
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================
-- Conversion History
-- ============================================

create table public.conversion_history (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  tool_id text not null,
  tool_name text not null,
  category text not null,
  input_file_name text not null,
  input_file_size bigint not null,
  input_format text not null,
  output_file_name text default '',
  output_file_size bigint default 0,
  output_format text not null,
  status conversion_status default 'pending' not null,
  processing_time_ms integer default 0,
  created_at timestamptz default now() not null
);

alter table public.conversion_history enable row level security;

create policy "Users can view own conversions"
  on public.conversion_history for select
  using (auth.uid() = user_id);

create policy "Users can insert own conversions"
  on public.conversion_history for insert
  with check (auth.uid() = user_id);

create index idx_conversion_history_user_id on public.conversion_history(user_id);
create index idx_conversion_history_created_at on public.conversion_history(created_at desc);
create index idx_conversion_history_category on public.conversion_history(category);

-- ============================================
-- Favorites
-- ============================================

create table public.favorites (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  tool_id text not null,
  created_at timestamptz default now() not null,
  unique(user_id, tool_id)
);

alter table public.favorites enable row level security;

create policy "Users can view own favorites"
  on public.favorites for select
  using (auth.uid() = user_id);

create policy "Users can insert own favorites"
  on public.favorites for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own favorites"
  on public.favorites for delete
  using (auth.uid() = user_id);

create index idx_favorites_user_id on public.favorites(user_id);

-- ============================================
-- Subscriptions
-- ============================================

create table public.subscriptions (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null unique,
  plan plan_type default 'free' not null,
  status text default 'active' not null,
  current_period_start timestamptz default now() not null,
  current_period_end timestamptz default (now() + interval '30 days') not null,
  cancel_at_period_end boolean default false,
  created_at timestamptz default now() not null
);

alter table public.subscriptions enable row level security;

create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

create index idx_subscriptions_user_id on public.subscriptions(user_id);

-- ============================================
-- Feedback
-- ============================================

create table public.feedback (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete set null,
  email text not null,
  type feedback_type default 'general' not null,
  subject text not null,
  message text not null,
  status feedback_status default 'open' not null,
  created_at timestamptz default now() not null
);

alter table public.feedback enable row level security;

create policy "Users can view own feedback"
  on public.feedback for select
  using (auth.uid() = user_id);

create policy "Anyone can insert feedback"
  on public.feedback for insert
  with check (true);

create index idx_feedback_user_id on public.feedback(user_id);
create index idx_feedback_status on public.feedback(status);

-- ============================================
-- Files
-- ============================================

create table public.files (
  id uuid default uuid_generate_v4() not null primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  file_name text not null,
  file_size bigint not null,
  mime_type text not null,
  storage_path text not null,
  is_temporary boolean default true,
  expires_at timestamptz default (now() + interval '1 hour'),
  created_at timestamptz default now() not null
);

alter table public.files enable row level security;

create policy "Users can view own files"
  on public.files for select
  using (auth.uid() = user_id);

create policy "Users can insert own files"
  on public.files for insert
  with check (auth.uid() = user_id);

create policy "Users can delete own files"
  on public.files for delete
  using (auth.uid() = user_id);

create index idx_files_user_id on public.files(user_id);
create index idx_files_expires_at on public.files(expires_at) where is_temporary = true;

-- ============================================
-- Updated At Trigger
-- ============================================

create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.update_updated_at_column();

-- ============================================
-- Storage Buckets
-- ============================================
-- Run these in the Supabase Dashboard > Storage:
-- 1. Create bucket "uploads" (private)
-- 2. Create bucket "converted" (private)
-- 3. Set lifecycle rules to auto-delete after 1 hour for temporary files
