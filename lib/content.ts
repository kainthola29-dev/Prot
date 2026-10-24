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

export function getContent() {
  const dataFilePath = path.join(process.cwd(), "data", "content.json");
  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      const json = JSON.parse(fileData);
      return {
        profile: { ...profileData, ...json.profile },
        stats: json.stats || statsData,
        services: json.services || servicesData,
        projects: json.projects || projectsData,
        caseStudies: caseStudiesData,
        timeline: json.timeline || timelineData,
        articles: json.articles || articlesData,
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
