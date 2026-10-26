import React from "react";
import Link from "next/link";
import Image from "next/image";
import { caseStudiesData } from "@/data/portfolioData";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Proven Results & Marketing Impact",
  description: "Detailed marketing case studies demonstrating multi-channel acquisition, digital webinars, employer branding, and quantifiable performance.",
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

      {/* Case Study Cards */}
      <div className="space-y-10">
        {caseStudiesData.map((cs, idx) => (
          <div
            key={cs.id}
            className="rounded-3xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 sm:p-12 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Info (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                    {cs.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                    {cs.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white">
                  {cs.title}
                </h2>

                <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                  {cs.subtitle}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cs.sections.challenge}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-primary-600/30"
                  >
                    <span>Read Full 7-Section Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Metrics Grid (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                {cs.image && (
                  <div className="w-full h-44 rounded-2xl overflow-hidden relative border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-900">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      width={600}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 rounded-2xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/80 dark:border-gray-800 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 pb-2 border-b border-gray-200 dark:border-gray-800">
                    Key Performance Indicators
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="p-4 rounded-xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800/80 shadow-sm">
                        <div className="text-2xl font-extrabold font-heading text-primary-600 dark:text-primary-400">
                          {m.value}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 text-center pt-1 font-medium">
                    Organization: <span className="text-gray-800 dark:text-gray-200 font-semibold">{cs.organization}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
