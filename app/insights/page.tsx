import React from "react";
import { getContent } from "@/lib/content";
import { InsightsFilter } from "@/components/InsightsFilter";
import { JsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Field Notes — Strategy, Production Gear & Leadership",
  description: "Practical essays and field-tested gear reviews on marketing strategy, production tools, creative direction, and AI workflows by Deepanshu Kainthola.",
};

export default function InsightsPage() {
  const content = getContent();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://deepanshu.kainthola.com/insights" },
    ],
  };

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          EDITORIAL &amp; FIELD NOTES
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          Strategic Insights &amp; Gear Lab
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Practical commentary on full-funnel marketing strategy, hands-on production gear teardowns, and creative direction from real commercial shoots.
        </p>
      </div>

      {/* Interactive Filter Grid */}
      <InsightsFilter articles={content.articles} />
    </div>
  );
}
