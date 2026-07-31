"use client";

import { useState } from "react";
import { X, Sparkles, CheckCircle2, Loader2, Mail } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import type { ToolDefinition } from "@/config/tools";

interface WaitlistModalProps {
  tool: ToolDefinition | null;
  onClose: () => void;
}

export function WaitlistModal({ tool, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!tool) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <GlassCard className="relative w-full max-w-md p-6 sm:p-8 overflow-hidden shadow-2xl border border-border">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
              <Sparkles className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold tracking-tight">
              {tool.name} is Coming Soon!
            </h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              We&apos;re actively developing this conversion tool. Join the waitlist to get early access and an instant notification when it goes live!
            </p>

            <div className="mt-4 rounded-xl bg-secondary/50 p-3 border border-border flex items-center gap-3">
              <span className="rounded-md bg-primary/10 px-2 py-1 text-[11px] font-mono font-semibold text-primary capitalize">
                {tool.category}
              </span>
              <span className="text-xs font-medium text-foreground">
                {tool.inputFormats.join(", ")} &rarr; {tool.outputFormats.join(", ")}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-xl bg-background pl-10 pr-4 py-2.5 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Subscribing...
                  </>
                ) : (
                  <>Notify Me On Launch</>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">You&apos;re on the list!</h3>
            <p className="mt-2 text-xs text-muted-foreground">
              Thank you for your interest. We&apos;ll notify <span className="font-semibold text-foreground">{email}</span> as soon as {tool.name} is available.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-full bg-secondary py-2.5 text-xs font-semibold hover:bg-secondary/80 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
