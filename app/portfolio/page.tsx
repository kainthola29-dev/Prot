import React from "react";
import { projectsData } from "@/data/portfolioData";
import { PortfolioFilter } from "@/components/PortfolioFilter";
import { JsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Selected Marketing Campaigns & Projects",
  description: "Browse marketing campaigns, brand launches, SEO initiatives, and content strategies managed by Deepanshu Kainthola.",
};

export default function PortfolioPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://deepanshu.kainthola.com/portfolio" },
    ],
  };

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          SELECTED WORK
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          Featured Campaigns &amp; Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Filter through digital marketing initiatives, content engines, employer branding series, and web platforms.
        </p>
      </div>

      {/* Interactive Filter Grid */}
      <PortfolioFilter projects={projectsData} />
    </div>
  );
}
