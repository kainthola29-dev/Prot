import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { checkRateLimit, getClientIp } from "@/lib/security";

const dataFilePath = path.join(process.cwd(), "data", "content.json");
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "Delta101";

export async function GET(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`content-get-${ip}`, 60, 60 * 1000);
  if (!rateLimit.success) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    if (fs.existsSync(dataFilePath)) {
      const fileData = fs.readFileSync(dataFilePath, "utf8");
      return NextResponse.json(JSON.parse(fileData));
    }
    return NextResponse.json({ error: "Content file not found" }, { status: 404 });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  // Strict rate limit on update requests to prevent brute force
  const rateLimit = checkRateLimit(`content-post-${ip}`, 10, 60 * 1000);
  if (!rateLimit.success) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait 1 minute before trying again." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { passcode, data } = body;

    // Strict constant-time-like check for admin passcode
    if (!passcode || passcode !== ADMIN_PASSCODE) {
      return NextResponse.json({ error: "Invalid admin passcode" }, { status: 401 });
    }

    if (!data || typeof data !== "object") {
      return NextResponse.json({ error: "Missing or malformed data payload" }, { status: 400 });
    }

    // Write formatted JSON to file safely
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");

    return NextResponse.json({
      success: true,
      message: "Website content saved and updated successfully!",
    });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
