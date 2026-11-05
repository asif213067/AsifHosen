import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "togetherwe",
    title: "TogetherWe",
    kind: "Community events platform",
    short:
      "Find, create, and join social development events in your community.",
    technologies: [
      "Next.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ],
    screenshots: [
      "/images/projects/togetherwe-1.png",
      "/images/projects/togetherwe-2.png",
      "/images/projects/togetherwe-3.png",
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
    liveUrl: "https://togetherwe-client-by-asif.vercel.app",
    githubUrl: "https://github.com/asif213067/TogetherWe-Client",
  },
  {
    id: "bazardor",
    title: "BazarDor",
    kind: "Market Price Comparison Platform",

    short:
      "A Bengali-language market price tracking platform that helps users explore daily product prices, compare market rates, and monitor price changes across Bangladesh.",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],

    screenshots: [
      "/images/projects/bazardor-1.png",
      "/images/projects/bazardor-2.png",
      "/images/projects/bazardor-3.png",
    ],

    description: [
      "BazarDor is a modern Bengali-language platform that helps users track daily market prices, compare product costs across Bangladesh, and discover price fluctuations through a clean, responsive interface.",
    ],

    highlights: [
      "Real-time API-powered market price tracking",
      "Daily price comparison across Bangladesh",
      "Product categorization and market-wise pricing",
    ],

    liveUrl: "https://bazar-dor-by-asif.vercel.app",
    githubUrl: "https://github.com/asif213067/Bazar-Dor",
  },
  // {
  //   id: "dreamplace",
  //   title: "DreamPlace",
  //   kind: "Travel booking app",
  //   short: "Browse destinations and add new travel packages.",
  //   technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  //   screenshots: [
  //     "/images/projects/dreamplace1.png",
  //     "/images/projects/dreamplace2.png",
  //   ],
  //   description: [
  //     "DreamPlace lets visitors explore destinations and lets admins add new travel packages through a clean form.",
  //   ],
  //   highlights: [
  //     "Destination cards for browsing",
  //     "Add destination form for new travel packages",
  //     "Responsive layout on every screen size",
  //   ],
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/your-username/dreamplace",
  // },
  {
    id: "fitlog",
    title: "FitLog",
    kind: "Fitness library",
    short:
      "FitLog is designed as a simple workout companion where users can discover exercises and organize their workouts in one place.",
    technologies: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    screenshots: [
      "/images/projects/fitlog-1.png",
      "/images/projects/fitlog-2.png",
      "/images/projects/fitlog-3.png",
    ],
    description: [
      "FitLog is a modern workout library and workout-planning web application built with Next.js. It allows users to explore workouts, view detailed exercise information, build a daily workout plan, save exercises for later, and track basic workout statistics.",

      "The application focuses on a clean, dark, fitness-oriented interface with responsive layouts for mobile, tablet, and desktop devices.",
    ],
    highlights: [
      "Browse and explore a complete workout library",
      "Add exercises to Today's Plan and save workouts for later",
      "Search workouts by name, muscle group, or tags",
    ],
    liveUrl: "https://fit-log-by-asif.vercel.app",
    githubUrl: "https://github.com/asif213067/Fit-Log",
  },
];
