import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { JsonLd } from "@/components/JsonLd";
import { IconRenderer } from "@/components/IconRenderer";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Target, 
  Workflow, 
  Wrench, 
  ExternalLink 
} from "lucide-react";
import { Metadata } from "next";

export const dynamicParams = true;

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const content = getContent();
  return content.services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const content = getContent();
  const service = content.services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Expertise Not Found" };

  return {
    title: `${service.title} — Expertise & Strategic Capabilities`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Deepanshu Kainthola`,
      description: service.description,
      type: "website",
      url: `https://deepanshu.kainthola.com/expertise/${service.slug}`,
      images: [
        {
          url: "/images/deepanshu.webp",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: ["/images/deepanshu.webp"],
    },
  };
}

export default function ExpertiseDetailPage({ params }: Props) {
  const content = getContent();
  const service = content.services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const allProjects = content.projects;
  const relatedProjects = service.featuredProjects
    ? allProjects.filter((p) => service.featuredProjects?.includes(p.id) || service.featuredProjects?.includes(p.slug))
    : allProjects.slice(0, 2);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "Expertise", item: "https://deepanshu.kainthola.com/#expertise" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://deepanshu.kainthola.com/expertise/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Person",
      name: content.profile.name,
      url: "https://deepanshu.kainthola.com",
    },
    serviceType: service.category,
    description: service.description,
  };

  return (
    <div className="py-10 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />

      {/* Back Link & Breadcrumb */}
      <div className="flex items-center gap-3 text-xs font-semibold text-gray-500">
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-primary-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <span>/</span>
        <span className="text-gray-400">Expertise</span>
        <span>/</span>
        <span className="text-primary-600 dark:text-primary-400 font-bold">{service.title}</span>
      </div>

      {/* Hero Banner */}
      <section className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-inbio overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-500/10 to-teal-500/0 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 border border-primary-200/80 dark:border-primary-800">
            <IconRenderer name={service.iconName} size={16} />
            <span>{service.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {service.fullDescription || service.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-primary-600/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Discuss This Capability</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/case-studies"
              className="px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary-500 bg-gray-50 dark:bg-[#1A1D21] text-gray-800 dark:text-gray-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>View Case Studies</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Row (if available) */}
      {service.metrics && service.metrics.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {service.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm text-center space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-primary-600 dark:text-primary-400">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Two Column Section: Deliverables & Tools */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Scope & Deliverables (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 dark:border-gray-800">
              <Target className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                Core Deliverables &amp; Execution Scope
              </h2>
            </div>

            <div className="space-y-4">
              {(service.deliverables || [service.description]).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tools & Tech Stack (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 dark:border-gray-800">
              <Wrench className="w-5 h-5 text-primary-600" />
              <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                Tool Stack &amp; Platforms
              </h2>
            </div>

            <p className="text-xs text-gray-500">
              Battle-tested tools and enterprise platforms utilized to execute and monitor this domain.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {(service.tools || ["Google Analytics 4", "Meta Business Suite", "LinkedIn Campaign Manager", "Canva", "WordPress"]).map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* 4-Step Strategic Methodology */}
      {service.methodology && service.methodology.length > 0 && (
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              OPERATIONAL FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white">
              Strategic Execution Methodology
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A structured, repeatable process turning commercial objectives into measurable campaign outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.methodology.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-sm space-y-3 relative overflow-hidden"
              >
                <div className="text-3xl font-extrabold font-heading text-primary-600/30 dark:text-primary-400/30">
                  {step.step}
                </div>
                <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Projects / Proof */}
      {relatedProjects.length > 0 && (
        <section className="space-y-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                PROVEN EXECUTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white mt-1">
                Relevant Case Studies &amp; Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio hover:shadow-inbio-hover transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="w-full h-44 rounded-xl overflow-hidden relative mb-4 border border-gray-100 dark:border-gray-800 bg-gray-900">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-tr ${project.gradient} p-4 flex flex-col justify-between text-white`}>
                      <span className="text-[10px] uppercase font-bold tracking-wider">{project.organization}</span>
                      <h4 className="text-base font-bold font-heading">{project.title}</h4>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-primary-600 mb-2">
                  <span>{project.category}</span>
                  <span className="text-gray-400 font-normal">{project.period}</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mt-1">
                  {project.description}
                </p>

                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">{project.organization}</span>
                  <span className="text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Project Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-gray-900 via-[#1E242C] to-slate-900 text-white p-10 sm:p-14 text-center space-y-6 shadow-xl border border-gray-800">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white">
          Looking for a Leader in {service.title}?
        </h2>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          I bring 7.7 Years of practical execution, cross-brand orchestration, and strategic business frameworks to drive bottom-line results.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <span>Initiate Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/resume"
            className="px-8 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Review Full CV</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
