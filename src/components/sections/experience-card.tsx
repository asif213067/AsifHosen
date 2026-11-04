"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { formatMonth } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ExperienceItem } from "@/types/portfolio";
import Image from "next/image";

interface ExperienceCardProps {
  item: ExperienceItem;
  defaultOpen?: boolean;
}

export function ExperienceCard({
  item,
  defaultOpen = false,
}: ExperienceCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${item.id}-panel`;
  const period = `${formatMonth(item.startDate)} – ${
    !item.endDate || item.endDate === "Present"
      ? "Present"
      : formatMonth(item.endDate)
  }`;

  return (
    <article className="rounded-2xl border border-l-4 border-l-primary bg-card text-card-foreground shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-4 p-6 text-left"
      >
        {/* <span
          aria-hidden="true"
          className="bg-brand-gradient flex size-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-primary-foreground"
        >
          {item.company.charAt(0)}
        </span> */}

        {item.companyLogo ? (
          <Image
            src={item.companyLogo}
            alt={`${item.company} logo`}
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-xl border bg-white object-contain p-1.5"
          />
        ) : (
          <span
            aria-hidden="true"
            className="bg-brand-gradient flex size-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-primary-foreground"
          >
            {item.company.charAt(0)}
          </span>
        )}

        <span className="flex-1">
          <span className="block text-xl font-semibold">{item.role}</span>
          <span className="block font-medium text-primary">{item.company}</span>
          <span className="block font-mono text-sm text-muted-foreground">
            {period}
          </span>
          <span className="mt-3 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary"
              >
                {technology}
              </span>
            ))}
          </span>
        </span>

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "mt-1 size-5 shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        id={panelId}
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t px-6 pb-6 pt-4 text-muted-foreground">
            <p>{item.summary}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            {item.companyUrl && (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Visit {item.company}
                <ExternalLink className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
