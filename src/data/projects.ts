import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "togetherwe",
    title: "TogetherWe",
    description:
      "A community events platform where people find, create, and join social development events.",
    technologies: ["Next.js", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Browse and search community events",
      "Create and manage your own events",
      "Join events with one click",
    ],
    githubUrl: "https://github.com/your-username/togetherwe",
    liveUrl: "https://example.com",
  },
  {
    id: "dreamplace",
    title: "DreamPlace",
    description:
      "A travel app for browsing destinations and adding new travel packages.",
    technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    features: [
      "Browse destination cards",
      "Add destination form for new travel packages",
      "Responsive layout on every screen size",
    ],
    githubUrl: "https://github.com/your-username/dreamplace",
    liveUrl: "https://example.com",
  },
  {
    id: "fitlog",
    title: "FitLog",
    description:
      "A fitness library with workout cards, a workouts API, and detail pages.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    features: [
      "Workout library as a card grid",
      "Workout detail page for each exercise",
      "Workouts served from an API",
    ],
    githubUrl: "https://github.com/your-username/fitlog",
  },
];
