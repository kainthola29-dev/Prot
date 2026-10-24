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
  ArrowRight
} from "lucide-react";

export default function AdminPage() {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"profile" | "stats" | "resume" | "projects" | "insights" | "services">("profile");

  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState<any>(null);

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
    // Check local session
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

  // Upload handler for photos
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>, targetField: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (res.ok && result.url) {
        if (targetField === "profilePhoto") {
          setFormData({
            ...formData,
            profile: { ...formData.profile, profilePhoto: result.url }
          });
        }
        alert(`Photo uploaded successfully! URL: ${result.url}`);
      } else {
        alert(result.error || "Upload failed");
      }
    } catch (err) {
      alert("Error uploading file");
    }
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
              Enter admin passcode to customize portfolio content and photos
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
            Customize Website Content
          </h1>
          <p className="text-xs text-gray-500">
            Edit text, stats, resume timeline, projects, and photos like a form. Click &quot;Save Changes&quot; to apply.
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
              onClick={() => setActiveTab("projects")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-all text-left ${
                activeTab === "projects"
                  ? "bg-primary-600 text-white shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <FolderKanban className="w-4 h-4" />
              <span>Projects &amp; Portfolio</span>
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
              <span>Strategic Thoughts (Blog)</span>
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
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 text-xs text-gray-500 space-y-1">
            <p className="font-semibold text-gray-700 dark:text-gray-300">💡 Quick Tip:</p>
            <p>Koi bhi text change karne ke baad upar &quot;Save Changes&quot; button dabayein, live site automatically update ho jayegi.</p>
          </div>
        </div>

        {/* Content Editor Panels (9 Cols) */}
        <div className="lg:col-span-9">
          
          {/* TAB 1: PROFILE & HERO */}
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
                      onChange={(e) => handlePhotoUpload(e, "profilePhoto")}
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

          {/* TAB 2: STATS */}
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

          {/* TAB 3: RESUME & TIMELINE */}
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

          {/* TAB 4: PROJECTS */}
          {activeTab === "projects" && (
            <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Projects &amp; Case Studies
              </h2>

              <div className="space-y-4">
                {formData.projects?.map((proj: any, idx: number) => (
                  <div key={proj.id || idx} className="p-5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 mb-1">Title</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => {
                            const newProjects = [...formData.projects];
                            newProjects[idx].title = e.target.value;
                            setFormData({ ...formData, projects: newProjects });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 mb-1">Category</label>
                        <input
                          type="text"
                          value={proj.category}
                          onChange={(e) => {
                            const newProjects = [...formData.projects];
                            newProjects[idx].category = e.target.value;
                            setFormData({ ...formData, projects: newProjects });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-semibold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 mb-1">Cover Image Path</label>
                      <input
                        type="text"
                        value={proj.image || ""}
                        placeholder="/images/projects/your-photo.svg"
                        onChange={(e) => {
                          const newProjects = [...formData.projects];
                          newProjects[idx].image = e.target.value;
                          setFormData({ ...formData, projects: newProjects });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => {
                          const newProjects = [...formData.projects];
                          newProjects[idx].description = e.target.value;
                          setFormData({ ...formData, projects: newProjects });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INSIGHTS */}
          {activeTab === "insights" && (
            <div className="rounded-2xl bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold font-heading text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                Strategic Thoughts &amp; Blog Posts
              </h2>

              <div className="space-y-4">
                {formData.articles?.map((art: any, idx: number) => (
                  <div key={art.id || idx} className="p-5 rounded-xl bg-gray-50 dark:bg-[#1A1D21] border border-gray-200 dark:border-gray-800 space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 mb-1">Article Title</label>
                      <input
                        type="text"
                        value={art.title}
                        onChange={(e) => {
                          const newArticles = [...formData.articles];
                          newArticles[idx].title = e.target.value;
                          setFormData({ ...formData, articles: newArticles });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-sm font-bold"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 mb-1">Category</label>
                        <input
                          type="text"
                          value={art.category}
                          onChange={(e) => {
                            const newArticles = [...formData.articles];
                            newArticles[idx].category = e.target.value;
                            setFormData({ ...formData, articles: newArticles });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-500 mb-1">Read Time / Date</label>
                        <input
                          type="text"
                          value={art.readTime}
                          onChange={(e) => {
                            const newArticles = [...formData.articles];
                            newArticles[idx].readTime = e.target.value;
                            setFormData({ ...formData, articles: newArticles });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-500 mb-1">Excerpt</label>
                      <textarea
                        rows={2}
                        value={art.excerpt}
                        onChange={(e) => {
                          const newArticles = [...formData.articles];
                          newArticles[idx].excerpt = e.target.value;
                          setFormData({ ...formData, articles: newArticles });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white dark:bg-[#212428] border border-gray-200 dark:border-gray-700 text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SERVICES */}
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

        </div>

      </div>
    </div>
  );
}
