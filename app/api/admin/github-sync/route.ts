import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { checkRateLimit, getClientIp } from "@/lib/security";

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "Delta101";
const REPO_OWNER = "kainthola29-dev";
const REPO_NAME = "Prot";
const FILE_PATH = "data/content.json";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`github-sync-${ip}`, 10, 60 * 1000);
  if (!rateLimit.success) {
    return NextResponse.json(
      { error: "Too many publishing requests. Please wait a minute." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { passcode, data, githubToken } = body;

    if (!passcode || passcode !== ADMIN_PASSCODE) {
      return NextResponse.json({ error: "Invalid admin passcode" }, { status: 401 });
    }

    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Invalid data payload" }, { status: 400 });
    }

    const token = githubToken || process.env.GITHUB_TOKEN;

    // If local development environment, write to disk
    const localPath = path.join(process.cwd(), FILE_PATH);
    let localSaved = false;
    try {
      if (fs.existsSync(localPath)) {
        fs.writeFileSync(localPath, JSON.stringify(data, null, 2), "utf8");
        localSaved = true;
      }
    } catch {
      // Local disk is read-only (expected on Vercel)
    }

    // If GitHub token is provided, push commit directly to GitHub repository
    if (token) {
      const getFileRes = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Antigravity-Portfolio-Admin",
          },
        }
      );

      if (!getFileRes.ok) {
        const errText = await getFileRes.text();
        return NextResponse.json(
          { error: `GitHub API error fetching file: ${getFileRes.status} ${errText}` },
          { status: 400 }
        );
      }

      const fileJson = await getFileRes.json();
      const sha = fileJson.sha;

      const formattedJson = JSON.stringify(data, null, 2);
      const encodedContent = Buffer.from(formattedJson, "utf8").toString("base64");

      const putRes = await fetch(
        `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "Antigravity-Portfolio-Admin",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "feat(cms): update portfolio content via admin dashboard",
            content: encodedContent,
            sha,
            branch: "main",
          }),
        }
      );

      if (!putRes.ok) {
        const putErr = await putRes.text();
        return NextResponse.json(
          { error: `Failed to commit to GitHub: ${putErr}` },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Successfully committed to GitHub! Vercel is now deploying your changes live (~45 seconds).",
      });
    }

    if (localSaved) {
      return NextResponse.json({
        success: true,
        message: "Saved locally to content.json! To publish live to Vercel, provide a GitHub Token or commit your changes.",
      });
    }

    return NextResponse.json({
      success: false,
      isReadOnly: true,
      error: "Vercel filesystem is read-only. Provide your GitHub Personal Access Token in the publish dialog to push directly to production, or use 'Download JSON' to backup your changes.",
    }, { status: 403 });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
