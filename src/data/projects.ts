import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "togetherwe",
    title: "TogetherWe",
    kind: "Community events platform",
    short:
      "Find, create, and join social development events in your community.",
    technologies: ["Next.js", "Express", "MongoDB", "Tailwind CSS"],
    screenshots: [
      "/images/projects/togetherwe/1.png",
      "/images/projects/togetherwe/2.png",
      "/images/projects/togetherwe/3.png",
    ],
    description: [
      "TogetherWe connects volunteers with local social development events. People can browse upcoming events, create their own, and join with one click.",
      "The Next.js client talks to an Express and MongoDB server, with secure login and a simple flow for managing events.",
    ],
    highlights: [
      "Browse and search community events",
      "Create and manage your own events",
      "Join events with one click",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/togetherwe",
  },
  {
    id: "dreamplace",
    title: "DreamPlace",
    kind: "Travel booking app",
    short: "Browse destinations and add new travel packages.",
    technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    screenshots: [
      "/images/projects/dreamplace/1.png",
      "/images/projects/dreamplace/2.png",
    ],
    description: [
      "DreamPlace lets visitors explore destinations and lets admins add new travel packages through a clean form.",
    ],
    highlights: [
      "Destination cards for browsing",
      "Add destination form for new travel packages",
      "Responsive layout on every screen size",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/your-username/dreamplace",
  },
  {
    id: "fitlog",
    title: "FitLog",
    kind: "Fitness library",
    short: "Workout cards, a workouts API, and detail pages.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    screenshots: ["/images/projects/fitlog/1.png"],
    description: [
      "FitLog is a workout library where each exercise has its own card and detail page. Workouts are served from an API and rendered with Next.js.",
    ],
    highlights: [
      "Workout library as a card grid",
      "Detail page for each exercise",
    ],
    githubUrl: "https://github.com/your-username/fitlog",
  },
];
