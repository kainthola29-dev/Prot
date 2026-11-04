"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudyItem } from "@/types";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudiesListProps {
  caseStudies: CaseStudyItem[];
}

const ITEMS_PER_PAGE = 3;

export function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.max(1, Math.ceil(caseStudies.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const displayedCaseStudies = caseStudies.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, caseStudies.length);

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
      {/* Case Study Cards (3 per page) */}
      <div className="space-y-10">
        {displayedCaseStudies.map((cs) => (
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
                      <div
                        key={m.label}
                        className="p-4 rounded-xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800/80 shadow-sm"
                      >
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
                    Organization:{" "}
                    <span className="text-gray-800 dark:text-gray-200 font-semibold">
                      {cs.organization}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {caseStudies.length > 0 && (
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {startIndex + 1}–{endIndex}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {caseStudies.length}
            </span>{" "}
            case studies
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
