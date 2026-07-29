"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories, categoryIconMap } from "@/config/tools";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { staggerContainer, staggerItem } from "@/styles/animations";
import { cn } from "@/lib/utils";

export function PopularCategories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Categories"
          title="Every file type, covered"
          subtitle="From documents to developer files — we support all major formats with specialized tools for each category."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
        >
          {categories.map((category) => {
            const Icon = categoryIconMap[category.id];
            return (
              <motion.div key={category.id} variants={staggerItem}>
                <Link
                  href={`/tools#${category.id}`}
                  className="glass-card group flex flex-col items-center rounded-2xl p-6 text-center transition-all"
                >
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform group-hover:scale-110",
                      category.gradient
                    )}
                  >
                    {Icon && <Icon className={cn("h-6 w-6", category.color)} />}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{category.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {category.tools.length} tools
                  </p>
                  <ArrowRight className="mt-3 h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
