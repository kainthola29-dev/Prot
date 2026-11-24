"use client";

import React, { useState } from "react";
import { 
  Film, 
  Smartphone, 
  Sparkles, 
  Video as VideoIcon, 
  ExternalLink, 
  Users, 
  CheckCircle2, 
  Target, 
  Clapperboard, 
  Camera, 
  Scissors, 
  Share2,
  Tv,
  Layers,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { formatVideoEmbedUrl, isInstagramUrl, isYouTubeUrl } from "@/lib/utils";
import { CampaignSection, TeamStructure, VideoItem } from "@/types";

interface Props {
  sections: CampaignSection[];
  teamStructure?: TeamStructure;
}

export function CampaignSectionsShowcase({ sections, teamStructure }: Props) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="space-y-16">
      {/* Team Leadership & Production Engine Banner */}
      {teamStructure && (
        <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-gray-900 via-[#12151B] to-gray-950 border border-gray-800 shadow-2xl text-white relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl pointer-events-none" 
          />
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  <Users className="w-3.5 h-3.5" />
                  <span>Production Unit &amp; Team Leadership</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Cross-Functional Team Led: {teamStructure.totalMembers}
                </h2>
              </div>
              <span className="text-xs text-gray-400 max-w-xs sm:text-right">
                Orchestrated end-to-end shoot logistics, creative briefs, on-set direction, and publishing schedules.
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
              {teamStructure.leadershipNote}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {teamStructure.breakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-sm"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-primary-400">
                    {item.count}
                  </div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {item.role}
                  </div>
                  {item.description && (
                    <p className="text-[11px] text-gray-400">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Campaign Sections */}
      <div className="space-y-16">
        {sections.map((section, sIdx) => {
          return (
            <section 
              key={section.id || sIdx}
              id={section.id}
              className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 shadow-xl space-y-8 transition-all"
            >
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-primary-100 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                      {section.badge || `Campaign 0${sIdx + 1}`}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {section.videos.length} {section.videos.length === 1 ? "Video Deliverable" : "Video Deliverables"}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
                    {section.title}
                  </h3>
                </div>
              </div>

              {/* Context & Role Twin Callouts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Agenda Box */}
                <div className="rounded-2xl p-5 sm:p-6 bg-gray-50 dark:bg-[#212428] border border-gray-200/80 dark:border-gray-800/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                    <Target className="w-4 h-4" />
                    <span>Campaign Agenda &amp; Objective</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.agenda}
                  </p>
                </div>

                {/* Role Box */}
                <div className="rounded-2xl p-5 sm:p-6 bg-primary-50/50 dark:bg-primary-950/20 border border-primary-200/60 dark:border-primary-900/40 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300">
                    <Clapperboard className="w-4 h-4" />
                    <span>My Hands-On Role: Planning &amp; Execution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {section.myRole}
                  </p>
                </div>
              </div>

              {/* Section Video Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 px-1">
                  <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5 text-primary-500" />
                    <span>Production Deliverables &amp; Verified Output</span>
                  </span>
                  <span>Click video to play inline or open directly</span>
                </div>

                <div className={`grid gap-6 ${
                  section.videos.length === 1 
                    ? "grid-cols-1 max-w-xl mx-auto" 
                    : section.videos.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : section.videos.some(v => v.aspectRatio === "16:9")
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}>
                  {section.videos.map((video, vIdx) => (
                    <VideoCard key={vIdx} video={video} index={vIdx} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const isIg = isInstagramUrl(video.url);
  const isYt = isYouTubeUrl(video.url);
  const embedUrl = formatVideoEmbedUrl(video.url);
  const isVertical = video.aspectRatio === "9:16";

  // Height container class for vertical vs horizontal embeds
  const playerContainerClass = isVertical 
    ? "aspect-[9/16] min-h-[460px] sm:min-h-[500px]" 
    : "aspect-video min-h-[220px]";

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-lg flex flex-col justify-between group hover:border-primary-500/60 transition-all">
      {/* Video Header Strip */}
      <div className="p-3 bg-gray-900/95 border-b border-gray-800 flex items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-1.5 truncate">
          <span className="w-5 h-5 rounded-full bg-primary-600/30 text-primary-300 text-[10px] flex items-center justify-center font-bold flex-shrink-0">
            {index + 1}
          </span>
          <span className="font-bold text-white text-xs truncate">
            {video.title || `Video 0${index + 1}`}
          </span>
        </div>
        <span className="text-[10px] font-mono text-gray-400 px-1.5 py-0.5 rounded bg-black/40 border border-gray-800 flex-shrink-0">
          {isIg ? "Instagram Reel" : isYt ? (isVertical ? "YT Short" : "YouTube") : video.aspectRatio || "16:9"}
        </span>
      </div>

      {/* Embed Player */}
      <div className={`relative w-full ${playerContainerClass} bg-black flex items-center justify-center overflow-hidden`}>
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={video.title || "Video Player"}
            className="w-full h-full border-0 absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            scrolling="no"
          />
        ) : (
          <div className="text-gray-500 text-xs text-center p-4">
            Video link unavailable
          </div>
        )}
      </div>

      {/* Video Caption & Direct Action Link */}
      <div className="p-3.5 bg-gray-900/95 border-t border-gray-800 space-y-2.5">
        {video.caption && (
          <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
            {video.caption}
          </p>
        )}

        <div className="pt-1 flex items-center justify-between gap-2 border-t border-gray-800/60 text-xs">
          <span className="text-[11px] font-medium text-gray-400 truncate">
            {isIg ? "View original on IG" : "View on YouTube"}
          </span>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary-600/20 hover:bg-primary-600 text-primary-300 hover:text-white font-semibold text-[11px] transition-all flex-shrink-0"
          >
            <span>Open Link</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
