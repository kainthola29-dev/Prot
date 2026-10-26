import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const analyticsFilePath = path.join(process.cwd(), "data", "analytics.json");

export async function GET() {
  try {
    if (fs.existsSync(analyticsFilePath)) {
      const fileData = fs.readFileSync(analyticsFilePath, "utf8");
      return NextResponse.json(JSON.parse(fileData));
    }

    return NextResponse.json({
      totalPageViews: 0,
      uniqueVisitors: 0,
      todayViews: 0,
      todayVisitors: 0,
      topPages: [],
      trafficSources: [],
      deviceBreakdown: { desktop: 60, mobile: 40 },
      dailyViews: [],
      recentVisits: []
    });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
