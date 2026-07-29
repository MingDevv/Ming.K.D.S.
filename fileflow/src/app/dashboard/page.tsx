import type { Metadata } from "next";
import { FileCheck, HardDrive, Zap, Star, Download, Trash2, ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { formatFileSize } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your file conversions, history, and usage statistics.",
};

const mockHistory = [
  {
    id: "1",
    tool: "PDF to Word",
    input: "Annual_Report_2026.pdf",
    output: "Annual_Report_2026.docx",
    size: "4.2 MB",
    date: "10 mins ago",
    status: "completed",
  },
  {
    id: "2",
    tool: "PNG to JPG",
    input: "hero_banner.png",
    output: "hero_banner.jpg",
    size: "1.8 MB",
    date: "1 hour ago",
    status: "completed",
  },
  {
    id: "3",
    tool: "JSON to CSV",
    input: "users_export.json",
    output: "users_export.csv",
    size: "340 KB",
    date: "3 hours ago",
    status: "completed",
  },
  {
    id: "4",
    tool: "MP4 to GIF",
    input: "demo_video.mp4",
    output: "demo_video.gif",
    size: "12.4 MB",
    date: "Yesterday",
    status: "completed",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Welcome back! Here is an overview of your recent conversion activity.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Today's Conversions</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
              <Zap className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-extrabold">3 / 10</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Free plan daily quota (30% used)</p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Total Converted</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
              <FileCheck className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-extrabold">48</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Files transformed successfully</p>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Storage Used</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
              <HardDrive className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-4 text-3xl font-extrabold">18.7 MB</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Temporary storage (Auto-clears in 1h)</p>
        </GlassCard>
      </div>

      {/* History Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold">Recent Conversions</h2>
          <button className="text-xs text-primary hover:underline flex items-center gap-1 font-medium">
            Clear History
          </button>
        </div>

        <GlassCard className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b bg-secondary/50 text-muted-foreground">
                <tr>
                  <th className="p-4 font-semibold">Tool</th>
                  <th className="p-4 font-semibold">Input File</th>
                  <th className="p-4 font-semibold">Output File</th>
                  <th className="p-4 font-semibold">Size</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-medium text-foreground">{item.tool}</td>
                    <td className="p-4 text-muted-foreground font-mono">{item.input}</td>
                    <td className="p-4 text-muted-foreground font-mono">{item.output}</td>
                    <td className="p-4 text-muted-foreground">{item.size}</td>
                    <td className="p-4 text-muted-foreground">{item.date}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-500/10 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
