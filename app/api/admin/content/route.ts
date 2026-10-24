import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "content.json");
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "admin123";

export async function GET() {
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
  try {
    const body = await request.json();
    const { passcode, data } = body;

    if (passcode !== ADMIN_PASSCODE) {
      return NextResponse.json({ error: "Invalid admin passcode" }, { status: 401 });
    }

    if (!data) {
      return NextResponse.json({ error: "Missing data payload" }, { status: 400 });
    }

    // Write formatted JSON to file
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
