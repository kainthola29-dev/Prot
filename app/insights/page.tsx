import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles — Strategic Marketing Analysis",
  description: "In-depth marketing analysis on marketing strategy vs. activity, modern content SEO, generative AI workflows, and corporate growth.",
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
          EDITORIAL &amp; THOUGHT LEADERSHIP
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          Strategic Marketing Insights
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Practical commentary on full-funnel marketing strategy, AI workflows, and content distribution without fluff.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {content.articles.map((art: any) => (
          <article
            key={art.id}
            className="group rounded-3xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-48 rounded-2xl overflow-hidden relative mb-6 border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-900">
                {art.image ? (
                  <Image
                    src={art.image}
                    alt={art.title}
                    width={800}
                    height={480}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-48 rounded-2xl bg-gradient-to-tr ${art.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-inner`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/40 backdrop-blur-md">
                        {art.category}
                      </span>
                      <span className="text-xs font-medium text-gray-200 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{art.readTime}</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-300 font-semibold">{art.date}</span>
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                    {art.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-gray-200 backdrop-blur-md flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{art.readTime}</span>
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors leading-snug mb-3">
                <Link href={`/insights/${art.slug}`}>
                  {art.title}
                </Link>
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-400">By Deepanshu Kainthola</span>
              <Link
                href={`/insights/${art.slug}`}
                className="text-primary-600 dark:text-primary-400 inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
