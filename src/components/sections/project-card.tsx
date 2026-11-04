"use client";

import { useState } from "react";
import { ChevronDown, GitBranch, Globe } from "lucide-react";
import { LogoBadge } from "@/components/logo-badge";
import { ScreenshotGallery } from "@/components/sections/screenshot-gallery";
import { TechTag } from "@/components/tech-tag";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  defaultOpen?: boolean;
}

export function ProjectCard({
  project,
  defaultOpen = false,
}: ProjectCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `${project.id}-panel`;
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <article className="rounded-2xl border border-l-4 border-l-primary bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className="flex w-full items-start gap-4 text-left"
        >
          <LogoBadge name={project.title} logo={project.logo} />

          <span className="min-w-0 flex-1">
            <span className="block text-xl font-semibold">{project.title}</span>
            <span className="block font-medium text-primary">
              {project.kind}
            </span>
            <span className="mt-1 block text-[0.95rem] text-muted-foreground">
              {project.short}
            </span>
            <span className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <TechTag key={technology} label={technology} />
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

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-4 flex flex-wrap gap-3 pl-16">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "bg-brand-gradient text-primary-foreground hover:bg-brand-gradient hover:opacity-90",
                )}
              >
                <Globe className="size-4" />
                Visit website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <GitBranch className="size-4" />
                Repository
              </a>
            )}
          </div>
        )}
      </div>

      <div
        id={panelId}
        inert={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t px-6 pb-6 pt-5">
            {hasScreenshots && (
              <ScreenshotGallery
                title={project.title}
                images={project.screenshots ?? []}
              />
            )}

            <div className="mt-5 space-y-3 text-muted-foreground">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
