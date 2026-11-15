import { NextResponse } from "next/server";

type EngagePayload = {
  name?: string;
  contact?: string;
  email?: string;
  sector?: string;
  brief?: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as EngagePayload;
    if (!data.name || !data.contact) {
      return NextResponse.json(
        { ok: false, error: "name and contact required" },
        { status: 400 }
      );
    }

    // In production this would persist to the watch-floor CRM and page ops.
    // Here we acknowledge receipt so the client can confirm the signal landed.
    const ticket = `MMCP-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    return NextResponse.json({
      ok: true,
      ticket,
      receivedAt: new Date().toISOString(),
      revertWithin: "60 min",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "malformed payload" },
      { status: 400 }
    );
  }
}
