import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center mx-auto text-2xl font-black font-heading">
          404
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold font-heading text-gray-900 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The page you are looking for doesn&apos;t exist or has been relocated.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
