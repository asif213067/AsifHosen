import type { Certification } from "@/types/portfolio";

export const certifications: Certification[] = [
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issuedAt: "2025-06",
    description:
      "Layout, accessibility, and responsive design with HTML and CSS.",
    image: "/images/certifications/responsive-web-design.png",
    credentialUrl: "https://example.com",
    skills: ["HTML", "CSS", "Flexbox", "Grid"],
  },
  {
    id: "javascript-algorithms",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    issuedAt: "2025-09",
    description:
      "Problem solving with data structures and algorithms in JavaScript.",
    image: "/images/certifications/javascript-algorithms.png",
    credentialUrl: "https://example.com",
    skills: ["JavaScript", "DSA", "ES6"],
  },
  {
    id: "python-for-everybody",
    title: "Python for Everybody",
    issuer: "Coursera",
    issuedAt: "2026-02",
    description:
      "Programming fundamentals in Python, from variables to working with data and web APIs.",
    image: "/images/certifications/python-for-everybody.png",
    skills: ["Python", "APIs", "Databases"],
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Web Development",
    issuer: "GGI",
    issuedAt: "2026-06",
    description:
      "Hands-on training across React, Node.js, and databases through real projects.",
    image: "/images/certifications/full-stack-development.png",
    skills: ["React", "Node.js", "MongoDB"],
  },
];
