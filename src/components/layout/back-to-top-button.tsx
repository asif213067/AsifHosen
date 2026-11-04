"use client";

import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const reduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? "instant" : "smooth",
        })
      }
      aria-label="Back to top"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 motion-reduce:transition-none",
        "hover:border-primary hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      Back to top
      <ArrowUp aria-hidden="true" className="size-4" />
    </button>
  );
}
