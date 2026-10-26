import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  profileData, 
  timelineData, 
  skillsArchitecture, 
  educationData, 
  certificationsData 
} from "@/data/portfolioData";
import { JsonLd } from "@/components/JsonLd";
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Target, 
  TrendingUp, 
  FileText, 
  Video, 
  Search, 
  BarChart3, 
  Download, 
  Mail, 
  MessageCircle,
  Building2,
  ShieldCheck,
  Zap,
  Globe2
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Deepanshu Kainthola — Career Journey & Strategic Marketing",
  description: "Learn about Deepanshu Kainthola's 7.7 Years Exp. combining hands-on digital marketing execution with strategic MBA leadership across 12+ enterprise brands.",
  openGraph: {
    title: "About Deepanshu Kainthola — Digital Marketing Manager",
    description: "7.7 Years Exp. combining practical marketing execution with strategic business leadership across 12+ brands.",
    type: "profile",
    images: ["/images/deepanshu.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Deepanshu Kainthola",
    description: "7.7 Years Exp. in digital marketing and brand strategy.",
    images: ["/images/deepanshu.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://deepanshu.kainthola.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://deepanshu.kainthola.com/about" },
    ],
  };

  // Filter historical roles from future vision for clean presentation
  const workHistory = timelineData.filter((item) => !item.isFuture && item.id !== "mba");
  const futureVision = timelineData.find((item) => item.isFuture);

  // Icon mapping for competency categories
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />;
      case 1:
        return <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 2:
        return <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 3:
        return <Video className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 4:
        return <Search className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 5:
        return <BarChart3 className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-primary-600" />;
    }
  };

  // Verified tools stack
  const toolsStack = [
    "Google Analytics 4",
    "Meta Business Suite",
    "Google Search Console",
    "Adobe Premiere Pro",
    "Adobe Photoshop",
    "WordPress CMS",
    "Canva Pro",
    "Microsoft Excel"
  ];

  return (
    <div className="pt-2 sm:pt-4 pb-16 lg:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-24">
      <JsonLd data={breadcrumbSchema} />

      {/* 1. HERO SECTION WITH STICKY PHOTO & EMBEDDED OPERATING PHILOSOPHY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Sticky Photo & Status Tag */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 self-start flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600/20 to-teal-400/20 rounded-3xl blur-2xl -z-10" />
            <div className="rounded-2xl p-3 bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-inbio dark:shadow-inbio-dark">
              <div className="relative w-full h-[380px] sm:h-[430px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/images/deepanshu.webp"
                  alt="Deepanshu Kainthola — Digital Marketing Manager"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Current Role Card */}
              <div className="mt-4 p-3.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/60 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">Current Leadership</span>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Vision India Services</p>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                  May 2025 – Present
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative, At-A-Glance Strip & How I Think & Lead */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Bio Narrative */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-50 dark:bg-primary-950/50 text-primary-700 dark:text-primary-300 border border-primary-200/60 dark:border-primary-800/60">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>EXECUTIVE BACKGROUND &amp; VISION</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight leading-tight">
              Connecting Content, Brand Narrative, and Measurable Business Growth
            </h1>

            {/* Executive Pull-Quote */}
            <div className="p-4 rounded-xl bg-primary-50/70 dark:bg-primary-950/30 border-l-4 border-primary-600 text-sm italic text-gray-800 dark:text-gray-200">
              &ldquo;Marketing execution without business literacy is just tactical delivery. I bridge creative production with commercial frameworks to turn brand visibility into bottom-line revenue.&rdquo;
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I am a marketing leader who combines <strong>7.7 Years of hands-on execution with strategic business thinking</strong>. My journey did not begin as an ivory-tower corporate theorist; it began in the trenches of digital media publishing, video editing suites, CMS portals, and rapid-fire content distribution.
              </p>
              <p>
                Starting at <em>The Sunday Headlines</em> (2016–2018) as Production Head &amp; Website Manager, I developed ruthless discipline around editorial deadlines, multimedia production, and organic reader engagement. That tactile foundation evolved through high-impact content roles at Tatsat Chronicle, Denvax / Helios Educore, and as Video Producer at Meena Bazaar, before taking command of full-scope multi-brand marketing management at <strong>Vision India Services</strong>.
              </p>
              <p>
                Today, I oversee integrated digital marketing, corporate communications, SEO architecture, employer branding, and multi-channel campaigns across <strong>12+ corporate brands</strong>. To deepen my commercial decision-making and P&amp;L literacy, I am pursuing my <strong>MBA at Jindal Global Business School</strong>.
              </p>
            </div>

            {/* Executive At-A-Glance Stat Strip (12+ Brands, 7.7 Years, MBA, 10M+ Reach) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                <span className="text-xl sm:text-2xl font-extrabold font-heading text-primary-600 dark:text-primary-400 block">7.7</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Years Exp.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                <span className="text-xl sm:text-2xl font-extrabold font-heading text-primary-600 dark:text-primary-400 block">12+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Brands Managed</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                <span className="text-xl sm:text-2xl font-extrabold font-heading text-primary-600 dark:text-primary-400 block">MBA</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Jindal Global BS</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
                <span className="text-xl sm:text-2xl font-extrabold font-heading text-emerald-600 dark:text-emerald-400 block">10M+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Audience Reach</span>
              </div>
            </div>
          </div>

          {/* Embedded HOW I THINK & LEAD Section (Floats cleanly alongside sticky photo) */}
          <div className="pt-6 border-t border-gray-200/80 dark:border-gray-800 space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
                HOW I THINK &amp; LEAD
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
                Core Operating Philosophy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Three guiding principles that govern every campaign, brand narrative, and strategic initiative I lead.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    Tactile Execution Over Pure Theory
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Having spent years editing raw footage, running CMS portals, and crafting copy on deadline, I manage creative and marketing teams with practical empathy. I know what is feasible, how long it takes, and how to eliminate production bottlenecks.
                </p>
              </div>

              <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    Commercial Value Over Vanity Metrics
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Likes and impressions mean nothing if they don&apos;t build pipeline, lower CAC, or elevate enterprise brand authority. My MBA grounding at Jindal Global Business School ensures every marketing rupee spent connects to business health.
                </p>
              </div>

              <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    Multi-Brand Agility &amp; Scalability
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Concurrently managing 12+ brands across skilling, B2B SaaS, CSR, and employer branding requires modular, repeatable frameworks. I build centralized editorial engines and distribution systems that deliver consistent quality across diverse market segments.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STRUCTURED CAREER PROGRESSION TIMELINE */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            CHRONOLOGICAL MILESTONES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            The Professional Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            A continuous progression from media publishing and documentary production to multi-brand enterprise marketing leadership.
          </p>
        </div>

        <div className="relative border-l-2 border-primary-200 dark:border-primary-900/60 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
          {workHistory.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-[#16181C] flex items-center justify-center transition-transform group-hover:scale-125 ${
                item.isCurrent
                  ? "border-emerald-500 bg-emerald-500 shadow-md shadow-emerald-500/50"
                  : "border-primary-400 dark:border-primary-600"
              }`}>
                {item.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Timeline Card */}
              <div className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                item.isCurrent
                  ? "bg-white dark:bg-[#212428] border-2 border-emerald-500/80 shadow-inbio-hover"
                  : "bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-inbio dark:shadow-inbio-dark"
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                      {item.organization}
                    </span>
                    {item.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Current Leadership Role</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* STRATEGIC HORIZON Section (Fixed visibility in both light & dark modes) */}
          {futureVision && (
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-primary-500 bg-primary-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              <div className="rounded-2xl p-6 sm:p-8 bg-[#181B20] text-white border-2 border-primary-500/80 shadow-2xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>STRATEGIC HORIZON</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-600/30 text-primary-300 border border-primary-500/40 text-[10px] font-bold uppercase tracking-wider">
                      Next Leadership Mandate
                    </span>
                  </div>
                  <span className="text-xs text-gray-300 font-semibold px-2.5 py-1 rounded-md bg-white/10">
                    {futureVision.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  {futureVision.role}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {futureVision.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {futureVision.skills.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-lg bg-black/60 border border-white/20 text-xs font-medium text-emerald-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. ACADEMIC PEDIGREE & ACCREDITATIONS */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            CREDENTIALS &amp; RIGOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Academic Pedigree &amp; Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Formal business education combined with specialized credentials in creative design and digital inbound strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Formal University Degrees (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 pb-1">
              <GraduationCap className="w-4 h-4" />
              <span>University Degrees</span>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark space-y-2 hover:border-primary-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
                      {edu.institution.split("(")[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    {edu.field} — <span className="text-gray-500 font-normal">{edu.institution}</span>
                  </p>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Industry Certifications (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 pb-1">
              <Award className="w-4 h-4" />
              <span>Industry Accreditations</span>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark space-y-2 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>

                  <div className="pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Validated Competencies:
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {cert.skills}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. SKILLS ARCHITECTURE & TECH STACK */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            COMPETENCY MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-gray-900 dark:text-white tracking-tight">
            Skills Architecture
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Categorized overview of strategic, technical, and operational marketing capabilities.
          </p>
        </div>

        {/* 6 Competency Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsArchitecture.map((cat, idx) => (
            <div
              key={cat.title}
              className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 shadow-inbio dark:shadow-inbio-dark hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/60 dark:border-gray-800 flex items-center justify-center flex-shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold font-heading text-gray-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/70 dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technology Stack Strip (Honest stack: GA4, Meta, GSC, Premiere, Photoshop, WordPress, Canva, Excel) */}
        <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-inbio space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
            <ShieldCheck className="w-4 h-4 text-primary-600" />
            <span>Core Tooling &amp; Marketing Technology Stack</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {toolsStack.map((tool) => (
              <span
                key={tool}
                className="px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE OUTREACH CTA */}
      <section className="rounded-3xl bg-gradient-to-r from-gray-900 via-[#1E242C] to-slate-900 text-white p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden border border-gray-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Open for Senior Marketing Roles (₹18–25 LPA)</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight max-w-2xl mx-auto">
          Looking for a Leader Who Combines Field Execution with Commercial Acumen?
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Whether you have an executive marketing opportunity, a multi-brand mandate, or a strategic consultation inquiry, let&apos;s connect directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <a
            href="mailto:kainthola29@gmail.com?subject=Strategic%20Marketing%20Opportunity%20%E2%80%94%20Deepanshu%20Kainthola"
            className="px-7 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-primary-600/40 inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email kainthola29@gmail.com</span>
          </a>

          <a
            href="https://wa.me/919599396969?text=Hi%20Deepanshu,%20I%20reviewed%20your%20About%20page%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            href="/resume"
            className="px-6 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>View Resume</span>
            <Download className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
