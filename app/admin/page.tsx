"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Lock, 
  Save, 
  Eye, 
  Upload, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  BarChart3, 
  Briefcase, 
  FolderKanban, 
  BookOpen, 
  Layers,
  ArrowRight,
  FileText,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Star
} from "lucide-react";

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"profile" | "stats" | "resume" | "projects" | "insights" | "services" | "testimonials">("projects");

  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState<any>(null);

  // Expanded accordion states
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const [expandedArticle, setExpandedArticle] = useState<number | null>(0);

  // Load content
  const loadContent = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        setFormData(data);
      }
    } catch (e) {
      console.error("Failed to load content", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedPin = sessionStorage.getItem("admin_passcode");
    if (savedPin) {
      setPasscode(savedPin);
      setIsAuthenticated(true);
      loadContent();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === "admin123" || passcode.trim().length > 0) {
      sessionStorage.setItem("admin_passcode", passcode);
      setIsAuthenticated(true);
      setAuthError("");
      loadContent();
    } else {
      setAuthError("Please enter the admin passcode (default: admin123)");
    }
  };

  const handleSave = async () => {
    if (!formData) return;
    setSaveStatus("saving");
    setStatusMessage("Saving updates to content.json...");

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode, data: formData }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSaveStatus("success");
        setStatusMessage("Website updated successfully! Changes are live.");
        setTimeout(() => setSaveStatus("idle"), 4000);
      } else {
        setSaveStatus("error");
        setStatusMessage(result.error || "Failed to save changes");
      }
    } catch (err: any) {
      setSaveStatus("error");
      setStatusMessage(err.message || "Network error");
    }
  };

  // Upload handler for photos & featured images
  const handleFileUpload = async (file: File): Promise<string | null> => {
    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (res.ok && result.url) {
        return result.url;
      }
      alert(result.error || "Upload failed");
      return null;
    } catch (err) {
      alert("Error uploading file");
      return null;
    }
  };

  // Helper to generate slug from title
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-3xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h1 className="text-2xl font-bold font-heading text-gray-900 dark:text-white">
              Admin Portal
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Enter admin passcode to customize portfolio content and articles
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter passcode (Default: admin123)"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-center"
            />

            {authError && <p className="text-xs text-red-500">{authError}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading || !formData) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-semibold text-gray-500">Loading content data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
              CMS Admin Control Panel
            </span>
          </div>
          <h1 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mt-0.5">
            Website Content &amp; Article Manager
          </h1>
          <p className="text-xs text-gray-500">
            Publish new projects, compose full blog essays, and customize media like WordPress.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Live Site</span>
          </Link>

          <button
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer disabled:opacity-70"
          >
            <Save className="w-4 h-4" />
            <span>{saveStatus === "saving" ? "Saving..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      {/* Save Notification Alert */}
      {saveStatus === "success" && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{statusMessage}</span>
        </div>
      )}
      {saveStatus === "error" && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 text-xs font-semibold flex items-center gap-2 shadow-sm">
          <AlertCircle className="w-4 h-4 text-red-600" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Main Admin Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Tabs (3 Cols) */}
        <div className="lg:col-span-3 space-y-2">
          <div className="p-2 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab("projects")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "projects"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Projects &amp; Case Studies</span>
            </button>

            <button
              onClick={() => setActiveTab("insights")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "insights"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog Posts &amp; Insights</span>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "profile"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile &amp; Hero Details</span>
            </button>

            <button
              onClick={() => setActiveTab("stats")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "stats"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Stats Strip (10M+ Reach)</span>
            </button>

            <button
              onClick={() => setActiveTab("resume")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "resume"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Resume &amp; Career Timeline</span>
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "services"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Services &amp; Capabilities</span>
            </button>

            <button
              onClick={() => setActiveTab("testimonials")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "testimonials"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Star className="w-4 h-4" />
              <span>Client &amp; Peer Testimonials</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs text-gray-500 space-y-1">
            <p className="font-semibold text-gray-700 dark:text-gray-300">💡 WordPress Style:</p>
            <p>Aap naye projects ya articles add kar sakte hain, featured images upload kar sakte hain aur pura detail section likh sakte hain.</p>
          </div>
        </div>

        {/* Content Editor Panels (9 Cols) */}
        <div className="lg:col-span-9">
          
          {/* TAB: PROJECTS & CASE STUDIES */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm">
                <div>
                  <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                    Projects &amp; Case Studies
                  </h2>
                  <p className="text-xs text-gray-500">
                    Add new projects with featured images, challenge, strategy, execution, and results.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newId = `project-${Date.now()}`;
                    const newProj = {
                      id: newId,
                      slug: `new-campaign-${Date.now()}`,
                      title: "New Strategic Campaign",
                      category: "Digital Marketing",
                      organization: "Vision India Services",
                      period: "2026",
                      description: "Brief summary of the campaign and business objective.",
                      image: "/images/projects/employ-india.svg",
                      badge: "New Project",
                      overview: {
                        context: "Business context and challenge addressed.",
                        objective: "Key objectives and targets to achieve.",
                        role: "Lead Marketing Strategist & Campaign Manager.",
                        strategy: ["Targeted audience segmentation", "Multi-channel distribution"],
                        execution: ["Deployed landing pages", "Automated email sequences"],
                        results: ["Achieved campaign milestone registrations"],
                        lessons: ["Iterative creative testing improves conversion"]
                      }
                    };
                    const updated = [newProj, ...(formData.projects || [])];
                    setFormData({ ...formData, projects: updated });
                    setExpandedProject(0);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Project</span>
                </button>
              </div>

              {/* Projects List with Expandable Article-Style Editor */}
              <div className="space-y-6">
                {formData.projects?.map((proj: any, idx: number) => {
                  const isExpanded = expandedProject === idx;
                  const overview = proj.overview || {};

                  return (
                    <div
                      key={proj.id || idx}
                      className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden"
                    >
                      {/* Accordion Header */}
                      <div
                        onClick={() => setExpandedProject(isExpanded ? null : idx)}
                        className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors border-b border-gray-100 dark:border-gray-800"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-900 border border-gray-200 dark:border-gray-700 flex-shrink-0">
                            {proj.image ? (
                              <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                            ) : (
                              <div className="w-full h-full bg-primary-600" />
                            )}
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600">
                              {proj.category}
                            </span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">
                              {proj.title}
                            </h3>
                            <p className="text-xs text-gray-500">
                              URL: <code>/portfolio/{proj.slug}</code> • {proj.organization}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Link
                            href={`/portfolio/${proj.slug}`}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg text-gray-400 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                            title="View Project Detail Page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Delete project "${proj.title}"?`)) {
                                const updated = formData.projects.filter((_: any, i: number) => i !== idx);
                                setFormData({ ...formData, projects: updated });
                              }
                            }}
                            className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40"
                            title="Delete Project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </div>
                      </div>

                      {/* Accordion Body: WordPress-style Rich Section Editor */}
                      {isExpanded && (
                        <div className="p-6 sm:p-8 space-y-6 bg-gray-50/50 dark:bg-[#1A1D21]/50">
                          
                          {/* Basic Metadata */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Project Title
                              </label>
                              <input
                                type="text"
                                value={proj.title}
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].title = e.target.value;
                                  if (!updated[idx].slug || updated[idx].slug.startsWith("new-campaign")) {
                                    updated[idx].slug = slugify(e.target.value);
                                  }
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-bold"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                URL Slug (e.g. /portfolio/your-slug)
                              </label>
                              <input
                                type="text"
                                value={proj.slug}
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].slug = slugify(e.target.value);
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Category
                              </label>
                              <input
                                type="text"
                                value={proj.category}
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].category = e.target.value;
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Organization / Client
                              </label>
                              <input
                                type="text"
                                value={proj.organization}
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].organization = e.target.value;
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Timeline / Period
                              </label>
                              <input
                                type="text"
                                value={proj.period}
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].period = e.target.value;
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                          </div>

                          {/* Featured Image Uploader */}
                          <div className="p-4 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 space-y-3">
                            <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                              Featured Image (Cover Photo)
                            </label>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                              <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-900 border border-gray-300 dark:border-gray-700 flex-shrink-0">
                                {proj.image ? (
                                  <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">No Image</div>
                                )}
                              </div>
                              <div className="flex-grow space-y-2 w-full">
                                <input
                                  type="text"
                                  value={proj.image || ""}
                                  placeholder="/images/projects/your-photo.svg"
                                  onChange={(e) => {
                                    const updated = [...formData.projects];
                                    updated[idx].image = e.target.value;
                                    setFormData({ ...formData, projects: updated });
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                                />
                                <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold cursor-pointer shadow-sm">
                                  <Upload className="w-3.5 h-3.5" />
                                  <span>Upload Photo File</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={async (e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        const url = await handleFileUpload(file);
                                        if (url) {
                                          const updated = [...formData.projects];
                                          updated[idx].image = url;
                                          setFormData({ ...formData, projects: updated });
                                        }
                                      }
                                    }}
                                    className="hidden"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Excerpt */}
                          <div>
                            <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                              Card Short Summary / Excerpt
                            </label>
                            <textarea
                              rows={2}
                              value={proj.description}
                              onChange={(e) => {
                                const updated = [...formData.projects];
                                updated[idx].description = e.target.value;
                                setFormData({ ...formData, projects: updated });
                              }}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                            />
                          </div>

                          {/* ARTICLE-STYLE CASE STUDY SECTIONS */}
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                            <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-wider">
                              <FileText className="w-4 h-4" />
                              <span>Full Case Study Article Sections (Detail Page Layout)</span>
                            </div>

                            {/* Section 1: Business Challenge & Context */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Section 1: Business Context &amp; Challenge
                              </label>
                              <textarea
                                rows={3}
                                value={overview.context || ""}
                                placeholder="Describe the market environment, corporate challenge, or recruitment constraints..."
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].overview = { ...overview, context: e.target.value };
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>

                            {/* Section 2: Objective & Role */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                  Section 2: Primary Objective
                                </label>
                                <textarea
                                  rows={2}
                                  value={overview.objective || ""}
                                  placeholder="What was the measurable goal?"
                                  onChange={(e) => {
                                    const updated = [...formData.projects];
                                    updated[idx].overview = { ...overview, objective: e.target.value };
                                    setFormData({ ...formData, projects: updated });
                                  }}
                                  className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                  Section 2: My Direct Role
                                </label>
                                <textarea
                                  rows={2}
                                  value={overview.role || ""}
                                  placeholder="Digital Marketing Manager leading..."
                                  onChange={(e) => {
                                    const updated = [...formData.projects];
                                    updated[idx].overview = { ...overview, role: e.target.value };
                                    setFormData({ ...formData, projects: updated });
                                  }}
                                  className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                                />
                              </div>
                            </div>

                            {/* Section 3: Strategic Approach (Multi-line) */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Section 3: Strategic Approach (1 bullet point per line)
                              </label>
                              <textarea
                                rows={3}
                                value={overview.strategy ? overview.strategy.join("\n") : ""}
                                placeholder="Targeted tier-2 regional audience&#10;Zero-friction landing experience&#10;Keynote authority positioning"
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  const points = e.target.value.split("\n").filter((p) => p.trim().length > 0);
                                  updated[idx].overview = { ...overview, strategy: points };
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>

                            {/* Section 4: Tactical Execution Steps (Multi-line) */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Section 4: Tactical Execution Steps (1 step per line)
                              </label>
                              <textarea
                                rows={3}
                                value={overview.execution ? overview.execution.join("\n") : ""}
                                placeholder="Coordinated multi-channel social campaign&#10;Integrated automated registration drip sequences&#10;Tracked live analytics and engagement"
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  const points = e.target.value.split("\n").filter((p) => p.trim().length > 0);
                                  updated[idx].overview = { ...overview, execution: points };
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>

                            {/* Section 5: Key Results & Metrics */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Section 5: Key Results Delivered (1 result per line)
                              </label>
                              <textarea
                                rows={3}
                                value={overview.results ? overview.results.join("\n") : ""}
                                placeholder="850+ live attendees with 78% retention&#10;Generated enterprise inbound leads"
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  const points = e.target.value.split("\n").filter((p) => p.trim().length > 0);
                                  updated[idx].overview = { ...overview, results: points };
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>

                            {/* Section 6: Lessons Learned */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Section 6: Strategic Takeaways &amp; Lessons (1 lesson per line)
                              </label>
                              <textarea
                                rows={2}
                                value={overview.lessons ? overview.lessons.join("\n") : ""}
                                placeholder="Localized storytelling out-converts corporate ads"
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  const points = e.target.value.split("\n").filter((p) => p.trim().length > 0);
                                  updated[idx].overview = { ...overview, lessons: points };
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>

                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB: BLOG POSTS & STRATEGIC THOUGHTS */}
          {activeTab === "insights" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm">
                <div>
                  <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                    Blog Posts &amp; Editorial Essays
                  </h2>
                  <p className="text-xs text-gray-500">
                    Write and compose complete blog posts with H2 headings, paragraphs, quotes, and key takeaways.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newId = `article-${Date.now()}`;
                    const newArt = {
                      id: newId,
                      slug: `new-insight-${Date.now()}`,
                      title: "New Strategic Marketing Essay",
                      category: "Marketing Strategy",
                      readTime: "5 min read",
                      date: "Oct 2026",
                      excerpt: "Summary excerpt introducing the core strategic premise of this article.",
                      image: "/images/insights/activity-vs-strategy.svg",
                      quote: "A memorable thought-leadership quote summarizing the central insight.",
                      sections: [
                        {
                          id: "intro",
                          heading: "1. The Industry Challenge",
                          paragraphs: [
                            "Write your first paragraph exploring the problem and market context...",
                            "Provide concrete observations from hands-on marketing execution."
                          ]
                        },
                        {
                          id: "solution",
                          heading: "2. Strategic Framework & Action Plan",
                          paragraphs: [
                            "Explain your proposed strategic methodology and why it delivers results."
                          ]
                        }
                      ],
                      takeaways: [
                        "Actionable strategic takeaway for marketing leaders.",
                        "Commercial alignment between marketing and revenue."
                      ]
                    };
                    const updated = [newArt, ...(formData.articles || [])];
                    setFormData({ ...formData, articles: updated });
                    setExpandedArticle(0);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write New Blog Post</span>
                </button>
              </div>

              {/* Articles List with WordPress-Style Block Composer */}
              <div className="space-y-6">
                {formData.articles?.map((art: any, idx: number) => {
                  const isExpanded = expandedArticle === idx;
                  const sections = art.sections || [];

                  return (
                    <div
                      key={art.id || idx}
                      className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden"
                    >
                      {/* Accordion Header */}
                      <div
                        onClick={() => setExpandedArticle(isExpanded ? null : idx)}
                        className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/40 transition-colors border-b border-gray-100 dark:border-gray-800"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-900 border border-gray-200 dark:border-gray-700 flex-shrink-0">
                            {art.image ? (
                              <Image src={art.image} alt={art.title} fill className="object-cover" />
                            ) : (
                              <div className="w-full h-full bg-primary-600" />
                            )}
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-600">
                              {art.category}
                            </span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">
                              {art.title}
                            </h3>
                            <p className="text-xs text-gray-500">
                              URL: <code>/insights/{art.slug}</code> • {art.readTime}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Link
                            href={`/insights/${art.slug}`}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg text-gray-400 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                            title="View Live Article Page"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (confirm(`Delete article "${art.title}"?`)) {
                                const updated = formData.articles.filter((_: any, i: number) => i !== idx);
                                setFormData({ ...formData, articles: updated });
                              }
                            }}
                            className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40"
                            title="Delete Article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </div>
                      </div>

                      {/* Accordion Body: WordPress-Style Article Composer */}
                      {isExpanded && (
                        <div className="p-6 sm:p-8 space-y-6 bg-gray-50/50 dark:bg-[#1A1D21]/50">
                          
                          {/* Article Meta */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Article Title
                              </label>
                              <input
                                type="text"
                                value={art.title}
                                onChange={(e) => {
                                  const updated = [...formData.articles];
                                  updated[idx].title = e.target.value;
                                  if (!updated[idx].slug || updated[idx].slug.startsWith("new-insight")) {
                                    updated[idx].slug = slugify(e.target.value);
                                  }
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-bold"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                URL Slug (e.g. /insights/your-slug)
                              </label>
                              <input
                                type="text"
                                value={art.slug}
                                onChange={(e) => {
                                  const updated = [...formData.articles];
                                  updated[idx].slug = slugify(e.target.value);
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Category
                              </label>
                              <input
                                type="text"
                                value={art.category}
                                onChange={(e) => {
                                  const updated = [...formData.articles];
                                  updated[idx].category = e.target.value;
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Read Time
                              </label>
                              <input
                                type="text"
                                value={art.readTime}
                                placeholder="e.g. 6 min read"
                                onChange={(e) => {
                                  const updated = [...formData.articles];
                                  updated[idx].readTime = e.target.value;
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Published Date
                              </label>
                              <input
                                type="text"
                                value={art.date}
                                placeholder="e.g. Oct 2026"
                                onChange={(e) => {
                                  const updated = [...formData.articles];
                                  updated[idx].date = e.target.value;
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                          </div>

                          {/* Featured Image Uploader */}
                          <div className="p-4 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 space-y-3">
                            <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                              Featured Image (Cover Artwork)
                            </label>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                              <div className="relative w-32 h-20 rounded-lg overflow-hidden bg-gray-900 border border-gray-300 dark:border-gray-700 flex-shrink-0">
                                {art.image ? (
                                  <Image src={art.image} alt={art.title} fill className="object-cover" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">No Image</div>
                                )}
                              </div>
                              <div className="flex-grow space-y-2 w-full">
                                <input
                                  type="text"
                                  value={art.image || ""}
                                  placeholder="/images/insights/your-artwork.svg"
                                  onChange={(e) => {
                                    const updated = [...formData.articles];
                                    updated[idx].image = e.target.value;
                                    setFormData({ ...formData, articles: updated });
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                                />
                                <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold cursor-pointer shadow-sm">
                                  <Upload className="w-3.5 h-3.5" />
                                  <span>Upload Photo File</span>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={async (e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        const url = await handleFileUpload(file);
                                        if (url) {
                                          const updated = [...formData.articles];
                                          updated[idx].image = url;
                                          setFormData({ ...formData, articles: updated });
                                        }
                                      }
                                    }}
                                    className="hidden"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Excerpt */}
                          <div>
                            <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                              Article Excerpt (Archive summary)
                            </label>
                            <textarea
                              rows={2}
                              value={art.excerpt}
                              onChange={(e) => {
                                const updated = [...formData.articles];
                                updated[idx].excerpt = e.target.value;
                                setFormData({ ...formData, articles: updated });
                              }}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                            />
                          </div>

                          {/* Callout Quote */}
                          <div>
                            <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                              Featured Blockquote / Callout Quote
                            </label>
                            <input
                              type="text"
                              value={art.quote || ""}
                              placeholder="e.g. Activity is easy to measure; strategy requires answering hard trade-offs."
                              onChange={(e) => {
                                const updated = [...formData.articles];
                                updated[idx].quote = e.target.value;
                                setFormData({ ...formData, articles: updated });
                              }}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs italic"
                            />
                          </div>

                          {/* WORDPRESS-STYLE FULL ARTICLE SECTIONS BUILDER */}
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-wider">
                                <BookOpen className="w-4 h-4" />
                                <span>Article Body &amp; Sections (WordPress Composer)</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...formData.articles];
                                  const currentSections = updated[idx].sections || [];
                                  const newSection = {
                                    id: `sec-${Date.now()}`,
                                    heading: `${currentSections.length + 1}. New Subheading H2`,
                                    paragraphs: ["Write the paragraphs for this section here..."]
                                  };
                                  updated[idx].sections = [...currentSections, newSection];
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 text-xs font-bold flex items-center gap-1"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add Section (H2)</span>
                              </button>
                            </div>

                            <div className="space-y-4">
                              {sections.map((sec: any, secIdx: number) => (
                                <div key={sec.id || secIdx} className="p-4 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase text-gray-400">
                                      Section Block #{secIdx + 1}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const updated = [...formData.articles];
                                        updated[idx].sections = updated[idx].sections.filter((_: any, sI: number) => sI !== secIdx);
                                        setFormData({ ...formData, articles: updated });
                                      }}
                                      className="text-red-500 hover:text-red-700 p-1"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>

                                  <input
                                    type="text"
                                    value={sec.heading}
                                    placeholder="Section Heading (H2)"
                                    onChange={(e) => {
                                      const updated = [...formData.articles];
                                      updated[idx].sections[secIdx].heading = e.target.value;
                                      setFormData({ ...formData, articles: updated });
                                    }}
                                    className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-sm font-bold"
                                  />

                                  <textarea
                                    rows={4}
                                    value={sec.paragraphs ? sec.paragraphs.join("\n\n") : ""}
                                    placeholder="Type your paragraphs here. Separate paragraphs with a blank line (double Enter)..."
                                    onChange={(e) => {
                                      const updated = [...formData.articles];
                                      const paras = e.target.value.split("\n\n").filter((p) => p.trim().length > 0);
                                      updated[idx].sections[secIdx].paragraphs = paras;
                                      setFormData({ ...formData, articles: updated });
                                    }}
                                    className="w-full px-3 py-2.5 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs leading-relaxed"
                                  />
                                </div>
                              ))}
                            </div>

                            {/* Key Takeaways */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Key Takeaways (1 takeaway per line)
                              </label>
                              <textarea
                                rows={3}
                                value={art.takeaways ? art.takeaways.join("\n") : ""}
                                placeholder="Strategy is fundamentally about choosing what not to do.&#10;Every initiative must lower CAC or boost LTV."
                                onChange={(e) => {
                                  const updated = [...formData.articles];
                                  const points = e.target.value.split("\n").filter((p) => p.trim().length > 0);
                                  updated[idx].takeaways = points;
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>

                          </div>

                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB: PROFILE & HERO */}
          {activeTab === "profile" && (
            <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Profile &amp; Hero Details
              </h2>

              {/* Photo Upload Section */}
              <div className="p-5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-24 h-28 rounded-xl overflow-hidden bg-gray-200 border border-gray-300 dark:border-gray-700 flex-shrink-0">
                  <Image
                    src={formData.profile.profilePhoto || "/images/deepanshu.webp"}
                    alt="Profile Preview"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left flex-grow">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Profile Photo</h4>
                  <p className="text-xs text-gray-500">
                    Current path: <code className="text-primary-600">{formData.profile.profilePhoto || "/images/deepanshu.webp"}</code>
                  </p>
                  <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold cursor-pointer shadow-sm">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload New Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const url = await handleFileUpload(file);
                          if (url) {
                            setFormData({
                              ...formData,
                              profile: { ...formData.profile, profilePhoto: url }
                            });
                          }
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Basic Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.profile.name || ""}
                    onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, name: e.target.value } })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                    Short Nav Name
                  </label>
                  <input
                    type="text"
                    value={formData.profile.shortName || ""}
                    onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, shortName: e.target.value } })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                    Tagline (Eyebrow text)
                  </label>
                  <input
                    type="text"
                    value={formData.profile.tagline || ""}
                    onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, tagline: e.target.value } })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                    Primary Role (H1)
                  </label>
                  <input
                    type="text"
                    value={formData.profile.roleH1 || ""}
                    onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, roleH1: e.target.value } })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                  Professional Bio
                </label>
                <textarea
                  rows={4}
                  value={formData.profile.bio || ""}
                  onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, bio: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Contact & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.profile.email || ""}
                    onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, email: e.target.value } })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.profile.location || ""}
                    onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, location: e.target.value } })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                  Availability Status Badge
                </label>
                <input
                  type="text"
                  value={formData.profile.statusBadge || ""}
                  onChange={(e) => setFormData({ ...formData, profile: { ...formData.profile, statusBadge: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          )}

          {/* TAB: STATS STRIP */}
          {activeTab === "stats" && (
            <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Key Metrics &amp; Stats Strip
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.stats?.map((stat: any, index: number) => (
                  <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 space-y-2">
                    <label className="block text-[11px] font-bold uppercase text-primary-600">
                      Stat Item #{index + 1}
                    </label>
                    <input
                      type="text"
                      value={stat.value}
                      placeholder="e.g. 10M+"
                      onChange={(e) => {
                        const newStats = [...formData.stats];
                        newStats[index].value = e.target.value;
                        setFormData({ ...formData, stats: newStats });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-900 dark:text-white"
                    />
                    <input
                      type="text"
                      value={stat.label}
                      placeholder="e.g. Audience Reach"
                      onChange={(e) => {
                        const newStats = [...formData.stats];
                        newStats[index].label = e.target.value;
                        setFormData({ ...formData, stats: newStats });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs text-gray-600 dark:text-gray-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: RESUME & TIMELINE */}
          {activeTab === "resume" && (
            <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                  Career Experience Timeline
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    const newItem = {
                      id: `exp-${Date.now()}`,
                      role: "New Role",
                      organization: "Company Name",
                      period: "2024 – Present",
                      description: "Add details of your marketing impact and responsibilities.",
                      skills: ["Marketing Strategy", "Campaigns"]
                    };
                    setFormData({ ...formData, timeline: [newItem, ...(formData.timeline || [])] });
                  }}
                  className="px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 text-xs font-bold flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Experience</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.timeline?.map((item: any, idx: number) => (
                  <div key={item.id || idx} className="p-5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 space-y-3 relative group">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold uppercase text-primary-600">
                        {item.isCurrent ? "★ Current Role" : `Milestone #${idx + 1}`}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          const newTimeline = formData.timeline.filter((_: any, i: number) => i !== idx);
                          setFormData({ ...formData, timeline: newTimeline });
                        }}
                        className="text-red-500 hover:text-red-700 p-1 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={item.role}
                        placeholder="Role / Title"
                        onChange={(e) => {
                          const newTimeline = [...formData.timeline];
                          newTimeline[idx].role = e.target.value;
                          setFormData({ ...formData, timeline: newTimeline });
                        }}
                        className="px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-semibold"
                      />
                      <input
                        type="text"
                        value={item.organization}
                        placeholder="Company / Organization"
                        onChange={(e) => {
                          const newTimeline = [...formData.timeline];
                          newTimeline[idx].organization = e.target.value;
                          setFormData({ ...formData, timeline: newTimeline });
                        }}
                        className="px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-semibold"
                      />
                    </div>

                    <input
                      type="text"
                      value={item.period}
                      placeholder="Period (e.g. 2023 – Present)"
                      onChange={(e) => {
                        const newTimeline = [...formData.timeline];
                        newTimeline[idx].period = e.target.value;
                        setFormData({ ...formData, timeline: newTimeline });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                    />

                    <textarea
                      rows={2}
                      value={item.description}
                      placeholder="Description of responsibilities and achievements"
                      onChange={(e) => {
                        const newTimeline = [...formData.timeline];
                        newTimeline[idx].description = e.target.value;
                        setFormData({ ...formData, timeline: newTimeline });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SERVICES */}
          {activeTab === "services" && (
            <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Services &amp; Capabilities
              </h2>

              <div className="space-y-4">
                {formData.services?.map((svc: any, idx: number) => (
                  <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 space-y-2">
                    <input
                      type="text"
                      value={svc.title}
                      placeholder="Service Title"
                      onChange={(e) => {
                        const newServices = [...formData.services];
                        newServices[idx].title = e.target.value;
                        setFormData({ ...formData, services: newServices });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-bold"
                    />
                    <textarea
                      rows={2}
                      value={svc.description}
                      placeholder="Service Description"
                      onChange={(e) => {
                        const newServices = [...formData.services];
                        newServices[idx].description = e.target.value;
                        setFormData({ ...formData, services: newServices });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: TESTIMONIALS */}
          {activeTab === "testimonials" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm">
                <div>
                  <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                    Client &amp; Leader Recommendations
                  </h2>
                  <p className="text-xs text-gray-500">
                    Manage authentic endorsements from colleagues, clients, and leaders (e.g. Ridhi Goel, Sidhi Goel).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newTestimonials = [
                      ...(formData.testimonials || []),
                      {
                        id: `testimonial-${Date.now()}`,
                        name: "New Recommender",
                        role: "Marketing Director",
                        organization: "Enterprise Partner",
                        relation: "Worked together on digital growth initiatives",
                        quote: "Deepanshu delivered exceptional results, combining strategic vision with hands-on campaign execution.",
                        rating: 5,
                        avatar: "/images/deepanshu.webp",
                        linkedin: "https://www.linkedin.com/in/deepanshu-kainthola/",
                      },
                    ];
                    setFormData({ ...formData, testimonials: newTestimonials });
                  }}
                  className="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Recommendation</span>
                </button>
              </div>

              <div className="space-y-4">
                {(formData.testimonials || []).map((t: any, idx: number) => (
                  <div
                    key={t.id || idx}
                    className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 p-6 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-xs font-bold uppercase text-primary-600">
                          Recommendation #{idx + 1}: {t.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm(`Delete recommendation from "${t.name}"?`)) {
                            const updated = formData.testimonials.filter((_: any, i: number) => i !== idx);
                            setFormData({ ...formData, testimonials: updated });
                          }
                        }}
                        className="text-gray-400 hover:text-red-600 p-1 cursor-pointer"
                        title="Delete recommendation"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={t.name}
                          onChange={(e) => {
                            const updated = [...formData.testimonials];
                            updated[idx].name = e.target.value;
                            setFormData({ ...formData, testimonials: updated });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                          Job Title / Role
                        </label>
                        <input
                          type="text"
                          value={t.role}
                          onChange={(e) => {
                            const updated = [...formData.testimonials];
                            updated[idx].role = e.target.value;
                            setFormData({ ...formData, testimonials: updated });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                          Organization / Company
                        </label>
                        <input
                          type="text"
                          value={t.organization}
                          onChange={(e) => {
                            const updated = [...formData.testimonials];
                            updated[idx].organization = e.target.value;
                            setFormData({ ...formData, testimonials: updated });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                          Working Relationship
                        </label>
                        <input
                          type="text"
                          value={t.relation}
                          onChange={(e) => {
                            const updated = [...formData.testimonials];
                            updated[idx].relation = e.target.value;
                            setFormData({ ...formData, testimonials: updated });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                        Endorsement Quote
                      </label>
                      <textarea
                        rows={3}
                        value={t.quote}
                        onChange={(e) => {
                          const updated = [...formData.testimonials];
                          updated[idx].quote = e.target.value;
                          setFormData({ ...formData, testimonials: updated });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs leading-relaxed"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                          Avatar Photo / URL
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={t.avatar || ""}
                            onChange={(e) => {
                              const updated = [...formData.testimonials];
                              updated[idx].avatar = e.target.value;
                              setFormData({ ...formData, testimonials: updated });
                            }}
                            className="w-full px-3 py-2 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                          />
                          <label className="px-3 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold cursor-pointer flex-shrink-0">
                            <Upload className="w-3.5 h-3.5 inline mr-1" />
                            <span>Upload</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const url = await handleFileUpload(file);
                                  if (url) {
                                    const updated = [...formData.testimonials];
                                    updated[idx].avatar = url;
                                    setFormData({ ...formData, testimonials: updated });
                                  }
                                }
                              }}
                            />
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                          LinkedIn Profile URL
                        </label>
                        <input
                          type="text"
                          value={t.linkedin || ""}
                          onChange={(e) => {
                            const updated = [...formData.testimonials];
                            updated[idx].linkedin = e.target.value;
                            setFormData({ ...formData, testimonials: updated });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
