# FileFlow Architecture Specification

This document details the software architecture, design patterns, and security framework powering **FileFlow**.

---

## 🏛️ System Architecture Overview

FileFlow employs a modular, event-driven Jamstack architecture optimized for high performance, maximum security, and infinite horizontal scalability.

```
[ Client Browser ]
       │
       ├── WebAssembly Converters (Local processing: PNG, JSON, PDF)
       │
       └── HTTPS / REST API
               │
      [ Vercel Edge / Next.js Middleware ]
               │ (Rate Limiting, Auth Guard, File Validation)
               │
      [ Supabase Cloud ]
         ├── Postgres Database (Profiles, History, Favorites, Subs)
         └── Object Storage (Temporary Uploads & Output files)
```

---

## 🔌 Scalable Converter Architecture (100+ Tools)

To support scaling to 100+ conversion tools without spaghetti code, FileFlow uses the **Registry & Plugin Pattern**.

### 1. Converter Definition Interface (`src/converters/types.ts`)

Every tool in FileFlow implements a strict contract:

```ts
export interface ConverterDefinition {
  id: string;             // e.g., "pdf-to-word"
  name: string;           // e.g., "PDF to Word"
  slug: string;
  description: string;
  category: ToolCategory; // "pdf" | "image" | "video" | "audio" | "document" | "archive" | "developer"
  inputFormats: string[];
  outputFormats: string[];
  maxFileSize: number;
  icon: LucideIcon;
  isPremium: boolean;
  isEnabled: boolean;
  convert: (file: File, options?: ConvertOptions) => Promise<ConvertResult>;
}
```

### 2. Central Registry (`src/converters/registry.ts`)

The singleton `ConverterRegistry` registers and provides instant lookup for all converters:

```ts
class ConverterRegistry {
  private converters = new Map<string, ConverterDefinition>();
  register(converter: ConverterDefinition): void;
  get(id: string): ConverterDefinition | undefined;
  getByCategory(category: ToolCategory): ConverterDefinition[];
}
```

### 3. Adding a New Converter

To add a new converter (e.g. `svg-to-png`), developers simply create a file under `src/converters/image/svgToPng.ts` that extends `BaseConverter` and calls `converterRegistry.register(...)`. No existing page or UI code needs to be modified.

---

## 🔒 Security Architecture

1. **Ephemeral File Storage**: All uploaded files are assigned a Time-To-Live (TTL) of 1 hour. Supabase storage lifecycle policies automatically wipe temporary buckets.
2. **Strict MIME & Size Validation**: Upload requests are validated twice — on client select and server-side in Next.js Route Handlers (`src/lib/validators.ts`).
3. **Rate Limiting**: Middleware tracks request IP frequencies to prevent Denial of Service (DoS) attacks on free conversion endpoints.
4. **Row Level Security (RLS)**: Supabase PostgreSQL tables strictly restrict access to user data using `auth.uid() = user_id`.

---

## 📊 Database Schema (`supabase/schema.sql`)

- `profiles`: User account details synced with `auth.users`
- `conversion_history`: Tracks conversion metadata, execution times, and status
- `favorites`: User bookmarked converters
- `subscriptions`: Stripe billing status and limits
- `feedback`: Support requests and feature suggestions
- `files`: File metadata and expiration timestamps
