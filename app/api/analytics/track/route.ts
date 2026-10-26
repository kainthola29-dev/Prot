import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const analyticsFilePath = path.join(process.cwd(), "data", "analytics.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { path: pagePath, referrer, device, visitorId, isNewVisitor } = body;

    if (!fs.existsSync(analyticsFilePath)) {
      return NextResponse.json({ success: true, message: "Ignored" });
    }

    const fileContent = fs.readFileSync(analyticsFilePath, "utf8");
    const data = JSON.parse(fileContent);

    // Increment overall page views
    data.totalPageViews = (data.totalPageViews || 0) + 1;
    data.todayViews = (data.todayViews || 0) + 1;

    // Increment unique visitors if first visit
    if (isNewVisitor) {
      data.uniqueVisitors = (data.uniqueVisitors || 0) + 1;
      data.todayVisitors = (data.todayVisitors || 0) + 1;
    }

    // Update top pages
    const normalizedPath = pagePath || "/";
    const existingPage = data.topPages?.find((p: any) => p.path === normalizedPath);
    if (existingPage) {
      existingPage.views += 1;
    } else if (data.topPages) {
      data.topPages.push({
        path: normalizedPath,
        views: 1,
        label: normalizedPath.replace(/\//g, " ").trim() || "Homepage"
      });
    }

    // Sort top pages descending
    data.topPages?.sort((a: any, b: any) => b.views - a.views);

    // Update traffic sources
    let sourceCategory = "Direct / Resume Links";
    if (referrer) {
      const lowerRef = referrer.toLowerCase();
      if (lowerRef.includes("linkedin")) sourceCategory = "LinkedIn";
      else if (lowerRef.includes("google")) sourceCategory = "Google Search";
      else if (lowerRef.includes("twitter") || lowerRef.includes("t.co") || lowerRef.includes("x.com")) sourceCategory = "X / Twitter";
      else if (lowerRef.includes("facebook") || lowerRef.includes("instagram")) sourceCategory = "Facebook & Instagram";
    }

    const sourceObj = data.trafficSources?.find((s: any) => s.source === sourceCategory);
    if (sourceObj) {
      sourceObj.visitors += 1;
    }

    // Add to recent visits
    const newVisit = {
      id: `v-${Date.now()}`,
      path: normalizedPath,
      referrer: sourceCategory,
      device: device || "Desktop",
      timestamp: new Date().toISOString(),
      location: "India"
    };

    if (data.recentVisits) {
      data.recentVisits.unshift(newVisit);
      if (data.recentVisits.length > 20) {
        data.recentVisits = data.recentVisits.slice(0, 20);
      }
    }

    fs.writeFileSync(analyticsFilePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({ success: true, totalViews: data.totalPageViews });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
