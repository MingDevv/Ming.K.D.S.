import {
  FileText,
  Layers,
  CreditCard,
  Info,
  Mail,
  LayoutDashboard,
  User,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  disabled?: boolean;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Tools", href: "/tools", icon: Layers, description: "Browse all conversion tools" },
  { title: "Pricing", href: "/pricing", icon: CreditCard, description: "View pricing plans" },
  { title: "About", href: "/about", icon: Info, description: "Learn about FileFlow" },
  { title: "Contact", href: "/contact", icon: Mail, description: "Get in touch with us" },
];

export const dashboardNavItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Profile", href: "/profile", icon: User },
  { title: "Settings", href: "/settings", icon: Settings },
];

export interface FooterNavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export const footerNavItems: {
  product: FooterNavItem[];
  company: FooterNavItem[];
  legal: FooterNavItem[];
  social: FooterNavItem[];
} = {
  product: [
    { title: "Tools", href: "/tools" },
    { title: "Pricing", href: "/pricing" },
    { title: "API", href: "#", disabled: true },
    { title: "Changelog", href: "#", disabled: true },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "#", disabled: true },
    { title: "Careers", href: "#", disabled: true },
  ],
  legal: [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookie Policy", href: "#" },
  ],
  social: [
    { title: "Twitter", href: "https://twitter.com/fileflow", external: true },
    { title: "GitHub", href: "https://github.com/fileflow", external: true },
    { title: "Discord", href: "#", disabled: true },
  ],
};
