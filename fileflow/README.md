# FileFlow — Modern Online File Conversion Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Storage-emerald?style=flat-square&logo=supabase)](https://supabase.com/)

**FileFlow** is a modern, high-performance online file conversion platform designed to handle documents, images, video, audio, archives, and developer file formats in a single, beautiful web interface.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) + CSS Modules / Glassmorphic Utility Classes
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Database & Auth**: [Supabase PostgreSQL](https://supabase.com/)
- **Storage**: Supabase Storage Buckets
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🎨 Design Aesthetics

- **Style**: Apple, Linear, Vercel design systems
- **Theme**: Light & Dark mode support with smooth transitions
- **Key Features**: Glassmorphism (`backdrop-blur`), soft shadows, rounded corners (`2xl`), blue accent palette (`#2563eb`).

---

## 📁 Directory Structure

```
fileflow/
├── public/                # Static assets, robots.txt, sitemap.xml
├── supabase/              # SQL schema, RLS policies, migrations
├── src/
│   ├── app/               # Next.js App Router (Pages, API routes, Layouts)
│   ├── components/        # UI components (home, layout, shared, tools)
│   ├── config/            # Site metadata, nav links, tool definitions
│   ├── converters/        # Converter plugin registry and architecture
│   ├── hooks/             # Custom React hooks (media queries, scroll)
│   ├── lib/               # Utilities, validators, Supabase client
│   ├── styles/            # Framer Motion animation variants
│   └── types/             # Strict TypeScript definitions & database schemas
├── ARCHITECTURE.md        # Technical design & scalable converter system
├── ROADMAP.md             # Multi-phase execution plan (Day 1 to Enterprise)
└── PROJECT_RULES.md       # Engineering standards & code quality rules
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.x or later
- npm or pnpm

### 2. Installation
```bash
cd fileflow
npm install
```

### 3. Environment Variables
Copy `.env.local.example` to `.env.local` and set your Supabase credentials:
```bash
cp .env.local.example .env.local
```

### 4. Database Setup
Run the SQL script located at `supabase/schema.sql` in your Supabase SQL Editor.

### 5. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📄 Documentation

- [ARCHITECTURE.md](file:///c:/Users/PC/Downloads/แนวข้อสอบ/fileflow/ARCHITECTURE.md) — Plugin architecture for scaling to 100+ tools
- [ROADMAP.md](file:///c:/Users/PC/Downloads/แนวข้อสอบ/fileflow/ROADMAP.md) — Future development phases
- [PROJECT_RULES.md](file:///c:/Users/PC/Downloads/แนวข้อสอบ/fileflow/PROJECT_RULES.md) — Code style and design principles
