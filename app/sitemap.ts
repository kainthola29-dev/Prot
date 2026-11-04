import { MetadataRoute } from "next";
import { projectsData, caseStudiesData, articlesData, servicesData } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deepanshu.kainthola.com";

  const staticRoutes = [
    "",
    "/about",
    "/portfolio",
    "/case-studies",
    "/insights",
    "/resume",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const expertiseRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/expertise/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyRoutes = caseStudiesData.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleRoutes = articlesData.map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...expertiseRoutes, ...projectRoutes, ...caseStudyRoutes, ...articleRoutes];
}
