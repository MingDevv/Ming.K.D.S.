import Link from "next/link";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { icon: "h-5 w-5", text: "text-lg" },
    md: { icon: "h-6 w-6", text: "text-xl" },
    lg: { icon: "h-8 w-8", text: "text-2xl" },
  };

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 transition-opacity hover:opacity-80", className)}
    >
      <div className="relative flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 p-1.5 shadow-lg shadow-blue-500/20">
        <Zap className={cn("text-white", sizeMap[size].icon)} fill="currentColor" />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight", sizeMap[size].text)}>
          File<span className="gradient-text">Flow</span>
        </span>
      )}
    </Link>
  );
}
