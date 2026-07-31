"use client";

import { useState, useMemo } from "react";
import { Search, Sparkles, CheckCircle2, Clock } from "lucide-react";
import { categories, categoryIconMap, totalToolCount, totalLiveToolCount, totalComingSoonCount } from "@/config/tools";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

type FilterStatus = "all" | "live" | "coming-soon";

export function ToolsPageClient() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all");

  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        let tools = cat.tools;

        if (statusFilter === "live") {
          tools = tools.filter((t) => t.isEnabled);
        } else if (statusFilter === "coming-soon") {
          tools = tools.filter((t) => !t.isEnabled);
        }

        if (query.trim()) {
          const q = query.toLowerCase();
          tools = tools.filter(
            (t) =>
              t.name.toLowerCase().includes(q) ||
              t.description.toLowerCase().includes(q) ||
              t.inputFormats.some((f) => f.toLowerCase().includes(q)) ||
              t.outputFormats.some((f) => f.toLowerCase().includes(q))
          );
        }

        return {
          ...cat,
          tools,
        };
      })
      .filter((cat) => cat.tools.length > 0);
  }, [query, statusFilter]);

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tool Directory"
          title="File Conversion Tools"
          subtitle="Convert any file format effortlessly right in your browser. Fast, secure, and client-side processing."
        />

        {/* Search & Filter Bar */}
        <div className="mt-8 mb-10 space-y-6">
          <div className="mx-auto max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools or format (.png, .pdf, .json)..."
              className="w-full rounded-full bg-secondary/60 pl-11 pr-4 py-3 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setStatusFilter("all")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all",
                statusFilter === "all"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              <Sparkles className="h-3.5 w-3.5" /> All Tools ({totalToolCount})
            </button>

            <button
              onClick={() => setStatusFilter("live")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all",
                statusFilter === "live"
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> Live Now ({totalLiveToolCount})
            </button>

            <button
              onClick={() => setStatusFilter("coming-soon")}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all",
                statusFilter === "coming-soon"
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              <Clock className="h-3.5 w-3.5" /> Coming Soon ({totalComingSoonCount})
            </button>
          </div>

          {/* Category Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-border/40">
            {categories.map((cat) => {
              const Icon = categoryIconMap[cat.id];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-1.5 rounded-full bg-secondary/40 px-3.5 py-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {Icon && <Icon className="h-3 w-3" />}
                  {cat.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Category Sections */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-secondary/20 rounded-3xl border border-border p-8">
            <p className="text-base font-semibold text-foreground">No conversion tools found</p>
            <p className="text-xs text-muted-foreground mt-1">
              Try adjusting your search query or switching filter tabs.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setStatusFilter("all");
              }}
              className="mt-4 rounded-full bg-primary px-6 py-2 text-xs font-semibold text-primary-foreground"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
