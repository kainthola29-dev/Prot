import React from "react";
import { profileData } from "@/data/portfolioData";
import { SocialLinks } from "@/components/SocialIcons";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { 
  Mail, 
  Phone, 
  Clock, 
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Deepanshu Kainthola — Marketing Leadership Inquiries",
  description: "Get in touch directly with Deepanshu Kainthola via email (kainthola29@gmail.com), WhatsApp (+91-9599396969), or message form for marketing leadership opportunities.",
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
    <div className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          DIRECT CONTACT &amp; INQUIRIES
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
          Let&apos;s Build Something Meaningful
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Have an executive opportunity, strategic campaign, or project in mind? Reach out directly or leave a message below — I respond personally within 24 hours.
        </p>
      </div>

      {/* Balanced 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Communication Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
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
                  Email Me Directly
                </h2>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              For leadership inquiries, partnership discussions, or general correspondence, write to my primary inbox.
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
              Prefer instant messaging or a direct phone discussion? Reach out anytime via WhatsApp or direct call.
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

        {/* Right Column: Send a Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
