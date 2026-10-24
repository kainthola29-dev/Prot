import React from "react";
import { profileData } from "@/data/portfolioData";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialIcons";
import { JsonLd } from "@/components/JsonLd";
import { Mail, MapPin, CheckCircle2, Sparkles, Building, Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Deepanshu Kainthola — Marketing Leadership Inquiries",
  description: "Get in touch with Deepanshu Kainthola for Senior Marketing Manager, Brand Manager, or marketing collaboration opportunities.",
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://deepanshu.kainthola.com/contact" },
    ],
  };

  return (
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          GET IN TOUCH
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          Let&apos;s Build Something Meaningful
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Whether you have an executive marketing opportunity, a strategic collaboration, or a consulting advisory inquiry, I&apos;d love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Info Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio dark:shadow-inbio-dark space-y-6">
            <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-4">
              <a
                href="mailto:deepanshu@kainthola.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/80 dark:border-gray-800 hover:border-primary-500/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Email Directly</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                    deepanshu@kainthola.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/80 dark:border-gray-800">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Current Location</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Currently Open To Box */}
            <div className="pt-2">
              <div className="p-5 rounded-xl bg-primary-50 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-900/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-800 dark:text-primary-300">
                  <Briefcase className="w-4 h-4 text-primary-600" />
                  <span>Actively Open For Roles:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    <span>Marketing Manager / Senior Marketing Manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    <span>Marketing Communications / MarComms Lead</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    <span>Brand Manager &amp; Content Architect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 flex-shrink-0" />
                    <span>Target Range: ₹18–25 LPA</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Connect On Social Media
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Right Form Column (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
