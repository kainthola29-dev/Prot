import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Bookmark, 
  Share2, 
  ArrowRight, 
  Quote, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ShoppingBag
} from "lucide-react";
import { Metadata } from "next";

export const dynamicParams = true;

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const content = getContent();
  return content.articles.map((art: any) => ({
    slug: art.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const content = getContent();
  const art = content.articles.find((a: any) => a.slug === params.slug);
  if (!art) return { title: "Article Not Found" };

  const imageUrl = art.image || "/images/deepanshu.webp";

  return {
    title: `${art.title} — Strategic Marketing Essay`,
    description: art.excerpt,
    openGraph: {
      title: art.title,
      description: art.excerpt,
      type: "article",
      url: `https://deepanshu.kainthola.com/insights/${art.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: art.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: art.title,
      description: art.excerpt,
      images: [imageUrl],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const content = getContent();
  const art = content.articles.find((a: any) => a.slug === params.slug);
  if (!art) notFound();

  const profile = content.profile;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: art.title,
    description: art.excerpt,
    author: {
      "@type": "Person",
      name: profile.name,
      url: "https://deepanshu.kainthola.com",
    },
    datePublished: "2026-10-01",
    publisher: {
      "@type": "Person",
      name: profile.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://deepanshu.kainthola.com/insights/${art.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://deepanshu.kainthola.com/insights" },
      { "@type": "ListItem", position: 3, name: art.title, item: `https://deepanshu.kainthola.com/insights/${art.slug}` },
    ],
  };

  // Generate TOC from sections or fallback
  const toc = art.sections?.map((s: any, idx: number) => ({
    id: s.id || `section-${idx + 1}`,
    label: s.heading,
  })) || [
    { id: "intro", label: "1. Overview & Context" },
    { id: "details", label: "2. Strategic Analysis" },
    { id: "takeaways", label: "3. Key Takeaways" }
  ];

  return (
    <div className="py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Back Link */}
      <div>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header Banner */}
      <div className="rounded-3xl overflow-hidden relative shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-900">
        {art.image && (
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={art.image}
              alt={art.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl space-y-4 text-white bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-600 text-white shadow-sm">
            <span>{art.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            {art.title}
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-2xl leading-relaxed">
            {art.excerpt}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary-400" />
              <span>Published {art.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary-400" />
              <span>{art.readTime}</span>
            </span>
            <span>•</span>
            <span>By {profile.name}</span>
          </div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Table of Contents Sticky Sidebar (4 cols) */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio space-y-4 sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 pb-2 border-b border-gray-100 dark:border-gray-800">
              Table of Contents
            </h3>
            <nav className="space-y-2 text-xs font-medium">
              {toc.map((item: any) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-2">Author</span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full relative overflow-hidden bg-gray-200">
                  <Image src={(profile as any).profilePhoto || "/images/deepanshu.webp"} alt="Author" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">{profile.name}</p>
                  <p className="text-[11px] text-gray-500">{profile.roleH1}</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Article Body (8 cols) */}
        <article className="lg:col-span-8 space-y-8">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 sm:p-12 shadow-inbio space-y-8 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            
            {/* Dynamic Sections (WordPress Style) */}
            {art.sections && art.sections.length > 0 ? (
              art.sections.map((sec: any, idx: number) => (
                <section key={sec.id || idx} id={sec.id || `section-${idx + 1}`} className="space-y-4">
                  <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs?.map((p: string, pIdx: number) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </section>
              ))
            ) : art.content && art.content.length > 0 ? (
              <section className="space-y-4">
                {art.content.map((p: string, pIdx: number) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </section>
            ) : (
              <section className="space-y-4">
                <p>{art.excerpt}</p>
              </section>
            )}

            {/* Blockquote Callout */}
            {art.quote && (
              <div className="p-6 rounded-2xl bg-primary-50 dark:bg-primary-950/40 border-l-4 border-primary-600 text-gray-900 dark:text-white font-medium text-lg italic space-y-2">
                <p>&ldquo;{art.quote}&rdquo;</p>
              </div>
            )}

            {/* Key Takeaways Box */}
            {art.takeaways && art.takeaways.length > 0 && (
              <section id="takeaways" className="rounded-2xl p-6 sm:p-8 bg-emerald-50 dark:bg-emerald-950/50 border-2 border-emerald-300 dark:border-emerald-700/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                  <Bookmark className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-xl font-bold font-heading">
                    Key Strategic Takeaways
                  </h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-900 dark:text-gray-100 font-medium">
                  {art.takeaways.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Field Tested Gear & Affiliate Card */}
            {art.affiliateCard && (
              <section className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 via-primary-500/5 to-transparent border-2 border-amber-500/30 dark:border-amber-500/20 shadow-md space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      {art.affiliateCard.badge || "Field-Tested Gear Recommendation"}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mt-2">
                      {art.affiliateCard.productName}
                    </h3>
                  </div>
                  {art.affiliateCard.priceRange && (
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      Estimated: <span className="font-bold text-gray-900 dark:text-white">{art.affiliateCard.priceRange}</span>
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                  <span className="font-bold text-gray-900 dark:text-white">Field Verdict: </span>
                  {art.affiliateCard.verdict}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> What Works In Real Production
                    </span>
                    <ul className="space-y-1.5 text-gray-700 dark:text-gray-300">
                      {art.affiliateCard.pros.map((pro: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-2">
                    <span className="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-rose-600" /> Field Quirks &amp; Limitations
                    </span>
                    <ul className="space-y-1.5 text-gray-700 dark:text-gray-300">
                      {art.affiliateCard.cons.map((con: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-600 font-bold">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                    href={art.affiliateCard.affiliateUrl || "https://amazon.in"}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <span>{art.affiliateCard.buttonText || "Check Price & Availability"}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-gray-500 italic max-w-md text-center sm:text-right">
                    *Affiliate Note: When you buy through links on this site, I may earn an affiliate commission at no extra charge to you. I only write about gear I personally own and deploy on commercial client productions.
                  </p>
                </div>
              </section>
            )}

            {/* Glossary Box */}
            {art.glossary && art.glossary.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                  Executive Marketing Glossary
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {art.glossary.map((g: any, gIdx: number) => (
                    <div key={gIdx} className="p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs sm:text-sm">
                      <span className="font-bold text-gray-900 dark:text-white">{g.term}: </span>
                      <span className="text-gray-600 dark:text-gray-400">{g.definition}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Card Footer */}
            <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full relative overflow-hidden bg-gray-200 flex-shrink-0">
                <Image src={(profile as any).profilePhoto || "/images/deepanshu.webp"} alt="Author" fill className="object-cover object-top" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                  Written by {profile.name}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {profile.roleH1} at {profile.primaryCompany}. {profile.bio}
                </p>
              </div>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}
