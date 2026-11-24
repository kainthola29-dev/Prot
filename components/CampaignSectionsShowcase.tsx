"use client";

import React from "react";
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
  Play,
  Instagram,
  Eye,
  TrendingUp,
  Flame
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
          const gridClass = getSectionGridClass(section.id, section.videos.length);

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
                      {section.videos.length} {section.videos.length === 1 ? "Deliverable" : "Deliverables"}
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
                  <span className="hidden sm:inline text-[11px] text-gray-400">
                    Direct high-resolution video streams &amp; live platforms
                  </span>
                </div>

                {/* Balanced Grid for each section */}
                <div className={gridClass}>
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

/**
 * Returns balanced, center-aligned grid layout classes tailored to each section
 */
function getSectionGridClass(sectionId: string, count: number): string {
  // 1st Campaign: Eid ka Tohfa (3 vertical videos -> center aligned 3 columns)
  if (sectionId === "eid-ka-tohfa") {
    return "max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch";
  }

  // 3rd Campaign: Saree Secrets (2 vertical videos -> center aligned side-by-side)
  if (sectionId === "saree-secrets") {
    return "max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-stretch";
  }

  // Store Walkthroughs (4 horizontal videos -> exactly 2 per line, balanced 2x2 grid)
  if (sectionId === "store-walkthroughs") {
    return "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch";
  }

  // Creative Videos (5 vertical videos -> centered grid)
  if (sectionId === "creative-videos") {
    return "max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch";
  }

  // Bride to be? (3 horizontal 16:9 videos)
  if (sectionId === "bride-to-be") {
    return "max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-stretch";
  }

  // Influencer Shoots (8 vertical videos -> 4 columns)
  if (sectionId === "influencer-shoots") {
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch";
  }

  // Fallback defaults based on count
  if (count === 1) return "max-w-md mx-auto grid grid-cols-1 gap-6";
  if (count === 2) return "max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-stretch";
  return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch";
}

function extractInstagramHandle(url: string): string {
  const match = url.match(/instagram\.com\/([a-zA-Z0-9_.]+)\/(?:reel|p)\//);
  if (match && match[1]) {
    return `@${match[1]}`;
  }
  return "@meenabazaar";
}

function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const isIg = isInstagramUrl(video.url);
  const isYt = isYouTubeUrl(video.url);
  const isVertical = video.aspectRatio === "9:16";

  if (isIg) {
    return <InstagramReelCard video={video} index={index} />;
  }

  const embedUrl = formatVideoEmbedUrl(video.url);
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
          {isVertical ? "YouTube Short" : "YouTube (16:9)"}
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
            Watch Full HD
          </span>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white font-semibold text-[11px] transition-all flex-shrink-0"
          >
            <span>Open YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Dedicated Instagram Reel Card:
 * Replaces iframe embeds (which browsers block with "This content is blocked")
 * with a high-fidelity, interactive reel showcase card featuring Instagram branding,
 * creator handle, live play actions, and instant direct playback.
 */
function InstagramReelCard({ video, index }: { video: VideoItem; index: number }) {
  const handle = extractInstagramHandle(video.url);

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-lg flex flex-col justify-between group hover:border-pink-500/50 hover:shadow-pink-500/10 transition-all">
      {/* Instagram Header Bar */}
      <div className="p-3 bg-gradient-to-r from-gray-900 via-gray-900 to-[#1b1522] border-b border-gray-800 flex items-center justify-between text-xs gap-2">
        <div className="flex items-center gap-2 truncate">
          <div className="w-6 h-6 rounded-full p-[1.5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center flex-shrink-0">
            <div className="w-full h-full bg-[#0F1115] rounded-full flex items-center justify-center">
              <Instagram className="w-3 h-3 text-pink-400" />
            </div>
          </div>
          <div className="flex items-center gap-1 truncate">
            <span className="font-bold text-white text-xs truncate">
              {handle}
            </span>
            <CheckCircle2 className="w-3 h-3 text-blue-400 fill-blue-400 flex-shrink-0" />
          </div>
        </div>

        <span className="text-[10px] font-semibold text-pink-300 px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 flex-shrink-0 flex items-center gap-1">
          <Smartphone className="w-3 h-3" />
          <span>Reel</span>
        </span>
      </div>

      {/* Reel Interactive Visual Poster */}
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full aspect-[9/16] min-h-[460px] sm:min-h-[500px] bg-gradient-to-b from-[#181a20] via-[#101216] to-[#0a0b0d] p-6 flex flex-col justify-between overflow-hidden group/reel text-left cursor-pointer"
        title="Click to watch this reel on Instagram"
      >
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 -right-16 w-48 h-48 bg-pink-500/15 rounded-full blur-3xl pointer-events-none group-hover/reel:scale-125 transition-transform duration-700" />
        <div className="absolute bottom-1/4 -left-16 w-48 h-48 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover/reel:scale-125 transition-transform duration-700" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
            <Flame className="w-3 h-3 text-amber-400" />
            <span>High Retention</span>
          </span>
          <span className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-xs font-mono text-gray-300">
            0{index + 1}
          </span>
        </div>

        {/* Center Play Button & Title */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 my-auto px-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] shadow-2xl group-hover/reel:scale-110 transition-transform duration-300">
            <div className="w-full h-full bg-[#121418] rounded-full flex items-center justify-center group-hover/reel:bg-black/80 transition-colors">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
            </div>
          </div>

          <div className="space-y-1 max-w-[240px]">
            <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover/reel:text-pink-300 transition-colors">
              {video.title || "Watch Official Reel"}
            </h4>
            <p className="text-[11px] text-gray-400 line-clamp-2">
              Tap to play directly in Instagram
            </p>
          </div>
        </div>

        {/* Bottom Card Overlay with Handle & Call to Action */}
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
            <span>{handle}</span>
          </div>

          <div className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg group-hover/reel:opacity-95 transition-opacity">
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Watch Reel on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </a>

      {/* Video Caption & Footer */}
      <div className="p-3.5 bg-gray-900/95 border-t border-gray-800 space-y-2.5">
        {video.caption && (
          <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
            {video.caption}
          </p>
        )}

        <div className="pt-1 flex items-center justify-between gap-2 border-t border-gray-800/60 text-xs">
          <span className="text-[11px] font-medium text-pink-400/90 flex items-center gap-1">
            <Instagram className="w-3 h-3" />
            <span>Instagram Media</span>
          </span>
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-600/20 hover:bg-pink-600 text-pink-300 hover:text-white font-semibold text-[11px] transition-all flex-shrink-0"
          >
            <span>Open Reel</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
