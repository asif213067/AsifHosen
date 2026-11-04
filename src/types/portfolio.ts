export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
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
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  features: string[];
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
