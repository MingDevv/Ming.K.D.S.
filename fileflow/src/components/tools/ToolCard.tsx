"use client";

import Link from "next/link";
import { Crown, ArrowRight, Lock } from "lucide-react";
import type { ToolDefinition, CategoryDefinition } from "@/config/tools";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: ToolDefinition;
  category?: CategoryDefinition;
}

export function ToolCard({ tool }: ToolCardProps) {
  const content = (
    <div
      className={cn(
        "glass-card group relative flex flex-col justify-between rounded-2xl p-6 transition-all hover:scale-[1.02] hover:border-primary/50",
        !tool.isEnabled && "opacity-75 cursor-not-allowed hover:scale-100 hover:border-border"
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary capitalize">
            {tool.category}
          </span>
          <div className="flex items-center gap-1.5">
            {tool.isPremium && (
              <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-500">
                <Crown className="h-3 w-3" />
                PRO
              </span>
            )}
            {!tool.isEnabled && (
              <span className="flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                <Lock className="h-3 w-3" />
                Coming Soon
              </span>
            )}
          </div>
        </div>

        <h3 className="mt-4 text-base font-semibold group-hover:text-primary transition-colors">
          {tool.name}
        </h3>
        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {tool.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="font-mono">{tool.inputFormats.join(", ")}</span>
          <ArrowRight className="h-3 w-3" />
          <span className="font-mono">{tool.outputFormats.join(", ")}</span>
        </div>

        {tool.isEnabled && (
          <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 flex items-center gap-1">
            Convert <ArrowRight className="h-3 w-3" />
          </span>
        )}
      </div>
    </div>
  );

  if (tool.isEnabled) {
    return <Link href={`/tools/${tool.slug}`}>{content}</Link>;
  }

  return content;
}

