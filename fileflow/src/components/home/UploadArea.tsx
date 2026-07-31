"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Upload, FileUp, X, CheckCircle2, Zap } from "lucide-react";
import { categories, type ToolDefinition } from "@/config/tools";
import { cn, formatFileSize } from "@/lib/utils";
import { fadeInUp } from "@/styles/animations";

export function UploadArea() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSelectedFile(file);
  }, []);

  const clearFile = useCallback(() => {
    setSelectedFile(null);
  }, []);

  // Matching tools based on file extension
  const matchingTools = useMemo(() => {
    if (!selectedFile) return [];
    const ext = "." + selectedFile.name.split(".").pop()?.toLowerCase();
    const allTools = categories.flatMap((c) => c.tools);
    const matches = allTools.filter(
      (t) => t.isEnabled && t.inputFormats.includes(ext)
    );
    return matches.length > 0 ? matches : allTools.filter((t) => t.isEnabled);
  }, [selectedFile]);

  return (
    <section className="py-16 sm:py-20">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "glass-card relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-10 text-center transition-all duration-300 sm:p-14",
            isDragging
              ? "border-primary bg-primary/5 scale-[1.02]"
              : "border-border hover:border-primary/50",
            selectedFile && "border-green-500/50 bg-green-500/5"
          )}
        >
          {!selectedFile ? (
            <>
              <div
                className={cn(
                  "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors",
                  isDragging
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                <Upload className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-semibold sm:text-2xl">
                {isDragging ? "Drop your file here" : "Drop your file here"}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                or click to browse from your computer
              </p>

              <label className="mt-6 cursor-pointer">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110">
                  <FileUp className="h-4 w-4" />
                  Choose File
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>

              <p className="mt-4 text-xs text-muted-foreground">
                Supports PDF, Images, Video, Audio, Documents, and more • Max 25MB (Free)
              </p>
            </>
          ) : (
            <div className="w-full">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <h3 className="text-lg font-semibold">{selectedFile.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatFileSize(selectedFile.size)}
              </p>

              {/* Tool Suggestions */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Select a Conversion Tool:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-1">
                  {matchingTools.map((tool: ToolDefinition) => (
                    <Link
                      key={tool.id}
                      href={`/tools/${tool.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors text-left group"
                    >
                      <div>
                        <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          {tool.outputFormats.join(", ")}
                        </div>
                      </div>
                      <Zap className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  onClick={clearFile}
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-xs font-medium transition-colors hover:bg-secondary/80"
                >
                  <X className="h-3.5 w-3.5" />
                  Remove File
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

