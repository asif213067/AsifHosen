import type { Skill, SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

export const skills: Skill[] = [
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },

  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },

  { name: "MongoDB", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Figma", category: "Tools" },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
