import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { GithubIcon, TwitterIcon } from "@/components/shared/Icons";
import { footerNavItems } from "@/config/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Modern online file conversion platform. Convert anything, anywhere, instantly.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://twitter.com/fileflow"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-secondary p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/fileflow"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-secondary p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerNavItems.product.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                    {item.disabled && (
                      <span className="ml-2 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerNavItems.company.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                    {item.disabled && (
                      <span className="ml-2 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerNavItems.legal.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} FileFlow. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for the open web
          </p>
        </div>
      </div>
    </footer>
  );
}
