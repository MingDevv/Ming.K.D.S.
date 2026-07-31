"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isDemoMode: boolean;
  signInWithEmail: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUpWithEmail: (email: string, password: string, name?: string) => Promise<{ error: Error | null; requiresConfirmation?: boolean }>;
  signInWithOAuth: (provider: "github" | "google") => Promise<{ error: Error | null }>;
  resetPasswordForEmail: (email: string) => Promise<{ error: Error | null }>;
  updatePassword: (password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USER_KEY = "fileflow_demo_user";

function isSupabaseConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return Boolean(url && key && !url.includes("placeholder") && !key.includes("placeholder"));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isDemoMode] = useState(() => !isSupabaseConfigured());
  const [user, setUser] = useState<User | null>(() => {
    if (!isSupabaseConfigured() && typeof window !== "undefined") {
      try {
        const storedDemoUser = localStorage.getItem(DEMO_USER_KEY);
        if (storedDemoUser) return JSON.parse(storedDemoUser) as User;
      } catch (e) {
        console.warn("Failed to parse demo user:", e);
      }
    }
    return null;
  });
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(() => (isSupabaseConfigured() ? true : false));

  const supabase = createClient();

  const refreshSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
    } catch (err) {
      console.warn("Session refresh error:", err);
    }
  };

  useEffect(() => {
    if (!isDemoMode) {
      async function getInitialSession() {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          setSession(session);
          setUser(session?.user ?? null);
        } catch (err) {
          console.warn("Supabase session check failed:", err);
        } finally {
          setLoading(false);
        }
      }

      getInitialSession();

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      });

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [supabase, isDemoMode]);

  const signInWithEmail = async (email: string, password: string) => {
    if (isDemoMode) {
      if (!email || !password) {
        return { error: new Error("Please enter both email and password") };
      }
      const mockUser = {
        id: "demo-user-id",
        email,
        user_metadata: {
          full_name: email.split("@")[0],
        },
        aud: "authenticated",
        role: "authenticated",
        created_at: new Date().toISOString(),
      } as unknown as User;

      setUser(mockUser);
      localStorage.setItem(DEMO_USER_KEY, JSON.stringify(mockUser));
      return { error: null };
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        return { error: new Error(data.error || "Login failed. Please check your credentials.") };
      }

      await refreshSession();
      return { error: null };
    } catch (err: unknown) {
      return { error: err as Error };
    }
  };

  const signUpWithEmail = async (email: string, password: string, name?: string) => {
    if (isDemoMode) {
      if (!email || !password) {
        return { error: new Error("Please enter email and password") };
      }
      const mockUser = {
        id: "demo-user-id",
        email,
        user_metadata: {
          full_name: name || email.split("@")[0],
        },
        aud: "authenticated",
        role: "authenticated",
        created_at: new Date().toISOString(),
      } as unknown as User;

      setUser(mockUser);
      localStorage.setItem(DEMO_USER_KEY, JSON.stringify(mockUser));
      return { error: null, requiresConfirmation: false };
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        return { error: new Error(data.error || "Registration failed. Please try again.") };
      }

      await refreshSession();
      return { error: null, requiresConfirmation: data.requiresConfirmation };
    } catch (err: unknown) {
      return { error: err as Error };
    }
  };

  const signInWithOAuth = async (provider: "github" | "google") => {
    if (isDemoMode) {
      const mockUser = {
        id: `demo-${provider}-user`,
        email: `user@${provider}.com`,
        user_metadata: {
          full_name: `${provider.toUpperCase()} User`,
        },
        aud: "authenticated",
        role: "authenticated",
        created_at: new Date().toISOString(),
      } as unknown as User;

      setUser(mockUser);
      localStorage.setItem(DEMO_USER_KEY, JSON.stringify(mockUser));
      return { error: null };
    }

    try {
      const redirectTo = `${window.location.origin}/auth/callback`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
        },
      });
      return { error };
    } catch (err: unknown) {
      return { error: err as Error };
    }
  };

  const resetPasswordForEmail = async (email: string) => {
    if (isDemoMode) {
      return { error: null };
    }

    try {
      const redirectTo = `${window.location.origin}/reset-password`;
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo,
      });
      return { error };
    } catch (err: unknown) {
      return { error: err as Error };
    }
  };

  const updatePassword = async (password: string) => {
    if (isDemoMode) {
      return { error: null };
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });
      return { error };
    } catch (err: unknown) {
      return { error: err as Error };
    }
  };

  const signOut = async () => {
    if (isDemoMode) {
      localStorage.removeItem(DEMO_USER_KEY);
      setUser(null);
      setSession(null);
      return;
    }

    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.warn("Sign out error:", err);
    }
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        isDemoMode,
        signInWithEmail,
        signUpWithEmail,
        signInWithOAuth,
        resetPasswordForEmail,
        updatePassword,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
