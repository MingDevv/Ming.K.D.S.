"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Globe,
  Lock,
  Layers,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Convert files in seconds with our optimized processing pipeline. No waiting, no delays.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your files are encrypted and automatically deleted after conversion. We never store your data.",
  },
  {
    icon: Globe,
    title: "Browser-Based",
    description: "No software to install. Convert files directly in your browser on any device, anywhere.",
  },
  {
    icon: Lock,
    title: "No Signup Required",
    description: "Start converting files immediately. No account needed for basic conversions.",
  },
  {
    icon: Layers,
    title: "Batch Processing",
    description: "Convert multiple files at once with our Pro plan. Save time on repetitive tasks.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Fully responsive design that works perfectly on phones, tablets, and desktops.",
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Features"
          title="Why choose FileFlow?"
          subtitle="Built for speed, security, and simplicity. Everything you need for seamless file conversion."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="glass-card group rounded-2xl p-8 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
