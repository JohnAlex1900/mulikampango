import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const lead = {
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone?.trim() ?? "",
    service: payload.service?.trim() ?? "General inquiry",
    message: payload.message.trim(),
    consent: Boolean(payload.consent),
    createdAt: new Date().toISOString(),
  };

  console.info("Mulikamtoto lead submission", lead);

  return NextResponse.json({
    ok: true,
    nextSteps: [
      "We have received your inquiry.",
      "Our team will review the service match and respond by phone or email.",
      "If urgent, call +254 704 000 004 for immediate assistance.",
    ],
  });
}
