"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface PortfolioFilterProps {
  projects: ProjectItem[];
}

export function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Digital Marketing",
    "Content Strategy",
    "SEO & Web",
    "Social Media",
    "Employer Branding",
    "Video Production",
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary-600 text-white shadow-md shadow-primary-600/20 font-semibold"
                : "bg-white dark:bg-[#212428] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800/80 p-6 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover dark:hover:shadow-inbio-dark-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Area */}
              <div className="w-full h-48 rounded-xl overflow-hidden relative mb-6 border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-900">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={480}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-tr ${project.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-inner`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
                        {project.organization}
                      </span>
                      {project.badge && (
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="z-10">
                      <span className="text-xs font-medium text-emerald-200 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white mt-1 group-hover:translate-x-0.5 transition-transform">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                    {project.organization}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/80 text-white backdrop-blur-md">
                      {project.badge}
                    </span>
                  )}
                </div>
              </div>

              <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>
            </div>

            {/* Action Link */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {project.period}
              </span>
              <Link
                href={`/portfolio/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
