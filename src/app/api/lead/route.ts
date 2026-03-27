import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  // Log for now — replace with real backend integration later
  console.log("New lead:", data);

  return NextResponse.json({ success: true });
}
