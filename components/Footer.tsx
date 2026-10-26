import React from "react";
import Link from "next/link";
import { profileData, navItems } from "@/data/portfolioData";
import { SocialLinks } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="bg-[#111827] dark:bg-[#0E1013] text-gray-400 border-t border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-heading font-bold text-sm">
                {profileData.monogram}
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              {profileData.bio}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-800/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.statusBadge}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <p className="text-sm text-gray-400">
              Open to leadership discussions, strategic consulting, and high-impact marketing roles.
            </p>
            <div className="space-y-1 text-xs">
              <a href="mailto:kainthola29@gmail.com" className="text-primary-400 hover:underline block font-medium">
                kainthola29@gmail.com
              </a>
              <a href="tel:+919599396969" className="text-gray-300 hover:text-white block">
                +91-9599396969
              </a>
            </div>
            <div className="pt-1">
              <SocialLinks itemClassName="w-9 h-9 rounded-lg bg-gray-800/80 border border-gray-700/80 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-600 transition-all shadow-sm" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {profileData.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/contact" className="hover:text-primary-400 transition-colors">
              Contact
            </Link>
            <span>•</span>
            <Link href="/resume" className="hover:text-primary-400 transition-colors">
              Resume
            </Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-primary-400 transition-colors">
              Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
