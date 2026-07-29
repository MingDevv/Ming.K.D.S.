import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
}: GlassCardProps) {
  const paddingMap = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "glass-card rounded-2xl",
        paddingMap[padding],
        hover && "cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
