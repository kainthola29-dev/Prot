"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Film, 
  Newspaper, 
  Camera, 
  Share2, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  Globe, 
  BookOpen, 
  Instagram, 
  Play, 
  FileText, 
  Sparkles,
  Calendar,
  Layers,
  TrendingUp,
  Droplets,
  HeartPulse,
  Flame,
  Radio,
  Users
} from "lucide-react";
import { formatVideoEmbedUrl, isYouTubeUrl } from "@/lib/utils";
import { ArticleByline, PhotoItem, SocialCampaign, VideoItem } from "@/types";

interface Props {
  videos: VideoItem[];
  bylines: ArticleByline[];
  printArticleCount?: number;
  socialCampaigns: SocialCampaign[];
  photography: PhotoItem[];
}

function extractYouTubeId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export function TatsatChronicleShowcase({
  videos,
  bylines,
  printArticleCount = 45,
  socialCampaigns,
  photography
}: Props) {
  const [activeTab, setActiveTab] = useState<"videos" | "articles" | "social" | "photography">("videos");

  return (
    <div className="space-y-16">
      {/* 1. Milestone Banner: Launching Tatsat Chronicle from Ground Zero */}
      <section className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-emerald-950 via-[#0F1615] to-gray-950 border border-emerald-900/40 shadow-2xl text-white relative overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" 
        />
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-gray-800/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Globe className="w-3.5 h-3.5" />
                <span>Social Media Launch &amp; Multimedia Journalism</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                Launched Tatsat Chronicle&apos;s Official Social Media &amp; Field Documentaries
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed">
                As Digital Content Producer for India&apos;s pioneer social sector and CSR magazine, Deepanshu Kainthola launched Tatsat Chronicle&apos;s social media channels from scratch, authored over {printArticleCount} print investigative articles, interviewed European diplomats and corporate CEOs, directed 9 documentary videos, and captured field photography published in national editions.
              </p>
            </div>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400">
                {printArticleCount}+
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Print Magazine Articles
              </div>
              <p className="text-[11px] text-gray-400">Published in national monthly editions</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400">
                9
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Video Documentaries
              </div>
              <p className="text-[11px] text-gray-400">Shot, edited &amp; uploaded on YouTube</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400">
                100%
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Social Launch From Scratch
              </div>
              <p className="text-[11px] text-gray-400">Water, nutrition &amp; breaking news</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400">
                6
              </div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Field Photo Features
              </div>
              <p className="text-[11px] text-gray-400">Diplomatic &amp; grassroots photography</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Filter Pills (Balanced in a single line) */}
      <div className="w-full max-w-4xl mx-auto overflow-x-auto no-scrollbar py-2">
        <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2.5 p-1.5 rounded-2xl bg-gray-100 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 w-fit min-w-max mx-auto shadow-sm">
          <button
            onClick={() => setActiveTab("videos")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all ${
              activeTab === "videos"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300" />
            <span>9 Video Documentaries</span>
          </button>

          <button
            onClick={() => setActiveTab("articles")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all ${
              activeTab === "articles"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Print &amp; Web Bylines ({printArticleCount}+)</span>
          </button>

          <button
            onClick={() => setActiveTab("social")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all ${
              activeTab === "social"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Social Media Launch</span>
          </button>

          <button
            onClick={() => setActiveTab("photography")}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all ${
              activeTab === "photography"
                ? "bg-emerald-600 text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Field Photography (6)</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: 9 YOUTUBE DOCUMENTARIES & DIPLOMATIC INTERVIEWS */}
      {(activeTab === "videos" || activeTab === "articles" || activeTab === "social" || activeTab === "photography") && (
        <section id="videos" className="space-y-8 rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Documentary Production
                </span>
                <span className="text-xs font-mono text-gray-400">9 Videos Recorded, Edited &amp; Uploaded</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
                High-Profile Diplomatic Interviews &amp; Field Documentaries
              </h3>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm sm:text-right">
              Filmed on-location with European ambassadors, British High Commission, corporate sustainability heads, and grassroots disability champions.
            </p>
          </div>

          {/* 3x3 + 1 Balanced Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {videos.map((video, idx) => {
              const ytId = extractYouTubeId(video.url);
              const embedUrl = ytId ? `https://www.youtube.com/embed/${ytId}` : formatVideoEmbedUrl(video.url);
              const thumbnailUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null;

              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-lg flex flex-col justify-between group hover:border-emerald-500/60 transition-all"
                >
                  {/* Header Strip */}
                  <div className="p-3 bg-gray-900 border-b border-gray-800 flex items-center justify-between text-xs gap-2">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="w-5 h-5 rounded-full bg-emerald-600/30 text-emerald-300 text-[10px] flex items-center justify-center font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-white text-xs truncate">
                        {video.title || `Video Deliverable 0${idx + 1}`}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 px-1.5 py-0.5 rounded bg-black/40 border border-gray-800 flex-shrink-0">
                      16:9 Full HD
                    </span>
                  </div>

                  {/* Video Player Container */}
                  <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                    {thumbnailUrl && (
                      <img
                        src={thumbnailUrl}
                        alt={video.title || "Tatsat Chronicle Video"}
                        className="w-full h-full object-cover absolute inset-0 opacity-40 blur-[1px] pointer-events-none"
                        loading="lazy"
                      />
                    )}
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title={video.title || "Tatsat Chronicle Video Player"}
                        className="w-full h-full border-0 absolute inset-0 z-10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative z-10 text-gray-400 text-xs text-center p-4">
                        Video link unavailable
                      </div>
                    )}
                  </div>

                  {/* Video Caption & External Action */}
                  <div className="p-3.5 bg-gray-900/95 border-t border-gray-800 space-y-2.5">
                    {video.caption && (
                      <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                        {video.caption}
                      </p>
                    )}

                    <div className="pt-1 flex items-center justify-between gap-2 border-t border-gray-800/60 text-xs">
                      <span className="text-[11px] font-medium text-emerald-400/90 truncate">
                        Tatsat Chronicle Official
                      </span>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white font-semibold text-[11px] transition-all flex-shrink-0"
                      >
                        <span>Open YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION 2: PRINT MAGAZINE BYLINES (45 ARTICLES) & 10 FEATURED DIGITAL ARTICLES */}
      <section id="articles" className="space-y-8 rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Print &amp; Digital Journalism
              </span>
              <span className="text-xs font-mono text-gray-400">45 Print Bylines · 10 Live Web Investigations</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
              Investigative CSR, Environmental &amp; Policy Journalism
            </h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm sm:text-right">
            Authored in-depth corporate spending analyses, tribal rights investigations, river rejuvenation policies, and ESG rankings for Tatsat Chronicle.
          </p>
        </div>

        {/* Print Magazine Achievement Highlight Box */}
        <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-950/40 via-[#131c19] to-gray-900 border border-emerald-800/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                45+ In-Depth Articles Published in Print Magazine
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                Deepanshu Kainthola&apos;s investigative articles, corporate CSR audits, and grassroots social reporting were featured across national print editions of <span className="text-emerald-300 font-semibold">Tatsat Chronicle</span>, distributed to corporate boardrooms, embassies, ministries, and civil society leaders.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-600/30 text-emerald-300 text-xs font-bold border border-emerald-500/30 whitespace-nowrap self-start md:self-auto">
            <Award className="w-4 h-4" />
            <span>National Print Publication</span>
          </span>
        </div>

        {/* 10 Featured Digital Investigative Reports Grid */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-500" />
            <span>Selected Published Digital Articles &amp; Policy Reports</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bylines.map((article, idx) => (
              <a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-gray-50 dark:bg-[#212428] border border-gray-200/80 dark:border-gray-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {article.category || "CSR & ESG"}
                    </span>
                    <span className="text-gray-400 font-mono">Article 0{idx + 1}</span>
                  </div>

                  <h5 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {article.title}
                  </h5>

                  {article.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-gray-200/60 dark:border-gray-800 text-gray-500 dark:text-gray-400">
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    tatsatchronicle.com
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SOCIAL MEDIA LAUNCH & SIGNATURE CAMPAIGNS */}
      <section id="social" className="space-y-8 rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Official Social Launch
              </span>
              <span className="text-xs font-mono text-gray-400">4 Signature Campaigns &amp; Editorial Formats</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
              Launched Tatsat Chronicle&apos;s Social Media Pages &amp; Key Campaigns
            </h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm sm:text-right">
            Engineered the digital launch strategy, curated visual templates, structured editorial calendars, and executed high-retention campaigns.
          </p>
        </div>

        {/* 4 Campaign Clusters */}
        <div className="space-y-8">
          {socialCampaigns.map((camp, cIdx) => (
            <div key={cIdx} className="rounded-2xl p-6 bg-gray-50 dark:bg-[#212428] border border-gray-200/80 dark:border-gray-800 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200/60 dark:border-gray-700/60 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      {camp.badge || `Campaign 0${cIdx + 1}`}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {camp.posts.length} Live Social Deliverables
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-heading text-gray-900 dark:text-white">
                    {camp.title}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 max-w-md sm:text-right">
                  {camp.description}
                </p>
              </div>

              {/* Campaign Instagram Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {camp.posts.map((post, pIdx) => (
                  <InstagramPostCard key={pIdx} post={post} index={pIdx} campaignType={camp.badge || ""} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: EDITORIAL & FIELD PHOTOGRAPHY GALLERY (7 PHOTOGRAPHS) */}
      <section id="photography" className="space-y-8 rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Editorial &amp; Field Photography
              </span>
              <span className="text-xs font-mono text-gray-400">6 High-Resolution Published Photos</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
              On-Ground Photography for Print Magazine &amp; Digital Editions
            </h3>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm sm:text-right">
            Captured on-location documentary photographs, diplomatic readership spreads, executive portraits, and grassroots disability workshops.
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photography.map((photo, pIdx) => (
            <div
              key={pIdx}
              className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-lg flex flex-col justify-between group hover:border-emerald-500/60 transition-all"
            >
              <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.caption || photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/10">
                  {photo.tag || "Tatsat Chronicle Photo"}
                </div>
              </div>

              <div className="p-4 bg-gray-900/95 border-t border-gray-800 space-y-2">
                <h5 className="text-sm font-bold text-white leading-snug group-hover:text-emerald-400 transition-colors">
                  {photo.title}
                </h5>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {photo.caption}
                </p>
                <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="font-mono">Photo by Deepanshu Kainthola</span>
                  <span className="text-emerald-400 font-semibold">Tatsat Print &amp; Web</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/**
 * Dedicated Instagram Post Card with authentic styling and direct links
 * that bypass iframe blocking and give a sleek mobile reel/card experience
 */
function InstagramPostCard({ post, index, campaignType }: { post: { url: string; title: string; caption?: string }; index: number; campaignType: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-md flex flex-col justify-between group hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-all">
      {/* Header with IG Badge */}
      <div className="p-2.5 bg-gray-900 border-b border-gray-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 truncate">
          <div className="w-5 h-5 rounded-full p-[1px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center flex-shrink-0">
            <div className="w-full h-full bg-[#0F1115] rounded-full flex items-center justify-center">
              <Instagram className="w-2.5 h-2.5 text-pink-400" />
            </div>
          </div>
          <span className="font-bold text-white text-[11px] truncate">@tatsatchronicle</span>
        </div>
        <span className="text-[10px] font-mono text-gray-400">Post 0{index + 1}</span>
      </div>

      {/* Visual Body / Slate */}
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 bg-gradient-to-b from-[#14171d] to-[#0d0f13] flex flex-col justify-between min-h-[140px] group/post text-left cursor-pointer space-y-3"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
            {campaignType}
          </span>
          <h5 className="text-xs font-bold text-white group-hover/post:text-emerald-300 transition-colors leading-snug line-clamp-3">
            {post.title}
          </h5>
        </div>

        <div className="pt-2 flex items-center justify-between text-[11px] text-gray-400 border-t border-gray-800/60">
          <span className="text-[10px] text-gray-400">View on Instagram</span>
          <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold group-hover/post:translate-x-0.5 transition-transform">
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </a>
    </div>
  );
}
