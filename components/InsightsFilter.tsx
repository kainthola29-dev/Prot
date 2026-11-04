"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArticleItem } from "@/types";
import { Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface InsightsFilterProps {
  articles: ArticleItem[];
}

const ITEMS_PER_PAGE = 4;

// Helper to parse dates like "Sep 2026", "Oct 2024" for sorting newest first
const MONTH_MAP: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
};

function parseDateScore(dateStr?: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length === 2) {
    const month = MONTH_MAP[parts[0].toLowerCase().slice(0, 3)] ?? 0;
    const year = parseInt(parts[1], 10) || 2024;
    return year * 100 + month;
  }
  return 0;
}

export function InsightsFilter({ articles }: InsightsFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Production Gear & Studio Lab",
    "Creative Direction",
    "Marketing Strategy",
    "AI & Leadership"
  ];

  // Sort articles newest first
  const sortedArticles = [...articles].sort(
    (a, b) => parseDateScore(b.date) - parseDateScore(a.date)
  );

  const filteredArticles = activeCategory === "All"
    ? sortedArticles
    : sortedArticles.filter((a) => a.category.toLowerCase() === activeCategory.toLowerCase());

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredArticles.length);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div ref={containerRef} className="space-y-10 scroll-mt-24">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
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

      {/* Articles Grid (Latest 4 per page) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {displayedArticles.map((art) => (
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

      {/* Pagination Controls */}
      {filteredArticles.length > 0 && (
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex + 1}–{endIndex}</span> of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">{filteredArticles.length}</span> articles
          </div>

          <div className="flex items-center gap-2">
            {/* Prev Button */}
            <button
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              disabled={safeCurrentPage === 1}
              aria-label="Previous Page"
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 border ${
                safeCurrentPage === 1
                  ? "opacity-40 cursor-not-allowed border-gray-200 dark:border-gray-800 text-gray-400"
                  : "bg-white dark:bg-[#212428] border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  aria-label={`Page ${pageNum}`}
                  aria-current={safeCurrentPage === pageNum ? "page" : undefined}
                  className={`w-9 h-9 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center transition-all duration-200 ${
                    safeCurrentPage === pageNum
                      ? "bg-primary-600 text-white shadow-md shadow-primary-600/30"
                      : "bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              disabled={safeCurrentPage === totalPages}
              aria-label="Next Page"
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 border ${
                safeCurrentPage === totalPages
                  ? "opacity-40 cursor-not-allowed border-gray-200 dark:border-gray-800 text-gray-400"
                  : "bg-white dark:bg-[#212428] border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm"
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
