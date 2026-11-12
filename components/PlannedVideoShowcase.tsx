"use client";

import React from "react";
import { Play, Film, Smartphone, Sparkles, Video as VideoIcon } from "lucide-react";
import { formatVideoEmbedUrl } from "@/lib/utils";
import { VideoItem } from "@/types";

interface Props {
  videos?: VideoItem[];
  legacyVideoUrl?: string;
  legacyVideoCaption?: string;
  legacyVideoAspect?: "16:9" | "9:16";
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export function PlannedVideoShowcase({
  videos = [],
  legacyVideoUrl,
  legacyVideoCaption,
  legacyVideoAspect = "16:9",
  sectionTitle = "Campaign Videos & Reel Showcase",
  sectionSubtitle = "High-definition media productions, campaign films, and vertical reels",
}: Props) {
  // Normalize video list combining new array and legacy single fields
  const allVideos: VideoItem[] = [...videos];

  if (legacyVideoUrl && !allVideos.some((v) => v.url === legacyVideoUrl)) {
    allVideos.unshift({
      url: legacyVideoUrl,
      caption: legacyVideoCaption,
      aspectRatio: legacyVideoAspect,
      title: "Primary Feature Reel",
    });
  }

  // Filter out empty URLs
  const activeVideos = allVideos.filter((v) => v.url && v.url.trim().length > 0);

  if (activeVideos.length === 0) {
    return null;
  }

  const renderPlayer = (v: VideoItem, customAspectClass?: string) => {
    const embedUrl = formatVideoEmbedUrl(v.url);
    const isEmbed = embedUrl.includes("youtube.com") || embedUrl.includes("vimeo.com");
    const aspectClass = customAspectClass || (v.aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-video");

    return (
      <div className={`relative w-full ${aspectClass} bg-black overflow-hidden shadow-inner`}>
        {isEmbed ? (
          <iframe
            src={embedUrl}
            title={v.title || "Video Player"}
            className="w-full h-full border-0 absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video controls className="w-full h-full object-cover absolute inset-0">
            <source src={v.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    );
  };

  return (
    <section className="space-y-6">
      {/* Planned Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 dark:border-gray-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            <Film className="w-4 h-4" />
            <span>{sectionTitle}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-gray-900 dark:text-white mt-0.5">
            Structured Video &amp; Reel Gallery
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {sectionSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary-50 dark:bg-primary-950/80 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800">
            {activeVideos.length} {activeVideos.length === 1 ? "Video" : "Videos"} Planned
          </span>
        </div>
      </div>

      {/* CASE 1: EXACTLY 1 VIDEO (Spotlight Feature) */}
      {activeVideos.length === 1 && (() => {
        const v = activeVideos[0];
        const isVertical = v.aspectRatio === "9:16";

        if (isVertical) {
          return (
            <div className="max-w-sm mx-auto p-4 rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                <span className="flex items-center gap-1 font-semibold text-primary-400">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Vertical Reel · 9:16</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider">Mobile View</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                {renderPlayer(v, "aspect-[9/16]")}
              </div>
              {(v.title || v.caption) && (
                <div className="px-1 text-center space-y-1">
                  {v.title && <h3 className="text-sm font-bold text-white">{v.title}</h3>}
                  {v.caption && <p className="text-xs text-gray-400 leading-relaxed">{v.caption}</p>}
                </div>
              )}
            </div>
          );
        }

        return (
          <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-xl">
            <div className="relative">
              {renderPlayer(v, "aspect-video")}
            </div>
            <div className="p-4 sm:p-5 bg-gray-900/90 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-950 text-primary-300 border border-primary-800">
                    Featured Film
                  </span>
                  <span className="font-bold text-white text-sm">
                    {v.title || "Main Video Production"}
                  </span>
                </div>
                {v.caption && (
                  <p className="text-gray-400 text-xs">{v.caption}</p>
                )}
              </div>
              <span className="text-[11px] font-mono text-gray-500 self-end sm:self-auto">
                16:9 High Definition
              </span>
            </div>
          </div>
        );
      })()}

      {/* CASE 2: EXACTLY 2 VIDEOS (Side-by-Side Dual Showcase) */}
      {activeVideos.length === 2 && (() => {
        const v1 = activeVideos[0];
        const v2 = activeVideos[1];
        const bothVertical = v1.aspectRatio === "9:16" && v2.aspectRatio === "9:16";

        if (bothVertical) {
          return (
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeVideos.map((v, i) => (
                <div
                  key={i}
                  className="p-4 rounded-3xl bg-gray-900 border border-gray-800 shadow-xl space-y-3 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                    <span className="flex items-center gap-1 font-semibold text-primary-400">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Reel 0{i + 1}</span>
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">9:16 Vertical</span>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-md">
                    {renderPlayer(v, "aspect-[9/16]")}
                  </div>
                  {(v.title || v.caption) && (
                    <div className="px-1 text-center space-y-1 pt-1">
                      {v.title && <h3 className="text-sm font-bold text-white">{v.title}</h3>}
                      {v.caption && <p className="text-xs text-gray-400 leading-relaxed">{v.caption}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }

        // Side by side or mixed
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {activeVideos.map((v, i) => {
              const isVert = v.aspectRatio === "9:16";
              const colSpan = isVert ? "lg:col-span-5" : "lg:col-span-7";

              return (
                <div
                  key={i}
                  className={`${colSpan} rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-lg flex flex-col justify-between`}
                >
                  <div className="p-3 bg-gray-900 border-b border-gray-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-primary-600/40 text-primary-300 text-[10px] flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      <span>{v.title || `Video Showcase 0${i + 1}`}</span>
                    </span>
                    <span className="text-[10px] uppercase font-mono text-gray-500">
                      {v.aspectRatio || "16:9"}
                    </span>
                  </div>
                  <div className="relative">
                    {renderPlayer(v)}
                  </div>
                  {v.caption && (
                    <div className="p-3 bg-gray-900/90 border-t border-gray-800 text-xs text-gray-400 text-center">
                      {v.caption}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })()}

      {/* CASE 3: 3 OR MORE VIDEOS (Planned Studio Gallery) */}
      {activeVideos.length >= 3 && (
        <div className="space-y-6">
          {/* Main Premiere Reel (First Video) */}
          <div className="rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-xl">
            <div className="p-3 sm:p-4 bg-gray-900 border-b border-gray-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-600 text-white">
                  Premiere Reel
                </span>
                <span className="font-bold text-white text-sm">
                  {activeVideos[0].title || "Primary Campaign Showcase"}
                </span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">
                {activeVideos[0].aspectRatio || "16:9"}
              </span>
            </div>
            <div className="relative">
              {renderPlayer(activeVideos[0])}
            </div>
            {activeVideos[0].caption && (
              <div className="p-3 sm:p-4 bg-gray-900/90 border-t border-gray-800 text-xs text-gray-400">
                {activeVideos[0].caption}
              </div>
            )}
          </div>

          {/* Secondary Video Grid (Remaining Videos) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 pt-2">
              <VideoIcon className="w-3.5 h-3.5 text-primary-500" />
              <span>Additional Campaign Reels &amp; Deliverables ({activeVideos.length - 1})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeVideos.slice(1).map((v, i) => {
                const isVert = v.aspectRatio === "9:16";

                return (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-[#0F1115] shadow-md flex flex-col justify-between group hover:border-primary-500/50 transition-all"
                  >
                    <div className="p-3 bg-gray-900 border-b border-gray-800 flex items-center justify-between text-xs">
                      <span className="font-bold text-white text-xs flex items-center gap-1.5 truncate">
                        <span className="w-4 h-4 rounded-full bg-primary-600/40 text-primary-300 text-[10px] flex items-center justify-center font-bold flex-shrink-0">
                          {i + 2}
                        </span>
                        <span className="truncate">{v.title || `Reel 0${i + 2}`}</span>
                      </span>
                      <span className="text-[10px] font-mono text-gray-500 flex-shrink-0">
                        {v.aspectRatio || "16:9"}
                      </span>
                    </div>

                    <div className="relative">
                      {renderPlayer(v, isVert ? "aspect-[9/16]" : "aspect-video")}
                    </div>

                    {v.caption && (
                      <div className="p-2.5 bg-gray-900/90 border-t border-gray-800 text-[11px] text-gray-400 text-center leading-relaxed">
                        {v.caption}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
