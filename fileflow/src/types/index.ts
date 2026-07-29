import type { ToolCategory } from "@/config/tools";

/* ========== User & Auth ========== */

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  plan: "free" | "pro" | "enterprise";
  createdAt: string;
  updatedAt: string;
}

/* ========== Conversion ========== */

export type ConversionStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed"
  | "cancelled";

export interface ConversionHistory {
  id: string;
  userId: string;
  toolId: string;
  toolName: string;
  category: ToolCategory;
  inputFileName: string;
  inputFileSize: number;
  inputFormat: string;
  outputFileName: string;
  outputFileSize: number;
  outputFormat: string;
  status: ConversionStatus;
  processingTimeMs: number;
  createdAt: string;
}

/* ========== Files ========== */

export interface FileRecord {
  id: string;
  userId: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  storagePath: string;
  isTemporary: boolean;
  expiresAt?: string;
  createdAt: string;
}

/* ========== Favorites ========== */

export interface Favorite {
  id: string;
  userId: string;
  toolId: string;
  createdAt: string;
}

/* ========== Subscription ========== */

export interface Subscription {
  id: string;
  userId: string;
  plan: "free" | "pro" | "enterprise";
  status: "active" | "cancelled" | "past_due" | "trialing";
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  createdAt: string;
}

/* ========== Feedback ========== */

export interface Feedback {
  id: string;
  userId?: string;
  email: string;
  type: "bug" | "feature" | "general" | "support";
  subject: string;
  message: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  createdAt: string;
}

/* ========== API Responses ========== */

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/* ========== UI State ========== */

export interface UploadState {
  file: File | null;
  progress: number;
  status: "idle" | "uploading" | "processing" | "complete" | "error";
  error?: string;
}
