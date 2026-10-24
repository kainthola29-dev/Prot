export interface NavItem {
  name: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  id?: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  fullDescription?: string;
  deliverables?: string[];
  methodology?: { step: string; title: string; desc: string }[];
  metrics?: { label: string; value: string }[];
  tools?: string[];
  featuredProjects?: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  relation: string;
  quote: string;
  avatar?: string;
  rating?: number;
  linkedin?: string;
}

export interface ProjectSection {
  title: string;
  content: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  organization: string;
  period: string;
  description: string;
  gradient?: string;
  image?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
  overview?: {
    context?: string;
    objective?: string;
    role?: string;
    strategy?: string[];
    execution?: string[];
    results?: string[];
    lessons?: string[];
    sections?: ProjectSection[];
    fullContent?: string;
  };
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  organization: string;
  date: string;
  heroGradient: string;
  metrics: { label: string; value: string }[];
  sections: {
    challenge: string;
    context: string;
    strategy: string[];
    execution: string[];
    results: string[];
    lessons: string[];
    businessImpact: string;
  };
}

export interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  isCurrent?: boolean;
  isFuture?: boolean;
  isPlaceholder?: boolean;
}

export interface ArticleSection {
  id?: string;
  heading: string;
  paragraphs: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  gradient?: string;
  image?: string;
  quote?: string;
  toc?: { id: string; label: string }[];
  content?: string[];
  sections?: ArticleSection[];
  takeaways?: string[];
  glossary?: { term: string; definition: string }[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
