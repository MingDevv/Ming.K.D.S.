import { BaseConverter, type ConvertResult } from "../types";
import { converterRegistry } from "../registry";
import { FileSpreadsheet } from "lucide-react";
import { marked } from "marked";

// 1. Markdown to HTML
export class MarkdownToHtmlConverter extends BaseConverter {
  constructor() {
    super({
      id: "markdown-to-html",
      name: "Markdown to HTML",
      slug: "markdown-to-html",
      description: "Convert Markdown documents to clean HTML format",
      category: "document",
      inputFormats: [".md", ".markdown"],
      outputFormats: [".html"],
      maxFileSize: 10 * 1024 * 1024,
      icon: FileSpreadsheet,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const text = await file.text();
      const htmlBody = await marked.parse(text);

      const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${file.name.replace(/\.[^/.]+$/, "")}</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #1a1a1a; }
    pre { background: #f4f4f5; padding: 16px; border-radius: 8px; overflow-x: auto; }
    code { font-family: monospace; background: #f4f4f5; padding: 2px 6px; border-radius: 4px; }
    blockquote { border-left: 4px solid #0066cc; margin: 0; padding-left: 16px; color: #555; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
    th { background: #f8f9fa; }
  </style>
</head>
<body>
${htmlBody}
</body>
</html>`;

      const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8;" });
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.html`,
        outputMimeType: "text/html",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Markdown to HTML conversion failed",
      };
    }
  }
}

// Register document converters
converterRegistry.register(new MarkdownToHtmlConverter());
