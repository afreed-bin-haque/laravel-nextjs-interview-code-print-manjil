import { NextResponse } from "next/server";

export async function POST(req) {
  const { input } = await req.json();
  return NextResponse.json(
    { success: true, message: "Merchant registered successfully" },
    { status: 200 }
  );
}
