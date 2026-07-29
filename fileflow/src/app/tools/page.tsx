import type { Metadata } from "next";
import { categories, categoryIconMap } from "@/config/tools";
import { CategoryCard } from "@/components/tools/CategoryCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "All Conversion Tools",
  description:
    "Browse over 100+ online conversion tools for PDF, Images, Video, Audio, Documents, Archives, and Developer files.",
};

export default function ToolsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tool Directory"
          title="File Conversion Tools"
          subtitle="Select a tool category below. Convert any file format effortlessly right in your browser."
        />

        {/* Quick Nav */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = categoryIconMap[cat.id];
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {cat.name} ({cat.tools.length})
              </a>
            );
          })}
        </div>

        {/* Category Sections */}
        <div className="space-y-16">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
