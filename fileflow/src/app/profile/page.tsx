"use client";

import { Crown, LogOut, ShieldCheck, UserCheck } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, signOut, isDemoMode } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  const name = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User";
  const email = user?.email || "guest@example.com";
  const initials = name
    .split(" ")
    .map((part: string) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "US";

  return (
    <div className="space-y-8 max-w-4xl mx-auto pt-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">User Profile</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Manage your personal information and subscription details.
        </p>
      </div>

      <GlassCard className="p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg shrink-0">
              {initials}
            </div>
            <div>
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{email}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Crown className="h-3.5 w-3.5" /> Free Plan User
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-semibold">
                  {isDemoMode ? (
                    <>
                      <UserCheck className="h-3.5 w-3.5 text-amber-500" />
                      <span className="text-amber-500">Demo Mode</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Supabase Connected</span>
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>

          {user && (
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/20 self-start sm:self-center"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          )}
        </div>

        <div className="border-t border-border/50 pt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                readOnly
                value={name}
                className="w-full rounded-xl bg-secondary/30 px-4 py-2.5 text-sm border border-border focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                readOnly
                value={email}
                className="w-full rounded-xl bg-secondary/30 px-4 py-2.5 text-sm border border-border focus:outline-none"
              />
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
