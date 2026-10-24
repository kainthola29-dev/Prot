import React from "react";
import Link from "next/link";
import { profileData, timelineData, skillsArchitecture } from "@/data/portfolioData";
import { JsonLd } from "@/components/JsonLd";
import { ResumeActions } from "@/components/ResumeActions";
import { Briefcase, GraduationCap, Award, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume & CV — Deepanshu Kainthola | Digital Marketing Manager",
  description: "Curriculum Vitae and professional history of Deepanshu Kainthola. 6+ years experience in digital marketing, employer branding, SEO, and content architecture.",
};

export default function ResumePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Resume", item: "https://deepanshu.kainthola.com/resume" },
    ],
  };

  const workExperience = timelineData.filter((item) => !item.isFuture && !item.isPlaceholder && item.id !== "mba");

  return (
    <div className="py-12 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Header and Download CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-gray-200 dark:border-gray-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            CURRICULUM VITAE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white mt-1">
            {profileData.name}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {profileData.roleH1} • {profileData.location}
          </p>
        </div>

        <ResumeActions />
      </div>

      {/* Summary Box */}
      <section className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-3">
        <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-600" />
          <span>Executive Summary</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Results-oriented Marketing Professional with 6+ years of practical execution combined with strategic and business acumen. Proven record of managing multi-channel digital campaigns, content architecture, SEO visibility, employer branding, and corporate communication across 6 enterprise brands. Currently pursuing an MBA from Jindal Global Business School to bridge hands-on marketing delivery with commercial leadership.
        </p>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary-600" />
          <span>Work Experience</span>
        </h2>

        <div className="space-y-6">
          {workExperience.map((exp) => (
            <div
              key={exp.id}
              className={`rounded-2xl bg-white dark:bg-[#212428] border p-6 sm:p-8 shadow-inbio space-y-3 ${
                exp.isCurrent ? "border-primary-500/80" : "border-gray-100 dark:border-gray-800"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {exp.organization}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {exp.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold uppercase">
                      Current
                    </span>
                  )}
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary-600" />
          <span>Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              In Progress
            </span>
            <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
              MBA in Business Strategy &amp; Marketing
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Jindal Global Business School (Cohort 13)
            </p>
            <p className="text-xs text-gray-500">
              Core curriculum: Corporate Strategy, Consumer Psychology, Commercial Thinking, Brand Equity.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Undergraduate Degree
            </span>
            <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
              Higher Education / Undergraduate
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              University Degree
            </p>
            <p className="text-xs text-gray-500">
              Foundational coursework in communication, digital media research, and analytical problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Core Skills Matrix */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-primary-600" />
          <span>Skills Matrix</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsArchitecture.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio"
            >
              <h3 className="text-sm font-bold font-heading text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-100 dark:border-gray-800">
                {cat.title}
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                {cat.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
