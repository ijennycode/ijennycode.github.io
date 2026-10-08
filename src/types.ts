export interface SkillItem {
  name: string;
  level: 'Proficient' | 'Intermediate' | 'Foundational';
  description: string;
  associatedCert: string;
  tools: string[];
}

export interface SkillCategory {
  id: 'cloud' | 'development' | 'methodologies';
  title: string;
  badge: string;
  iconName: string;
  summary: string;
  skills: SkillItem[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  tagline: string;
  category: string;
  challenge: string;
  solution: string;
  architectureSteps: string[];
  stack: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Completed' | 'In Progress' | 'Architecture Concept';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: 'IBM' | 'Google Cloud';
  issuerLogo: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  summary: string;
  skillsCovered: string[];
  status: 'Completed';
}

export interface ActiveLearningItem {
  id: string;
  programTitle: string;
  issuer: string;
  targetRole: string;
  expectedCompletion: string;
  progressPercent: number;
  completedModulesCount: number;
  totalModulesCount: number;
  currentFocus: string;
  modules: {
    title: string;
    status: 'Completed' | 'In Progress' | 'Upcoming';
  }[];
}

export interface HeroData {
  tagline: string;
  alternativeTaglines: string[];
  bio: string;
  availability: string;
  currentRole: string;
  targetRole: string;
  location: string;
}

export interface PortfolioData {
  hero: HeroData;
  skillCategories: SkillCategory[];
  projects: ProjectShowcase[];
  completedCertifications: CertificationItem[];
  activeLearning: ActiveLearningItem;
  contactCTA: {
    heading: string;
    subheading: string;
    valueProposition: string;
    email: string;
    github: string;
    linkedin: string;
  };
}
