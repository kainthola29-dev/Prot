import { 
  NavItem, 
  StatItem, 
  ServiceItem, 
  ProjectItem, 
  CaseStudyItem, 
  TimelineItem, 
  ArticleItem, 
  SkillCategory 
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
  bio: "Practical marketing execution backed by strategic and business thinking. 6+ years orchestrating digital campaigns, employer branding, SEO, content architecture, and multi-brand growth across 6 flagship enterprise entities.",
  location: "Noida / Delhi NCR, India",
  email: "deepanshu@kainthola.com",
  linkedin: "https://linkedin.com/in/deepanshukainthola",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  statusBadge: "Available for Senior Marketing Roles (₹18–25 LPA)",
  primaryCompany: "Vision India Services Pvt. Ltd.",
  companyUrl: "https://vispl.co.in",
  profilePhoto: "/images/deepanshu.webp",
};

export const statsData: StatItem[] = [
  { value: "10M+", label: "Audience Reach" },
  { value: "6+", label: "Years Experience" },
  { value: "6+", label: "Brands Managed" },
  { value: "850+", label: "Webinar Attendees" },
];

export const servicesData: ServiceItem[] = [
  {
    title: "Digital Marketing & Strategy",
    category: "PERFORMANCE & GROWTH",
    description: "End-to-end full-funnel digital strategy, lead generation campaigns, multi-channel distribution, and ROI-focused acquisition.",
    iconName: "BarChart3",
  },
  {
    title: "Content Strategy & Copywriting",
    category: "BRAND NARRATIVE",
    description: "Editorial roadmaps, high-converting copy, executive thought leadership, and storytelling that connects audience engagement to bottom-line results.",
    iconName: "FileText",
  },
  {
    title: "SEO & Web Architecture",
    category: "ORGANIC VISIBILITY",
    description: "Comprehensive on-page, technical SEO, semantic content structuring, and user journey optimization for sustainable organic discovery.",
    iconName: "Search",
  },
  {
    title: "Employer Branding & Comms",
    category: "TALENT & REPUTATION",
    description: "Corporate positioning, employee advocacy, CSR storytelling, and talent brand transformation across LinkedIn and national media.",
    iconName: "Users",
  },
  {
    title: "Video & Media Production",
    category: "VISUAL STORYTELLING",
    description: "Hands-on video production, post-production supervision, campaign films, time-lapses, and high-retention short-form digital formats.",
    iconName: "Video",
  },
  {
    title: "AI Workflows & MarTech",
    category: "INNOVATION & EFFICIENCY",
    description: "Deploying generative AI tooling, automated content pipelines, analytics integrations, and next-gen marketing innovation.",
    iconName: "Cpu",
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "employ-india",
    slug: "employ-india",
    title: "Employ India Campaign",
    category: "Digital Marketing",
    organization: "Vision India Services",
    period: "2024 – 2025",
    description: "Nationwide youth employment drive bridging aspirational jobseekers with corporate opportunities through integrated digital marketing.",
    gradient: "from-blue-600 to-indigo-900",
    image: "/images/projects/employ-india.svg",
    badge: "Flagship Initiative",
    stats: [
      { label: "Target Audience", value: "Pan-India" },
      { label: "Channels", value: "LinkedIn, Meta, Web" },
    ],
    overview: {
      context: "A national mission to connect semi-skilled and skilled jobseekers across tier-2 and tier-3 cities with organized corporate employment.",
      objective: "Build high-trust brand awareness and generate verified candidate registrations through targeted digital funnels.",
      role: "Digital Marketing Manager overseeing digital touchpoints, creative direction, landing page conversion, and cross-channel paid/organic distribution.",
      strategy: [
        "Regionalized vernacular content across social channels to maximize emotional connect and trust.",
        "Zero-friction mobile-first landing experience designed for mobile data constraints.",
        "Corporate employer spotlights showcasing real placements and career transformations."
      ],
      execution: [
        "Coordinated multi-channel social blitz targeting tier-2/3 student clusters.",
        "Orchestrated webinar and digital workshop funnels featuring top industry leaders.",
        "Implemented real-time conversion tracking across organic and paid campaign legs."
      ],
      results: [
        "Multi-million organic impressions across YouTube and social platforms.",
        "Significant boost in direct employer queries and candidate database growth.",
        "Established recurring digital engagement playbook adopted across company subsidiaries."
      ],
      lessons: [
        "Localized storytelling out-converts generic corporate messaging by over 3x in non-metro geographies.",
        "Fast-loading web interfaces are critical when targeting mobile users on diverse network bandwidths."
      ]
    }
  },
  {
    id: "just-job",
    slug: "just-job",
    title: "Just Job Recruitment Marketing",
    category: "Social Media",
    organization: "Just Job",
    period: "2023 – 2024",
    description: "Data-driven social media growth and candidate acquisition campaign for a high-volume entry-level job portal.",
    gradient: "from-purple-600 to-blue-900",
    image: "/images/projects/just-job.svg",
    badge: "Growth Engine",
    stats: [
      { label: "Platform", value: "Social & App" },
      { label: "Focus", value: "Candidate Inflow" }
    ]
  },
  {
    id: "liveskills",
    slug: "liveskills",
    title: "LiveSkills E-Skilling Content",
    category: "Content Strategy",
    organization: "LiveSkills",
    period: "2023 – 2024",
    description: "Curriculum narrative, explainer modules, and digital skill certification campaigns targeting students and upskillers.",
    gradient: "from-emerald-600 to-teal-900",
    image: "/images/projects/liveskills.svg",
    badge: "EdTech",
    stats: [
      { label: "Format", value: "Video & Editorial" },
      { label: "Focus", value: "Course Enrolment" }
    ]
  },
  {
    id: "vispl-employer-branding",
    slug: "vispl-employer-branding",
    title: "Vision India Employer Branding",
    category: "Employer Branding",
    organization: "Vision India Services",
    period: "2023 – Present",
    description: "Elevating internal employee stories, leadership credibility, culture highlights, and Great Place to Work communications.",
    gradient: "from-amber-600 to-rose-900",
    image: "/images/projects/vispl-employer-branding.svg",
    badge: "Corporate Rep",
    stats: [
      { label: "Medium", value: "LinkedIn & Video" },
      { label: "Impact", value: "Talent Pull" }
    ]
  },
  {
    id: "greencall-seo",
    slug: "greencall-seo",
    title: "GreenCall HRMS SEO & Web",
    category: "SEO & Web",
    organization: "GreenCall",
    period: "2024",
    description: "Full technical SEO audit, metadata overhaul, and B2B SaaS informational content pillars for enterprise HRMS product.",
    gradient: "from-teal-600 to-cyan-900",
    image: "/images/projects/greencall-seo.svg",
    badge: "B2B SaaS",
    stats: [
      { label: "Focus", value: "Organic Search" },
      { label: "Target", value: "HR Decision Makers" }
    ]
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
      { label: "Theme", value: "Women In Workforce" }
    ]
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
    metrics: [
      { label: "Live Attendees", value: "850+" },
      { label: "Lead Pipeline", value: "Multi-Channel" },
      { label: "Speaker", value: "Sandeep Chatterjee" },
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
        "Pre-event calendar lock-in and automated multi-channel nudges lift live turnout by over 40%.",
        "Subject matter credibility trumps flashy sales pitches every single time in professional B2B marketing."
      ],
      businessImpact: "Established Employ India as an authoritative digital voice in India's workforce transformation ecosystem, generating high-intent corporate partnerships and proven re-usable event architecture."
    }
  },
  {
    id: "seci-ranchi-women-skilling",
    slug: "seci-ranchi-women-skilling",
    title: "SECI Ranchi Women Skilling Initiative",
    subtitle: "Employer Branding and Grassroots Skilling Communication",
    category: "Impact Comms & Branding",
    organization: "Vision India Foundation",
    date: "2024",
    heroGradient: "from-blue-700 via-indigo-800 to-slate-900",
    metrics: [
      { label: "Batches Completed", value: "4" },
      { label: "Women Trained", value: "121" },
      { label: "Candidates Placed", value: "~85" },
      { label: "Placement Rate", value: "70%+" }
    ],
    sections: {
      challenge: "Communicating the tangible real-world outcome of specialized vocational training programs in Eastern India to national stakeholders and government partners.",
      context: "Corporate CSR and skill development stories often read dry or formulaic. Authentic impact requires spotlighting individual transformation journeys.",
      strategy: [
        "Shifted focus from abstract batch statistics to human-centric case studies and video testimonials.",
        "Documented the entire training journey: classroom training, soft skills, employer interviews, and appointment letters."
      ],
      execution: [
        "Produced short documentary vignettes capturing rural and semi-urban female trainees sharing their aspirations.",
        "Published comprehensive milestone reports shared with corporate sponsors and media outlets."
      ],
      results: [
        "Celebrated 121 women trained across 4 dedicated batches with approximately 85 placed in formal employment.",
        "Substantially boosted institutional credibility for future government and CSR skill allocations."
      ],
      lessons: [
        "Authentic ground-level storytelling creates lasting institutional goodwill that paid advertising cannot replicate."
      ],
      businessImpact: "Demonstrated measurable socio-economic impact that reinforced Vision India's status as a trusted implementation partner for nationwide skilling."
    }
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "school",
    role: "Foundational Schooling",
    organization: "School Education",
    period: "Early Foundations",
    description: "Strong academic foundation cultivating early curiosity for communication, analytical thinking, and visual expression.",
    skills: ["Curiosity", "Communication", "Foundations"],
    isPlaceholder: true
  },
  {
    id: "college",
    role: "Higher Education",
    organization: "Undergraduate Degree",
    period: "Undergraduate Years",
    description: "Developing structured problem solving, academic rigor, and early exploration of digital publishing and media technologies.",
    skills: ["Research", "Problem Solving", "Media"],
    isPlaceholder: true
  },
  {
    id: "sunday-headlines",
    role: "Production Head & Website Manager",
    organization: "The Sunday Headlines",
    period: "Nov 2016 – Nov 2018",
    description: "Led end-to-end digital publishing, studio video production, and CMS portal management for a digital news and media platform. Built the critical operational foundation in digital content, deadline-driven execution, and CMS administration.",
    skills: ["Video Production", "Website Management", "Digital Publishing", "Team Management"]
  },
  {
    id: "growth-phase",
    role: "Media Producer & Content Strategist",
    organization: "Independent & Media Projects",
    period: "2018 – 2021",
    description: "Executed commercial media shoots, independent digital campaigns, and social media consulting for emerging brands, sharpening hands-on camera, edit, and digital narrative skills.",
    skills: ["Content Creation", "Video Editing", "Social Media", "Client Handling"],
    isPlaceholder: true
  },
  {
    id: "tatsat",
    role: "Digital Content Producer & Social Media Manager",
    organization: "Tatsat Group",
    period: "Mar 2021 – Oct 2022",
    description: "Managed cross-platform digital content distribution, audience engagement workflows, and multimedia campaigns for an established publishing and social impact media group.",
    skills: ["Social Media Strategy", "Content Architecture", "Audience Growth", "Digital Storytelling"]
  },
  {
    id: "denvax",
    role: "Digital Content Producer",
    organization: "Denvax",
    period: "Oct 2022 – Mar 2023",
    description: "Spearheaded patient education communication, healthcare content simplification, doctor video interviews, and digital compliance in medical marketing.",
    skills: ["Healthcare Marketing", "Educational Video", "Brand Trust", "Digital Communication"]
  },
  {
    id: "vispl",
    role: "Digital Marketing Manager",
    organization: "Vision India Services Pvt. Ltd.",
    period: "2023 – Present",
    description: "Leading the core digital marketing and brand presence across 6 corporate brands (Vision India, Just Job, LiveSkills, Talent Foundation, GreenCall, Bihar Talks). Directing integrated digital campaigns, SEO, employer branding, video production, and web platforms.",
    skills: ["Marketing Strategy", "Multi-Brand Management", "SEO & Web", "Employer Branding", "Lead Generation", "Executive Comms"],
    isCurrent: true
  },
  {
    id: "mba",
    role: "MBA in Business Strategy & Marketing",
    organization: "Jindal Global Business School (Cohort 13)",
    period: "In Progress",
    description: "Augmenting 6+ years of field execution with rigorous corporate strategy, commercial finance, consumer psychology, and executive leadership frameworks.",
    skills: ["Corporate Strategy", "Financial Acumen", "Business Leadership", "Marketing Analytics"]
  },
  {
    id: "future-vision",
    role: "Marketing Director / Chief Marketing Officer",
    organization: "Industry Thought Leader & Consultant",
    period: "Long-Term Aspiration",
    description: "Guiding enterprise brand narratives, leading cross-functional growth teams, speaking at national marketing summits, and architecting data-driven digital transformations.",
    skills: ["Executive Leadership", "Global Brand Strategy", "P&L Ownership", "Industry Thought Leadership"],
    isFuture: true
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
    excerpt: "Posting five times a week and pumping ad dollars into top-of-funnel clicks is not a marketing strategy. Here is how high-growth teams distinguish frenetic motion from calculated business progress.",
    gradient: "from-emerald-600 to-teal-900",
    image: "/images/insights/activity-vs-strategy.svg",
    toc: [
      { id: "problem", label: "1. The Trap of The 'Busy' Marketing Team" },
      { id: "activity-driven", label: "2. The Anatomy of Activity-Driven Marketing" },
      { id: "strategy-driven", label: "3. What Strategy-Driven Marketing Actually Looks Like" },
      { id: "four-questions", label: "4. The Four Tests That Separate Motion From Progress" },
      { id: "personal-experience", label: "5. Real-World Lessons from Multi-Brand Execution" },
      { id: "takeaways", label: "6. Key Takeaways for Marketing Leaders" }
    ],
    content: [
      "In modern corporate marketing departments, there is an unspoken anxiety: if the social feed is silent for 48 hours, or if we haven't published a blog post this week, someone upstairs might think we aren't working.",
      "The result is a relentless treadmill of tactical output. Teams celebrate publishing 20 posts a month, launching five ad variations, and tweaking button colors on a landing page. But when the quarter ends and the board asks: 'Did this lower customer acquisition cost? Did this improve brand premium or shorten our enterprise sales cycle?', the room falls silent.",
      "Activity is easy to measure; strategy requires answering hard trade-offs. Activity produces calendar checkboxes; strategy produces competitive moats and commercial outcomes.",
      "When marketing teams shift from measuring 'What did we produce today?' to 'What market bottleneck are we solving for this quarter?', everything changes. Messaging sharpens, acquisition funnels simplify, and marketing stops being viewed as a cost center and becomes an undeniable growth driver."
    ],
    takeaways: [
      "High volume of content without distribution discipline is vanity expenditure.",
      "Strategy is fundamentally about choosing what NOT to do.",
      "Every marketing initiative must tie back to one of three levers: Lower CAC, Higher LTV, or Shorter Sales Cycles.",
      "True marketing leadership bridges creative storytelling with business balance sheets."
    ],
    glossary: [
      { term: "Vanity Metrics", definition: "Data points like raw impressions, post likes, and pageviews that look impressive on paper but bear no causal relationship to business revenue or customer retention." },
      { term: "CAC (Customer Acquisition Cost)", definition: "The total marketing and sales expense required to secure one paying customer or verified client partner." },
      { term: "Full-Funnel Alignment", definition: "A marketing architecture where top-of-funnel educational brand content directly feeds middle-of-funnel consideration and bottom-of-funnel sales conversion." }
    ]
  },
  {
    id: "content-seo-2026",
    slug: "content-seo-in-2026",
    title: "Content SEO in 2026: Why Experience Beats Keywords",
    category: "SEO & Web",
    readTime: "7 min read",
    date: "Sep 2026",
    excerpt: "With search engines flooded by synthetic content, algorithmic ranking now disproportionately rewards demonstrated first-hand experience (E-E-A-T) over programmatic keyword density.",
    gradient: "from-blue-600 to-indigo-900",
    image: "/images/insights/content-seo-2026.svg"
  },
  {
    id: "ai-in-daily-workflow",
    slug: "how-i-use-ai-in-daily-marketing-workflow",
    title: "How I Actually Use AI in My Daily Marketing Workflow",
    category: "AI & Innovation",
    readTime: "5 min read",
    date: "Aug 2026",
    excerpt: "Beyond prompt engineering clichés: how practical marketers use custom LLM workflows for audience sentiment mapping, rapid campaign testing, and editorial velocity.",
    gradient: "from-purple-600 to-slate-900",
    image: "/images/insights/ai-workflow.svg"
  },
  {
    id: "mba-marketing-lessons",
    slug: "what-my-mba-taught-me-about-marketing",
    title: "What My MBA Taught Me About Marketing That Work Didn't",
    category: "Business & Leadership",
    readTime: "5 min read",
    date: "Jul 2026",
    excerpt: "How pairing 6 years of hands-on media production and social growth with formal corporate strategy transformed my perspective on brand equity and commercial negotiation.",
    gradient: "from-amber-600 to-zinc-900",
    image: "/images/insights/mba-lessons.svg"
  }
];

export const skillsArchitecture: SkillCategory[] = [
  {
    title: "Marketing Strategy & Growth",
    skills: ["Campaign Planning", "Multi-Channel Distribution", "Lead Generation Funnels", "Market Research", "Brand Positioning", "Performance Measurement"]
  },
  {
    title: "SEO & Digital Web",
    skills: ["On-Page SEO", "Technical SEO Audits", "Keyword Architecture", "WordPress CMS", "Web UX Optimization", "Information Architecture"]
  },
  {
    title: "Content & Copywriting",
    skills: ["Content Strategy", "Editorial Roadmaps", "B2B Thought Leadership", "Campaign Copy", "Employee Advocacy", "Newsletter Marketing"]
  },
  {
    title: "Media & Video Production",
    skills: ["Video Production", "Editing (Premiere/DaVinci)", "Studio Shoots", "Short-Form Video (Reels/Shorts)", "Time-Lapses", "Audio & Podcast Setup"]
  },
  {
    title: "Social Media & Community",
    skills: ["LinkedIn Marketing", "YouTube Content", "Instagram & Meta Ads", "X / Twitter", "Community Management", "Organic Growth Loops"]
  },
  {
    title: "AI & Modern MarTech",
    skills: ["AI-Assisted Workflows", "Generative Copy Tools", "Analytics (GA4/Search Console)", "Meta Ads Manager", "Canva / Adobe Suite", "Automation Concepts"]
  }
];

export const skillBars = [
  { name: "Digital Marketing & Strategy", percentage: 92 },
  { name: "Content Architecture & Copy", percentage: 94 },
  { name: "SEO & Organic Web Visibility", percentage: 89 },
  { name: "Employer Branding & Comms", percentage: 88 },
  { name: "Video Production & Editing", percentage: 84 },
  { name: "Business Strategy & Leadership", percentage: 86 }
];
