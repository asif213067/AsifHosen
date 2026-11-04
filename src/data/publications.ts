import type { Publication } from "@/types/portfolio";

export const publications: Publication[] = [
  {
    id: "web-performance-study",
    title: "A Sample Study on Improving Web Application Performance",
    publisher: "Sample Press",
    venue: "Sample Conference on Software Engineering",
    publishedAt: "2026-03-10",
    abstract:
      "This is a dummy abstract that shows how a long summary looks inside the card. It describes the problem a paper studies, the method the authors used, and the main results they found. Replace this text with the abstract of your real publication when it is ready. The card shows the first few lines and lets visitors expand the rest.",
    authors: ["Asif Hosen", "Co-author One", "Co-author Two"],
    image: "/images/publications/web-performance-study.png",
    paperUrl: "https://example.com",
    doi: "10.0000/sample.2026.0001",
  },
];
