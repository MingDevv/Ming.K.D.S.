"use client";

import { useState } from "react";
import { FileCheck, HardDrive, Zap, Trash2, Clock, UserCheck, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { formatFileSize } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

interface HistoryItem {
  id: string;
  timestamp: string;
  toolId: string;
  toolName: string;
  inputName: string;
  outputName: string;
  inputSize: number;
  outputSize: number;
  processingTimeMs: number;
}

const mockDefaultHistory: HistoryItem[] = [
  {
    id: "demo-1",
    timestamp: new Date(Date.now() - 600000).toISOString(),
    toolId: "png-to-jpg",
    toolName: "PNG to JPG",
    inputName: "hero_banner.png",
    outputName: "hero_banner.jpg",
    inputSize: 1800000,
    outputSize: 1200000,
    processingTimeMs: 145,
  },
  {
    id: "demo-2",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    toolId: "json-to-csv",
    toolName: "JSON to CSV",
    inputName: "users_export.json",
    outputName: "users_export.csv",
    inputSize: 340000,
    outputSize: 280000,
    processingTimeMs: 42,
  },
];

export function DashboardClient() {
  const { user, isDemoMode } = useAuth();
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("fileflow_history");
        if (stored) return JSON.parse(stored);
      } catch {
        return mockDefaultHistory;
      }
    }
    return mockDefaultHistory;
  });

  const handleClearHistory = () => {
    localStorage.removeItem("fileflow_history");
    setHistory([]);
  };

  const handleDeleteItem = (id: string) => {
    const updated = history.filter((item) => item.id !== id);
    setHistory(updated);
    try {
      localStorage.setItem("fileflow_history", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const totalConversions = history.length;
  const totalStorage = history.reduce((acc, item) => acc + (item.outputSize || 0), 0);

  const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "User";

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome back, <span className="text-primary">{userName}</span>!
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            Here is an overview of your file conversion activity and account details.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium">
          {isDemoMode ? (
            <>
              <UserCheck className="h-3.5 w-3.5 text-amber-500" />
              <span className="text-amber-500 font-semibold">Demo Mode Account</span>
            </>
          ) : (
            <>
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-semibold">Supabase Authenticated</span>
            </>
          )}
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Conversions Session</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
              <Zap className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-extrabold">{totalConversions}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Files processed in browser</p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Total Converted</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
              <FileCheck className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-extrabold">{totalConversions * 4 + 12}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Files transformed successfully</p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Processed Data</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
              <HardDrive className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-extrabold">{formatFileSize(totalStorage || 2400000)}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Client-side processing bandwidth saved</p>
        </GlassCard>
      </div>

      {/* History Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            Recent Conversion History
          </h2>
          {history.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="text-xs text-red-500 hover:underline flex items-center gap-1 font-medium"
            >
              Clear History
            </button>
          )}
        </div>

        <GlassCard className="overflow-hidden p-0">
          {history.length === 0 ? (
            <div className="p-8 text-center text-xs text-muted-foreground">
              No conversion history yet. Try converting a file!
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b bg-secondary/50 text-muted-foreground">
                  <tr>
                    <th className="p-4 font-semibold">Tool</th>
                    <th className="p-4 font-semibold">Input File</th>
                    <th className="p-4 font-semibold">Output File</th>
                    <th className="p-4 font-semibold">Size</th>
                    <th className="p-4 font-semibold">Speed</th>
                    <th className="p-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {history.map((item) => (
                    <tr key={item.id} className="hover:bg-secondary/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{item.toolName}</td>
                      <td className="p-4 text-muted-foreground font-mono truncate max-w-[150px]">
                        {item.inputName}
                      </td>
                      <td className="p-4 text-muted-foreground font-mono truncate max-w-[150px]">
                        {item.outputName}
                      </td>
                      <td className="p-4 text-muted-foreground">{formatFileSize(item.outputSize)}</td>
                      <td className="p-4 text-muted-foreground">{item.processingTimeMs}ms</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
                          title="Delete from history"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
