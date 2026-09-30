export type PageTab = 
  | 'overview'
  | 'education'
  | 'research'
  | 'projects'
  | 'experience'
  | 'awards'
  | 'activities'
  | 'contact'
  | 'home'
  | 'finance'
  | 'impact'
  | 'honours'
  | 'about';

export interface Holding {
  id: string;
  ticker: string;
  category: 'TECHNOLOGY' | 'RESEARCH' | 'FINANCE' | 'ENVIRONMENT' | 'COMMUNITY' | 'EXPERIENCE';
  title: string;
  tagline: string;
  year: string;
  status: 'ACTIVE' | 'DEPLOYED' | 'PUBLISHED' | 'SCALED' | 'COMPLETED' | 'PATENTED';
  role: string;
  metrics: { label: string; value: string }[];
  description: string;
  highlights: string[];
  technologies: string[];
  route: PageTab;
  accentColor: string;
  sparklineData: number[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  year: string;
  role: string;
  tagline: string;
  summary: string;
  problem: string;
  idea: string;
  built: string;
  howItWorks: string;
  impact: string;
  recognition: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
  patent?: string;
  externalLink?: string;
  featured?: boolean;
}

export interface ResearchPaper {
  id: string;
  title: string;
  field: string;
  mentorOrPublisher: string;
  status: string;
  year: string;
  abstract: string;
  methodology: string;
  findings: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  keyVisualType: 'bifurcation' | 'nlp_confusion' | 'macro_upi';
}

export interface HonourItem {
  year: string;
  title: string;
  issuer: string;
  category: 'Research' | 'Science & Technology' | 'Hackathon' | 'Academics' | 'Leadership';
  level: 'International' | 'National' | 'School';
  description: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: 'Internship' | 'Venture' | 'School Leadership';
  summary: string;
  deliverables: string[];
  skills: string[];
  verifiedImpact: string;
}
