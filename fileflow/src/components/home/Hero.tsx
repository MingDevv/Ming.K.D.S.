"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/styles/animations";
import { totalToolCount } from "@/config/tools";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute top-32 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-48 right-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              Now in Public Beta
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Convert any file,{" "}
            <span className="gradient-text">instantly</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            The modern file conversion platform. Transform documents, images, videos,
            audio, and more — all in your browser. Fast, secure, and free.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/tools"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
            >
              Start Converting
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary/80"
            >
              View Pricing
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
          >
            {[
              { value: `${totalToolCount}+`, label: "Conversion Tools" },
              { value: "Free", label: "No Signup Required" },
              { value: "100%", label: "Browser-Based" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
