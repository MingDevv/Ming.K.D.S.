import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed to FileFlow newsletter.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to subscribe." },
      { status: 500 }
    );
  }
}
