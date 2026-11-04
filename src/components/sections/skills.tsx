"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { getSkillsByCategory, skillCategories, skills } from "@/data/skills";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types/portfolio";

const categoryCounts = new Map<SkillCategory, number>(
  skillCategories.map((category) => [
    category,
    getSkillsByCategory(category).length,
  ]),
);

export function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("Languages");
  const activeSkills = getSkillsByCategory(activeCategory);

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="My arsenal" title="Technical skills" />

        <div
          role="group"
          aria-label="Filter skills by category"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={category === activeCategory}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none sm:px-5 sm:py-2.5",
                category === activeCategory
                  ? "bg-brand-gradient text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground",
              )}
            >
              {category} {categoryCounts.get(category)}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 xl:grid-cols-5">
          {activeSkills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center rounded-2xl border bg-card px-6 py-8 text-card-foreground shadow-sm transition-shadow duration-200 hover:shadow-md motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="bg-brand-gradient flex size-12 items-center justify-center overflow-hidden rounded-2xl text-lg font-bold text-primary-foreground"
              >
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="size-full object-contain p-1.5"
                  />
                ) : (
                  skill.name.charAt(0)
                )}
              </span>
              <span className="mt-5 text-center text-sm font-medium">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-mono text-sm text-muted-foreground">
          {skillCategories.length} categories · {skills.length} technologies
        </p>
      </div>
    </section>
  );
}
