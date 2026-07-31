import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/config/tools";
import { ToolWorkspace } from "@/components/tools/ToolWorkspace";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = categories.flatMap((c) => c.tools).find((t) => t.slug === slug);

  if (!tool) {
    return { title: "Tool Not Found - FileFlow" };
  }

  return {
    title: `${tool.name} - Free Online File Converter | FileFlow`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = categories.flatMap((c) => c.tools).find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return <ToolWorkspace tool={tool} />;
}
