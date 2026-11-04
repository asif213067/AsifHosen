"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { Publication } from "@/types/portfolio";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [coverFailed, setCoverFailed] = useState(false);
  const abstractId = `${publication.id}-abstract`;

  return (
    <article className="grid gap-6 rounded-2xl border border-l-4 border-l-primary bg-card p-6 text-card-foreground shadow-sm sm:grid-cols-[200px_1fr]">
      <div className="mx-auto w-full max-w-50 sm:mx-0">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl border bg-muted">
          {publication.image && !coverFailed ? (
            <Image
              src={publication.image}
              alt={`First page of ${publication.title}`}
              fill
              sizes="200px"
              className="object-cover object-top"
              onError={() => setCoverFailed(true)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-muted-foreground">
              <FileText aria-hidden="true" className="size-8 text-primary" />
              <span className="text-sm">Paper preview</span>
            </div>
          )}
        </div>

        {publication.paperUrl && (
          <a
            href={publication.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "mt-4 w-full bg-brand-gradient text-primary-foreground hover:bg-brand-gradient hover:opacity-90",
            )}
          >
            Read paper
            <ArrowUpRight className="size-4" />
          </a>
        )}
      </div>

      <div className="min-w-0">
        <h3 className="text-xl font-semibold leading-snug">
          {publication.title}
        </h3>

        <dl className="mt-3 space-y-1 text-sm">
          <div className="flex gap-2">
            <dt className="shrink-0 text-muted-foreground">Publisher:</dt>
            <dd>{publication.publisher}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 text-muted-foreground">Date:</dt>
            <dd>{formatDate(publication.publishedAt)}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 text-muted-foreground">Venue:</dt>
            <dd>{publication.venue}</dd>
          </div>
          {publication.doi && (
            <div className="flex gap-2">
              <dt className="shrink-0 text-muted-foreground">DOI:</dt>
              <dd className="min-w-0 break-all">
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {publication.doi}
                </a>
              </dd>
            </div>
          )}
        </dl>

        <p className="mt-4 text-xs font-semibold text-muted-foreground">
          Authors
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {publication.authors.map((author) => (
            <span
              key={author}
              className="rounded-md border bg-muted px-2.5 py-0.5 text-xs"
            >
              {author}
            </span>
          ))}
        </div>

        <h4 className="mt-5 text-sm font-semibold">Abstract</h4>
        <p
          id={abstractId}
          className={cn(
            "mt-2 text-muted-foreground",
            !expanded && "line-clamp-4",
          )}
        >
          {publication.abstract}
        </p>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={abstractId}
          onClick={() => setExpanded(!expanded)}
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {expanded ? "Show less" : "Read full abstract"}
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-4 transition-transform duration-300 motion-reduce:transition-none",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>
    </article>
  );
}
