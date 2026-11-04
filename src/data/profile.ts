import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Asif Hosen",
  roles: [
    "Full-Stack Developer",
    "Next.js Developer",
    "Problem Solver",
    "Always Learning",
  ],
  intro:
    "I build modern, scalable web applications with a passion for clean code, thoughtful design, and solving real-world problems through technology.",
  photo: {
    src: "/images/profile1.jpg",
    alt: "Portrait of Asif Hosen",
  },
  about: [
    "I’m a passionate Full-Stack Developer and software development enthusiast who enjoys building modern, user-friendly web applications. I work across frontend and backend development, focusing on building secure, scalable, and maintainable applications with thoughtful design, efficient architecture, robust authentication and authorization, and strong application security.",

    "I’m a dedicated and curious learner who believes in continuous improvement and learning something new every day. I enjoy exploring new technologies, solving challenging problems, and collaborating with others as a team player. My goal is to grow as a software developer, contribute to meaningful projects, and build impactful digital experiences.",
  ],
  resumeUrl: "/resume/Asif_Hosen_CV.pdf",
  email: "asifhosen1050@gmail.com",
  location: "Bangladesh",
  socials: [
    { label: "GitHub", href: "https://github.com/asif213067" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asif-hosen" },
    // { label: "LeetCode", href: "https://leetcode.com/u/your-username" },
  ],
};
