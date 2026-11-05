import type { Skill, SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "Tools",
];

export const skills: Skill[] = [
  {
    name: "JavaScript",
    category: "Languages",
    logo: "/images/skills/js.png",
  },
  {
    name: "TypeScript",
    category: "Languages",
    logo: "/images/skills/ts.png",
  },
  { name: "Python", category: "Languages", logo: "/images/skills/python.png" },
  { name: "C", category: "Languages", logo: "/images/skills/c.png" },
  {
    name: "C++",
    category: "Languages",
    logo: "/images/skills/cpp.png",
  },
  { name: "SQL", category: "Languages", logo: "/images/skills/sql.jfif" },
  { name: "HTML", category: "Languages", logo: "/images/skills/html.png" },
  { name: "CSS", category: "Languages", logo: "/images/skills/css.png" },

  { name: "React", category: "Frontend", logo: "/images/skills/react.png" },
  { name: "Next.js", category: "Frontend", logo: "/images/skills/next.jfif" },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    logo: "/images/skills/tailwindcss.webp",
  },
  {
    name: "shadcn/ui",
    category: "Frontend",
    logo: "/images/skills/shadcn.jfif",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    logo: "/images/skills/framer-motion.webp",
  },

  { name: "Node.js", category: "Backend", logo: "/images/skills/nodejs.jpg" },
  {
    name: "Express",
    category: "Backend",
    logo: "/images/skills/express-js.jpg",
  },
  {
    name: "RESTAPI",
    category: "Backend",
    logo: "/images/skills/rest-api.png",
  },
  { name: "FastAPI", category: "Backend", logo: "/images/skills/fast-api.png" },
  { name: "JWT Auth", category: "Backend", logo: "/images/skills/jwt.jfif" },

  {
    name: "MongoDB",
    category: "Databases",
    logo: "/images/skills/mongodb.png",
  },
  { name: "MySQL", category: "Databases", logo: "/images/skills/mysql.png" },

  { name: "Git", category: "Tools", logo: "/images/skills/git.png" },
  { name: "GitHub", category: "Tools", logo: "/images/skills/github.png" },
  { name: "Vercel", category: "Tools", logo: "/images/skills/vercel-icon.svg" },
  { name: "Figma", category: "Tools", logo: "/images/skills/figma.png" },
  { name: "VS Code", category: "Tools", logo: "/images/skills/vscode.png" },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
