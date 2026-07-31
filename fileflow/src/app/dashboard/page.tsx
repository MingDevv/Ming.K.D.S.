import type { Metadata } from "next";
import { DashboardClient } from "@/components/dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard - FileFlow",
  description: "Manage your file conversions, history, and usage statistics.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
