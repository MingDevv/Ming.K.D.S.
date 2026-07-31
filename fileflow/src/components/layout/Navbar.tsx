"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogIn, LogOut, User as UserIcon } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { mainNavItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

export function Navbar() {
  const pathname = usePathname();
  const { isScrolled } = useScrollPosition();
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.title}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {loading ? (
            <div className="hidden md:block h-8 w-24 animate-pulse rounded-lg bg-secondary/50" />
          ) : user ? (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <UserIcon className="h-3.5 w-3.5 text-primary" />
                <span className="max-w-[120px] truncate">
                  {user.user_metadata?.full_name || user.email?.split("@")[0] || "User"}
                </span>
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-destructive"
              >
                <LogOut className="h-3.5 w-3.5" />
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:flex"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>

              <Link
                href="/register"
                className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:brightness-110 md:block"
              >
                Get Started
              </Link>
            </>
          )}

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
