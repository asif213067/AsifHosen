"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "/Experience", href: "#experience" },
  { label: "/Skills", href: "#skills" },
  { label: "/Projects", href: "#projects" },
  { label: "/Education", href: "#education" },
  { label: "/Publications", href: "#publications" },
];

const linkClass =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-primary";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="#home" className="text-2xl font-bold tracking-tight">
          Asif Hosen<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden border-primary text-primary md:inline-flex",
            )}
          >
            Let’s Talk
          </a>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-4 border-t bg-background px-6 py-5 md:hidden"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-primary text-primary",
              )}
              onClick={() => setOpen(false)}
            >
              Let’s Talk
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
