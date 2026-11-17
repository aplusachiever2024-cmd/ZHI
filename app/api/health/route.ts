import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "online",
    service: "Miss Lily AI Teacher",
    version: "1.0.0"
  });
}
