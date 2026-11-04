"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
}

const COPIED_LABEL_DURATION_MS = 1800;

/**
 * Fallback for browsers without the async Clipboard API:
 * copies from a temporary off-screen textarea with execCommand("copy").
 */
function fallbackCopy(text: string): void {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("aria-hidden", "true");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = useCallback(() => {
    const copy = navigator.clipboard?.writeText(email);
    if (copy) {
      copy.catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setCopied(false),
      COPIED_LABEL_DURATION_MS,
    );
  }, [email]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${email} to clipboard`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md font-medium text-muted-foreground transition-colors duration-200 motion-reduce:transition-none",
        "hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <Mail aria-hidden="true" className="size-4 shrink-0 text-primary" />
      <span>{copied ? "Copied!" : email}</span>
      {copied ? (
        <Check aria-hidden="true" className="size-4 shrink-0 text-primary" />
      ) : (
        <Copy
          aria-hidden="true"
          className="size-4 shrink-0 transition-colors duration-200 motion-reduce:transition-none group-hover:text-primary"
        />
      )}
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email copied to clipboard" : "Copy email address"}
      </span>
    </button>
  );
}
