import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Crown, Sparkles } from "lucide-react";
import { PLANS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Simple, transparent pricing for individuals, teams, and enterprises. Start converting for free.",
};

export default function PricingPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Plans & Pricing"
          title="Simple, transparent pricing"
          subtitle="Choose the plan that's right for you. Free forever for basic use, upgrade anytime for power features."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((plan) => (
            <GlassCard
              key={plan.id}
              className={cn(
                "relative flex flex-col justify-between p-8",
                plan.popular && "border-primary/50 shadow-2xl ring-2 ring-primary/20 scale-105"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-md flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {plan.id === "pro" && <Crown className="h-5 w-5 text-amber-500" />}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">
                    ${plan.price.monthly}
                  </span>
                  <span className="text-xs text-muted-foreground">/month</span>
                </div>

                <div className="my-6 border-t" />

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Included Features
                  </p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2.5 text-xs">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limit) => (
                    <div key={limit} className="flex items-center gap-2.5 text-xs text-muted-foreground opacity-60">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                        <X className="h-3 w-3" />
                      </div>
                      <span className="line-through">{limit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={plan.id === "enterprise" ? "/contact" : "/register"}
                  className={cn(
                    "flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-all shadow-md",
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:brightness-110 shadow-primary/25"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  )}
                >
                  {plan.cta}
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
