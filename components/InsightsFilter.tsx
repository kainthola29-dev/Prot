"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArticleItem } from "@/types";
import { Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";

interface InsightsFilterProps {
  articles: ArticleItem[];
}

export function InsightsFilter({ articles }: InsightsFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Production Gear & Studio Lab",
    "Creative Direction",
    "Marketing Strategy",
    "AI & Leadership"
  ];

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase());

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

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredArticles.map((art) => (
          <article
            key={art.id}
            className="group rounded-3xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Area */}
              <div className="w-full h-52 rounded-2xl overflow-hidden relative mb-6 border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-900">
                {art.image ? (
                  <Image
                    src={art.image}
                    alt={art.title}
                    width={800}
                    height={480}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-tr ${art.gradient || "from-gray-900 to-black"} p-6 flex flex-col justify-between text-white relative overflow-hidden shadow-inner`}>
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

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{art.date}</span>
              </span>

              <Link
                href={`/insights/${art.slug}`}
                className="inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 font-bold uppercase tracking-wider text-xs"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
