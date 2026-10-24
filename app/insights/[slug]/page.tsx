import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articlesData, profileData } from "@/data/portfolioData";
import { JsonLd } from "@/components/JsonLd";
import { ArrowLeft, Clock, Calendar, Bookmark, Share2, ArrowRight } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articlesData.map((art) => ({
    slug: art.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const art = articlesData.find((a) => a.slug === params.slug);
  if (!art) return { title: "Article Not Found" };

  return {
    title: `${art.title} — Strategic Marketing Essay`,
    description: art.excerpt,
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const art = articlesData.find((a) => a.slug === params.slug);
  if (!art) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: art.title,
    description: art.excerpt,
    author: {
      "@type": "Person",
      name: profileData.name,
      url: "https://deepanshu.kainthola.com",
    },
    datePublished: "2026-10-01",
    publisher: {
      "@type": "Person",
      name: profileData.name,
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

  const toc = art.toc || [
    { id: "intro", label: "1. Introduction & Context" },
    { id: "core-concept", label: "2. The Strategic Problem" },
    { id: "framework", label: "3. Actionable Framework" },
    { id: "takeaways", label: "4. Summary & Lessons" }
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
      <div className={`rounded-3xl bg-gradient-to-tr ${art.gradient} text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl`}>
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md border border-white/20">
            <span>{art.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            {art.title}
          </h1>

          <p className="text-gray-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            {art.excerpt}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>Published {art.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{art.readTime}</span>
            </span>
            <span>•</span>
            <span>By {profileData.name}</span>
          </div>
        </div>

        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
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
              {toc.map((item) => (
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
                  <Image src="/images/deepanshu.webp" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">{profileData.name}</p>
                  <p className="text-[11px] text-gray-500">Digital Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Article Body (8 cols) */}
        <article className="lg:col-span-8 space-y-8">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 sm:p-12 shadow-inbio space-y-8 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            
            {/* Section 1 */}
            <section id="problem" className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                1. The Trap of The &apos;Busy&apos; Marketing Team
              </h2>
              <p>
                In modern corporate marketing departments, there is an unspoken anxiety: if the social feed is silent for 48 hours, or if we haven&apos;t published a blog post this week, someone upstairs might think we aren&apos;t working.
              </p>
              <p>
                The result is a relentless treadmill of tactical output. Teams celebrate publishing 20 posts a month, launching five ad variations, and tweaking button colors on a landing page. But when the quarter ends and the board asks: <em>&ldquo;Did this lower customer acquisition cost? Did this improve brand premium or shorten our enterprise sales cycle?&rdquo;</em>, the room falls silent.
              </p>
            </section>

            {/* Blockquote Callout */}
            <div className="p-6 rounded-2xl bg-primary-50 dark:bg-primary-950/40 border-l-4 border-primary-600 text-gray-900 dark:text-white font-medium text-lg italic space-y-2">
              <p>
                &ldquo;Activity is easy to measure; strategy requires answering hard trade-offs. Activity produces calendar checkboxes; strategy produces competitive moats and commercial outcomes.&rdquo;
              </p>
            </div>

            {/* Section 2 */}
            <section id="activity-driven" className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                2. What Activity-Driven Marketing Looks Like
              </h2>
              <p>
                Activity-driven marketing is reactive by nature. It starts with a channel (&ldquo;We need to be active on TikTok&rdquo; or &ldquo;We should run Google Ads&rdquo;) rather than a commercial constraint (&ldquo;Our enterprise deal pipeline has a 90-day consideration lag&rdquo;).
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Focusing obsessively on top-of-funnel impression counts rather than qualified lead velocity.</li>
                <li>Constantly pivoting campaigns based on whichever competitor made a post yesterday.</li>
                <li>Viewing content creation as an obligation to satisfy an editorial schedule, rather than an asset that compounds.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="strategy-driven" className="space-y-4">
              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                3. What Strategy-Driven Marketing Actually Looks Like
              </h2>
              <p>
                When marketing teams shift from measuring <em>&ldquo;What did we produce today?&rdquo;</em> to <em>&ldquo;What market bottleneck are we solving for this quarter?&rdquo;</em>, everything changes. Messaging sharpens, acquisition funnels simplify, and marketing stops being viewed as an unpredictable cost center and becomes an undeniable growth driver.
              </p>
            </section>

            {/* Key Takeaways Box */}
            {art.takeaways && (
              <section id="takeaways" className="rounded-2xl p-6 bg-gradient-to-tr from-emerald-950/30 to-teal-950/20 border border-emerald-800/40 space-y-3">
                <h3 className="text-lg font-bold font-heading text-emerald-400">
                  Key Strategic Takeaways
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-300">
                  {art.takeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Glossary Box */}
            {art.glossary && (
              <section className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                  Executive Marketing Glossary
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {art.glossary.map((g) => (
                    <div key={g.term} className="p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs sm:text-sm">
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
                <Image src="/images/deepanshu.webp" alt="Author" fill className="object-cover" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                  Written by {profileData.name}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Digital Marketing Manager at Vision India Services Pvt. Ltd. MBA candidate at Jindal Global Business School. Writing on practical execution and commercial marketing strategy.
                </p>
              </div>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}
