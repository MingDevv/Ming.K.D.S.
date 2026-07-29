import type { Metadata } from "next";
import { User, Mail, Shield, Crown } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your user profile and subscription details.",
};

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">User Profile</h1>
        <p className="text-xs text-muted-foreground mt-1">
          Manage your personal information and subscription details.
        </p>
      </div>

      <GlassCard className="p-8 space-y-6">
        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
            JD
          </div>
          <div>
            <h2 className="text-xl font-bold">Jane Doe</h2>
            <p className="text-xs text-muted-foreground mt-0.5">jane@example.com</p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Crown className="h-3.5 w-3.5" /> Free Plan User
            </div>
          </div>
        </div>

        <div className="border-t pt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Jane Doe"
                className="w-full rounded-xl bg-secondary/50 px-4 py-2.5 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="jane@example.com"
                className="w-full rounded-xl bg-secondary/50 px-4 py-2.5 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:brightness-110">
              Save Changes
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
