import type { Metadata } from "next";
import { ToolsPageClient } from "@/components/tools/ToolsPageClient";

export const metadata: Metadata = {
  title: "All Conversion Tools",
  description:
    "Browse online conversion tools for PDF, Images, Video, Audio, Documents, Archives, and Developer files.",
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
