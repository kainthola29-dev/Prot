import React from "react";
import Link from "next/link";
import { profileData } from "@/data/portfolioData";
import { SocialLinks } from "@/components/SocialIcons";
import { JsonLd } from "@/components/JsonLd";
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight, 
  Download, 
  Clock, 
  MessageCircle,
  Building2
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Deepanshu Kainthola — Marketing Leadership Inquiries",
  description: "Get in touch directly with Deepanshu Kainthola via email (kainthola29@gmail.com) or phone/WhatsApp (+91-9599396969) for senior marketing leadership opportunities.",
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
          DIRECT CONTACT
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          Let&apos;s Build Something Meaningful
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Reach out directly for senior marketing leadership roles, strategic brand initiatives, or executive advisory. No middle layers — connect straight to my inbox or phone.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Communication Channels (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Email Direct Action Card */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-inbio dark:shadow-inbio-dark space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 block">
                  Primary Direct Channel
                </span>
                <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                  Send Me an Email
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              For executive role inquiries, job offers, or strategic partnerships, drop me a note directly. I respond personally to all relevant opportunities within 24 hours.
            </p>

            <div className="pt-2">
              <a
                href="mailto:kainthola29@gmail.com?subject=Strategic%20Marketing%20Opportunity%20%E2%80%94%20Deepanshu%20Kainthola"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-primary-600/30"
              >
                <Mail className="w-4 h-4" />
                <span>kainthola29@gmail.com</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Typical response time: Under 24 hours</span>
            </div>
          </div>

          {/* Phone & WhatsApp Direct Card */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-inbio dark:shadow-inbio-dark space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
                  Instant Reach
                </span>
                <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                  WhatsApp &amp; Direct Phone
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Prefer real-time chat or a phone discussion? Message me directly on WhatsApp or call my direct line.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href="https://wa.me/919599396969?text=Hi%20Deepanshu,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919599396969"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 dark:bg-[#1A1D21] hover:bg-gray-200 dark:hover:bg-[#252a32] text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-800 font-semibold text-xs uppercase tracking-wider transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-primary-600" />
                <span>+91-9599396969</span>
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-3">
              Connect Across Social Media
            </span>
            <SocialLinks />
          </div>

        </div>

        {/* Right Column: Availability, Leadership Focus & Location (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Active Target Positions Card */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-inbio dark:shadow-inbio-dark space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                <Briefcase className="w-4 h-4" />
                <span>Active Target Leadership Roles</span>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                Open to Offers
              </span>
            </div>

            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Marketing Manager / Senior Marketing Manager</span>
                  <p className="text-xs text-gray-500 mt-0.5">Full-funnel campaign orchestration, lead generation, team leadership &amp; budget accountability.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Brand Manager &amp; Content Architect</span>
                  <p className="text-xs text-gray-500 mt-0.5">Brand narrative, multi-brand identity, thought leadership, and organic content ecosystems.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">MarComms Lead &amp; Employer Branding Manager</span>
                  <p className="text-xs text-gray-500 mt-0.5">Corporate reputation, PR storytelling, internal comms, and #BharatAtWork series.</p>
                </div>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/80 dark:border-gray-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Target Compensation Range</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">₹18–25 LPA (CTC)</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Notice Period</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Available on Standard Notice</span>
              </div>
            </div>
          </div>

          {/* Current Role & Location Card */}
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-inbio dark:shadow-inbio-dark space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Location &amp; Mobility</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  Delhi NCR, India
                </h3>
              </div>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Based in Delhi NCR. Available for in-person, hybrid, or remote corporate marketing leadership roles. Open to relocation for strategic executive opportunities.
            </p>

            <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3 text-xs text-gray-500">
              <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <span>Current Organization: <strong>Vision India Services Pvt. Ltd.</strong></span>
            </div>
          </div>

          {/* Download Resume Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary-900 to-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Executive Profile
              </span>
              <h4 className="text-base font-bold text-white mt-0.5">
                Download Comprehensive Resume
              </h4>
              <p className="text-xs text-gray-300 mt-1">
                7.7 Years Exp., verified milestones, brand case studies &amp; credentials.
              </p>
            </div>
            <Link
              href="/resume"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-gray-100 text-gray-900 font-semibold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap self-start sm:self-auto shadow-md"
            >
              <span>View Resume</span>
              <Download className="w-3.5 h-3.5 text-primary-600" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
