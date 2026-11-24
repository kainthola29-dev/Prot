import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatVideoEmbedUrl(url?: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  const ytMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`;
  }
  const vimeoMatch = trimmed.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }
  const igMatch = trimmed.match(
    /(?:instagram\.com\/(?:[a-zA-Z0-9_.]+\/)?(?:reel|p)\/)([a-zA-Z0-9_-]+)/
  );
  if (igMatch && igMatch[1]) {
    return `https://www.instagram.com/reel/${igMatch[1]}/embed/`;
  }
  return trimmed;
}

export function isInstagramUrl(url?: string): boolean {
  if (!url) return false;
  return /instagram\.com\/(?:[a-zA-Z0-9_.]+\/)?(?:reel|p)\//.test(url);
}

export function isYouTubeUrl(url?: string): boolean {
  if (!url) return false;
  return /(?:youtube\.com|youtu\.be)/.test(url);
}
