"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";
import { getPopularTools, getCategoryById, categoryIconMap } from "@/config/tools";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";
import { cn } from "@/lib/utils";

export function PopularTools() {
  const popularTools = getPopularTools();

  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Popular"
          title="Most used tools"
          subtitle="The conversion tools our users love the most. Start converting in seconds."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {popularTools.map((tool) => {
            const category = getCategoryById(tool.category);
            const Icon = category ? categoryIconMap[category.id] : undefined;

            return (
              <motion.div key={tool.id} variants={staggerItem}>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="glass-card group flex items-start gap-4 rounded-2xl p-6 transition-all hover:scale-[1.02] hover:border-primary/50"
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
                      category?.gradient
                    )}
                  >
                    {Icon && <Icon className={cn("h-6 w-6", category?.color)} />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold">{tool.name}</h3>
                      {tool.isPremium && (
                        <Crown className="h-3.5 w-3.5 text-amber-500" />
                      )}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {tool.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {tool.inputFormats.join(", ")}
                      </span>
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        {tool.outputFormats.join(", ")}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 mt-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/tools"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all tools
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
