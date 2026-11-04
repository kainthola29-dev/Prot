import React from "react";
import { profileData } from "@/data/portfolioData";
import { SocialLinks } from "@/components/SocialIcons";
import { JsonLd } from "@/components/JsonLd";
import { 
  Mail, 
  Phone, 
  Clock, 
  MessageCircle,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Deepanshu Kainthola — Marketing Leadership Inquiries",
  description: "Get in touch directly with Deepanshu Kainthola via email (kainthola29@gmail.com) or phone/WhatsApp (+91-9599396969) for senior marketing leadership opportunities.",
  alternates: {
    canonical: "/contact",
  },
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
    <div className="py-12 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          DIRECT CONTACT
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          Let&apos;s Build Something Meaningful
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Have an executive leadership opportunity, strategic campaign, or creative marketing initiative in mind? Reach out directly — no middle layers, straight to my personal inbox or phone.
        </p>
      </div>

      {/* Top Row: Primary Direct Channel (Left) & Instant Reach (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Left: Email Direct Action Card */}
        <div className="rounded-3xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio dark:shadow-inbio-dark flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 block">
                  Primary Direct Channel
                </span>
                <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                  Email Me Directly
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              For senior leadership roles, partnership discussions, or strategic marketing initiatives, write to my personal inbox. I read and answer every message personally.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href="mailto:kainthola29@gmail.com?subject=Strategic%20Marketing%20Opportunity%20%E2%80%94%20Deepanshu%20Kainthola"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-primary-600/30 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>kainthola29@gmail.com</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Typical response time: Under 24 hours</span>
            </div>
          </div>
        </div>

        {/* Right: Phone & WhatsApp Direct Card */}
        <div className="rounded-3xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio dark:shadow-inbio-dark flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  Instant Reach
                </span>
                <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                  WhatsApp &amp; Direct Phone
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Prefer instant messaging or a direct phone discussion? Reach out anytime via WhatsApp for quick conversations or call my direct line.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/919599396969?text=Hi%20Deepanshu,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919599396969"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-[#1A1D21] hover:bg-gray-200 dark:hover:bg-[#252a32] text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-800 font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-primary-600" />
                <span>+91-9599396969</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Direct personal line • Available Mon – Sat</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom: Connect Across Social Media (Centered) */}
      <div className="max-w-xl mx-auto w-full pt-4">
        <div className="rounded-3xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio dark:shadow-inbio-dark text-center space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
              CONNECT ACROSS SOCIAL MEDIA
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Follow my work, industry commentary, and professional updates across networks:
            </p>
          </div>
          
          <div className="pt-2 flex justify-center">
            <SocialLinks 
              className="flex items-center justify-center gap-3.5" 
              itemClassName="w-11 h-11 rounded-2xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/80 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-primary-600 dark:hover:bg-primary-600 hover:border-primary-600 transition-all duration-300 shadow-sm hover:scale-105"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
