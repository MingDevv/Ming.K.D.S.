import type { Metadata } from "next";
import { Sliders, Bell, Lock, Key } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata: Metadata = {
  title: "Settings",
  description: "Customize preferences, notifications, and account security.",
};

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Configure application preferences and security settings.
        </p>
      </div>

      <div className="space-y-6">
        {/* Security Settings */}
        <GlassCard className="p-8 space-y-4">
          <h2 className="text-base font-bold flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" /> Security & Authentication
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Current Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl bg-secondary/50 px-4 py-2.5 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl bg-secondary/50 px-4 py-2.5 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <button className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold hover:bg-secondary/80 transition-colors">
            Update Password
          </button>
        </GlassCard>

        {/* Preferences */}
        <GlassCard className="p-8 space-y-4">
          <h2 className="text-base font-bold flex items-center gap-2">
            <Bell className="h-4 w-4 text-primary" /> Notifications & Output Defaults
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-border text-primary focus:ring-primary" />
              <span className="text-xs text-muted-foreground">Email me when batch conversions complete</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-border text-primary focus:ring-primary" />
              <span className="text-xs text-muted-foreground">Automatically download converted files</span>
            </label>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
