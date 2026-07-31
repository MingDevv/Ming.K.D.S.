"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Mail, Loader2, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { Logo } from "@/components/shared/Logo";
import { useAuth } from "@/context/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const { signInWithEmail, signInWithOAuth, isDemoMode } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryError = searchParams.get("error");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    const { error } = await signInWithEmail(email, password);

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      setSuccessMsg("Signed in successfully! Redirecting...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 800);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg(null);
    setLoading(true);
    const { error } = await signInWithOAuth("google");
    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      setSuccessMsg("Signed in successfully! Redirecting...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 800);
    }
  };

  return (
    <GlassCard className="p-8">
      {isDemoMode && (
        <div className="mb-5 flex items-start gap-2.5 rounded-xl bg-primary/10 p-3.5 text-xs text-primary border border-primary/20">
          <Info className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold mb-0.5">Demo Mode Active</p>
            <p className="text-muted-foreground text-[11px]">
              You can sign in with any email & password to test the app dashboard immediately.
            </p>
          </div>
        </div>
      )}

      {(errorMsg || queryError) && (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-destructive/10 p-3 text-xs text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMsg || queryError}</span>
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

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-medium text-muted-foreground">
              Password
            </label>
            <Link href="/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
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
              <Loader2 className="h-4 w-4 animate-spin" /> Signing In...
            </>
          ) : (
            <>
              Sign In <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-xs font-medium transition-colors hover:bg-secondary/80 disabled:opacity-50"
      >
        <Mail className="h-4 w-4 text-red-500" /> Continue with Google
      </button>
    </GlassCard>
  );
}

export default function LoginPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  // Redirect to dashboard if already logged in
  if (!authLoading && user) {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center pt-24 pb-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center mb-4" />
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Sign in to access your saved files and Pro features
          </p>
        </div>

        <Suspense
          fallback={
            <GlassCard className="p-8 flex justify-center items-center">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </GlassCard>
          }
        >
          <LoginForm />
        </Suspense>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
}
