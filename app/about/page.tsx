import React from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData, timelineData, skillsArchitecture, skillBars } from "@/data/portfolioData";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, CheckCircle2, Sparkles, Award, Briefcase, GraduationCap, Compass } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Deepanshu Kainthola — Career Journey & Strategic Marketing",
  description: "Learn about Deepanshu Kainthola's 7.7 Years Exp. across video production, multi-brand digital marketing, and strategic MBA leadership.",
  openGraph: {
    title: "About Deepanshu Kainthola — Digital Marketing Manager",
    description: "7.7 Years Exp. combining practical marketing execution with strategic business leadership.",
    type: "profile",
    images: ["/images/deepanshu.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Deepanshu Kainthola",
    description: "7.7 Years Exp. in digital marketing and brand strategy.",
    images: ["/images/deepanshu.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://deepanshu.kainthola.com/about" },
    ],
  };

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      <JsonLd data={breadcrumbSchema} />

      {/* HEADER & BIO GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Photo & Experience Tag */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600/20 to-teal-400/20 rounded-3xl blur-2xl -z-10" />
            <div className="rounded-2xl p-3 bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-inbio dark:shadow-inbio-dark">
              <div className="relative w-full h-[400px] sm:h-[450px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/images/deepanshu.webp"
                  alt="Deepanshu Kainthola — Digital Marketing Manager"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-4 p-3 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/60 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase font-bold text-gray-500">Current Role</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Vision India Services</p>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-primary-100 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 text-xs font-bold">
                  May 2025 – Present
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800/60">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>MY BACKGROUND &amp; PHILOSOPHY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Connecting Content, Brand Narrative, and Measurable Business Growth
          </h1>

          <div className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I am a marketing professional who combines <strong>7.7 Years of hands-on execution with strategic business thinking</strong>. My journey did not start as a conventional corporate theorist; it began on the front lines of digital media publishing, video editing suites, CMS portals, and rapid-fire content distribution.
            </p>
            <p>
              Beginning at <em>The Sunday Headlines</em> (2016–2018) as Production Head &amp; Website Manager, I mastered editorial deadlines, multimedia production, and organic reader engagement. That tactile foundation subsequently evolved through high-impact content roles at Tatsat Chronicle, Denvax / Helios Educore, and as Video Producer at Meena Bazaar, before stepping into full-scope multi-brand marketing management at <strong>Vision India Services</strong>.
            </p>
            <p>
              Today, I oversee integrated digital marketing, corporate communication, SEO architecture, employer branding, and multi-channel campaigns across <strong>6 flagship corporate brands</strong>. To deepen my financial and commercial decision-making, I am pursuing my <strong>MBA at Jindal Global Business School (Cohort 13)</strong>.
            </p>
          </div>

          {/* Skill Bars */}
          <div className="pt-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Proficiency Benchmark
            </h3>
            <div className="space-y-3">
              {skillBars.map((bar) => (
                <div key={bar.name} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-gray-800 dark:text-gray-200">{bar.name}</span>
                    <span className="text-primary-600 dark:text-primary-400">{bar.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary-600 to-teal-400 transition-all duration-1000"
                      style={{ width: `${bar.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9-STAGE CAREER JOURNEY TIMELINE */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            CAREER PROGRESSION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            The Professional Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            A continuous progression from media production to digital campaigns and corporate marketing leadership.
          </p>
        </div>

        <div className="relative border-l-2 border-primary-200 dark:border-primary-900/60 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
          {timelineData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-[#16181C] flex items-center justify-center transition-transform group-hover:scale-125 ${
                item.isCurrent
                  ? "border-primary-500 bg-primary-500 shadow-md shadow-primary-500/50"
                  : item.isFuture
                  ? "border-amber-500 border-dashed"
                  : "border-primary-400 dark:border-primary-600"
              }`}>
                {item.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Timeline Card */}
              <div className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                item.isCurrent
                  ? "bg-white dark:bg-[#212428] border-2 border-primary-500/80 shadow-inbio-hover"
                  : item.isFuture
                  ? "bg-gradient-to-r from-amber-500/5 to-teal-500/5 dark:bg-[#212428]/80 border-2 border-dashed border-amber-500/40"
                  : "bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-inbio dark:shadow-inbio-dark"
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                      {item.organization}
                    </span>
                    {item.isCurrent && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider">
                        Current Role
                      </span>
                    )}
                    {item.isFuture && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[10px] font-extrabold uppercase tracking-wider">
                        Vision &amp; Aspiration
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS ARCHITECTURE GRID */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            COMPETENCY MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Skills Architecture
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Categorized overview of strategic, technical, and operational marketing capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsArchitecture.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark"
            >
              <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/70 dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 rounded-3xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-inbio p-8 space-y-4">
        <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
          Explore My Projects &amp; Case Studies
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          See how these methodologies translated into verified results, lead pipelines, and audience engagement.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs uppercase tracking-wider transition-all"
          >
            View Portfolio
          </Link>
          <Link
            href="/case-studies"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary-500 font-semibold text-xs uppercase tracking-wider text-gray-800 dark:text-gray-200 transition-all"
          >
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
