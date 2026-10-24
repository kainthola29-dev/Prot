import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Building, Tag, Layers, Share2 } from "lucide-react";
import { Metadata } from "next";

export const dynamicParams = true;

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const content = getContent();
  return content.projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const content = getContent();
  const project = content.projects.find((p: any) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study & Project Overview`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const content = getContent();
  const project = content.projects.find((p: any) => p.slug === params.slug);
  if (!project) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://deepanshu.kainthola.com/portfolio" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://deepanshu.kainthola.com/portfolio/${project.slug}` },
    ],
  };

  const overview = project.overview || {
    context: project.description,
    objective: "Accelerate audience reach and deliver qualified engagement across multi-channel digital touchpoints.",
    role: "Lead marketing strategist and campaign manager directing creative, targeting, and analytics.",
    strategy: [
      "In-depth audience segmentation and channel optimization.",
      "Iterative creative testing across video, static banners, and direct copywriting.",
      "Conversion rate optimization on campaign landing pages."
    ],
    execution: [
      "Coordinated cross-functional assets including copy, video snippets, and social creatives.",
      "Deployed automated email and notification nurture sequences.",
      "Monitored live analytics to reallocate budgets toward highest-converting audience cohorts."
    ],
    results: [
      "Delivered verified user registrations exceeding baseline targets.",
      "Strengthened brand credibility across regional and national media channels."
    ],
    lessons: [
      "Data-backed iterative messaging outperforms static promotional broadcasts.",
      "Direct user feedback loops accelerate continuous campaign refinement."
    ]
  };

  return (
    <div className="py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Back Link */}
      <div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Hero Banner */}
      <div className="rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-950">
        {project.image && (
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl space-y-4 text-white bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-600 text-white shadow-sm">
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            {project.title}
          </h1>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md">
              <Building className="w-4 h-4 text-primary-400" />
              <span>{project.organization}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md">
              <Calendar className="w-4 h-4 text-primary-400" />
              <span>{project.period}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column (8 Cols): Deep Dive */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Business Context */}
          {overview.context && (
            <section className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-3">
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                Business Context &amp; Challenge
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {overview.context}
              </p>
            </section>
          )}

          {/* Objective & Role */}
          {(overview.objective || overview.role) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {overview.objective && (
                <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-2">
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    Primary Objective
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {overview.objective}
                  </p>
                </div>
              )}
              {overview.role && (
                <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-2">
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    My Direct Role
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {overview.role}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Strategy */}
          {overview.strategy && overview.strategy.length > 0 && (
            <section className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-4">
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                Strategic Approach
              </h2>
              <ul className="space-y-3">
                {overview.strategy.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Execution Blueprint */}
          {overview.execution && overview.execution.length > 0 && (
            <section className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-4">
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                Tactical Execution
              </h2>
              <ul className="space-y-3">
                {overview.execution.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Results & Lessons */}
          {(overview.results || overview.lessons) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {overview.results && (
                <div className="rounded-2xl bg-primary-50/60 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-900/60 p-6 space-y-3">
                  <h3 className="text-base font-bold font-heading text-primary-800 dark:text-primary-300">
                    Key Results Delivered
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {overview.results.map((r: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {overview.lessons && (
                <div className="rounded-2xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 p-6 space-y-3">
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    Strategic Takeaways
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {overview.lessons.map((l: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-400 font-bold">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Right Sidebar (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-6 sticky top-28">
            <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
              Project Meta
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Category</span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.category}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Organization</span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.organization}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Timeline</span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.period}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Leadership Role</span>
                <span className="font-semibold text-primary-600 dark:text-primary-400">Digital Marketing Manager</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Hire For Your Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/resume"
                className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <span>Download Resume</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
