import type { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "frontend-developer",
    role: "Frontend Developer",
    company: "Company Name",
    companyUrl: "https://example.com",
    startDate: "2026-01",
    endDate: null,
    summary:
      "Built and maintained user interfaces for client dashboards using React and Next.js.",
    highlights: [
      "Built a reusable component library used across three client dashboards.",
      "Reduced initial page load time by 40% with code splitting and image optimization.",
      "Connected the interface to REST APIs with typed responses.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "freelance-web-developer",
    role: "Freelance Web Developer",
    company: "Self-employed",
    startDate: "2025-01",
    endDate: "2025-12",
    summary:
      "Delivered portfolio and small business websites from design to deployment.",
    highlights: [
      "Delivered portfolio and business sites end to end.",
      "Added JWT login and role-based access to an events platform.",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  },
];
