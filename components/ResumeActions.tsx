"use client";

import React from "react";
import { Download, Mail } from "lucide-react";

export function ResumeActions() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <a
        href="mailto:kainthola29@gmail.com?subject=Marketing%20Resume%20Inquiry%20%E2%80%94%20Deepanshu%20Kainthola"
        className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#212428] text-gray-800 dark:text-gray-200 text-xs font-semibold hover:border-primary-500 transition-all flex items-center gap-2"
      >
        <Mail className="w-4 h-4 text-primary-600" />
        <span>Email Deepanshu</span>
      </a>
      <button
        type="button"
        onClick={handlePrint}
        className="px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold transition-all shadow-md flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
      >
        <Download className="w-4 h-4" />
        <span>Print / Save PDF</span>
      </button>
    </div>
  );
}
