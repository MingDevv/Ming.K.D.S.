import { ALLOWED_MIME_TYPES, MAX_FILE_SIZE, MAX_FREE_FILE_SIZE, MAX_PRO_FILE_SIZE } from "./constants";
import { getFileExtension } from "./utils";
import type { ToolCategory } from "@/config/tools";

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validateFileSize(
  file: File,
  tier: "free" | "pro" | "enterprise" = "free"
): ValidationResult {
  const maxSize =
    tier === "enterprise"
      ? Infinity
      : tier === "pro"
        ? MAX_PRO_FILE_SIZE
        : MAX_FREE_FILE_SIZE;

  if (file.size > maxSize) {
    const limit =
      tier === "free"
        ? "25MB"
        : tier === "pro"
          ? "500MB"
          : "unlimited";
    return {
      valid: false,
      error: `File size exceeds the ${limit} limit for your plan.`,
    };
  }

  if (file.size > MAX_FILE_SIZE && tier === "free") {
    return {
      valid: false,
      error: "File size exceeds the maximum allowed size.",
    };
  }

  return { valid: true };
}

export function validateFileType(
  file: File,
  category: ToolCategory
): ValidationResult {
  const allowedTypes = ALLOWED_MIME_TYPES[category];

  if (!allowedTypes) {
    return { valid: false, error: "Invalid file category." };
  }

  if (!allowedTypes.includes(file.type as never)) {
    return {
      valid: false,
      error: `File type "${file.type || getFileExtension(file.name)}" is not supported for this conversion.`,
    };
  }

  return { valid: true };
}

export function validateFile(
  file: File,
  category: ToolCategory,
  tier: "free" | "pro" | "enterprise" = "free"
): ValidationResult {
  const sizeResult = validateFileSize(file, tier);
  if (!sizeResult.valid) return sizeResult;

  const typeResult = validateFileType(file, category);
  if (!typeResult.valid) return typeResult;

  return { valid: true };
}

export function sanitizeFileName(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_{2,}/g, "_")
    .replace(/^_|_$/g, "");
}
