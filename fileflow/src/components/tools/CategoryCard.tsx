"use client";

import type { CategoryDefinition } from "@/config/tools";
import { categoryIconMap } from "@/config/tools";
import { ToolCard } from "./ToolCard";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: CategoryDefinition;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = categoryIconMap[category.id];

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br",
            category.gradient
          )}
        >
          {Icon && <Icon className={cn("h-5 w-5", category.color)} />}
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight">{category.name} Converters</h2>
          <p className="text-xs text-muted-foreground">{category.description}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} category={category} />
        ))}
      </div>
    </section>
  );
}
