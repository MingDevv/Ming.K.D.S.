import type { Metadata } from "next";
import { Zap, Shield, Globe, Users, Heart, Code } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata: Metadata = {
  title: "About FileFlow",
  description: "Learn about FileFlow's mission to simplify file processing for everyone on the web.",
};

const values = [
  {
    icon: Zap,
    title: "Speed First",
    description: "We optimize every conversion algorithm to process files in milliseconds, not minutes.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "We don't sell data, harvest files, or track user activity. File privacy is guaranteed.",
  },
  {
    icon: Globe,
    title: "Universal Access",
    description: "File flow should be accessible to anyone, anywhere, regardless of OS or device capabilities.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Built with modern APIs and strict standards to ensure high reliability and extensibility.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Mission"
          title="File conversion without friction"
          subtitle="FileFlow was built to eliminate clumsy file software, predatory subscriptions, and slow online converters."
        />

        {/* Story Section */}
        <div className="mx-auto max-w-3xl">
          <GlassCard className="p-8 sm:p-12 space-y-6 text-muted-foreground leading-relaxed">
            <h3 className="text-xl font-bold text-foreground">Why we created FileFlow</h3>
            <p>
              Every day millions of workers, students, developers, and creators struggle with incompatible file formats.
              Traditional desktop software is bloated, expensive, and tied to single operating systems.
              Legacy online converters are plagued with spam, file size caps, privacy leaks, and hidden fees.
            </p>
            <p>
              We designed <strong className="text-foreground">FileFlow</strong> from the ground up to offer an Apple-like minimal design,
              Vercel-level performance, and Linear-grade ergonomics. Whether you need to convert a single PDF page or batch process 1,000 developer files,
              FileFlow handles it smoothly in your web browser.
            </p>
          </GlassCard>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <SectionHeading title="Our Core Values" subtitle="Principles that drive every decision we make." />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <GlassCard key={val.title} className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold">{val.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
