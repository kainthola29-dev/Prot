"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profileData } from "@/data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "./SocialIcons";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-[#16181C]/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 dark:border-gray-800/80 py-3.5" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group flex-shrink-0"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-700 via-primary-600 to-emerald-400 flex items-center justify-center text-white font-heading font-bold text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform duration-300">
            {profileData.monogram}
          </div>
          <span className="font-heading font-bold text-lg text-gray-900 dark:text-white tracking-tight whitespace-nowrap">
            {profileData.shortName}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap rounded-md ${
                  isActive
                    ? "text-primary-600 dark:text-primary-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-600 dark:bg-primary-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 shadow-sm hover:shadow-primary-600/30 hover:-translate-y-0.5"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-white/98 dark:bg-[#16181C]/98 backdrop-blur-xl z-40 border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2.5 px-4 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-semibold"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/60"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-600 text-white font-medium text-sm shadow-md"
              >
                <span>Hire Me / Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Connect With Me</p>
            <SocialLinks />
          </div>
        </div>
      )}
    </header>
  );
}
