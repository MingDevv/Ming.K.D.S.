import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-24 pb-16 px-4">
      <GlassCard className="max-w-md p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FileQuestion className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">404</h1>
        <h2 className="mt-2 text-lg font-semibold">Page Not Found</h2>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          The file or page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
