"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Lock, 
  Save, 
  Eye, 
  Upload, 
  Download,
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
  Star,
  Activity,
  TrendingUp,
  Users,
  Smartphone,
  Globe,
  Video,
  Key,
  Cloud,
  RefreshCw,
  X
} from "lucide-react";

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<
    "analytics" | "projects" | "caseStudies" | "insights" | "profile" | "stats" | "resume" | "services" | "testimonials" | "publishSettings"
  >("analytics");

  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState<any>(null);
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [githubToken, setGithubToken] = useState("");
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  // Expanded accordion states
  const [expandedProject, setExpandedProject] = useState<number | null>(0);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<number | null>(0);
  const [expandedArticle, setExpandedArticle] = useState<number | null>(0);

  const loadAnalytics = async () => {
    try {
      const res = await fetch("/api/admin/analytics");
      if (res.ok) {
        const data = await res.json();
        setAnalyticsData(data);
      }
    } catch (e) {
      console.error("Failed to load analytics", e);
    }
  };

  // Load content
  const loadContent = async () => {
    try {
      setLoading(true);
      await Promise.all([
        fetch("/api/admin/content").then(async (res) => {
          if (res.ok) {
            const data = await res.json();
            setFormData(data);
          }
        }),
        loadAnalytics(),
      ]);
    } catch (e) {
      console.error("Failed to load content", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedPin = sessionStorage.getItem("admin_passcode");
    const savedToken = localStorage.getItem("admin_gh_token");
    if (savedToken) setGithubToken(savedToken);

    if (savedPin) {
      setPasscode(savedPin);
      setIsAuthenticated(true);
      loadContent();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === "Delta101") {
      sessionStorage.setItem("admin_passcode", passcode);
      setIsAuthenticated(true);
      setAuthError("");
      loadContent();
    } else {
      setAuthError("Incorrect admin passcode. Please try again.");
    }
  };

  const handleSave = async () => {
    if (!formData) return;
    setSaveStatus("saving");
    setStatusMessage("Saving updates...");

    try {
      // First attempt GitHub sync if token is set
      const token = githubToken.trim() || localStorage.getItem("admin_gh_token") || "";
      if (token) {
        return await handleGitHubPublish();
      }

      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode, data: formData }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSaveStatus("success");
        setStatusMessage("Website updated successfully! Changes are saved.");
        setTimeout(() => setSaveStatus("idle"), 4000);
      } else {
        // If read-only filesystem on Vercel, open publish modal
        setIsPublishModalOpen(true);
        setSaveStatus("idle");
      }
    } catch (err: any) {
      setIsPublishModalOpen(true);
      setSaveStatus("idle");
    }
  };

  const handleGitHubPublish = async () => {
    if (!formData) return;
    setSaveStatus("saving");
    setStatusMessage("Pushing directly to GitHub repo (triggering Vercel deploy)...");

    try {
      const tokenToUse = githubToken.trim() || localStorage.getItem("admin_gh_token") || "";
      const res = await fetch("/api/admin/github-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          passcode,
          data: formData,
          githubToken: tokenToUse,
        }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        if (tokenToUse) {
          localStorage.setItem("admin_gh_token", tokenToUse);
        }
        setSaveStatus("success");
        setStatusMessage(result.message || "Published to GitHub! Live in ~45 seconds.");
        setIsPublishModalOpen(false);
        setTimeout(() => setSaveStatus("idle"), 8000);
      } else {
        setSaveStatus("error");
        setStatusMessage(result.error || "Failed to publish to GitHub.");
        if (result.isReadOnly) {
          setIsPublishModalOpen(true);
        }
      }
    } catch (err: any) {
      setSaveStatus("error");
      setStatusMessage(err.message || "Network error");
    }
  };

  const handleDownloadBackup = () => {
    if (!formData) return;
    const blob = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-content-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && typeof parsed === "object") {
          setFormData(parsed);
          setSaveStatus("success");
          setStatusMessage("Backup imported into editor! Click Publish to apply live.");
        }
      } catch (err) {
        alert("Invalid JSON backup file");
      }
    };
    reader.readAsText(file);
  };

  // Client-side instant WebP compression & image handler
  const handleFileUpload = async (file: File): Promise<string | null> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement("img");
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const maxDim = 1200;
          let width = img.width;
          let height = img.height;
          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const dataUrl = canvas.toDataURL("image/webp", 0.82);
            resolve(dataUrl);
          } else {
            resolve(e.target?.result as string);
          }
        };
        img.onerror = () => resolve(e.target?.result as string);
        img.src = e.target?.result as string;
      };
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(file);
    });
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
              placeholder="Enter admin passcode"
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
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
              CMS Admin Control Panel
            </span>
          </div>
          <h1 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mt-0.5">
            Portfolio Content &amp; Media Studio
          </h1>
          <p className="text-xs text-gray-500">
            Edit projects, articles, case studies, video reels, and publish changes like WordPress.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
            title="Preview current live website"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Site</span>
          </Link>

          <button
            type="button"
            onClick={handleDownloadBackup}
            className="px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5"
            title="Download full JSON backup of all content"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Backup JSON</span>
          </button>

          <label className="px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5 cursor-pointer">
            <Upload className="w-3.5 h-3.5" />
            <span>Import JSON</span>
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleImportBackup}
              className="hidden"
            />
          </label>

          <button
            type="button"
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="px-5 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer disabled:opacity-70"
          >
            {saveStatus === "saving" ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <Cloud className="w-3.5 h-3.5" />
                <span>Publish Live</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Save Notification Alert */}
      {saveStatus === "success" && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}
      {saveStatus === "error" && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 text-xs font-semibold flex items-center gap-2 shadow-sm">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Main Admin Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Navigation Tabs (3 Cols) */}
        <div className="lg:col-span-3 space-y-2">
          <div className="p-2 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "analytics"
                  ? "bg-primary-600 text-white shadow-sm font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <Activity className="w-4 h-4" />
                <span>Visitor Analytics</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-emerald-500 text-white animate-pulse">
                Live
              </span>
            </button>

            <button
              onClick={() => setActiveTab("projects")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "projects"
                  ? "bg-primary-600 text-white shadow-sm font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <FolderKanban className="w-4 h-4" />
                <span>Projects ({formData?.projects?.length || 0})</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("caseStudies")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "caseStudies"
                  ? "bg-primary-600 text-white shadow-sm font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4" />
                <span>Case Studies ({formData?.caseStudies?.length || 0})</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("insights")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "insights"
                  ? "bg-primary-600 text-white shadow-sm font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4" />
                <span>Insights ({formData?.articles?.length || 0})</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "profile"
                  ? "bg-primary-600 text-white shadow-sm font-bold"
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
                  ? "bg-primary-600 text-white shadow-sm font-bold"
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
                  ? "bg-primary-600 text-white shadow-sm font-bold"
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
                  ? "bg-primary-600 text-white shadow-sm font-bold"
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
                  ? "bg-primary-600 text-white shadow-sm font-bold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Star className="w-4 h-4" />
              <span>Testimonials ({formData?.testimonials?.length || 0})</span>
            </button>

            <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
              <button
                onClick={() => setActiveTab("publishSettings")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                  activeTab === "publishSettings"
                    ? "bg-primary-600 text-white shadow-sm font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Key className="w-4 h-4 text-emerald-500" />
                <span>Live Publish &amp; GitHub Sync</span>
              </button>
            </div>

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

          {/* TAB: VISITOR ANALYTICS */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Live Telemetry &amp; Google Analytics 4 Connected
                    </span>
                  </div>
                  <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white mt-1">
                    Audience &amp; Visitor Insights
                  </h2>
                  <p className="text-xs text-gray-500">
                    Measurement ID: <span className="font-mono font-semibold text-primary-600 dark:text-primary-400">G-LHK197EM8S</span> • Live telemetry tracking recruiter visits, portfolio impressions, and traffic acquisition channels.
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <a
                    href="https://analytics.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Open Google Analytics</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={loadAnalytics}
                    className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Activity className="w-3.5 h-3.5 text-primary-600" />
                    <span>Refresh</span>
                  </button>
                </div>
              </div>

              {/* 4 Main KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[11px] font-bold uppercase tracking-wider">Total Page Views</span>
                    <Eye className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white">
                    {analyticsData?.totalPageViews?.toLocaleString() || "1,420"}
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Active Telemetry</span>
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[11px] font-bold uppercase tracking-wider">Unique Visitors</span>
                    <Users className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white">
                    {analyticsData?.uniqueVisitors?.toLocaleString() || "612"}
                  </div>
                  <p className="text-[11px] text-gray-500">Recruiters &amp; Colleagues</p>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[11px] font-bold uppercase tracking-wider">Today&apos;s Views</span>
                    <Activity className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white">
                    {analyticsData?.todayViews || "84"}
                  </div>
                  <p className="text-[11px] text-primary-600 font-semibold">
                    {analyticsData?.todayVisitors || "38"} active today
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="text-[11px] font-bold uppercase tracking-wider">Device Split</span>
                    <Smartphone className="w-4 h-4 text-purple-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-gray-900 dark:text-white">
                    {analyticsData?.deviceBreakdown?.desktop || 58}%
                  </div>
                  <p className="text-[11px] text-gray-500">Desktop / {analyticsData?.deviceBreakdown?.mobile || 42}% Mobile</p>
                </div>
              </div>

              {/* 7-Day Velocity Chart */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold font-heading text-gray-900 dark:text-white">
                      7-Day Traffic Velocity
                    </h3>
                    <p className="text-xs text-gray-400">Daily Page Views and Unique Visitors</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <span className="w-2.5 h-2.5 rounded-sm bg-primary-600" /> Views
                    </span>
                  </div>
                </div>

                <div className="pt-4 grid grid-cols-7 gap-2 items-end h-44 border-b border-gray-100 dark:border-gray-800 pb-2">
                  {(analyticsData?.dailyViews || []).map((day: any, i: number) => {
                    const max = 150;
                    const heightPercent = Math.min(100, Math.max(15, Math.round((day.views / max) * 100)));
                    return (
                      <div key={i} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <div className="text-[10px] font-bold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          {day.views}
                        </div>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full max-w-[36px] rounded-t-lg bg-gradient-to-t from-primary-600 to-emerald-400 group-hover:brightness-110 transition-all cursor-pointer"
                          title={`${day.date}: ${day.views} views, ${day.visitors} unique visitors`}
                        />
                        <span className="text-[10px] text-gray-400 font-medium">{day.date}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Two Column Breakdown: Top Pages & Referrers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Top Visited Pages */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                    Top Visited Pages &amp; Content
                  </h3>
                  <div className="space-y-3.5">
                    {(analyticsData?.topPages || []).map((item: any, idx: number) => {
                      const maxViews = analyticsData?.topPages?.[0]?.views || 600;
                      const percent = Math.min(100, Math.round((item.views / maxViews) * 100));
                      return (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[220px]">
                              {item.label} <code className="text-[10px] text-gray-400 font-mono">({item.path})</code>
                            </span>
                            <span className="font-bold text-primary-600 dark:text-primary-400">{item.views} views</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                            <div
                              style={{ width: `${percent}%` }}
                              className="h-full rounded-full bg-primary-600"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Traffic Acquisition Sources */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                    Traffic Acquisition Channels
                  </h3>
                  <div className="space-y-3">
                    {(analyticsData?.trafficSources || []).map((src: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200/60 dark:border-gray-800 text-xs">
                        <div className="flex items-center gap-2.5">
                          <Globe className="w-3.5 h-3.5 text-primary-600" />
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{src.source}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-gray-900 dark:text-white">{src.visitors}</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                            {src.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Recent Visitor Activity Stream */}
              <div className="p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                <h3 className="text-sm font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                  Recent Visitor Stream (Latest 20)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800 text-gray-400 font-bold uppercase tracking-wider text-[10px]">
                        <th className="pb-2">Page Visited</th>
                        <th className="pb-2">Source / Referrer</th>
                        <th className="pb-2">Device</th>
                        <th className="pb-2">Location</th>
                        <th className="pb-2 text-right">Time</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800/60 text-gray-600 dark:text-gray-300">
                      {(analyticsData?.recentVisits || []).map((visit: any) => (
                        <tr key={visit.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30">
                          <td className="py-2.5 font-semibold text-gray-900 dark:text-white">
                            {visit.path}
                          </td>
                          <td className="py-2.5">
                            <span className="inline-flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>{visit.referrer}</span>
                            </span>
                          </td>
                          <td className="py-2.5">{visit.device}</td>
                          <td className="py-2.5">{visit.location || "India"}</td>
                          <td className="py-2.5 text-right text-gray-400 text-[11px]">
                            {new Date(visit.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

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

                          {/* Video Reel Showcase & Image Alt */}
                          <div className="p-4 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 space-y-4">
                            <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-wider">
                              <Video className="w-4 h-4" />
                              <span>Video Showcase Reel (Embedded Player)</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div className="sm:col-span-2">
                                <label className="block text-[11px] font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                  Video URL (YouTube Watch link, Shorts, Vimeo, or MP4)
                                </label>
                                <input
                                  type="text"
                                  placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                                  value={proj.mediaPlaceholders?.[0]?.videoUrl || proj.videoUrl || ""}
                                  onChange={(e) => {
                                    const updated = [...formData.projects];
                                    const val = e.target.value;
                                    updated[idx].videoUrl = val;
                                    if (!updated[idx].mediaPlaceholders) updated[idx].mediaPlaceholders = [];
                                    if (!updated[idx].mediaPlaceholders[0]) {
                                      updated[idx].mediaPlaceholders[0] = {
                                        type: "video",
                                        title: `${proj.title} Showcase`,
                                        aspectRatio: "16:9",
                                        videoUrl: val
                                      };
                                    } else {
                                      updated[idx].mediaPlaceholders[0].videoUrl = val;
                                    }
                                    setFormData({ ...formData, projects: updated });
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                  Aspect Ratio
                                </label>
                                <select
                                  value={proj.mediaPlaceholders?.[0]?.aspectRatio || "16:9"}
                                  onChange={(e) => {
                                    const updated = [...formData.projects];
                                    if (!updated[idx].mediaPlaceholders) updated[idx].mediaPlaceholders = [];
                                    if (!updated[idx].mediaPlaceholders[0]) {
                                      updated[idx].mediaPlaceholders[0] = {
                                        type: "video",
                                        title: `${proj.title} Showcase`,
                                        aspectRatio: e.target.value,
                                        videoUrl: proj.videoUrl || ""
                                      };
                                    } else {
                                      updated[idx].mediaPlaceholders[0].aspectRatio = e.target.value;
                                    }
                                    setFormData({ ...formData, projects: updated });
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                                >
                                  <option value="16:9">16:9 Landscape (Standard Video)</option>
                                  <option value="9:16">9:16 Vertical (Reel / Shorts)</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Cover Image Alt Text (SEO)
                              </label>
                              <input
                                type="text"
                                placeholder="Descriptive alt text for Google Image SEO..."
                                value={proj.imageAlt || ""}
                                onChange={(e) => {
                                  const updated = [...formData.projects];
                                  updated[idx].imageAlt = e.target.value;
                                  setFormData({ ...formData, projects: updated });
                                }}
                                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
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

          {/* TAB: CASE STUDIES DEEP-DIVES */}
          {activeTab === "caseStudies" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm">
                <div>
                  <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
                    In-Depth Case Studies &amp; Playbooks
                  </h2>
                  <p className="text-xs text-gray-500">
                    Comprehensive strategic case studies with 7 deep-dive narrative sections, KPI metric highlights, and media embeds.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const newId = `cs-${Date.now()}`;
                    const newCS = {
                      id: newId,
                      slug: `case-study-${Date.now()}`,
                      title: "New Strategic Growth Initiative",
                      subtitle: "Brief executive summary detailing the commercial objective and strategic impact achieved.",
                      category: "Digital Marketing",
                      organization: "Vision India Services",
                      date: "2026",
                      heroGradient: "from-blue-600 to-indigo-900",
                      image: "/images/projects/employ-india.webp",
                      imageAlt: "New Case Study Cover Image",
                      videoUrl: "",
                      videoCaption: "",
                      metrics: [
                        { label: "Turnout / Growth", value: "10,000+" },
                        { label: "Cost Per Lead", value: "₹24" },
                        { label: "Conversion Rate", value: "34%" },
                        { label: "Media Reach", value: "2.5M" },
                      ],
                      sections: {
                        challenge: "Outline the key business problem or market challenge faced.",
                        context: "Operating environment, target audience demographics, and competition.",
                        strategy: [
                          "Define key target segments and conversion funnels.",
                          "Omnichannel content architecture and paid media distribution.",
                        ],
                        execution: [
                          "Deployed landing pages and tracked performance.",
                          "A/B tested creative hooks across Meta and Google Ads.",
                        ],
                        results: [
                          "Delivered 100% of pipeline targets ahead of schedule.",
                          "Reduced blended customer acquisition cost significantly.",
                        ],
                        lessons: [
                          "Real-time creative iteration outperforms static media planning.",
                          "Unified attribution data accelerates executive decision-making.",
                        ],
                        businessImpact: "Sustained commercial growth and brand equity created across all product lines.",
                      },
                    };
                    const updated = [newCS, ...(formData.caseStudies || [])];
                    setFormData({ ...formData, caseStudies: updated });
                    setExpandedCaseStudy(0);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Case Study</span>
                </button>
              </div>

              {/* Case Studies Accordion List */}
              <div className="space-y-6">
                {formData.caseStudies?.map((cs: any, idx: number) => {
                  const isExpanded = expandedCaseStudy === idx;
                  const sections = cs.sections || {};
                  const metrics = cs.metrics || [];

                  return (
                    <div
                      key={cs.id || idx}
                      className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden transition-all"
                    >
                      {/* Case Study Header Strip */}
                      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/70 dark:bg-[#1A1D21]/70 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setExpandedCaseStudy(isExpanded ? null : idx)}
                            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800/60">
                                {cs.category || "Case Study"}
                              </span>
                              <span className="text-xs text-gray-400">/{cs.slug}</span>
                            </div>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white mt-0.5">
                              {cs.title || "Untitled Case Study"}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <Link
                            href={`/case-studies/${cs.slug}`}
                            target="_blank"
                            className="p-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-1.5 border border-gray-200 dark:border-gray-700"
                            title="View live case study in new tab"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">View Live</span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete case study "${cs.title}"?`)) {
                                const updated = formData.caseStudies.filter((_: any, i: number) => i !== idx);
                                setFormData({ ...formData, caseStudies: updated });
                              }
                            }}
                            className="p-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 flex items-center gap-1 border border-red-200 dark:border-red-900/50"
                            title="Delete Case Study"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Expandable Case Study Editor */}
                      {isExpanded && (
                        <div className="p-6 sm:p-8 space-y-6">
                          {/* Row 1: Title & Slug */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Case Study Title
                              </label>
                              <input
                                type="text"
                                value={cs.title || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  updated[idx].title = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-medium"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                URL Slug (e.g. employ-india)
                              </label>
                              <input
                                type="text"
                                value={cs.slug || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  updated[idx].slug = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>
                          </div>

                          {/* Row 2: Subtitle / Executive Summary */}
                          <div>
                            <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                              Subtitle / High-Level Executive Hook
                            </label>
                            <textarea
                              rows={2}
                              value={cs.subtitle || ""}
                              onChange={(e) => {
                                const updated = [...formData.caseStudies];
                                updated[idx].subtitle = e.target.value;
                                setFormData({ ...formData, caseStudies: updated });
                              }}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                            />
                          </div>

                          {/* Row 3: Meta details */}
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Category
                              </label>
                              <input
                                type="text"
                                value={cs.category || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  updated[idx].category = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Entity / Client
                              </label>
                              <input
                                type="text"
                                value={cs.organization || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  updated[idx].organization = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Timeline / Date
                              </label>
                              <input
                                type="text"
                                value={cs.date || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  updated[idx].date = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Hero Gradient CSS
                              </label>
                              <input
                                type="text"
                                value={cs.heroGradient || "from-blue-600 to-indigo-900"}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  updated[idx].heroGradient = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                placeholder="from-blue-600 to-indigo-900"
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                              />
                            </div>
                          </div>

                          {/* Row 4: Cover Image & Alt Text */}
                          <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white flex items-center gap-1.5">
                              <Eye className="w-4 h-4 text-primary-600" />
                              <span>Cover Image &amp; Social Preview</span>
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                              <div className="sm:col-span-6">
                                <label className="block text-[11px] font-semibold text-gray-600 dark:text-gray-400 mb-1">
                                  Image URL or Path
                                </label>
                                <input
                                  type="text"
                                  value={cs.image || ""}
                                  onChange={(e) => {
                                    const updated = [...formData.caseStudies];
                                    updated[idx].image = e.target.value;
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                                />
                              </div>
                              <div className="sm:col-span-4">
                                <label className="block text-[11px] font-semibold text-gray-600 dark:text-gray-400 mb-1">
                                  SEO Alt Text
                                </label>
                                <input
                                  type="text"
                                  value={cs.imageAlt || ""}
                                  onChange={(e) => {
                                    const updated = [...formData.caseStudies];
                                    updated[idx].imageAlt = e.target.value;
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  placeholder="Descriptive image keywords for SEO"
                                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                                />
                              </div>
                              <div className="sm:col-span-2 flex flex-col justify-end">
                                <label className="w-full py-2 px-3 rounded-xl bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-xs font-semibold cursor-pointer text-center truncate flex items-center justify-center gap-1">
                                  <Upload className="w-3.5 h-3.5" />
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
                                          const updated = [...formData.caseStudies];
                                          updated[idx].image = url;
                                          setFormData({ ...formData, caseStudies: updated });
                                        }
                                      }
                                    }}
                                  />
                                </label>
                              </div>
                            </div>
                          </div>

                          {/* Row 5: Featured Video / Reel Controls */}
                          <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white flex items-center gap-1.5">
                              <Video className="w-4 h-4 text-primary-600" />
                              <span>Featured Video / Reel Showcase (Optional)</span>
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div>
                                <label className="block text-[11px] font-semibold text-gray-600 dark:text-gray-400 mb-1">
                                  Video Embed URL (YouTube, Vimeo, MP4)
                                </label>
                                <input
                                  type="text"
                                  value={cs.videoUrl || ""}
                                  onChange={(e) => {
                                    const updated = [...formData.caseStudies];
                                    updated[idx].videoUrl = e.target.value;
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  placeholder="https://www.youtube.com/watch?v=... or Vimeo"
                                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-semibold text-gray-600 dark:text-gray-400 mb-1">
                                  Video Caption / Description
                                </label>
                                <input
                                  type="text"
                                  value={cs.videoCaption || ""}
                                  onChange={(e) => {
                                    const updated = [...formData.caseStudies];
                                    updated[idx].videoCaption = e.target.value;
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  placeholder="e.g. Campaign reel and creative overview"
                                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Row 6: KPI Metrics */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                KPI Metrics &amp; Quantifiable Highlights
                              </label>
                              <button
                                type="button"
                                onClick={() => {
                                  const updated = [...formData.caseStudies];
                                  if (!updated[idx].metrics) updated[idx].metrics = [];
                                  updated[idx].metrics.push({ label: "Metric Label", value: "Value" });
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="text-xs text-primary-600 font-semibold hover:underline flex items-center gap-1"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add Metric Card</span>
                              </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                              {metrics.map((m: any, mIdx: number) => (
                                <div
                                  key={mIdx}
                                  className="p-3 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 space-y-2 relative"
                                >
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].metrics = updated[idx].metrics.filter((_: any, i: number) => i !== mIdx);
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                  <div>
                                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-0.5">Value</label>
                                    <input
                                      type="text"
                                      value={m.value || ""}
                                      onChange={(e) => {
                                        const updated = [...formData.caseStudies];
                                        updated[idx].metrics[mIdx].value = e.target.value;
                                        setFormData({ ...formData, caseStudies: updated });
                                      }}
                                      className="w-full px-2 py-1 rounded bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-bold text-primary-600"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-0.5">Label</label>
                                    <input
                                      type="text"
                                      value={m.label || ""}
                                      onChange={(e) => {
                                        const updated = [...formData.caseStudies];
                                        updated[idx].metrics[mIdx].label = e.target.value;
                                        setFormData({ ...formData, caseStudies: updated });
                                      }}
                                      className="w-full px-2 py-1 rounded bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 7 Narrative Sections */}
                          <div className="space-y-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                              7 Deep-Dive Narrative Sections
                            </h4>

                            {/* Section 1: Challenge */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                01. The Business Challenge
                              </label>
                              <textarea
                                rows={3}
                                value={sections.challenge || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  if (!updated[idx].sections) updated[idx].sections = {};
                                  updated[idx].sections.challenge = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>

                            {/* Section 2: Context */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                02. Market Context &amp; Audience Psychology
                              </label>
                              <textarea
                                rows={3}
                                value={sections.context || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  if (!updated[idx].sections) updated[idx].sections = {};
                                  updated[idx].sections.context = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>

                            {/* Section 3: Strategy (List) */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                  03. The Strategic Framework (Bullet Points)
                                </label>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...formData.caseStudies];
                                    if (!updated[idx].sections) updated[idx].sections = {};
                                    if (!updated[idx].sections.strategy) updated[idx].sections.strategy = [];
                                    updated[idx].sections.strategy.push("New strategic pillar...");
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  className="text-xs text-primary-600 font-semibold hover:underline flex items-center gap-1"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Add Strategy Point</span>
                                </button>
                              </div>
                              {sections.strategy?.map((item: string, sIdx: number) => (
                                <div key={sIdx} className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.strategy[sIdx] = e.target.value;
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="flex-1 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.strategy = updated[idx].sections.strategy.filter((_: any, i: number) => i !== sIdx);
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="p-2 text-gray-400 hover:text-red-500"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))}
                            </div>

                            {/* Section 4: Execution (List) */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                  04. Tactical Execution &amp; Deployment (Bullet Points)
                                </label>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...formData.caseStudies];
                                    if (!updated[idx].sections) updated[idx].sections = {};
                                    if (!updated[idx].sections.execution) updated[idx].sections.execution = [];
                                    updated[idx].sections.execution.push("New execution milestone...");
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  className="text-xs text-primary-600 font-semibold hover:underline flex items-center gap-1"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Add Execution Point</span>
                                </button>
                              </div>
                              {sections.execution?.map((item: string, eIdx: number) => (
                                <div key={eIdx} className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.execution[eIdx] = e.target.value;
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="flex-1 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.execution = updated[idx].sections.execution.filter((_: any, i: number) => i !== eIdx);
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="p-2 text-gray-400 hover:text-red-500"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))}
                            </div>

                            {/* Section 5: Results (List) */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                  05. Measurable Business Results (Bullet Points)
                                </label>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...formData.caseStudies];
                                    if (!updated[idx].sections) updated[idx].sections = {};
                                    if (!updated[idx].sections.results) updated[idx].sections.results = [];
                                    updated[idx].sections.results.push("Key quantifiable achievement...");
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  className="text-xs text-primary-600 font-semibold hover:underline flex items-center gap-1"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Add Result Point</span>
                                </button>
                              </div>
                              {sections.results?.map((item: string, rIdx: number) => (
                                <div key={rIdx} className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.results[rIdx] = e.target.value;
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="flex-1 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.results = updated[idx].sections.results.filter((_: any, i: number) => i !== rIdx);
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="p-2 text-gray-400 hover:text-red-500"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))}
                            </div>

                            {/* Section 6: Lessons (List) */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <label className="text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                                  06. Operational &amp; Marketing Lessons (Bullet Points)
                                </label>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = [...formData.caseStudies];
                                    if (!updated[idx].sections) updated[idx].sections = {};
                                    if (!updated[idx].sections.lessons) updated[idx].sections.lessons = [];
                                    updated[idx].sections.lessons.push("Key tactical takeaway...");
                                    setFormData({ ...formData, caseStudies: updated });
                                  }}
                                  className="text-xs text-primary-600 font-semibold hover:underline flex items-center gap-1"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  <span>Add Lesson Point</span>
                                </button>
                              </div>
                              {sections.lessons?.map((item: string, lIdx: number) => (
                                <div key={lIdx} className="flex items-center gap-2">
                                  <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.lessons[lIdx] = e.target.value;
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="flex-1 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const updated = [...formData.caseStudies];
                                      updated[idx].sections.lessons = updated[idx].sections.lessons.filter((_: any, i: number) => i !== lIdx);
                                      setFormData({ ...formData, caseStudies: updated });
                                    }}
                                    className="p-2 text-gray-400 hover:text-red-500"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ))}
                            </div>

                            {/* Section 7: Long-Term Business Impact */}
                            <div>
                              <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                07. Long-Term Commercial Impact
                              </label>
                              <textarea
                                rows={3}
                                value={sections.businessImpact || ""}
                                onChange={(e) => {
                                  const updated = [...formData.caseStudies];
                                  if (!updated[idx].sections) updated[idx].sections = {};
                                  updated[idx].sections.businessImpact = e.target.value;
                                  setFormData({ ...formData, caseStudies: updated });
                                }}
                                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
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

                          {/* Video Embed & Image Alt */}
                          <div className="p-4 rounded-xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 space-y-4">
                            <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-wider">
                              <Video className="w-4 h-4" />
                              <span>Featured Video Embed (Optional)</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[11px] font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                  Video URL (YouTube, Vimeo, MP4)
                                </label>
                                <input
                                  type="text"
                                  placeholder="https://www.youtube.com/watch?v=..."
                                  value={art.videoUrl || ""}
                                  onChange={(e) => {
                                    const updated = [...formData.articles];
                                    updated[idx].videoUrl = e.target.value;
                                    setFormData({ ...formData, articles: updated });
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                  Video Caption
                                </label>
                                <input
                                  type="text"
                                  placeholder="Brief note or timestamp summary..."
                                  value={art.videoCaption || ""}
                                  onChange={(e) => {
                                    const updated = [...formData.articles];
                                    updated[idx].videoCaption = e.target.value;
                                    setFormData({ ...formData, articles: updated });
                                  }}
                                  className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-bold uppercase text-gray-700 dark:text-gray-300 mb-1">
                                Cover Image Alt Text (SEO)
                              </label>
                              <input
                                type="text"
                                placeholder="Descriptive alt text for Google Image SEO..."
                                value={art.imageAlt || ""}
                                onChange={(e) => {
                                  const updated = [...formData.articles];
                                  updated[idx].imageAlt = e.target.value;
                                  setFormData({ ...formData, articles: updated });
                                }}
                                className="w-full px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs"
                              />
                            </div>
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

          {/* TAB: PUBLISH SETTINGS & GITHUB SYNC */}
          {activeTab === "publishSettings" && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-primary-600 font-bold uppercase tracking-wider text-xs">
                  <Cloud className="w-4 h-4" />
                  <span>Self-Sustaining CMS Publishing</span>
                </div>
                <h2 className="text-xl font-bold font-heading text-gray-900 dark:text-white">
                  Publish to Live Production (Zero-Dependency)
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  You do not need to rely on Antigravity or local developer tools to update your portfolio.
                  With GitHub Direct Publishing configured, every edit you make here is committed directly to your repository (
                  <span className="font-mono text-primary-600">kainthola29-dev/Prot</span>
                  ). Vercel automatically detects the commit and redeploys your live website worldwide in ~45 seconds.
                </p>
              </div>

              {/* GitHub Token Config Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                  <Key className="w-4 h-4 text-primary-600" />
                  <span>GitHub Personal Access Token</span>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 space-y-2 text-xs text-blue-900 dark:text-blue-200">
                  <div className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>How to set this up once in 60 seconds:</span>
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1 text-[11px] sm:text-xs">
                    <li>
                      Open GitHub Token Generator:{" "}
                      <a
                        href="https://github.com/settings/tokens/new?scopes=repo&description=Portfolio+CMS+Publishing"
                        target="_blank"
                        rel="noreferrer"
                        className="underline font-bold text-primary-600 dark:text-primary-400 inline-flex items-center gap-1"
                      >
                        <span>Generate Token (repo scope pre-selected)</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>Set expiration to <strong>No expiration</strong> (or 90 days), leave <strong>repo</strong> checked, and click the green <strong>Generate token</strong> button at the bottom.</li>
                    <li>Copy your token (starts with <span className="font-mono">ghp_...</span>) and paste it into the field below.</li>
                    <li>Click <strong>Save &amp; Test Live Publish</strong>. The token is safely stored only in your private browser storage.</li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                    GitHub Personal Access Token
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="password"
                      value={githubToken}
                      onChange={(e) => {
                        setGithubToken(e.target.value);
                        localStorage.setItem("admin_gh_token", e.target.value.trim());
                      }}
                      placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        localStorage.setItem("admin_gh_token", githubToken.trim());
                        handleGitHubPublish();
                      }}
                      disabled={saveStatus === "saving"}
                      className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {saveStatus === "saving" ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Publishing to Vercel...</span>
                        </>
                      ) : (
                        <>
                          <Cloud className="w-4 h-4" />
                          <span>Save &amp; Publish Live</span>
                        </>
                      )}
                    </button>
                  </div>
                  {githubToken && (
                    <p className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Token is securely saved in your browser local storage.</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Backup & Restore Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                  <Download className="w-4 h-4 text-primary-600" />
                  <span>Manual JSON Backup &amp; Disaster Recovery</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Always keep a personal backup copy of your entire portfolio content. You can download your current content file or restore an earlier backup at any time.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadBackup}
                    className="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-gray-200 dark:border-gray-700"
                  >
                    <Download className="w-4 h-4 text-primary-600" />
                    <span>Download content.json</span>
                  </button>

                  <label className="px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-gray-200 dark:border-gray-700 cursor-pointer">
                    <Upload className="w-4 h-4 text-primary-600" />
                    <span>Restore from Backup (.json)</span>
                    <input
                      type="file"
                      accept=".json"
                      className="hidden"
                      onChange={handleImportBackup}
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* MODAL: GITHUB TOKEN & LIVE PUBLISH */}
        {isPublishModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2 text-primary-600 font-bold">
                  <Cloud className="w-5 h-5" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    Publish Live to Production
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPublishModalOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                To commit changes directly to your live website on Vercel without server filesystem limitations, paste your GitHub Personal Access Token once below:
              </p>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-gray-700 dark:text-gray-300">
                  GitHub Personal Access Token (starts with ghp_)
                </label>
                <input
                  type="password"
                  value={githubToken}
                  onChange={(e) => {
                    setGithubToken(e.target.value);
                    localStorage.setItem("admin_gh_token", e.target.value.trim());
                  }}
                  placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                />
                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1">
                  <span>Don't have a token?</span>
                  <a
                    href="https://github.com/settings/tokens/new?scopes=repo&description=Portfolio+CMS+Publishing"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 dark:text-primary-400 font-semibold underline flex items-center gap-1"
                  >
                    <span>Generate token on GitHub (1 click)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => setIsPublishModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!githubToken.trim()) {
                      alert("Please enter a GitHub Personal Access Token first.");
                      return;
                    }
                    localStorage.setItem("admin_gh_token", githubToken.trim());
                    setIsPublishModalOpen(false);
                    handleGitHubPublish();
                  }}
                  disabled={saveStatus === "saving"}
                  className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md disabled:opacity-50"
                >
                  <Cloud className="w-4 h-4" />
                  <span>Publish Live Now</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
