"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  as?: "div" | "section" | "article" | "aside";
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const motionComponents = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
};

export function AnimatedContainer({
  children,
  className,
  variants = defaultVariants,
  delay = 0,
  once = true,
  as = "div",
}: AnimatedContainerProps) {
  const Component = motionComponents[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
