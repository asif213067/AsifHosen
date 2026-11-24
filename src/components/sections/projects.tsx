"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 3;

export function Projects() {
  const [page, setPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const skipScrollRef = useRef(true);
  const reduceMotion = useReducedMotion();

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const safePage = Math.min(page, Math.max(totalPages - 1, 0));
  const visibleProjects = projects.slice(
    safePage * PAGE_SIZE,
    safePage * PAGE_SIZE + PAGE_SIZE,
  );

  // Scroll back to the section top after a page change. Runs post-render, so the
  // target position does not depend on how many cards the new page has.
  useEffect(() => {
    if (skipScrollRef.current) {
      skipScrollRef.current = false;
      return;
    }
    sectionRef.current?.scrollIntoView({
      behavior: reduceMotion ? "instant" : "smooth",
      block: "start",
    });
  }, [page, reduceMotion]);

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Project showcase"
          title="Innovative projects"
        />
        <div className="flex flex-col gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              defaultOpen={safePage === 0 && index === 0}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            aria-label="Pagination"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => setPage(safePage - 1)}
              disabled={safePage === 0}
              aria-label="Previous page"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <ChevronLeft aria-hidden="true" className="size-4" />
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, pageIndex) => (
              <button
                key={pageIndex}
                type="button"
                onClick={() => setPage(pageIndex)}
                aria-label={`Page ${pageIndex + 1}`}
                aria-current={pageIndex === safePage ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  pageIndex === safePage
                    ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground dark:border-primary dark:bg-primary dark:text-white dark:hover:bg-primary/90 dark:hover:text-white"
                    : "hover:border-primary dark:text-foreground dark:hover:border-primary dark:hover:text-primary"
                )}
              >
                {pageIndex + 1}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage(safePage + 1)}
              disabled={safePage >= totalPages - 1}
              aria-label="Next page"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Next
              <ChevronRight aria-hidden="true" className="size-4" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
