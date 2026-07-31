"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail, Loader2, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Logo } from "@/components/shared/Logo";
import { useAuth } from "@/context/AuthContext";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const { resetPasswordForEmail, isDemoMode } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    const { error } = await resetPasswordForEmail(email);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg(
        isDemoMode
          ? "Demo Mode: Password reset link generated! (No real email sent in demo mode)"
          : "Password reset instructions sent to your email! Please check your inbox."
      );
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center pt-24 pb-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold tracking-tight">Reset your password</h1>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Enter your email address and we&apos;ll send you instructions to reset your password.
          </p>
        </div>

        <GlassCard className="p-8">
          {isDemoMode && (
            <div className="mb-5 flex items-start gap-2.5 rounded-xl bg-primary/10 p-3.5 text-xs text-primary border border-primary/20">
              <Info className="h-4 w-4 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">Demo Mode Active</p>
                <p className="text-muted-foreground text-[11px]">
                  Testing password reset flow. Enter any email address to test UI response.
                </p>
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-xs text-emerald-500 leading-relaxed">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
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
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending link...
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" /> Send Reset Link
                </>
              )}
            </button>
          </form>
        </GlassCard>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Remember your password?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
