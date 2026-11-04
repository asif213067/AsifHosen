export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Optional path to the technology logo, e.g. "/images/skills/react.svg". */
  logo?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface ExperienceProject {
  name: string;
  description: string;
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
  technologies: string[];
  projects?: ExperienceProject[];
}

export interface Project {
  id: string;
  title: string;
  kind: string;
  short: string;
  description: string[];
  logo?: string;
  screenshots?: string[];
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  startYear: number;
  endYear: number | null;
  description: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  description: string;
  image?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  venue: string;
  publishedAt: string;
  abstract: string;
  authors: string[];
  image?: string;
  paperUrl?: string;
  doi?: string;
}

export interface DsaStats {
  platform: string;
  profileUrl: string;
  maxRating: number;
  level: string;
  globalRanking: number;
  contestsAttended: number;
  solved: {
    total: number;
    easy: number;
    medium: number;
    hard: number;
  };
  submissionsPastYear: number;
  activeDays: number;
  maxStreak: number;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  roles: string[];
  intro: string;
  about: string[];
  photo: {
    src: string;
    alt: string;
  };
  resumeUrl: string;
  email: string;
  location: string;
  socials: SocialLink[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  startYear: number;
  endYear: number | null;
  description: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  description: string;
  image?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Publication {
  id: string;
  title: string;
  publisher: string;
  venue: string;
  publishedAt: string;
  abstract: string;
  authors: string[];
  image?: string;
  paperUrl?: string;
  doi?: string;
}

export interface DsaStats {
  platform: string;
  profileUrl: string;
  maxRating: number;
  level: string;
  globalRanking: number;
  contestsAttended: number;
  solved: {
    total: number;
    easy: number;
    medium: number;
    hard: number;
  };
  submissionsPastYear: number;
  activeDays: number;
  maxStreak: number;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  roles: string[];
  intro: string;
  about: string[];
  photo: {
    src: string;
    alt: string;
  };
  resumeUrl: string;
  email: string;
  location: string;
  socials: SocialLink[];
}
