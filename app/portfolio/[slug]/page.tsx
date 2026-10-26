import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Building, 
  Tag, 
  Layers, 
  Play, 
  Video, 
  Film, 
  Camera, 
  ImageIcon, 
  Sparkles, 
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { Metadata } from "next";

export const dynamicParams = true;

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const content = getContent();
  return content.projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const content = getContent();
  const project = content.projects.find((p: any) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  const imageUrl = project.image || "/images/deepanshu.webp";

  return {
    title: `${project.title} — Case Study & Project Overview`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      url: `https://deepanshu.kainthola.com/portfolio/${project.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [imageUrl],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const content = getContent();
  const project = content.projects.find((p: any) => p.slug === params.slug);
  if (!project) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://deepanshu.kainthola.com/portfolio" },
      { "@type": "ListItem", position: 3, name: project.title, item: `https://deepanshu.kainthola.com/portfolio/${project.slug}` },
    ],
  };

  const overview = project.overview || {
    context: project.description,
    objective: "Drive qualified engagement and establish scalable content distribution.",
    role: "Lead strategist and production coordinator overseeing content, creative direction, and campaign rollout.",
    strategy: [
      "Audience analysis and channel selection based on target demographics.",
      "Iterative creative development across video formats and visual collateral.",
      "Frictionless conversion pathways and performance tracking."
    ],
    execution: [
      "Coordinated pre-production, on-location filming, and post-production workflows.",
      "Managed publishing calendars across owned social and web channels.",
      "Monitored key retention and conversion metrics to refine subsequent sprints."
    ],
    results: [
      "Achieved verified campaign reach targets across relevant stakeholder groups.",
      "Strengthened long-term brand recall and qualified inbound inquiries."
    ],
    lessons: [
      "Clear, grounded messaging outperforms overly complex corporate jargon.",
      "Speed of execution and audience feedback loops accelerate campaign ROI."
    ]
  };

  const mediaPlaceholders = project.mediaPlaceholders && project.mediaPlaceholders.length > 0 
    ? project.mediaPlaceholders 
    : [
        {
          type: "video" as const,
          title: `${project.title} — Primary Campaign Reel`,
          caption: "16:9 High-Definition Video Slot (Embed YouTube, Vimeo, or MP4)",
          aspectRatio: "16:9" as const,
          videoUrl: project.videoUrl
        },
        {
          type: "image" as const,
          title: "Production Stills & Key Visuals",
          caption: "On-set production photographs, flatlays, or campaign banner creatives",
          aspectRatio: "16:9" as const
        }
      ];

  return (
    <div className="py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={breadcrumbSchema} />

      {/* Back Link */}
      <div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Hero Banner */}
      <div className="rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-950">
        {project.image && (
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl space-y-4 text-white bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-600 text-white shadow-sm">
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight">
            {project.title}
          </h1>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md">
              <Building className="w-4 h-4 text-primary-400" />
              <span>{project.organization}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md">
              <Calendar className="w-4 h-4 text-primary-400" />
              <span>{project.period}</span>
            </div>
            {project.badge && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600/30 border border-primary-500/40 text-primary-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.badge}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Stats Strip (if available) */}
      {project.stats && project.stats.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.stats.map((stat: any, i: number) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-inbio text-center space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-primary-600 dark:text-primary-400">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Media & Video Production Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <Film className="w-4 h-4" />
              <span>Visual Showcase &amp; Production Assets</span>
            </div>
            <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mt-1">
              Campaign Media &amp; Video Reel Slots
            </h2>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Dedicated 16:9 &amp; 9:16 Video / Gallery Holders
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {mediaPlaceholders.map((media, idx) => {
            const isFullWidth = mediaPlaceholders.length === 1 || (idx === 0 && mediaPlaceholders.length % 2 !== 0);
            const colSpan = isFullWidth ? "lg:col-span-12" : "lg:col-span-6";

            if (media.type === "video") {
              return (
                <div
                  key={idx}
                  className={`${colSpan} rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-xl flex flex-col justify-between group`}
                >
                  {/* Video Viewport / Responsive Container */}
                  <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 via-[#13161C] to-black flex items-center justify-center p-6 overflow-hidden">
                    {/* Subtle grid pattern background */}
                    <div 
                      className="absolute inset-0 opacity-10" 
                      style={{ 
                        backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", 
                        backgroundSize: "24px 24px" 
                      }} 
                    />

                    {media.videoUrl ? (
                      media.videoUrl.includes("youtube.com") || media.videoUrl.includes("youtu.be") || media.videoUrl.includes("vimeo.com") ? (
                        <iframe
                          src={media.videoUrl}
                          title={media.title}
                          className="w-full h-full border-0 absolute inset-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video controls className="w-full h-full object-cover">
                          <source src={media.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      /* Elegant Interactive Video Holder Slate */
                      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md px-4 space-y-3">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-600/20 border border-primary-500/50 flex items-center justify-center text-primary-400 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-primary-500/20 cursor-pointer">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                        </div>
                        <div className="space-y-1">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-950/80 text-primary-300 border border-primary-800/60">
                            Video Player Holder · 16:9 Full HD
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {media.title}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                          {media.caption || "Drop YouTube, Vimeo embed link, or MP4 video URL in data/content.json to stream the video directly here."}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Video Meta Bar */}
                  <div className="p-4 bg-gray-900/90 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-primary-400" />
                      <span className="font-medium text-gray-300">{media.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-gray-500">
                      {media.aspectRatio || "16:9"} High Retention Reel
                    </span>
                  </div>
                </div>
              );
            }

            /* Image Holder / Gallery Item */
            return (
              <div
                key={idx}
                className={`${colSpan} rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-xl flex flex-col justify-between group`}
              >
                <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 via-[#181B22] to-black flex items-center justify-center p-6 overflow-hidden">
                  {media.src ? (
                    <Image
                      src={media.src}
                      alt={media.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md px-4 space-y-3">
                      <div className="w-14 h-14 rounded-2xl bg-gray-800/80 border border-gray-700/60 flex items-center justify-center text-gray-400 group-hover:text-primary-400 group-hover:border-primary-500/50 transition-all">
                        <Camera className="w-7 h-7" />
                      </div>
                      <div className="space-y-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-800/80 text-gray-300 border border-gray-700">
                          Production Photo Slot
                        </span>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {media.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                        {media.caption || "Add high-resolution behind-the-scenes production stills, flatlays, or campaign banners in public/images/projects/."}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-gray-900/90 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-emerald-400" />
                    <span className="font-medium text-gray-300">{media.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500">Still / Visual Asset</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Two-Column Content: Strategy & Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column (8 Cols): Deep Dive */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Business Context & Challenge */}
          {overview.context && (
            <section className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-3">
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white flex items-center gap-2">
                <span>The Challenge &amp; Background</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {overview.context}
              </p>
            </section>
          )}

          {/* Objective & Role */}
          {(overview.objective || overview.role) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {overview.objective && (
                <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-2">
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    Primary Objective
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {overview.objective}
                  </p>
                </div>
              )}
              {overview.role && (
                <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-2">
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    My Hands-On Role
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {overview.role}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Strategy */}
          {overview.strategy && overview.strategy.length > 0 && (
            <section className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-4">
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                How We Planned It
              </h2>
              <ul className="space-y-3">
                {overview.strategy.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Execution Blueprint */}
          {overview.execution && overview.execution.length > 0 && (
            <section className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-4">
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                How It Was Executed On The Ground
              </h2>
              <ul className="space-y-3">
                {overview.execution.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-700 dark:text-primary-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Results & Lessons */}
          {(overview.results || overview.lessons) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {overview.results && (
                <div className="rounded-2xl bg-primary-50/60 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-900/60 p-6 space-y-3">
                  <h3 className="text-base font-bold font-heading text-primary-800 dark:text-primary-300">
                    What Worked &amp; Measurable Impact
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {overview.results.map((r: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-600 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {overview.lessons && (
                <div className="rounded-2xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 p-6 space-y-3">
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    Practical Lessons Learned
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {overview.lessons.map((l: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gray-400 font-bold">•</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Right Sidebar (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-6 sticky top-28">
            <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
              Project Summary
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Category</span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.category}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Organization</span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.organization}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Timeline</span>
                <span className="font-semibold text-gray-900 dark:text-white">{project.period}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs uppercase tracking-wider font-semibold">Direct Role</span>
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  {project.overview?.role?.split("—")[0]?.trim() || "Lead Strategist & Producer"}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
              <a
                href="mailto:kainthola29@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Deepanshu%20Kainthola"
                className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Email Deepanshu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/919599396969"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp: +91 9599396969</span>
              </a>

              <Link
                href="/resume"
                className="w-full py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <span>View Full Resume</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
