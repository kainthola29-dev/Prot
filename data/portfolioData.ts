import { 
  NavItem, 
  StatItem, 
  ServiceItem, 
  ProjectItem, 
  CaseStudyItem, 
  TimelineItem, 
  ArticleItem, 
  SkillCategory,
  TestimonialItem
} from "@/types";

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Insights", href: "/insights" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export const profileData = {
  name: "Deepanshu Kainthola",
  shortName: "D. Kainthola",
  monogram: "DK",
  tagline: "WELCOME TO MY WORLD",
  roleH1: "Digital Marketing Manager",
  typedRoles: [
    "& Marketing Strategist.",
    "& Content Architect.",
    "& Brand Growth Manager.",
    "& Performance Driver."
  ],
  bio: "Practical marketing execution backed by strategic and business thinking. 7.7 Years Exp. orchestrating digital campaigns, employer branding, content architecture, video production, and multi-brand growth across 12+ flagship enterprise entities.",
  location: "Delhi NCR, India",
  email: "kainthola29@gmail.com",
  phone: "+91-9599396969",
  linkedin: "https://www.linkedin.com/in/deepanshu-kainthola/",
  twitter: "https://x.com/kainthola_DK",
  facebook: "https://www.facebook.com/deepanshu.kainthola.79",
  instagram: "https://www.instagram.com/deepanshukainthola/",
  statusBadge: "Available for Senior Marketing Roles (₹18–25 LPA)",
  primaryCompany: "Vision India Services Pvt. Ltd.",
  companyUrl: "https://vispl.co.in",
  profilePhoto: "/images/deepanshu.webp",
  experienceYears: "7.7 Years Exp.",
};

export const statsData: StatItem[] = [
  { value: "10M+", label: "Audience Reach" },
  { value: "7.7", label: "Years Exp." },
  { value: "12+", label: "Brands Managed" },
  { value: "100+", label: "Campaigns Delivered" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "digital-marketing-strategy",
    slug: "digital-marketing-strategy",
    title: "Digital Marketing & Strategy",
    category: "PERFORMANCE & GROWTH",
    description: "End-to-end full-funnel digital strategy, lead generation campaigns, multi-channel distribution, and ROI-focused acquisition.",
    iconName: "BarChart3",
    fullDescription: "Architecting high-conversion digital ecosystems that bridge brand awareness, inbound demand generation, and bottom-line revenue. From customer persona discovery to omnichannel paid and organic funnels, I engineer data-informed campaigns that eliminate marketing wastage.",
    deliverables: [
      "Full-Funnel Digital Acquisition & Growth Roadmaps",
      "Omnichannel Campaign Strategy across Meta, Search, and Owned Media",
      "High-Converting Lead Generation Funnels & Landing Page CRO",
      "Multi-Brand Audience Segmentation & Persona Mapping",
      "Real-Time Analytics Dashboards, Attribution & ROI Reporting"
    ],
    methodology: [
      { step: "01", title: "Market & Audience Discovery", desc: "Conducting deep-dive qualitative and quantitative research into target buyer personas, intent queries, and competitor whitespace." },
      { step: "02", title: "Funnel Architecture", desc: "Mapping customer acquisition touchpoints from initial brand touch to consideration and qualified conversion." },
      { step: "03", title: "Agile Multi-Channel Launch", desc: "Deploying integrated campaigns with structured A/B creative testing, budget allocation, and continuous KPI monitoring." },
      { step: "04", title: "Performance Scaling", desc: "Refining attribution models, lowering cost-per-acquisition (CAC), and doubling down on highest-yield channels." }
    ],
    metrics: [
      { label: "Audience Reach", value: "10M+" },
      { label: "Campaigns Executed", value: "100+" },
      { label: "Multi-Brand Scale", value: "12+ Brands" }
    ],
    tools: ["Meta Business Suite", "Google Analytics 4", "Google Search Console", "Microsoft Excel", "WordPress", "Adobe Premiere Pro"],
    featuredProjects: ["employ-india", "just-job", "employ-india-connect-webinar"]
  },
  {
    id: "content-strategy-copywriting",
    slug: "content-strategy-copywriting",
    title: "Content Strategy & Copywriting",
    category: "BRAND NARRATIVE",
    description: "Editorial roadmaps, high-converting copy, executive thought leadership, and storytelling that connects audience engagement to bottom-line results.",
    iconName: "FileText",
    fullDescription: "Words that build brands and generate revenue. I craft compelling brand narratives, semantic content pillars, and high-converting marketing collateral designed to educate decision-makers and inspire immediate action.",
    deliverables: [
      "Quarterly Content Architecture & Editorial Calendars",
      "Executive Ghostwriting & Thought Leadership Articles",
      "Conversion-Focused Sales Copywriting & Landing Pages",
      "Multi-Format Content Repurposing (Carousels, Newsletters, Scripts)",
      "Technical & B2B Industry Whitepapers and Case Studies"
    ],
    methodology: [
      { step: "01", title: "Brand Narrative Audit", desc: "Aligning company vision, executive voice, and customer pain points into clear messaging pillars." },
      { step: "02", title: "Pillar & Cluster Architecture", desc: "Developing authoritative thematic topic clusters that answer executive queries and build topical dominance." },
      { step: "03", title: "Precision Editorial Creation", desc: "Writing insightful, jargon-free essays, engaging social commentary, and conversion-optimized collateral." },
      { step: "04", title: "Syndication & Amplification", desc: "Distributing across LinkedIn, email drip sequences, and industry media to drive recurring readership." }
    ],
    metrics: [
      { label: "Editorial Assets", value: "300+" },
      { label: "Engagement Lift", value: "+45%" },
      { label: "Active Readers", value: "70K+" }
    ],
    tools: ["WordPress", "Canva", "Google Docs", "Notion", "Grammarly Business"],
    featuredProjects: ["liveskills", "greencall-seo", "why-marketing-teams-confuse-activity-with-strategy"]
  },
  {
    id: "employer-branding-comms",
    slug: "employer-branding-comms",
    title: "Employer Branding & Comms",
    category: "TALENT & REPUTATION",
    description: "Corporate positioning, employee advocacy, CSR storytelling, and talent brand transformation across LinkedIn and national media.",
    iconName: "Users",
    fullDescription: "Transforming internal organizational culture into an external talent magnet and corporate reputation pillar. I develop authentic employee narratives, CSR impact documentation, and corporate communication frameworks that attract tier-one talent.",
    deliverables: [
      "Employee Value Proposition (EVP) Strategy & Rollout",
      "#BharatAtWork & Workforce Culture Storytelling Series",
      "CSR & Social Impact Campaign Documentation (SECI, PUKAR)",
      "Executive Communication, Leadership Op-Eds & Townhalls",
      "Talent Brand Reputation on LinkedIn & Glassdoor"
    ],
    methodology: [
      { step: "01", title: "Culture & Sentiment Discovery", desc: "Unearthing frontline employee stories, auditing workplace culture, and analyzing talent brand perception." },
      { step: "02", title: "EVP Narrative Framing", desc: "Formulating compelling value propositions that resonate with ambitious professionals and corporate partners." },
      { step: "03", title: "Impact & Community Storytelling", desc: "Producing inspiring visual narratives covering women empowerment, skilling centers, and environmental sustainability." },
      { step: "04", title: "Employee Advocacy Activation", desc: "Empowering internal teams to become credible brand ambassadors across digital and industry networks." }
    ],
    metrics: [
      { label: "Women Skilled", value: "121 Candidates" },
      { label: "Follower Growth", value: "70K+ Reach" },
      { label: "EVP Engagement", value: "4.8/5" }
    ],
    tools: ["LinkedIn Talent Solutions", "Meta Business Suite", "Canva", "PR Newswire", "SurveyMonkey"],
    featuredProjects: ["vispl-branding", "seci-ranchi-women-skilling", "niyukti-shakti"]
  },
  {
    id: "video-media-production",
    slug: "video-media-production",
    title: "Video & Media Production",
    category: "VISUAL STORYTELLING",
    description: "Hands-on video production, post-production supervision, campaign films, time-lapses, and high-retention short-form digital formats.",
    iconName: "Video",
    fullDescription: "From camera lens to final color grade, I direct, shoot, and supervise high-retention video content. Whether documentary-style impact films, retail fashion campaigns, or snappy LinkedIn video carousels, I build visual stories that capture and hold human attention.",
    deliverables: [
      "End-to-End Video Production (Pre-production, Shooting, Post)",
      "High-Impact Docu-series & Social Impact Films",
      "Brand Campaign Films & Retail Fashion Launches",
      "Platform-Native Short-Form Content (Reels, Shorts, Video Ads)",
      "Executive Interviews, Time-lapses & Event Coverage"
    ],
    methodology: [
      { step: "01", title: "Scripting & Pre-Production", desc: "Developing storyboard concepts, hook-driven scripts, location logistics, and talent shot lists." },
      { step: "02", title: "Cinematic Production", desc: "Directing lighting, multi-camera cinematography, audio capture, and b-roll visual textures." },
      { step: "03", title: "Post-Production Polish", desc: "Executing tight editorial cuts, dynamic pacing, sound design, color grading, and on-brand typography." },
      { step: "04", title: "Multi-Format Optimization", desc: "Rendering aspect-ratio optimized assets (9:16, 16:9, 1:1) with burned-in subtitles for mobile feeds." }
    ],
    metrics: [
      { label: "Videos Produced", value: "350+" },
      { label: "Video Views", value: "3.5M+" },
      { label: "Retention Rate", value: "72% Avg" }
    ],
    tools: ["Adobe Premiere Pro", "Adobe Photoshop", "DaVinci Resolve", "Sony Alpha Systems", "DJI Gimbals"],
    featuredProjects: ["niyukti-shakti", "just-job", "employ-india"]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "employ-india",
    slug: "employ-india",
    title: "Employ India Campaign",
    category: "Digital Marketing",
    organization: "Vision India Services",
    period: "2024 – 2025",
    description: "National workforce enablement and employment campaign bridging youth aspiration with enterprise hiring mandates across India.",
    gradient: "from-blue-700 to-indigo-900",
    image: "/images/projects/employ-india.svg",
    badge: "Flagship Initiative",
    stats: [
      { label: "Audience Reach", value: "10M+" },
      { label: "Multi-Brand Scale", value: "12+ Brands" },
      { label: "Hiring Pipeline", value: "Nationwide" }
    ],
    overview: {
      context: "Vision India Services required a cohesive digital campaign identity to unify various skilling, placement, and staffing initiatives under one authoritative umbrella.",
      objective: "Position VISPL as the leading catalyst for national workforce employability and drive qualified job registrations across Tier-2 and Tier-3 youth.",
      role: "Digital Marketing Manager — led campaign branding, creative direction, performance marketing, content calendars, and cross-channel distribution.",
      strategy: [
        "Created an overarching 'Employ India' brand identity across social channels, microsites, and offline collateral.",
        "Engineered targeted lead funnels utilizing Meta Lead Ads, Google Search Ads, and WhatsApp automated candidate onboarding.",
        "Orchestrated regional-language video testimonials showcasing successfully placed youth in manufacturing, logistics, and retail."
      ],
      execution: [
        "Coordinated with in-house video editors, graphic designers, and recruitment heads to produce weekly content sprints.",
        "Launched dedicated campaign landing pages with optimized mobile-first registration forms.",
        "Integrated CRM lead routing to ensure candidate applications were processed within 24 hours by hiring teams."
      ],
      results: [
        "Generated multi-million organic and paid impressions across LinkedIn, YouTube, and Facebook.",
        "Successfully registered thousands of certified candidates into enterprise placement pipelines.",
        "Significantly enhanced corporate brand equity with enterprise staffing clients and government partners."
      ],
      lessons: [
        "Localized video storytelling outperformed generic text ads by over 240% in Tier-2/3 geographies.",
        "Frictionless WhatsApp integration drastically reduced application abandonment rates."
      ]
    }
  },
  {
    id: "just-job",
    slug: "just-job",
    title: "Just Job Recruitment Marketing",
    category: "Social Media & Growth",
    organization: "Just Job",
    period: "2024",
    description: "Multi-lingual social media and candidate acquisition engine targeting ITI and diploma holders across industrial clusters.",
    gradient: "from-violet-600 to-purple-950",
    image: "/images/projects/just-job.svg",
    badge: "Candidate Acquisition",
    stats: [
      { label: "Target Segment", value: "ITI & Diploma" },
      { label: "Languages", value: "6 Regional" },
      { label: "Speed", value: "24h Response" }
    ],
    overview: {
      context: "Just Job operates as India's premier exclusive job portal for ITI, diploma, and technical candidates requiring dedicated industrial placement.",
      objective: "Drive candidate app downloads, website registrations, and employer trust through hyper-targeted regional marketing.",
      role: "Digital Marketing Manager — oversaw content strategy, vernacular video campaigns, social media management, and job-alert automation.",
      strategy: [
        "Engineered regional-language video campaigns featuring native speakers across Hindi, Bengali, Odia, Malayalam, and Telugu.",
        "Designed daily high-urgency job post creatives segmented by technical trade (fitter, electrician, machinist, CNC operator).",
        "Established automated candidate nurture sequences on WhatsApp and social platforms."
      ],
      execution: [
        "Published 60+ targeted social posts and 20+ short-form instructional videos monthly.",
        "Created campus recruitment campaign toolkits for trade institutes and polytechnics.",
        "Monitored cost per candidate lead, optimizing copy and imagery for high click-through rates."
      ],
      results: [
        "Expanded active candidate talent pool to over 96+ lakh industrial job-seekers.",
        "Maintained sub-24-hour candidate acknowledgment workflows through digital channels.",
        "Positioned Just Job as the go-to technical hiring platform for MSME and multinational manufacturing units."
      ],
      lessons: [
        "Technical job-seekers respond best to transparent salary ranges and clear location tags on the primary thumbnail.",
        "Regional dialect variations substantially impact conversion in industrial hubs."
      ]
    }
  },
  {
    id: "liveskills",
    slug: "liveskills",
    title: "LiveSkills E-Learning Platform",
    category: "Content Strategy",
    organization: "LiveSkills",
    period: "2024",
    description: "Positioning digital learning, POSH certifications, and professional upskilling programs for early-career professionals.",
    gradient: "from-emerald-600 to-teal-950",
    image: "/images/projects/liveskills.svg",
    badge: "EdTech Growth",
    stats: [
      { label: "Vertical", value: "E-Skilling" },
      { label: "Programs", value: "NSDC Aligned" },
      { label: "Focus", value: "Career Acceleration" }
    ],
    overview: {
      context: "LiveSkills required an authoritative content strategy to market professional certification programs including POSH, Sustainability Mastery, and Workplace Well-Being.",
      objective: "Establish course credibility, drive learner enrollment, and partner with corporate clients for group enterprise skilling.",
      role: "Digital Marketing Manager — designed curriculum promotional collateral, social marketing sprints, and flash campaign funnels.",
      strategy: [
        "Developed informative micro-content highlighting career ROI, regulatory compliance (POSH), and industry certifications.",
        "Executed high-urgency limited-time certification campaigns with clear educational value propositions.",
        "Produced facilitator spotlight videos demonstrating course pedagogy and practical application."
      ],
      execution: [
        "Crafted structured content calendars combining educational carousels, trainer interviews, and student success stories.",
        "Managed multi-platform digital distribution across LinkedIn and Meta business assets.",
        "Monitored learner feedback and optimized course landing page descriptions."
      ],
      results: [
        "Demonstrated consistent learner acquisition across flagship certification tracks.",
        "Enhanced organic social engagement by 40% through actionable career skill infographics.",
        "Built enterprise awareness for corporate POSH compliance training mandates."
      ],
      lessons: [
        "Compliance-driven topics require trust and authority markers (NSDC alignment, legal frameworks).",
        "Clear module breakdowns prevent prospective learner overwhelm."
      ]
    }
  },
  {
    id: "vispl-branding",
    slug: "vispl-branding",
    title: "VISPL Employer Branding & #BharatAtWork",
    category: "Employer Branding",
    organization: "Vision India Services",
    period: "May 2025 – Present",
    description: "Elevating internal employee stories, leadership credibility, culture highlights, and corporate reputation across national media.",
    gradient: "from-amber-600 to-rose-900",
    image: "/images/projects/vispl-employer-branding.svg",
    badge: "Corporate Rep",
    stats: [
      { label: "Medium", value: "LinkedIn & Video" },
      { label: "Focus", value: "Culture & Talent" },
      { label: "Initiative", value: "#BharatAtWork" }
    ],
    overview: {
      context: "With over 32,000 associate employees across India, Vision India Services required an executive-grade employer branding program.",
      objective: "Position VISPL as an employer of choice, highlight frontline workforce triumphs, and attract senior talent.",
      role: "Digital Marketing Manager — architected #BharatAtWork series, executive messaging, culture storytelling, and corporate video films.",
      strategy: [
        "Launched the #BharatAtWork storytelling campaign highlighting associate workers driving India's infrastructure and manufacturing sectors.",
        "Executed festive and cultural engagement initiatives including Rojgar Wali Diwali and Job Wali Chhath.",
        "Curated thought leadership commentary for CXOs on workforce formalization, ESG, and skilling trends."
      ],
      execution: [
        "Interviewed frontline associates and produced cinematic mini-documentaries for LinkedIn.",
        "Coordinated Townhall video broadcasts and employee recognition campaigns.",
        "Maintained brand voice consistency across all corporate touchpoints and annual stakeholder reports."
      ],
      results: [
        "Grew corporate LinkedIn audience reach to over 70,000+ targeted corporate professionals.",
        "Significantly improved Glassdoor and LinkedIn corporate sentiment ratings.",
        "Solidified strategic partnerships with state skill missions and enterprise corporations."
      ],
      lessons: [
        "Authentic human stories create 10x more employer brand trust than corporate press releases.",
        "Frontline employee pride translates directly into stronger enterprise client loyalty."
      ]
    }
  },
  {
    id: "greencall-seo",
    slug: "greencall-seo",
    title: "GreenCall HRMS SEO & Web Architecture",
    category: "SEO & Web",
    organization: "GreenCall",
    period: "2024",
    description: "Full technical SEO audit, metadata overhaul, and B2B SaaS informational content pillars for enterprise HRMS platform.",
    gradient: "from-teal-600 to-cyan-900",
    image: "/images/projects/greencall-seo.svg",
    badge: "B2B SaaS",
    stats: [
      { label: "Focus", value: "Organic Search" },
      { label: "Target", value: "HR Decision Makers" },
      { label: "Product", value: "GreenHR Platform" }
    ],
    overview: {
      context: "GreenCall provides enterprise HRMS software (GreenHR) managing hire-to-retire, attendance, payroll, and compliance.",
      objective: "Capture organic search intent from HR heads and founders searching for scalable HR automation solutions in India.",
      role: "Digital Marketing Manager — conducted competitor benchmarking, technical SEO audit, and keyword-to-page architecture.",
      strategy: [
        "Audited core competitors (Keka, greytHR, Pocket HRMS, factoHR) to uncover high-intent B2B keyword gaps.",
        "Structured comprehensive product feature pages (Payroll Automation, Geo-attendance, Statutory Compliance, PF/ESI).",
        "Wrote benefit-driven B2B website copy translating complex HR tech into clear commercial ROI."
      ],
      execution: [
        "Rebuilt metadata, heading hierarchy (H1-H4), internal link clusters, and Schema markup.",
        "Created an informational HR knowledge hub targeting compliance queries (PF, TDS, PT regulations).",
        "Optimized mobile responsiveness and core web vitals for frictionless lead form submission."
      ],
      results: [
        "Doubled organic search impressions for critical enterprise HR software queries.",
        "Established GreenCall as a trusted contender in the competitive Indian HR tech landscape.",
        "Consistently generated inbound enterprise demo requests through organic discovery."
      ],
      lessons: [
        "In B2B SaaS, educational content addressing compliance rules captures qualified buyers far faster than feature checklists."
      ]
    }
  },
  {
    id: "niyukti-shakti",
    slug: "niyukti-shakti",
    title: "Niyukti Shakti Women Campaign",
    category: "Video Production",
    organization: "Talent Foundation",
    period: "2024",
    description: "Docu-style video series highlighting women empowerment, skill training triumphs, and workplace inclusivity.",
    gradient: "from-orange-600 to-red-900",
    image: "/images/projects/niyukti-shakti.svg",
    badge: "Impact Film",
    stats: [
      { label: "Type", value: "Docu-series" },
      { label: "Theme", value: "Women In Workforce" },
      { label: "Impact", value: "Social Skilling" }
    ],
    overview: {
      context: "Talent Foundation runs transformative CSR and skill development programs empowering rural women with technical and digital literacy.",
      objective: "Highlight the personal journeys of rural women breaking barriers and entering the formal workforce.",
      role: "Video Producer & Digital Strategist — managed end-to-end video scripting, on-ground shoot coordination, and video post-production.",
      strategy: [
        "Structured candid, emotional documentary formats focusing on candidate backgrounds, family support, and financial independence.",
        "Designed promotional video teasers optimized for LinkedIn, Instagram, and government partner presentations.",
        "Crafted narrative captions highlighting SDG-5 (Gender Equality) and corporate CSR impact."
      ],
      execution: [
        "Traveled to regional skill centers to record live classroom sessions, practical lab work, and personal interviews.",
        "Supervised color grading, sound design, and vernacular subtitle synchronization in Adobe Premiere Pro.",
        "Packaged complete campaign assets for corporate reporting and digital social distribution."
      ],
      results: [
        "Produced impactful video assets featured in annual CSR reviews and corporate investor decks.",
        "Achieved widespread viral engagement across LinkedIn, earning commendations from industry and CSR leaders.",
        "Directly inspired higher female enrollment in subsequent rural skilling batches."
      ],
      lessons: [
        "Authentic audio and unfiltered regional voices create irresistible emotional resonance that no scripted studio ad can match."
      ]
    }
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "employ-india-connect-webinar",
    slug: "employ-india-connect-webinar",
    title: "Employ India Connect Webinar",
    subtitle: "Orchestrating a High-Volume Digital Leadership Event from Ground Zero",
    category: "Campaign Strategy & Digital Event",
    organization: "Vision India Services",
    date: "Dec 20, 2025",
    heroGradient: "from-emerald-700 via-teal-800 to-slate-900",
    image: "/images/projects/employ-india.svg",
    metrics: [
      { label: "Live Attendees", value: "850+" },
      { label: "Lead Pipeline", value: "Multi-Channel" },
      { label: "Keynote Speaker", value: "Sandeep Chatterjee" },
      { label: "Feedback Rating", value: "4.8 / 5.0" }
    ],
    sections: {
      challenge: "The corporate skilling and placement division required a high-credibility forum to engage both corporate HR leaders and ambitious professionals simultaneously, without resorting to expensive third-party webinar aggregation agencies.",
      context: "Digital attention spans are fragmented. Standard recruitment webinars suffer high drop-off rates and poor live attendance conversion (industry average live attendance sits below 28% of registered users).",
      strategy: [
        "Secured marquee keynote presence with industry thought leader Sandeep Chatterjee to establish immediate authority.",
        "Architected an omnichannel registration funnel combining targeted LinkedIn outreach, email drip sequences, and WhatsApp reminders.",
        "Segmented promotional messaging: Strategic workforce agility for corporate HRs vs. Career growth frameworks for professionals."
      ],
      execution: [
        "Custom landing page built for rapid loading and instant calendar (.ics) injection.",
        "7-day countdown content sprint on LinkedIn featuring short teaser video snippets.",
        "Live interaction facilitation during the broadcast with curated Q&A moderation to sustain active viewer retention."
      ],
      results: [
        "Surpassed registration milestone with 850+ live participants joining across the broadcast.",
        "Generated dozens of enterprise inbound inquiries for corporate staffing and skilling mandates.",
        "Retained an unprecedented 78% average watch-time throughout the 60-minute session."
      ],
      lessons: [
        "Speaker credibility is the single largest lever for high live attendance conversion.",
        "Automated WhatsApp reminders sent 15 minutes prior to broadcast boosted turn-up rate by 34%."
      ],
      businessImpact: "Proved that internal digital marketing capabilities can outperform costly third-party event aggregators while building an owned, proprietary database of 850+ high-intent corporate and career leads."
    }
  },
  {
    id: "seci-ranchi-women-skilling",
    slug: "seci-ranchi-women-skilling",
    title: "SECI Ranchi Women Skilling Impact Initiative",
    subtitle: "Documenting and Amplifying Grassroots Skilling and Sustainable Placement",
    category: "Impact Storytelling & CSR Comms",
    organization: "Talent Foundation / SECI",
    date: "2024",
    heroGradient: "from-amber-700 via-orange-800 to-stone-900",
    image: "/images/projects/niyukti-shakti.svg",
    metrics: [
      { label: "Women Trained", value: "121 Candidates" },
      { label: "Placed in Jobs", value: "~85 Placed" },
      { label: "Batches Completed", value: "4 Batches" },
      { label: "Reporting Quality", value: "100% Verified" }
    ],
    sections: {
      challenge: "A transformative CSR project in Ranchi, Jharkhand, backed by Solar Energy Corporation of India (SECI), needed rigorous communication documentation and human-interest storytelling without overstating outcomes or publishing unverified claims.",
      context: "Grassroots skilling programs often face credibility challenges if metrics are vague or unsupported. The project required transparent documentation of 4 training batches, verified employment placements, and real trainee testimonials.",
      strategy: [
        "Instituted a clear distinction between candidates trained (121) and confirmed placements (~85) to maintain absolute journalistic integrity.",
        "Captured multi-angle video interviews with candidates, instructors, and hiring employers.",
        "Packaged the narrative for dual audiences: Government/CSR stakeholders and the broader public via LinkedIn and impact portals."
      ],
      execution: [
        "Traveled to the Ranchi skill center to coordinate video interviews and photojournalism.",
        "Designed comprehensive CSR progress reports and social media photo-stories.",
        "Produced a documentary recap film screened during project review meetings."
      ],
      results: [
        "Successfully documented 121 female candidates trained across 4 rigorous batches, with ~85 placed into formal employment.",
        "Earned praise from SECI project auditors for transparent, evidence-backed impact reporting.",
        "Served as the benchmark communication blueprint for future public-private skilling partnerships."
      ],
      lessons: [
        "Credibility is enhanced, not diminished, by publishing precise, honest numbers rather than inflated marketing estimates.",
        "Visual proof of female candidates operating computers and working on assembly lines carries unmatched narrative conviction."
      ],
      businessImpact: "Established the organization as a gold standard in transparent CSR execution, leading directly to project renewals and expanded funding mandates for subsequent rural skill centers."
    }
  },
  {
    id: "greencall-hrms-seo-strategy",
    slug: "greencall-hrms-seo-strategy",
    title: "GreenCall HRMS Organic Search Architecture",
    subtitle: "Targeting High-Intent B2B Compliance Queries to Build a Self-Sustaining Inbound Lead Pipeline",
    category: "Technical SEO & B2B Web",
    organization: "GreenCall",
    date: "2024",
    heroGradient: "from-teal-700 via-cyan-800 to-slate-900",
    image: "/images/projects/greencall-seo.svg",
    metrics: [
      { label: "Organic Reach", value: "+120% Lift" },
      { label: "Target Sector", value: "HR Automation" },
      { label: "Core Keywords", value: "Top 5 Rankings" },
      { label: "Conversion Rate", value: "3.4%" }
    ],
    sections: {
      challenge: "Breaking through the noise in the crowded B2B HRMS market against well-funded incumbents with massive advertising budgets.",
      context: "Indian SMEs and HR leaders search for very specific regulatory and operational solutions: 'statutory PF compliance automation', 'geo-fenced mobile attendance', and 'payroll software for factories'.",
      strategy: [
        "Pioneered a semantic keyword matrix addressing compliance pain points rather than generic software features.",
        "Restructured website taxonomy to create distinct product landing pages for attendance, payroll, compliance, and asset management.",
        "Implemented rigorous technical SEO: canonical tagging, structured JSON-LD schemas, and fast Core Web Vitals."
      ],
      execution: [
        "Rewrote all landing page copy with benefit-first H1s, scannable subheadings, and clear demo request forms.",
        "Published comprehensive statutory compliance guides explaining EPF, ESI, and Professional Tax calculations.",
        "Optimized internal linking structures to funnel organic blog traffic into high-converting product demo pages."
      ],
      results: [
        "Achieved first-page Google rankings for dozens of high-intent enterprise HR search queries.",
        "Delivered a sustained 120% lift in non-paid organic impressions over 6 months.",
        "Decreased reliance on paid search campaigns while maintaining a predictable weekly demo pipeline."
      ],
      lessons: [
        "High-intent informational queries convert at nearly double the rate of broad category searches.",
        "Clear, unbloated copy that addresses HR managers' daily compliance anxiety wins the sale."
      ],
      businessImpact: "Transformed an unindexed website into a self-sustaining inbound pipeline engine, saving significant marketing capital while demonstrating measurable SEO leadership."
    }
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "sunday-headlines",
    role: "Production Head & Website Manager",
    organization: "The Sunday Headlines",
    period: "Nov 2016 – Nov 2018",
    description: "Led end-to-end digital publishing, studio video production, and CMS portal management for a digital news and media platform. Built the critical operational foundation in digital content, deadline-driven execution, and CMS administration.",
    skills: ["Production Head", "Website Management", "Digital Content", "Digital Publishing", "Video Production"]
  },
  {
    id: "tatsat",
    role: "Digital Content Producer",
    organization: "Tatsat Chronicle",
    period: "Mar 2021 – Oct 2022",
    description: "Produced long-form interviews, issue-based documentaries, and multimedia storytelling focused on public narratives and social issues. Managed scripting, field coordination, interview planning, and editorial workflows for a premier social impact media brand.",
    skills: ["Digital Content", "Long-form Documentary", "Multimedia Storytelling", "Editorial Workflows", "Social Impact"]
  },
  {
    id: "denvax",
    role: "Digital Content Producer",
    organization: "Denvax",
    period: "Oct 2022 – Mar 2023 · 6 mos",
    description: "Produced patient education video content, simplified complex medical communication, coordinated doctor interviews, and built patient trust across digital channels for cancer immunotherapy clinic.",
    skills: ["Digital Content", "Healthcare Marketing", "Educational Video", "Brand Trust", "Patient Education"]
  },
  {
    id: "meena-bazaar",
    role: "Video Producer",
    organization: "Meena Bazaar",
    period: "Feb 2024 – May 2025 · 1 yr 4 mos",
    description: "Led branded content production, scripted and planned video shoots, supervised post-production, and worked with marketing and branding teams on seasonal launches and retail campaigns for iconic fashion house.",
    skills: ["Video Production", "Creative Direction", "Scripting", "Retail Campaigns", "Post-Production", "Fashion Marketing"]
  },
  {
    id: "vispl",
    role: "Digital Marketing Manager",
    organization: "Vision India Services Pvt. Ltd.",
    period: "May 2025 – Present · Full-time",
    description: "Leading integrated marketing and communications across a multi-brand portfolio of 12+ brands spanning skilling, employability, healthcare, sustainability, and social impact (Vision India, Just Job, LiveSkills, Talent Foundation, GreenCall, Bihar Talks). Directing campaign strategy, internal/external communications, employer branding, executive messaging, content calendars, video production, analytics, and creative-team coordination.",
    skills: ["Marketing Strategy", "Multi-Brand Management", "Employer Branding", "Content Architecture", "Lead Generation", "Executive Comms", "Video Direction"],
    isCurrent: true
  },
  {
    id: "mba",
    role: "MBA in Business Strategy & Marketing",
    organization: "Jindal Global Business School",
    period: "In Progress",
    description: "Augmenting 7.7 Years of hands-on execution with rigorous corporate strategy, commercial finance, consumer psychology, and executive leadership frameworks.",
    skills: ["Corporate Strategy", "Financial Acumen", "Business Leadership", "Marketing Analytics"]
  },
  {
    id: "future-vision",
    role: "Marketing Director / Chief Marketing Officer",
    organization: "Enterprise Leadership & Thought Leadership",
    period: "Long-Term Aspiration",
    description: "Guiding enterprise brand narratives, leading cross-functional growth teams, speaking at national marketing summits, and architecting data-driven digital transformations.",
    skills: ["Executive Leadership", "Global Brand Strategy", "P&L Ownership", "Industry Thought Leadership"],
    isFuture: true
  }
];

export const educationData = [
  {
    id: "mba",
    degree: "Master of Business Administration (MBA)",
    field: "Business Strategy & Marketing",
    institution: "Jindal Global Business School",
    period: "In Progress",
    description: "Focus on corporate strategy, consumer psychology, commercial thinking, brand equity, and executive decision-making."
  },
  {
    id: "ma-mass-comm",
    degree: "Master of Arts (MA)",
    field: "Journalism and Mass Communication",
    institution: "Sharda University",
    period: "2018 – 2020",
    description: "Advanced media research, television production, digital publishing, media ethics, and communications theory."
  },
  {
    id: "ba-mass-comm",
    degree: "Bachelor of Arts (BA)",
    field: "Journalism and Mass Communication",
    institution: "Chaudhary Charan Singh University (CCSU)",
    period: "2015 – 2018",
    description: "Foundational training in print, broadcast, digital journalism, camera techniques, audio-visual editing, and media ethics."
  }
];

export const certificationsData = [
  {
    id: "adobe-cert-prof",
    name: "Adobe Content Creator Professional Certificate",
    issuer: "Adobe / Coursera",
    date: "Issued March 2025",
    skills: "Content Architecture, Creative Suite, Digital Storytelling, Brand Identity"
  },
  {
    id: "adobe-multimedia",
    name: "Adobe Multimedia Content Creation",
    issuer: "Adobe",
    date: "Issued February 2025",
    skills: "Video Production, Motion Graphics, Audio Mastering, Asset Pipeline"
  },
  {
    id: "adobe-design",
    name: "Adobe Design Fundamentals",
    issuer: "Adobe",
    date: "Issued February 2025",
    skills: "Graphic Design, Typography, Visual Hierarchy, Composition"
  },
  {
    id: "adobe-social",
    name: "Social Media Content and Strategy",
    issuer: "Adobe",
    date: "Issued February 2025",
    skills: "Platform Strategy, Format Adaptation, Social Analytics, Creative Sprints"
  },
  {
    id: "hubspot-digital",
    name: "Digital Marketing Certification",
    issuer: "HubSpot Academy",
    date: "Issued October 2024",
    skills: "Inbound Marketing, Lead Nurturing, Content Marketing, SEO Architecture"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "ridhi-goel",
    name: "Ridhi Goel",
    role: "Creative Producer & Brand Director",
    organization: "Independent Creative Collaborator",
    relation: "Collaborated on end-to-end video production & storytelling",
    quote: "Deepanshu brings rare dedication to end-to-end video production and storytelling. From pre-production planning and scripting to final post-production polish, his sharp attention to detail ensures every piece of content directly aligns with core audience engagement and marketing goals. He is exceptionally reliable, proactive, and collaborative to work with.",
    rating: 5,
    avatar: "/images/testimonials/ridhi-goel.svg",
    linkedin: "https://www.linkedin.com/in/deepanshu-kainthola/"
  },
  {
    id: "sidhi-goel",
    name: "Sidhi Goel",
    role: "Marketing & Creative Strategist",
    organization: "Brand & Media Initiatives",
    relation: "Partnered on digital campaigns & multi-platform content strategy",
    quote: "Working with Deepanshu demonstrated his sharp understanding of digital platforms and brand narrative. He bridges creative visual execution with structured strategic thinking, always delivering campaigns on time while solving operational bottlenecks effortlessly. A valuable asset to any high-performing marketing and communications team.",
    rating: 5,
    avatar: "/images/testimonials/sidhi-goel.svg",
    linkedin: "https://www.linkedin.com/in/deepanshu-kainthola/"
  }
];

export const articlesData: ArticleItem[] = [
  {
    id: "activity-vs-strategy",
    slug: "why-marketing-teams-confuse-activity-with-strategy",
    title: "Why Most Marketing Teams Confuse Activity With Strategy",
    category: "Marketing Strategy",
    readTime: "6 min read",
    date: "Oct 2026",
    excerpt: "Being busy is not the same as being effective. Why shipping 30 social posts a month without an underlying hypothesis is just corporate comfort food.",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    image: "/images/insights/activity-vs-strategy.svg",
    quote: "Strategy is not a to-do list with a marketing budget. It is an intentional choice about where to play, how to win, and most critically, what not to do.",
    toc: [
      { id: "the-busy-trap", label: "The Busy Trap in Modern Teams" },
      { id: "activity-vs-strategy-table", label: "Activity vs. Strategy Compared" },
      { id: "four-questions", label: "The Four Questions That Separate Both" },
      { id: "operational-truth", label: "From My Own Operational Experience" },
      { id: "takeaways", label: "Key Strategic Takeaways" }
    ],
    sections: [
      {
        id: "the-busy-trap",
        heading: "The Problem With Busy Marketing",
        paragraphs: [
          "In high-velocity organizations, activity is easy to measure, highly visible, and psychologically comforting. When a marketing team ships four LinkedIn carousels, shoots two short videos, sends out a newsletter, and runs three ad variations in a week, everyone in the meeting room feels productive.",
          "Yet, when the quarter closes and leadership asks how these efforts shifted customer perception, lowered acquisition costs, or improved qualified enterprise pipeline, the conversation falters into vanity metrics: reach, impressions, and video views.",
          "This is the quintessential confusion between activity and strategy. Activity is about motion; strategy is about direction, leverage, and sustainable business advantage."
        ]
      },
      {
        id: "activity-vs-strategy-table",
        heading: "What Activity-Driven Marketing Looks Like",
        paragraphs: [
          "Activity-driven marketing is reactive and checklist-oriented. It asks: 'What should we post today?' or 'Can we quickly make a Reel on this trending topic?' It treats digital channels as containers that must be filled with content, rather than strategic distribution pipelines that shape audience behavior.",
          "In contrast, strategy-driven marketing begins with the commercial objective: 'Which specific audience segment is currently hesitating to engage, what belief must shift for them to trust us, and which format delivers that proof point with the highest leverage?'",
          "When you operate from strategy, saying 'no' to 80% of trendy distractions becomes your greatest competitive superpower."
        ]
      },
      {
        id: "four-questions",
        heading: "The Four Questions That Separate Both",
        paragraphs: [
          "1. What is the fundamental business hypothesis behind this initiative? (If you cannot articulate the expected behavioral outcome, it is merely activity).",
          "2. Who specifically is this designed to disqualify? (Great marketing speaks so precisely to the ideal customer that it intentionally filters out everyone else).",
          "3. How does this effort compound over the next 12 months? (One-off campaigns that leave no owned asset behind are tactical expenses; content architectures that continue driving search and brand equity are strategic investments).",
          "4. What will we explicitly stop doing to execute this with excellence? (A strategy that adds tasks without shedding lower-value work is simply burnout masquerading as ambition)."
        ]
      },
      {
        id: "operational-truth",
        heading: "From My Own Operational Experience",
        paragraphs: [
          "Managing marketing across six distinct brands at Vision India Services provided direct empirical proof: high volume without distinct positioning dilutes brand equity.",
          "When we shifted focus from merely publishing 60 monthly social posts to orchestrating high-value touchpoints—such as the Employ India Connect webinar that convened 850+ participants around a single high-credibility speaker—our qualified inquiries surged while our team's operational friction dropped.",
          "True marketing maturity is moving from being an order-taker that cranks out graphics to a commercial partner that architects business growth."
        ]
      }
    ],
    takeaways: [
      "Activity is operational motion; strategy is competitive leverage and commercial direction.",
      "High-performing marketing teams prioritize saying 'no' to low-leverage tasks over filling calendars.",
      "Every campaign must have a clear customer belief-shift hypothesis before creative work begins.",
      "Build compounding assets (SEO pillars, owned event communities) rather than transactional vanity campaigns."
    ],
    glossary: [
      { term: "Leverage", definition: "Achieving disproportionate business impact with minimal ongoing resource consumption." },
      { term: "Belief Shift", definition: "The psychological transition a prospect undergoes from skepticism to confident purchase intent." },
      { term: "Vanity Metrics", definition: "Numbers (likes, raw views) that look good on paper but correlate poorly with revenue or enterprise value." }
    ]
  },
  {
    id: "content-seo-2026",
    slug: "content-seo-in-2026-why-experience-beats-keywords",
    title: "Content SEO in 2026: Why Experience Beats Keywords",
    category: "SEO & Web",
    readTime: "7 min read",
    date: "Oct 2026",
    excerpt: "With AI flooding search engines with generic summaries, search engines and human readers demand genuine firsthand operational evidence. Here is how semantic architecture wins.",
    gradient: "from-teal-600 via-cyan-700 to-slate-900",
    image: "/images/insights/content-seo-2026.svg",
    quote: "AI can summarize what has already been said ten thousand times. It cannot provide the firsthand friction, data, and hard-earned lessons of executing in the real world.",
    toc: [
      { id: "the-ai-flood", label: "The AI Content Inundation" },
      { id: "information-gain", label: "Understanding Information Gain" },
      { id: "practical-framework", label: "The 4-Step Experience Framework" },
      { id: "takeaways", label: "Key Strategic Takeaways" }
    ],
    sections: [
      {
        id: "the-ai-flood",
        heading: "The Great Synthetic Flood",
        paragraphs: [
          "The internet is drowning in synthesized, paraphrased, generative AI summaries. Search engines are aggressively penalizing zero-experience content that merely repeats textbook definitions.",
          "The modern SEO algorithm and, more importantly, the modern B2B buyer are searching for one thing: 'Has the author actually done this themselves?'",
          "Google's emphasis on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is not an algorithmic gimmick—it is a survival mechanism for search platforms."
        ]
      },
      {
        id: "information-gain",
        heading: "Understanding Information Gain",
        paragraphs: [
          "Information gain represents the new, unique data, perspectives, or proof points an article provides beyond what already exists in the top 10 search results.",
          "If your article simply repeats the same definition of 'HRMS software' found on Wikipedia, your information gain score is near zero.",
          "However, if you share proprietary data—such as how specific onboarding forms increased employee compliance by 34% across 121 rural trainees—you have created irreplaceable information gain."
        ]
      },
      {
        id: "practical-framework",
        heading: "The 4-Step Experience Framework",
        paragraphs: [
          "1. Ground every topic in a concrete workplace scenario or operational bottleneck.",
          "2. Include primary numbers, screenshots, and verifiable campaign artifacts.",
          "3. Highlight what failed during execution and what adjustments were made in real time.",
          "4. Connect technical implementation directly to commercial and financial outcomes."
        ]
      }
    ],
    takeaways: [
      "Generic keyword stuffing is obsolete; high Information Gain is the primary ranking factor in 2026.",
      "Firsthand case studies and proprietary data points create an impenetrable moat against AI copycats.",
      "Write for the decision-maker who needs a solution, not the search engine crawler."
    ]
  },
  {
    id: "ai-daily-workflow",
    slug: "how-i-actually-use-ai-in-my-daily-marketing-workflow",
    title: "How I Actually Use AI in My Daily Marketing Workflow",
    category: "AI & Innovation",
    readTime: "5 min read",
    date: "Oct 2026",
    excerpt: "Moving beyond gimmicky prompt lists: how senior marketers deploy AI for research synthesis, multivariate ad framing, and operational speed without sacrificing authentic voice.",
    gradient: "from-purple-600 via-violet-800 to-slate-900",
    image: "/images/insights/ai-daily-workflow.svg",
    quote: "AI is not your strategist; it is your tireless junior research assistant. If you ask it for wisdom, you get platitudes. If you give it constraints, you get speed.",
    toc: [
      { id: "the-wrong-way", label: "The Flawed AI Approach" },
      { id: "the-real-workflow", label: "My Daily 3-Tier Workflow" },
      { id: "takeaways", label: "Key Strategic Takeaways" }
    ],
    sections: [
      {
        id: "the-wrong-way",
        heading: "The Flawed AI Approach",
        paragraphs: [
          "The mistake amateur marketers make is asking an AI model to 'Write a 1,000-word blog post on marketing strategy.' The output is predictably bland, packed with clichés like 'In today's fast-paced digital landscape' and completely devoid of human conviction.",
          "Senior marketers do not delegate their thinking to AI; they delegate their operational drag."
        ]
      },
      {
        id: "the-real-workflow",
        heading: "My Daily 3-Tier Workflow",
        paragraphs: [
          "Tier 1: Research & Competitor Synthesis. Feeding dense transcripts, user surveys, and whitepapers into large-context models to extract recurring customer objections and pain points in seconds.",
          "Tier 2: Rapid Copy Framing & Iteration. Once I draft the core strategic thesis, I use LLMs to rapidly test 15 headline angles, varying between urgency, fear-of-missing-out, and authoritative curiosity.",
          "Tier 3: Repurposing & Multi-Format Translation. Turning a long-form executive interview into video script bullet points, LinkedIn carousels, and email teaser sequences."
        ]
      }
    ],
    takeaways: [
      "Use AI to eliminate synthesis drag, never to outsource strategic judgment.",
      "The quality of AI output is strictly bound to the specificity of your contextual constraints.",
      "Always apply human editorial oversight to maintain brand integrity and emotional resonance."
    ]
  },
  {
    id: "mba-lessons",
    slug: "what-my-mba-taught-me-about-marketing-that-work-didnt",
    title: "What My MBA Taught Me About Marketing That Work Didn't",
    category: "Business & Leadership",
    readTime: "6 min read",
    date: "Sep 2026",
    excerpt: "Field execution teaches you how to push pixels and manage campaigns; business school teaches you how capital flows, how CFOs evaluate risk, and why marketing must speak the language of commercial value.",
    gradient: "from-amber-600 via-orange-700 to-slate-900",
    image: "/images/insights/mba-lessons.svg",
    quote: "A marketing manager talks about impressions and CTR; a commercial business leader talks about gross margins, customer lifetime value, and capital allocation.",
    toc: [
      { id: "execution-bubble", label: "The Execution Bubble" },
      { id: "commercial-language", label: "Speaking the Language of the C-Suite" },
      { id: "takeaways", label: "Key Strategic Takeaways" }
    ],
    sections: [
      {
        id: "execution-bubble",
        heading: "The Execution Bubble",
        paragraphs: [
          "For the first five years of my career, marketing meant execution: shooting crisp video, editing on deadline, optimizing meta tags, managing social media feeds, and ensuring creatives looked visually arresting.",
          "While that tactile foundation is invaluable, it creates an execution bubble. You measure success by the quality of the artifact, rather than the commercial outcome it drove for the enterprise."
        ]
      },
      {
        id: "commercial-language",
        heading: "Speaking the Language of the C-Suite",
        paragraphs: [
          "Pursuing my MBA at Jindal Global Business School reframed how I perceive my entire profession.",
          "The Chief Financial Officer does not care how clever your slogan is or whether your video has cinematic grain; they care about Customer Acquisition Cost (CAC), Payback Period, and Customer Lifetime Value (LTV).",
          "When you align creative execution with financial reality, marketing transforms from an easily cut cost center into an indispensable growth engine."
        ]
      }
    ],
    takeaways: [
      "Marketing execution without business literacy limits career progression to tactical delivery.",
      "Bridge creative storytelling with commercial metrics: speak in terms of revenue pipeline and retention.",
      "Understand the entire business model, not just the marketing department's silo."
    ]
  }
];

export const skillsArchitecture: SkillCategory[] = [
  {
    title: "Digital & Growth Strategy",
    skills: ["Full-Funnel Acquisition", "Lead Generation", "Audience Segmentation", "CAC Optimization", "Conversion Rate Optimization (CRO)", "Multi-Brand Management"]
  },
  {
    title: "Content Architecture & Editorial",
    skills: ["Editorial Roadmaps", "Executive Thought Leadership", "Copywriting", "Documentary Storytelling", "Vernacular Campaigns", "Content Repurposing"]
  },
  {
    title: "Employer Branding & Comms",
    skills: ["Employee Value Proposition (EVP)", "Corporate Communication", "Workforce Storytelling", "CSR Impact Documentation", "Internal Alignment", "PR Coordination"]
  },
  {
    title: "Video & Visual Production",
    skills: ["End-to-End Video Production", "Adobe Premiere Pro", "Creative Direction", "Time-lapse & Shoots", "Short-Form Video (Reels/Shorts)", "Canva & Photoshop"]
  },
  {
    title: "Web & Analytics Architecture",
    skills: ["WordPress CMS Management", "Information Architecture", "Google Analytics 4", "Meta Business Suite", "Google Search Console", "On-Page Optimization"]
  },
  {
    title: "Strategic & Business Thinking",
    skills: ["Business Strategy", "Commercial Acumen (MBA)", "Cross-Functional Leadership", "Stakeholder Engagement", "AI Workflows & Prompting", "Process Documentation"]
  }
];

export const skillBars = [
  { name: "Digital Marketing & Strategy", percentage: 92 },
  { name: "Content Strategy & Copywriting", percentage: 94 },
  { name: "Social Media & Performance Growth", percentage: 90 },
  { name: "Employer Branding & Corporate Comms", percentage: 88 },
  { name: "Video Production & Creative Direction", percentage: 86 },
  { name: "Business & Commercial Strategy (MBA)", percentage: 85 }
];
