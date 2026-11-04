import React from "react";
import { caseStudiesData } from "@/data/portfolioData";
import { CaseStudiesList } from "@/components/CaseStudiesList";
import { JsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Proven Results & Marketing Impact",
  description: "Detailed marketing case studies demonstrating multi-channel acquisition, digital webinars, employer branding, and quantifiable performance.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://deepanshu.kainthola.com/case-studies" },
    ],
  };

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          PROVEN TRACK RECORD
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          In-Depth Case Studies
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Quantifiable marketing execution backed by strategic frameworks, verified data, and business impact.
        </p>
      </div>

      {/* Case Studies List with 3 per page and pagination */}
      <CaseStudiesList caseStudies={caseStudiesData} />
    </div>
  );
}
