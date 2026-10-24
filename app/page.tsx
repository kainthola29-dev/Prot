import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  profileData, 
  statsData, 
  servicesData, 
  projectsData, 
  caseStudiesData, 
  articlesData 
} from "@/data/portfolioData";
import { HeroTyped } from "@/components/HeroTyped";
import { SocialLinks } from "@/components/SocialIcons";
import { IconRenderer } from "@/components/IconRenderer";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, ArrowUpRight, Download, CheckCircle, Sparkles } from "lucide-react";

export default function HomePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://deepanshu.kainthola.com/#person",
        name: profileData.name,
        jobTitle: profileData.roleH1,
        description: profileData.bio,
        url: "https://deepanshu.kainthola.com",
        sameAs: [profileData.linkedin],
        knowsAbout: [
          "Digital Marketing",
          "Content Strategy",
          "SEO Architecture",
          "Brand Marketing",
          "Employer Branding",
          "Social Media Marketing",
          "Campaign Management",
          "Marketing Strategy",
          "Video Production",
          "AI for Marketing"
        ],
        worksFor: {
          "@type": "Organization",
          name: profileData.primaryCompany,
          url: profileData.companyUrl
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://deepanshu.kainthola.com/#website",
        url: "https://deepanshu.kainthola.com",
        name: "Deepanshu Kainthola — Digital Marketing Manager",
        description: profileData.bio,
        author: { "@id": "https://deepanshu.kainthola.com/#person" }
      }
    ]
  };

  return (
    <>
      <JsonLd data={personSchema} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Subtle dot grid bg */}
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] dark:bg-[radial-gradient(#2D3139_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800/60">
                <Sparkles className="w-3.5 h-3.5 text-primary-600" />
                <span>{profileData.tagline}</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
                  <span className="text-gray-900 dark:text-white font-medium">Hi, I&apos;m </span>
                  <span className="text-primary-600 dark:text-primary-400">{profileData.name}</span>
                  <br />
                  <span className="text-2xl sm:text-3xl md:text-4xl text-gray-800 dark:text-gray-100 font-bold">
                    {profileData.roleH1}{" "}
                  </span>
                </h1>
                
                <div className="text-lg sm:text-xl font-medium min-h-[32px] flex items-center">
                  <HeroTyped />
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                {profileData.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="px-7 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-primary-600/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/resume"
                  className="px-7 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary-500 bg-white dark:bg-[#212428] text-gray-800 dark:text-gray-200 font-semibold text-sm transition-all duration-300 shadow-sm hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>View Resume</span>
                  <Download className="w-4 h-4 text-primary-600" />
                </Link>
              </div>

              {/* Social and Skills Row */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    Connect With Me
                  </p>
                  <SocialLinks />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    Core Capabilities
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">SEO</span>
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">Content</span>
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">Brand</span>
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">Strategy</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Photo Column (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/20 to-teal-400/20 rounded-3xl blur-2xl -z-10" />

                {/* Photo Frame */}
                <div className="relative rounded-2xl p-3 bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-inbio dark:shadow-inbio-dark">
                  <div className="relative w-full h-[430px] sm:h-[480px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src="/images/deepanshu.webp"
                      alt="Deepanshu Kainthola — Digital Marketing Manager"
                      fill
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Floating Availability Badge */}
                  <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-white dark:bg-[#1E2125] border border-gray-200 dark:border-gray-700/80 rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 z-20">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Status
                      </p>
                      <p className="text-xs font-bold text-gray-900 dark:text-white">
                        Open for Senior Roles
                      </p>
                    </div>
                  </div>

                  {/* Experience Tag */}
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white rounded-xl px-3.5 py-1.5 shadow-md text-xs font-bold font-heading">
                    6+ Years Exp
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="border-y border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-[#1A1D21]/60 backdrop-blur-sm py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-800">
            {statsData.map((stat, i) => (
              <div key={stat.label} className={`text-center ${i > 1 ? "pt-6 md:pt-0" : ""}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-primary-700 dark:text-primary-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE / SERVICES */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white">
            What I Bring to the Table
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Bridging operational execution with commercial strategy across every modern marketing touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover dark:hover:shadow-inbio-dark-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-950/60 border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <IconRenderer name={service.iconName} size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mt-1 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800/60 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="py-20 bg-gray-50/70 dark:bg-[#1A1D21]/50 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white mt-1">
                Selected High-Impact Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              <span>View All 6 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-48 rounded-xl overflow-hidden relative mb-5 border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-900">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={480}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-tr ${project.gradient} p-5 flex flex-col justify-between text-white`}>
                        <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md w-fit">
                          {project.organization}
                        </span>
                        <div>
                          <span className="text-xs font-medium text-emerald-200 uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h3 className="text-lg font-bold font-heading text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                        {project.organization}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white mt-1 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-400">{project.period}</span>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES STRIP */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white">
            Work That Drove Measurable Results
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Detailed breakdowns of campaigns with verifiable metrics, execution blueprints, and commercial impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-8 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                    {cs.category}
                  </span>
                  <span className="text-xs font-medium text-gray-400">{cs.date}</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {cs.sections.challenge}
                </p>

                {/* 2x2 Metrics Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/80 dark:border-gray-800">
                      <div className="text-lg font-bold font-heading text-primary-600 dark:text-primary-400">
                        {m.value}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-gray-500">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">{cs.organization}</span>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-primary-700"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIC INSIGHTS / BLOG */}
      <section className="py-20 bg-gray-50/70 dark:bg-[#1A1D21]/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                INSIGHTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight text-gray-900 dark:text-white mt-1">
                Strategic Marketing Thoughts
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesData.slice(0, 3).map((art) => (
              <div
                key={art.id}
                className="group rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark hover:shadow-inbio-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-48 rounded-xl overflow-hidden relative mb-5 border border-gray-100 dark:border-gray-800 shadow-sm bg-gray-900">
                    {art.image ? (
                      <Image
                        src={art.image}
                        alt={art.title}
                        width={800}
                        height={480}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-tr ${art.gradient} p-4 flex flex-col justify-between text-white`}>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md w-fit">
                          {art.category}
                        </span>
                        <span className="text-xs text-gray-200">{art.readTime}</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20">
                        {art.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-gray-200 backdrop-blur-md">
                        {art.readTime}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                    {art.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs">
                  <span className="text-gray-400">{art.date}</span>
                  <Link
                    href={`/insights/${art.slug}`}
                    className="font-semibold text-primary-600 dark:text-primary-400 inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-gray-900 via-[#1E242C] to-slate-900 text-white p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden border border-gray-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Target Roles: ₹18–25 LPA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight max-w-2xl mx-auto text-white">
            Ready to Accelerate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Marketing &amp; Brand Growth?
            </span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            I am currently open to Marketing Manager, Senior Marketing Manager, Brand Manager, and MarComms leadership positions. Let&apos;s build measurable impact together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-primary-600/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/resume"
              className="px-8 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Download PDF Resume</span>
              <Download className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
