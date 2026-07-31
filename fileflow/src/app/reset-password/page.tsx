"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Logo } from "@/components/shared/Logo";
import { useAuth } from "@/context/AuthContext";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const { updatePassword } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match. Please try again.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    const { error } = await updatePassword(password);

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      setSuccessMsg("Password updated successfully! Redirecting to sign in...");
      setTimeout(() => {
        router.push("/login");
      }, 1200);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center pt-24 pb-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold tracking-tight">Create new password</h1>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Please enter a new secure password for your account.
          </p>
        </div>

        <GlassCard className="p-8">
          {errorMsg && (
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-xs text-emerald-500">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                New Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full rounded-xl bg-secondary/50 px-4 py-2.5 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Confirm New Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full rounded-xl bg-secondary/50 px-4 py-2.5 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Updating Password...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" /> Reset Password <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </GlassCard>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Back to{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
