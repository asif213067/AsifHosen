import type { Skill, SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

export const skills: Skill[] = [
  { name: "JavaScript", category: "Languages", logo: "" },
  { name: "TypeScript", category: "Languages", logo: "" },
  { name: "Python", category: "Languages", logo: "/images/skills/python.png" },
  { name: "C", category: "Languages", logo: "/images/skills/c.png" },
  {
    name: "C++",
    category: "Languages",
    logo: "/images/skills/c-plus-plus.png",
  },
  { name: "SQL", category: "Languages", logo: "" },
  { name: "HTML", category: "Languages", logo: "" },
  { name: "CSS", category: "Languages", logo: "" },

  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "RESTAPI", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "JWT Auth", category: "Backend" },

  { name: "MongoDB", category: "Databases" },
  { name: "MySQL", category: "Databases" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
