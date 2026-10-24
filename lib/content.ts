import fs from "fs";
import path from "path";
import { 
  profileData, 
  statsData, 
  servicesData, 
  projectsData, 
  caseStudiesData, 
  timelineData, 
  articlesData, 
  skillsArchitecture, 
  skillBars 
} from "@/data/portfolioData";
import { 
  ProjectItem, 
  ArticleItem, 
  StatItem, 
  ServiceItem, 
  TimelineItem, 
  CaseStudyItem, 
  SkillCategory 
} from "@/types";

export interface PortfolioContent {
  profile: typeof profileData;
  stats: StatItem[];
  services: ServiceItem[];
  projects: ProjectItem[];
  caseStudies: CaseStudyItem[];
  timeline: TimelineItem[];
  articles: ArticleItem[];
  skillsArchitecture: SkillCategory[];
  skillBars: typeof skillBars;
}

export function getContent(): PortfolioContent {
  const dataFilePath = path.join(process.cwd(), "data", "content.json");
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      const json = JSON.parse(fileData);
      return {
        profile: { ...profileData, ...json.profile },
        stats: (json.stats || statsData) as StatItem[],
        services: (json.services || servicesData) as ServiceItem[],
        projects: (json.projects || projectsData) as ProjectItem[],
        caseStudies: caseStudiesData,
        timeline: (json.timeline || timelineData) as TimelineItem[],
        articles: (json.articles || articlesData) as ArticleItem[],
        skillsArchitecture,
        skillBars,
      };
    }
  } catch (e) {
    console.error("Error reading content.json:", e);
  }

  return {
    profile: profileData,
    stats: statsData,
    services: servicesData,
    projects: projectsData,
    caseStudies: caseStudiesData,
    timeline: timelineData,
    articles: articlesData,
    skillsArchitecture,
    skillBars,
  };
}
