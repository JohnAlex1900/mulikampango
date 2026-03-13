import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: { password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { password } = body;

  const correctPassword = process.env.DOWNLOAD_PASSWORD;
  const downloadUrl =
    process.env.DOWNLOAD_URL || "https://net.mulikampango.co.ke";

  if (!correctPassword) {
    return NextResponse.json(
      { error: "Server configuration error. Please contact support." },
      { status: 500 }
    );
  }

  if (!password || typeof password !== "string") {
    return NextResponse.json(
      { error: "Password is required." },
      { status: 400 }
    );
  }

  if (password !== correctPassword) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  return NextResponse.json({ url: downloadUrl }, { status: 200 });
}
