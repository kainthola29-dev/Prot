import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudiesData } from "@/data/portfolioData";
import { JsonLd } from "@/components/JsonLd";
import { ArrowLeft, ArrowRight, CheckCircle2, Calendar, Users, Award, ShieldCheck, Target, Lightbulb, Rocket } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cs = caseStudiesData.find((c) => c.slug === params.slug);
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} — Detailed Case Study`,
    description: cs.subtitle,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const cs = caseStudiesData.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://deepanshu.kainthola.com/case-studies" },
      { "@type": "ListItem", position: 3, name: cs.title, item: `https://deepanshu.kainthola.com/case-studies/${cs.slug}` },
    ],
  };

  return (
    <div className="py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Back Link */}
      <div>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <div className={`rounded-3xl bg-gradient-to-tr ${cs.heroGradient} text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl`}>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/30 backdrop-blur-md border border-white/20">
            <span>{cs.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            {cs.title}
          </h1>

          <p className="text-gray-200 text-base sm:text-xl font-medium leading-relaxed">
            {cs.subtitle}
          </p>

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {cs.metrics.map((m) => (
              <div key={m.label} className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-xl sm:text-2xl font-bold font-heading text-emerald-300">
                  {m.value}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-gray-200 mt-0.5 font-medium">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative blur */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* 7-Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Content (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* 1. Challenge */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <Target className="w-4 h-4" />
              <span>Section 01</span>
            </div>
            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              The Business Challenge
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {cs.sections.challenge}
            </p>
          </div>

          {/* 2. Context */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <Lightbulb className="w-4 h-4" />
              <span>Section 02</span>
            </div>
            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              Market Context &amp; Audience Psychology
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {cs.sections.context}
            </p>
          </div>

          {/* 3. Strategy */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Section 03</span>
            </div>
            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              The Strategic Framework
            </h2>
            <ul className="space-y-3">
              {cs.sections.strategy.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Execution */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <Rocket className="w-4 h-4" />
              <span>Section 04</span>
            </div>
            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              Multi-Channel Execution Blueprint
            </h2>
            <ul className="space-y-3">
              {cs.sections.execution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Results */}
          <div className="rounded-2xl bg-primary-50/70 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-900/60 p-8 shadow-inbio space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300">
              <Award className="w-4 h-4" />
              <span>Section 05</span>
            </div>
            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              Measurable Business Results
            </h2>
            <ul className="space-y-3">
              {cs.sections.results.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-primary-600 font-bold text-lg leading-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Lessons */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Section 06
            </div>
            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              Operational &amp; Marketing Lessons
            </h2>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {cs.sections.lessons.map((l, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gray-400 font-bold">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 7. Business Impact */}
          <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-slate-900 text-white p-8 shadow-xl space-y-3 border border-gray-800">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Section 07
            </div>
            <h2 className="text-xl font-bold font-heading">
              Long-Term Commercial Impact
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {cs.sections.businessImpact}
            </p>
          </div>

        </div>

        {/* Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-6 sticky top-28">
            <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
              Case Study Summary
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Initiative</span>
                <span className="font-semibold text-gray-900 dark:text-white">{cs.title}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Entity</span>
                <span className="font-semibold text-gray-900 dark:text-white">{cs.organization}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Focus Area</span>
                <span className="font-semibold text-gray-900 dark:text-white">{cs.category}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Hire Marketing Strategist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
