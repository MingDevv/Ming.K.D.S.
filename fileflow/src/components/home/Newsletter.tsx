"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeInUp } from "@/styles/animations";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // UI only — would call /api/newsletter in production
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="py-20 sm:py-28">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-violet-600 p-8 text-white sm:p-16">
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Mail className="h-7 w-7" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-4 text-blue-100">
              Get notified about new tools, features, and updates.
              No spam, unsubscribe anytime.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <div className="relative w-full max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-full bg-white/20 px-5 py-3 text-sm text-white placeholder-blue-200 backdrop-blur-sm ring-1 ring-white/30 transition-all focus:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-white/90 sm:w-auto"
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-blue-200">
              Join 2,000+ professionals who trust FileFlow
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
