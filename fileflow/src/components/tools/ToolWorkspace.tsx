"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  FileUp,
  X,
  CheckCircle2,
  Download,
  ArrowLeft,
  Loader2,
  SlidersHorizontal,
  FileCheck,
  Zap,
  AlertCircle,
} from "lucide-react";
import type { ToolDefinition } from "@/config/tools";
import { converterRegistry } from "@/converters";
import { cn, formatFileSize } from "@/lib/utils";

interface ToolWorkspaceProps {
  tool: ToolDefinition;
}

export function ToolWorkspace({ tool }: ToolWorkspaceProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    url: string;
    fileName: string;
    mimeType: string;
    size: number;
    processingTimeMs: number;
  } | null>(null);

  // Conversion Options State
  const [quality, setQuality] = useState(90);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);

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
    setError(null);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  }, []);

  const handleReset = () => {
    setFile(null);
    setResult(null);
    setError(null);
  };

  const saveToHistory = (item: {
    toolId: string;
    toolName: string;
    inputName: string;
    outputName: string;
    inputSize: number;
    outputSize: number;
    processingTimeMs: number;
  }) => {
    try {
      const existing = localStorage.getItem("fileflow_history");
      const list = existing ? JSON.parse(existing) : [];
      const updated = [
        {
          id: Math.random().toString(36).substring(2, 9),
          timestamp: new Date().toISOString(),
          ...item,
        },
        ...list,
      ].slice(0, 50); // keep last 50
      localStorage.setItem("fileflow_history", JSON.stringify(updated));
    } catch {
      // ignore storage errors
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    setIsConverting(true);
    setError(null);
    setResult(null);

    try {
      const converter = converterRegistry.get(tool.id);
      if (!converter) {
        throw new Error(`Converter for "${tool.name}" is coming soon!`);
      }

      const res = await converter.convert(file, {
        quality: quality / 100,
        width,
        height,
      });

      if (!res.success || !res.outputFile || !res.outputFileName) {
        throw new Error(res.error || "Conversion failed. Please try a different file.");
      }

      const blobUrl = URL.createObjectURL(res.outputFile);
      setResult({
        url: blobUrl,
        fileName: res.outputFileName,
        mimeType: res.outputMimeType || "application/octet-stream",
        size: res.outputFile.size,
        processingTimeMs: res.processingTimeMs || 100,
      });

      saveToHistory({
        toolId: tool.id,
        toolName: tool.name,
        inputName: file.name,
        outputName: res.outputFileName,
        inputSize: file.size,
        outputSize: res.outputFile.size,
        processingTimeMs: res.processingTimeMs || 100,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred during conversion.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all tools
        </Link>

        {/* Tool Header */}
        <div className="glass-card rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Zap className="h-40 w-40 text-primary" />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary capitalize">
                  {tool.category}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {tool.inputFormats.join(", ")} &rarr; {tool.outputFormats.join(", ")}
                </span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{tool.name}</h1>
              <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-xl">
                {tool.description}
              </p>
            </div>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 rounded-2xl bg-red-500/10 border border-red-500/20 p-4 text-red-600 dark:text-red-400 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Main Interface Workspace */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-border">
          {!file && !result && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-10 sm:p-14 text-center transition-all duration-300",
                isDragging
                  ? "border-primary bg-primary/5 scale-[1.01]"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Upload className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold sm:text-2xl">
                Drop your file here to convert
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Accepted formats: {tool.inputFormats.join(", ")} (Max 25MB)
              </p>

              <label className="mt-6 cursor-pointer">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110">
                  <FileUp className="h-4 w-4" />
                  Select File
                </span>
                <input
                  type="file"
                  accept={tool.inputFormats.join(",")}
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </div>
          )}

          {/* Active File State & Options */}
          {file && !result && (
            <div className="space-y-6">
              {/* File Info Card */}
              <div className="flex items-center justify-between rounded-2xl bg-secondary/50 p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base truncate max-w-xs sm:max-w-md">
                      {file.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="p-2 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  title="Remove file"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Conversion Settings (if relevant) */}
              {tool.id === "png-to-jpg" && (
                <div className="rounded-2xl bg-secondary/30 p-5 border border-border">
                  <div className="flex items-center gap-2 mb-3 font-semibold text-sm">
                    <SlidersHorizontal className="h-4 w-4 text-primary" />
                    JPG Compression Quality: {quality}%
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                </div>
              )}

              {tool.id === "image-resize" && (
                <div className="rounded-2xl bg-secondary/30 p-5 border border-border space-y-4">
                  <div className="flex items-center gap-2 font-semibold text-sm">
                    <SlidersHorizontal className="h-4 w-4 text-primary" />
                    Target Image Dimensions
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground">Width (px)</label>
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="mt-1 w-full rounded-xl bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Height (px)</label>
                      <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="mt-1 w-full rounded-xl bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Convert Trigger Button */}
              <button
                onClick={handleConvert}
                disabled={isConverting}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110 disabled:opacity-50"
              >
                {isConverting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Converting {file.name}...
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5" />
                    Convert Now
                  </>
                )}
              </button>
            </div>
          )}

          {/* Conversion Result View */}
          {result && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="h-9 w-9" />
                </div>

                <h3 className="text-2xl font-bold">Conversion Complete!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your output file is processed and ready for download.
                </p>

                {/* Benchmark Stats */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-medium">
                  <span className="rounded-full bg-primary/10 px-3 py-1.5 text-primary flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5" />
                    Processed in {result.processingTimeMs}ms
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1.5 text-muted-foreground">
                    Output Size: {formatFileSize(result.size)}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={result.url}
                    download={result.fileName}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110"
                  >
                    <Download className="h-5 w-5" />
                    Download {result.fileName}
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary/80"
                  >
                    Convert Another File
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
