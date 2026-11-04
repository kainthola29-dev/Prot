import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { checkRateLimit, getClientIp } from "@/lib/security";

const uploadsDir = path.join(process.cwd(), "public", "images", "uploads");
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "Delta101";

// Allowed MIME types and extensions
const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml",
  "image/gif",
]);

const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"]);
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB maximum

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`upload-${ip}`, 15, 60 * 1000);
  if (!rateLimit.success) {
    return NextResponse.json(
      { error: "Upload limit reached. Please wait a minute before uploading again." },
      { status: 429 }
    );
  }

  try {
    const formData = await request.formData();
    const passcode = formData.get("passcode") as string | null;
    const file = formData.get("file") as File | null;

    // Authentication check: reject unauthenticated upload attempts
    if (!passcode || passcode !== ADMIN_PASSCODE) {
      return NextResponse.json({ error: "Unauthorized: Invalid admin passcode" }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Size validation
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File exceeds 5MB limit. Please upload an optimized image." },
        { status: 400 }
      );
    }

    // MIME type check
    if (!ALLOWED_MIME_TYPES.has(file.type.toLowerCase())) {
      return NextResponse.json(
        { error: "Unsupported file type. Only JPG, PNG, WEBP, SVG, and GIF are allowed." },
        { status: 400 }
      );
    }

    // Extension check
    const ext = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.has(ext)) {
      return NextResponse.json(
        { error: "Invalid file extension." },
        { status: 400 }
      );
    }

    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename to prevent directory traversal or script injection
    const rawBaseName = path.basename(file.name, ext);
    const safeBaseName = rawBaseName.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 50);
    const filename = `${Date.now()}-${safeBaseName}${ext}`;
    const filePath = path.join(uploadsDir, filename);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/images/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename,
    });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
