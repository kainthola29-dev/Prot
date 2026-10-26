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
    "id": "meena-bazaar-fashion-films",
    "slug": "meena-bazaar-fashion-films",
    "title": "Meena Bazaar Ethnic Couture & Festive Campaigns",
    "category": "Video Production",
    "organization": "Meena Bazaar",
    "period": "Feb 2024 – May 2025 · 1 yr 4 mos",
    "description": "End-to-end video shoots, model direction, store walkthroughs, and high-retention social reels showcasing luxury Indian female ethnic wear.",
    "gradient": "from-rose-900 via-pink-950 to-neutral-950",
    "image": "/images/projects/meena-bazaar.svg",
    "badge": "Luxury Retail",
    "stats": [
      {
        "label": "Role",
        "value": "Video Producer"
      },
      {
        "label": "Assets Shot",
        "value": "120+ Shoots"
      },
      {
        "label": "Channels",
        "value": "Reels & Web"
      },
      {
        "label": "Editing",
        "value": "Premiere Pro"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Meena Bazaar Festive & Bridal Ethnic Wear Campaign Reel",
        "caption": "16:9 4K Video Slot — Embed your campaign showcase reel, YouTube link, or MP4 here.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Store Walkthrough & Saree Draping Tutorial",
        "caption": "9:16 Instagram Reel Slot — Showcase store ambiance, real fabric drapes, and styling tips.",
        "aspectRatio": "9:16"
      },
      {
        "type": "image",
        "title": "Studio Flatlays & Handcrafted Embroidery Close-ups",
        "caption": "High-resolution product flatlay photography highlighting zari, silk, and sequence craft.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Behind-The-Scenes: Model Direction & Studio Lighting",
        "caption": "Production stills showing lighting setup, camera rig, and on-set creative coordination.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Meena Bazaar needed a continuous flow of premium visual content across major festive and wedding seasons to engage online shoppers and drive store footfalls. Capturing the authentic luster of silk, delicate sequence work, and rich bridal colors required careful lighting and specialized fashion framing.",
      "objective": "Translate high-end Indian ethnic couture into scroll-stopping product videos, relatable store walkthroughs, and clean e-commerce flatlays that accelerate digital engagement and retail sales.",
      "role": "Video Producer — headed shoot logistics, operated DSLR camera rigs, managed three-point lighting, directed models on set, filmed flagship store tours, and edited all final reels in Adobe Premiere Pro.",
      "strategy": [
        "Calibrated diffusion and softbox lighting setups to eliminate synthetic glare and accurately capture fabric sheen, zari threads, and rich hues.",
        "Created a dual-format shoot workflow: filmed wide 16:9 campaign sequences alongside vertical 9:16 reels in the same studio block.",
        "Produced authentic customer and store staff walkthroughs to humanize the shopping experience and demystify bridal draping styles."
      ],
      "execution": [
        "Directed scheduled model shoots with multi-outfit quick changes, maintaining strict styling checklists and shot counts.",
        "Captured macro detail b-roll of hand-embroidery, borders, and silhouettes to provide online buyers with tangible visual confidence.",
        "Cut and edited all footage in Premiere Pro, pacing transitions to trending music beats, color grading skin tones and fabrics, and exporting mobile-optimized reels."
      ],
      "results": [
        "Delivered over 120+ finished video and photo assets across wedding, festive, and everyday prêt collections.",
        "Significantly improved social media watch-through rates and comments inquiring about specific catalog SKU codes.",
        "Provided the e-commerce department with accurate product visuals that helped reduce return rates from mismatched expectations."
      ],
      "lessons": [
        "In ethnic fashion, truthful lighting that shows fabric movement and drape converts far better than heavy artificial filters.",
        "Preparing precise shot checklists before the model steps on set saves at least 40% of studio rental time."
      ]
    }
  },
  {
    "id": "denvax-healthcare-storytelling",
    "slug": "denvax-healthcare-storytelling",
    "title": "Denvax Cancer Immunotherapy Patient & Doctor Series",
    "category": "Video Production",
    "organization": "Denvax",
    "period": "Oct 2022 – Mar 2023 · 6 mos",
    "description": "Doctor interview series, patient recovery documentaries, and cancer immunotherapy educational media across digital channels.",
    "gradient": "from-teal-900 via-emerald-950 to-neutral-950",
    "image": "/images/projects/denvax.svg",
    "badge": "Clinical Media",
    "stats": [
      {
        "label": "Role",
        "value": "Content Producer"
      },
      {
        "label": "Focus",
        "value": "Oncology & Trust"
      },
      {
        "label": "Channel",
        "value": "YouTube & Web"
      },
      {
        "label": "Format",
        "value": "Docu-Series"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Senior Oncologist Educational Brief: Understanding Dendritic Cell Therapy",
        "caption": "16:9 Video Slot — Embed clinical explainer video, YouTube doctor interview, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Patient Recovery Journey: Hope & Real Clinical Testimonial",
        "caption": "16:9 Video Slot — Embed patient survivor story and clinical journey documentary.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Doctor Interview Clinic Studio Setup & Audio Rig",
        "caption": "Behind-the-scenes photograph of quiet consultation room recording and softbox placement.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Medical Infographic Overlays & YouTube Thumbnail System",
        "caption": "Visual breakdown showing clear medical graphics and patient-friendly thumbnail design.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Navigating cancer treatment options is an emotionally exhausting experience for patients and families. Denvax, a pioneer in dendritic cell-based cellular immunotherapy, needed clear, compassionate, and scientifically accurate video content to explain treatment mechanisms and restore hope.",
      "objective": "Demystify complex cellular oncology concepts, coordinate authentic doctor dialogues, and document real patient recovery journeys without sensationalism or medical exaggeration.",
      "role": "Digital Content Producer — planned medical interview scripts, operated camera and wireless lavalier microphones in clinic rooms, directed doctor interviews, and managed Denvax's official YouTube channel.",
      "strategy": [
        "Structured physician interviews as reassuring, plain-language conversations answering the most common queries families bring to consultations.",
        "Designed clear visual illustrations explaining how a patient's own immune cells are trained in the laboratory to target tumor antigens.",
        "Maintained strict ethical standards: every script and video claim was verified directly with senior medical practitioners."
      ],
      "execution": [
        "Set up portable lighting and dual-mic audio kits in clinic consultation rooms between patient appointment windows.",
        "Conducted respectful, gentle interviews with recovering patients and caregivers, letting them share their recovery timelines at their own comfort level.",
        "Edited in Adobe Premiere Pro with subtitle tracks, medical lower-thirds, and empathetic background scores; optimized YouTube metadata for patient search queries."
      ],
      "results": [
        "Built steady organic subscriber growth and high average watch time on Denvax's official YouTube channel.",
        "Families frequently reported feeling informed and calm after watching the doctor explanation videos before their first visit.",
        "Established Denvax's digital presence as an authoritative, transparent center for advanced cellular immunotherapy."
      ],
      "lessons": [
        "Healthcare video production requires deep empathy and patience. A calm, well-lit interview with clear audio builds more patient trust than any advertising campaign."
      ]
    }
  },
  {
    "id": "tatsat-impact-documentaries",
    "slug": "tatsat-impact-documentaries",
    "title": "Tatsat Chronicle Social & Corporate CSR Media",
    "category": "Social Impact & CSR",
    "organization": "Tatsat Chronicle",
    "period": "Mar 2021 – Oct 2022 · 1 yr 8 mos",
    "description": "On-ground documentary reporting, environmental features, and social sector storytelling for India's leading CSR and development magazine.",
    "gradient": "from-green-900 via-slate-900 to-neutral-950",
    "image": "/images/projects/tatsat.svg",
    "badge": "Social Journalism",
    "stats": [
      {
        "label": "Role",
        "value": "Digital Producer"
      },
      {
        "label": "Focus",
        "value": "CSR & Ecology"
      },
      {
        "label": "Medium",
        "value": "Print & Video"
      },
      {
        "label": "Reach",
        "value": "National NGO/CSR"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Grassroots Water Conservation & Lake Rejuvenation Mini-Doc",
        "caption": "16:9 Video Slot — Embed ground-level environmental reporting documentary or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Corporate CSR Leadership Roundtable & ESG Dialogue",
        "caption": "16:9 Video Slot — Embed sustainability leader discussions and corporate panels.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Field Reporting Stills: Capturing Rural Changemakers",
        "caption": "Production photographs of ground-level interviews, village workshops, and camera rigs.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Magazine Editorial Spread vs. Digital Video Formats",
        "caption": "Visual showing how print investigative reporting was repurposed into interactive digital carousels.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Tatsat Chronicle covers India's social sector, ESG investments, and corporate CSR projects. As a pioneer magazine in this space, it needed engaging digital video content to accompany its in-depth print editions and reach online audiences on LinkedIn and Twitter/X.",
      "objective": "Produce authentic field video features, cover sustainability roundtables, and build a consistent multimedia presence that engages corporate CSR heads and NGO leaders.",
      "role": "Digital Content Producer — supervised digital content creation, directed on-location field video shoots, interviewed grassroots leaders, and coordinated digital media marketing.",
      "strategy": [
        "Traveled directly to project sites to show real on-ground challenges rather than accepting staged corporate promotional handouts.",
        "Repurposed 4,000-word investigative magazine articles into punchy, 2-minute video briefs with key data callouts.",
        "Connected corporate ESG goals with measurable ground outcomes: liters of water saved, saplings nurtured, and rural livelihoods created."
      ],
      "execution": [
        "Operated cameras and directional shotgun mics in demanding field conditions including village farm fields and riverbanks.",
        "Assembled narrative documentaries in Adobe Premiere Pro, combining field b-roll, expert soundbites, and animated data infographics.",
        "Managed weekly social media publishing schedules, crafting informative copy and engaging relevant development stakeholders."
      ],
      "results": [
        "Produced multiple video series on water management, rural education, and healthcare that earned widespread acclaim across the CSR community.",
        "Grew Tatsat Chronicle's digital readership among foundation directors, sustainability officers, and academic researchers.",
        "Strengthened the magazine's authority as the definitive multimedia bridge between corporate funders and grassroots implementers."
      ],
      "lessons": [
        "The best social sector stories focus on the perseverance of local community members rather than just the corporate funding logo."
      ]
    }
  },
  {
    "id": "sunday-headlines-production",
    "slug": "sunday-headlines-production",
    "title": "The Sunday Headlines Newsroom & Field Media",
    "category": "Video Production",
    "organization": "The Sunday Headlines",
    "period": "Nov 2016 – Nov 2018 · 2 yrs 1 mo",
    "description": "Directing daily newsroom video bulletins, on-ground field reporting, multi-camera operations, and rapid turnaround editing for web news portal.",
    "gradient": "from-indigo-950 via-slate-900 to-neutral-950",
    "image": "/images/projects/sunday-headlines.svg",
    "badge": "Broadcast Media",
    "stats": [
      {
        "label": "Role",
        "value": "Head of Media"
      },
      {
        "label": "Tenure",
        "value": "2 Yrs 1 Mo"
      },
      {
        "label": "Workflow",
        "value": "Daily News Desk"
      },
      {
        "label": "Promotion",
        "value": "Editor to Head"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Daily Web News Bulletin & Primetime Lead Package",
        "caption": "16:9 Video Slot — Embed web news broadcast package, anchor bulletin, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "On-Ground Investigative Field Report & Public Vox-Pop",
        "caption": "16:9 Video Slot — Embed ground reporting snippet, civic issue package, or field camera clip.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Newsroom PCR Desk & Multi-Track Audio Mixing",
        "caption": "Studio control room photo showing timeline editing, teleprompter control, and monitor feeds.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Field Reporting & Live Street Camera Setup",
        "caption": "Location photograph of DSLR rig, handheld mic, and on-the-go news capture across Delhi NCR.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Producing independent web journalism during the rise of digital news portals meant operating with speed, journalistic precision, and tight budgets. Every story needed fast editorial verification, crisp shooting, and rapid publication.",
      "objective": "Deliver regular, high-credibility news bulletins and on-the-ground civic packages that grew portal readership across the NCR region.",
      "role": "Head of Media Production (promoted from Video Editor) — supervised studio teleprompter shoots, field camerawork, audio balancing, and post-production turnaround under daily newsroom deadlines.",
      "strategy": [
        "Created an organized newsroom schedule: morning topic selection, midday filming/reporting, afternoon editorial cutting, and evening release.",
        "Trained camera operators and junior editors on standardized framing, clean lapel mic placement, and rapid keyboard editing shortcuts.",
        "Emphasized verified regional facts and citizen voices over noisy sensationalism."
      ],
      "execution": [
        "Covered on-ground public events, press briefings, and civic issues across Delhi NCR with DSLR kits and mobile audio gear.",
        "Operated green-screen studio backgrounds, three-point lighting grids, and teleprompters for news anchors.",
        "Supervised editing in Adobe Premiere Pro, ensuring clean audio levels, accurate lower-thirds, and zero copyright issues before publishing."
      ],
      "results": [
        "Produced hundreds of video news bulletins and investigative field reports across a 2-year period.",
        "Steadily expanded digital readership through timely coverage of civic infrastructure, education, and regional developments.",
        "Earned promotion from Video Editor to Head of Media Production overseeing the entire media production department."
      ],
      "lessons": [
        "Newsroom deadlines teach you unbeatable production discipline. When a broadcast is scheduled, you learn to resolve technical challenges immediately without excuses."
      ]
    }
  },
  {
    "id": "helios-educational-media",
    "slug": "helios-educational-media",
    "title": "Helios Educore Digital Content & Web Management",
    "category": "Content Strategy",
    "organization": "Helios Educore",
    "period": "Jul 2020 – Feb 2021 · 8 mos",
    "description": "Structuring digital educational video channels, website management, and student acquisition campaigns for competitive exam preparation.",
    "gradient": "from-purple-950 via-indigo-950 to-neutral-950",
    "image": "/images/projects/helios.svg",
    "badge": "EdTech & Web",
    "stats": [
      {
        "label": "Role",
        "value": "Content Manager"
      },
      {
        "label": "Focus",
        "value": "EdTech Channels"
      },
      {
        "label": "Platform",
        "value": "Web & YouTube"
      },
      {
        "label": "Impact",
        "value": "Student Inbound"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Competitive Exam Strategy & Faculty Masterclass Series",
        "caption": "16:9 Video Slot — Embed recorded faculty lecture snippet, strategy explainer, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Student Success Testimonial & Learning Portal Walkthrough",
        "caption": "16:9 Video Slot — Embed student journey video and interactive course platform demo.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Portal Information Architecture & Course Landing Page",
        "caption": "Visual layout showing structured exam syllabus, batch dates, and registration funnels.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Educational Carousels & Problem-Solving Social Creatives",
        "caption": "Key concept infographics and cheat sheets designed for student social channels.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "As education transitioned online in 2020, Helios Educore needed structured digital channels, seamless web portal maintenance, and engaging educational video modules to support students preparing for competitive entrance examinations.",
      "objective": "Build consistent digital content workflows, optimize the official website for student inquiries, and produce high-retention video study sessions.",
      "role": "Digital Content Manager — managed official digital portals, created educational video modules, handled digital marketing creatives, and tracked student engagement metrics.",
      "strategy": [
        "Organized course materials into clear, topic-wise video playlists and modular guides, making self-study intuitive for students.",
        "Optimized landing page conversion paths with visible batch schedules, course syllabi, and direct inquiry forms.",
        "Designed social micro-content focusing on shortcut formulas, memory tips, and exam preparation checklists."
      ],
      "execution": [
        "Collaborated with subject matter faculty to record, edit, and optimize lecture videos with crisp audio and clean slides.",
        "Maintained and updated the official website, ensuring smooth form submissions and up-to-date course materials.",
        "Monitored video watch times and search query impressions to identify topics requiring additional explanatory videos."
      ],
      "results": [
        "Built a robust digital library of recorded lectures that enhanced student retention and course satisfaction.",
        "Increased organic website traffic and student enrollment inquiries through educational content discovery.",
        "Ensured seamless digital operations and rapid updates during peak entrance exam counseling windows."
      ],
      "lessons": [
        "In educational content, clean audio and legible graphics are far more important than complex visual effects. Students value clear teaching above all else."
      ]
    }
  },
  {
    "id": "vispl-employer-branding",
    "slug": "vispl-employer-branding",
    "title": "Vision India Employer Branding & #BharatAtWork",
    "category": "Employer Branding",
    "organization": "Vision India Services",
    "period": "May 2025 – Present · 1 yr 6 mos",
    "description": "Directing the #BharatAtWork series, executive thought leadership, employee recognition films, and multi-brand corporate communications.",
    "gradient": "from-amber-600 to-rose-900",
    "image": "/images/projects/vispl-employer-branding.svg",
    "badge": "Corporate Rep",
    "stats": [
      {
        "label": "Role",
        "value": "Marketing Manager"
      },
      {
        "label": "Scale",
        "value": "32,000+ Associates"
      },
      {
        "label": "Initiative",
        "value": "#BharatAtWork"
      },
      {
        "label": "Audience",
        "value": "70k+ Corporate"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "#BharatAtWork: Associate Worker Journey in Logistics & Manufacturing",
        "caption": "16:9 Video Slot — Embed employee documentary, warehouse associate story, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Annual Corporate Leadership Townhall & Foundation Day Recap",
        "caption": "16:9 Video Slot — Embed executive address, leadership milestones, or corporate event film.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Frontline Workforce Portrait Series & Workplace Moments",
        "caption": "Photography collection showing associate technicians, logistics workers, and office culture.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "LinkedIn Thought Leadership Carousels & Culture Highlights",
        "caption": "Visual layout of executive LinkedIn carousels on labor formalization and Great Place to Work.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "With over 32,000 associate employees deployed across India's supply chains and factories, Vision India Services required an authentic employer branding program that celebrated everyday frontline workers while strengthening corporate credibility with enterprise clients.",
      "objective": "Build employer pride, highlight workforce formalization, and position VISPL as a leading people-centric staffing institution.",
      "role": "Digital Marketing Manager — architected the #BharatAtWork storytelling series, directed culture films, managed executive LinkedIn communications, and coordinated corporate brand messaging.",
      "strategy": [
        "Created the '#BharatAtWork' initiative to tell the real, dignified stories of warehouse pickers, assembly technicians, and retail associates.",
        "Positioned senior leadership through grounded commentary on labor formalization, apprenticeships, and skilling trends.",
        "Aligned festive and cultural milestones (Rojgar Wali Diwali, Job Wali Chhath) with employee appreciation campaigns."
      ],
      "execution": [
        "Visited client operational hubs to interview associate employees and record authentic working conditions.",
        "Produced documentary video shorts for LinkedIn, pairing raw footage with candid employee voiceovers.",
        "Supervised executive messaging, townhall broadcasts, and corporate presentations for government and enterprise partners."
      ],
      "results": [
        "Elevated corporate LinkedIn reach, generating genuine engagement from enterprise HR heads and industry peers.",
        "Strengthened company reputation as a transparent, employee-first workforce partner.",
        "Built a reusable archive of authentic brand stories that serve client pitches and annual stakeholder reports."
      ],
      "lessons": [
        "Genuine employee pride cannot be fabricated in a boardroom. Showing actual people on the factory floor creates ten times more credibility than generic corporate buzzwords."
      ]
    }
  },
  {
    "id": "employ-india",
    "slug": "employ-india",
    "title": "Employ India Workforce Enablement Campaign",
    "category": "Digital Marketing",
    "organization": "Vision India Services",
    "period": "May 2025 – Present · 1 yr 6 mos",
    "description": "Integrated digital marketing and candidate acquisition campaign connecting youth in Tier-2/3 towns with enterprise hiring pipelines.",
    "gradient": "from-blue-700 to-indigo-900",
    "image": "/images/projects/employ-india.svg",
    "badge": "Flagship Initiative",
    "stats": [
      {
        "label": "Role",
        "value": "Campaign Lead"
      },
      {
        "label": "Reach",
        "value": "10M+ Pan-India"
      },
      {
        "label": "Funnels",
        "value": "Meta & WhatsApp"
      },
      {
        "label": "Outcome",
        "value": "Hiring Pipeline"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Employ India National Campaign Launch Film",
        "caption": "16:9 Video Slot — Embed campaign launch film, brand film, or YouTube video link.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Youth Placement Success Stories (Vernacular Reels)",
        "caption": "9:16 Video Slot — Short-form testimonial reels from candidates placed in manufacturing and retail.",
        "aspectRatio": "9:16"
      },
      {
        "type": "image",
        "title": "Campaign Microsite UI & Mobile Candidate Funnel",
        "caption": "Visual breakdown of high-conversion mobile-first candidate application pages.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Offline Skilling Center Walk-in Posters & Banners",
        "caption": "Visual display collateral used across regional skill centers and job fair drives.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Connecting aspirational youth in non-metro towns with large-scale hiring mandates in manufacturing, logistics, and retail required a structured digital campaign that simplified job search and eliminated candidate skepticism.",
      "objective": "Unify skilling and placement drives under the 'Employ India' banner and drive verified job candidate registrations across Tier-2 and Tier-3 regions.",
      "role": "Digital Marketing Manager — oversaw digital campaign strategy, creative asset production, ad targeting, and applicant routing.",
      "strategy": [
        "Structured a multi-stage funnel: inspiring vernacular awareness video -> streamlined mobile landing page -> instant WhatsApp confirmation.",
        "Addressed core candidate doubts upfront: zero registration fee, verified company names, transparent salary ranges, and free skill training.",
        "Segmented campaigns geographically to align with active client hiring drives in specific industrial belts."
      ],
      "execution": [
        "Collaborated with recruitment heads and regional teams to map weekly vacancy requirements.",
        "Built and deployed Meta Lead Ads, localized Google Search campaigns, and conversational WhatsApp onboarding sequences.",
        "Reviewed cost-per-registration daily, reallocating ad spend toward regional creatives with the highest interview show-up rates."
      ],
      "results": [
        "Generated millions of targeted impressions across regional youth cohorts.",
        "Delivered a consistent flow of qualified candidates into enterprise placement pipelines within 24-48 hours.",
        "Significantly lowered applicant acquisition cost compared to traditional print advertisements."
      ],
      "lessons": [
        "Tier-2/3 candidates value transparency above all. Explicitly showing salary ranges and company logos on thumbnails triples click-through rates."
      ]
    }
  },
  {
    "id": "just-job",
    "slug": "just-job",
    "title": "Just Job Vernacular Recruitment Marketing",
    "category": "Digital Marketing",
    "organization": "Just Job",
    "period": "2024 – 2025",
    "description": "Multi-lingual social media marketing and candidate pipeline generation targeting ITI and diploma holders across industrial clusters.",
    "gradient": "from-violet-600 to-purple-950",
    "image": "/images/projects/just-job.svg",
    "badge": "Candidate Acquisition",
    "stats": [
      {
        "label": "Role",
        "value": "Marketing Lead"
      },
      {
        "label": "Focus",
        "value": "ITI & Diploma"
      },
      {
        "label": "Languages",
        "value": "6 Regional"
      },
      {
        "label": "Turnaround",
        "value": "<24h Routing"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Vernacular Guide: How Industrial Technicians Find Verified Jobs",
        "caption": "16:9 Video Slot — Embed candidate instructional video, Hindi tutorial, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Urgent Walk-in Hiring Drive Snippets",
        "caption": "9:16 Video Slot — Fast-turnaround walk-in recruitment reels filmed at industrial estates.",
        "aspectRatio": "9:16"
      },
      {
        "type": "image",
        "title": "Trade-Specific Social Creative Cards (Fitter, CNC, Electrician)",
        "caption": "High-contrast social cards with transparent wage brackets, location pins, and company names.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "WhatsApp Automated Candidate Onboarding Flow",
        "caption": "Step-by-step schematic of frictionless conversational job-matching chatbot.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "India's manufacturing sector faces an acute shortage of skilled technicians, while ITI and polytechnic graduates struggle to find verified, non-exploitative openings near their hometowns. Just Job serves this specialized industrial segment.",
      "objective": "Establish Just Job as the trusted platform for blue-collar and technical hiring, driving app downloads and job applications across major industrial hubs.",
      "role": "Digital Marketing Manager — planned social campaigns, coordinated regional video guides, ran paid acquisition, and built applicant nurture workflows.",
      "strategy": [
        "Produced hyper-localized content segmented by technical trade: CNC operators, fitters, electricians, welders, and warehouse staff.",
        "Deployed short video tutorials in Hindi, Bengali, Odia, Telugu, and Malayalam showing exactly how to register without complex paperwork.",
        "Integrated instant WhatsApp job alerts to reduce reliance on emails, which blue-collar candidates rarely check."
      ],
      "execution": [
        "Created daily job opportunity cards with clear location pins, shift timings, and starting salaries.",
        "Collaborated with regional field recruiters to capture quick testimonial clips from candidates during walk-in interview days.",
        "Optimized Meta and Google campaign targeting toward technical training clusters and industrial corridors."
      ],
      "results": [
        "Substantially expanded candidate registrations across Northern and Eastern industrial zones.",
        "Maintained high response rates by connecting applicants directly with recruitment desks within hours of submission.",
        "Established Just Job's brand equity as a genuine, fee-free platform among trade apprentice groups."
      ],
      "lessons": [
        "For technical candidates, SMS and WhatsApp automation beats email by a ratio of 20 to 1. Mobile immediacy is everything."
      ]
    }
  },
  {
    "id": "liveskills",
    "slug": "liveskills",
    "title": "LiveSkills E-Learning & Professional Certifications",
    "category": "Content Strategy",
    "organization": "LiveSkills",
    "period": "2024 – 2025",
    "description": "Course positioning, syllabus explainer modules, and digital certification campaigns for POSH compliance and professional upskilling.",
    "gradient": "from-emerald-600 to-teal-950",
    "image": "/images/projects/liveskills.svg",
    "badge": "EdTech Growth",
    "stats": [
      {
        "label": "Role",
        "value": "Content Strategist"
      },
      {
        "label": "Courses",
        "value": "POSH & Skills"
      },
      {
        "label": "Alignment",
        "value": "NSDC Aligned"
      },
      {
        "label": "Audience",
        "value": "HRs & Learners"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "POSH Compliance: Corporate Responsibility & Legal Frameworks",
        "caption": "16:9 Video Slot — Embed trainer explainer, corporate compliance preview, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "LiveSkills Professional Certification Walkthrough",
        "caption": "16:9 Video Slot — Embed course curriculum walkthrough and student LMS orientation.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Course Syllabus Infographics & Student LMS Interface",
        "caption": "Modular breakdowns explaining legal mandates, POSH committee roles, and timelines.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Certification Authority Badges & Corporate Batch One-Pagers",
        "caption": "Marketing collateral built for enterprise HR heads and compliance audit teams.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Modern workplaces require mandatory compliance certifications (such as Prevention of Sexual Harassment - POSH) alongside vocational upskilling. LiveSkills needed an authoritative content strategy to reach individual professionals and corporate HR heads.",
      "objective": "Position LiveSkills' courses as authoritative, practical, and career-enhancing, driving individual enrollments and corporate group training inquiries.",
      "role": "Digital Marketing Manager — developed course value propositions, designed promotional collateral, managed digital distribution, and ran lead campaigns.",
      "strategy": [
        "Framed POSH and workplace safety not just as dry statutory obligations, but as vital pillars of healthy company culture and legal protection.",
        "Created bite-sized carousels explaining real-world workplace scenarios, POSH committee roles, and investigation guidelines.",
        "Produced instructor introduction videos establishing trainer credentials and interactive workshop formats."
      ],
      "execution": [
        "Built clear curriculum landing pages detailing learning hours, evaluation criteria, and certificate validity.",
        "Managed targeted LinkedIn campaigns directed at HR managers, compliance officers, and department heads.",
        "Automated digital inquiry responses, providing downloadable course brochures and syllabus previews immediately."
      ],
      "results": [
        "Generated steady corporate inquiries for bulk team compliance certifications.",
        "Improved organic social engagement on LinkedIn through informative compliance explainer carousels.",
        "Enhanced course completion rates by providing clear onboarding orientations for enrolled students."
      ],
      "lessons": [
        "Compliance courses need credibility markers: reference government acts, legal precedents, and official accreditation to earn corporate trust."
      ]
    }
  },
  {
    "id": "greencall-seo",
    "slug": "greencall-seo",
    "title": "GreenCall HRMS Platform Architecture & Demo Growth",
    "category": "Web & Platforms",
    "organization": "GreenCall",
    "period": "2024",
    "description": "B2B SaaS website architecture, informational compliance pillars, and landing page conversion optimization for enterprise HRMS.",
    "gradient": "from-teal-600 to-cyan-900",
    "image": "/images/projects/greencall-seo.svg",
    "badge": "B2B SaaS",
    "stats": [
      {
        "label": "Role",
        "value": "Web & Marketing"
      },
      {
        "label": "Product",
        "value": "GreenHR Platform"
      },
      {
        "label": "Focus",
        "value": "Demo Inbound"
      },
      {
        "label": "Impact",
        "value": "Rankings & Leads"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "GreenHR Platform Overview: Attendance & Automated Payroll",
        "caption": "16:9 Video Slot — Embed software product demo video, feature overview, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Enterprise Onboarding & Statutory Compliance Module",
        "caption": "16:9 Video Slot — Embed walkthrough of PF, ESI, TDS, and attendance rules in GreenHR.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Technical SEO Hierarchy & Search Console Performance Dashboard",
        "caption": "Keyword ranking graphs and organic search growth snapshots for Indian HR queries.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Enterprise Demo Landing Page High-Converting Layout",
        "caption": "UI layout showing value proposition, feature comparison matrix, and instant demo booking.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "GreenCall's HRMS solution (GreenHR) offers end-to-end employee lifecycle management, geo-attendance, automated payroll, and statutory compliance. Competing in a crowded Indian HR tech space required targeted web presence and high-intent inbound acquisition.",
      "objective": "Improve organic search visibility for Indian payroll and compliance terms, streamline website messaging, and increase qualified demo requests from HR leaders.",
      "role": "Digital Marketing Manager — conducted competitor benchmarking, overhauled website copy and structure, and optimized inbound demo funnels.",
      "strategy": [
        "Audited core competitor websites to uncover high-intent B2B search topics: PF calculation rules, ESI compliance, biometric attendance integration, and automated salary slip generation.",
        "Structured modular product feature pages that clearly addressed HR pain points (payroll errors, compliance penalties, attendance fraud).",
        "Simplified the demo request process from a cumbersome questionnaire to a frictionless, calendar-linked form."
      ],
      "execution": [
        "Restructured website metadata, heading tags (H1-H3), and internal linking to establish clear topical relevance.",
        "Created informational compliance guides explaining Indian statutory deductions (PF, ESI, TDS, PT) that attract organic HR search traffic.",
        "Optimized page load speed and mobile responsiveness for decision-makers browsing on smartphones."
      ],
      "results": [
        "Doubled organic impressions across key HRMS and payroll compliance keywords in Google Search Console.",
        "Generated a consistent stream of qualified inbound enterprise demo requests without relying solely on paid ads.",
        "Strengthened GreenCall's market perception as a robust, compliant HR software solution for Indian enterprises."
      ],
      "lessons": [
        "In B2B HR tech, buyers search for solutions to urgent regulatory headaches (like PF revisions or tax changes). Solving their questions builds immediate software trust."
      ]
    }
  },
  {
    "id": "niyukti-shakti",
    "slug": "niyukti-shakti",
    "title": "Niyukti Shakti Women Skilling Documentary Series",
    "category": "Social Impact & CSR",
    "organization": "Talent Foundation",
    "period": "2024",
    "description": "Documentary video series capturing rural women mastering technical trades and renewable energy assembly under SECI-backed CSR programs.",
    "gradient": "from-orange-600 to-red-900",
    "image": "/images/projects/niyukti-shakti.svg",
    "badge": "Impact Film",
    "stats": [
      {
        "label": "Role",
        "value": "Video Director"
      },
      {
        "label": "Client",
        "value": "SECI CSR / Talent"
      },
      {
        "label": "Format",
        "value": "Documentary Reel"
      },
      {
        "label": "Subject",
        "value": "Women in Green Jobs"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Niyukti Shakti: Women Powering India's Green Energy Workforce",
        "caption": "16:9 Video Slot — Embed flagship CSR documentary, YouTube feature, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Classroom to Workshop: Hands-On Technical Training Reel",
        "caption": "16:9 Video Slot — Embed solar assembly lab work, practical tool handling, or candidate interview.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Rural Training Center Photography & Assembly Line Stills",
        "caption": "On-site photos showing female trainees assembling solar circuits and safety gear.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Graduation & Certificate Distribution Stakeholder Deck",
        "caption": "Official presentation images featuring government officials and certified graduates.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Talent Foundation partnered on CSR initiatives backed by Solar Energy Corporation of India (SECI) to train rural women in solar equipment assembly, electrical wiring, and technical trades. High-impact video storytelling was needed to showcase program outcomes to public stakeholders.",
      "objective": "Document the transformation of rural women from homemakers into certified technical workers, preserving their authentic dignity while demonstrating measurable CSR impact.",
      "role": "Video Producer & Creative Director — traveled on location, handled interviews, recorded workshop footage, directed editorial post-production, and packaged final films for corporate reviews.",
      "strategy": [
        "Steered clear of staged corporate promotional tropes; let candidates speak candidly about family skepticism, personal perseverance, and first earnings.",
        "Captured detailed b-roll of hands-on technical work: circuit testing, soldering, solar panel assembly, and safety equipment handling.",
        "Paced the documentary series to highlight candidate progress from day one in class to certification day."
      ],
      "execution": [
        "Conducted multi-day filming across rural training centers, recording clean ambient audio and natural lighting inside workshops.",
        "Edited in Adobe Premiere Pro with sensitive musical score, color-graded footage, and accurate English/Hindi subtitles.",
        "Produced both full-length impact films for corporate stakeholder reviews and short teaser clips for social media."
      ],
      "results": [
        "Delivered marquee documentary films featured in annual CSR review meetings and government partner presentations.",
        "Achieved strong organic reach on LinkedIn, generating widespread praise from sustainability and skill development leaders.",
        "Encouraged higher female participation in subsequent skill development cohorts across participating districts."
      ],
      "lessons": [
        "When documenting social impact, respect for the subject is paramount. Let real human grit shine through rather than forcing artificial emotional drama."
      ]
    }
  },
  {
    "id": "community-environmental-drives",
    "slug": "community-environmental-drives",
    "title": "Yamuna Cleanliness & Lake Rejuvenation Drives",
    "category": "Social Impact & CSR",
    "organization": "Vrikshit Foundation & Talent Foundation",
    "period": "2022 – Present",
    "description": "Ground-level volunteer leadership on Yamuna riverbank cleanup drives, local waterbody restoration, and community tree plantation across Delhi NCR.",
    "gradient": "from-emerald-800 via-teal-950 to-neutral-950",
    "image": "/images/projects/vrikshit-cleanups.svg",
    "badge": "Community Action",
    "stats": [
      {
        "label": "Role",
        "value": "Volunteer Leader"
      },
      {
        "label": "Initiative",
        "value": "Yamuna Cleanup"
      },
      {
        "label": "CSR Partner",
        "value": "Talent Foundation"
      },
      {
        "label": "Action",
        "value": "500+ Trees Planted"
      }
    ],
    "mediaPlaceholders": [
      {
        "type": "video",
        "title": "Yamuna Riverbank Cleanliness Drive: Youth Volunteer Reel",
        "caption": "16:9 Video Slot — Embed ground cleanup video, volunteer action reel, or MP4.",
        "aspectRatio": "16:9"
      },
      {
        "type": "video",
        "title": "Talent Foundation Lake Cleanup & 500-Sapling Plantation Recap",
        "caption": "16:9 Video Slot — Embed waterbody restoration and community tree planting summary film.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Ground Action Stills: Riverbank Waste Segregation & Hauling",
        "caption": "Unvarnished photography of volunteer squads hauling non-biodegradable plastics from riverbanks.",
        "aspectRatio": "16:9"
      },
      {
        "type": "image",
        "title": "Community Plantation Drive & Sapling Care Session",
        "caption": "Photographs showing indigenous sapling planting and soil conditioning around restored water bodies.",
        "aspectRatio": "16:9"
      }
    ],
    "overview": {
      "context": "Environmental degradation in Delhi NCR calls for urgent citizen action beyond theoretical awareness. From heavily polluted Yamuna riverbanks to neglected neighborhood waterbodies, direct physical cleanups make an immediate difference.",
      "objective": "Mobilize young volunteers for weekly riverbank cleanup drives with Vrikshit Foundation, and organize corporate CSR lake cleanup and sapling plantation drives with Talent Foundation.",
      "role": "Volunteer Coordinator & Media Documenter — participated on the ground with gloves and boots, coordinated volunteer squads, documented before-and-after transformations, and engaged local communities.",
      "strategy": [
        "Organized early morning volunteer shifts, providing clear waste segregation protocols (plastics, glass, ceremonial waste, bio-degradable matter).",
        "Coordinated logistics: safety gloves, heavy-duty collection sacks, local municipal pickup coordination, and first aid readiness.",
        "Partnered with Talent Foundation to run CSR lake cleanup drives combined with native tree plantation to prevent post-cleanup soil erosion."
      ],
      "execution": [
        "Participated in grueling on-ground cleanup drives along the Yamuna ghats, clearing metric tons of non-biodegradable waste.",
        "Led volunteer groups in digging pits, conditioning soil, and planting over 500 indigenous saplings around restored water bodies.",
        "Captured unvarnished photos and video reels documenting volunteer energy and the tangible difference made in local public spaces."
      ],
      "results": [
        "Helped divert significant volumes of plastic and hazardous waste from polluting local waterways.",
        "Restored public lake boundaries with native greenery, creating community pride in local neighborhood ecology.",
        "Inspired corporate colleagues and youth volunteers to make environmental stewardship a regular weekend commitment."
      ],
      "lessons": [
        "Real change happens when you show up with a pair of boots and a trash bag. Theory inspires conversations, but on-ground sweat inspires lasting community action."
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
    role: "Head of Media Production",
    organization: "The Sunday Headlines",
    period: "Nov 2016 – Nov 2018 · 2 yrs 1 mo",
    description: "Led studio video production, digital news publishing, and CMS portal management for a digital news and media platform. Built the critical operational foundation in digital content, editorial deadlines, and multimedia broadcasting.",
    skills: ["Head of Media Production", "Studio Video", "CMS Management", "Digital Publishing", "Video Production"]
  },
  {
    id: "helios",
    role: "Digital Content Manager",
    organization: "Helios Educore Pvt. Ltd.",
    period: "Jul 2020 – Feb 2021 · 8 mos",
    description: "Managed educational digital content development, video production workflows, and digital marketing outreach across educational platforms.",
    skills: ["Digital Content Manager", "Content Management", "Educational Media", "Digital Outreach", "Video Production"]
  },
  {
    id: "tatsat",
    role: "Digital Content Producer",
    organization: "Tatsat Chronicle",
    period: "Mar 2021 – Oct 2022 · 1 yr 8 mos",
    description: "Produced long-form interviews, issue-based documentaries, and multimedia storytelling focused on public policy, social development, and grassroots narratives for premier impact media publication.",
    skills: ["Digital Content Producer", "Long-form Documentary", "Multimedia Storytelling", "Editorial Workflows", "Social Impact"]
  },
  {
    id: "denvax",
    role: "Digital Content Producer",
    organization: "Denvax",
    period: "Oct 2022 – Mar 2023 · 6 mos",
    description: "Produced patient education video content, simplified complex medical communication, coordinated doctor interviews, and built patient trust across digital channels for cancer immunotherapy clinic.",
    skills: ["Digital Content Producer", "Healthcare Marketing", "Educational Video", "Brand Trust", "Patient Education"]
  },
  {
    id: "meena-bazaar",
    role: "Video Producer",
    organization: "Meena Bazaar",
    period: "Feb 2024 – May 2025 · 1 yr 4 mos",
    description: "Led branded video production, creative direction, scripted on-model shoots, supervised post-production, and worked with marketing and branding teams on seasonal launches and retail campaigns for iconic luxury fashion house.",
    skills: ["Video Producer", "Creative Direction", "Scripting", "Retail Campaigns", "Post-Production", "Fashion Marketing"]
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
