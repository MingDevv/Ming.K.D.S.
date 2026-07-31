import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please enter both email and password." },
        { status: 400 }
      );
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !key || url.includes("placeholder")) {
      return NextResponse.json(
        {
          error:
            "Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY) are missing in Vercel project settings.",
        },
        { status: 500 }
      );
    }

    const cookieStore = await cookies();
    const response = NextResponse.json({ success: true });

    const supabase = createServerClient(url, key, {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
            response.cookies.set(name, value, {
              ...options,
              path: "/",
              sameSite: "lax",
              secure: process.env.NODE_ENV === "production",
            });
          });
        },
      },
    });

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      let friendlyError = error.message;
      if (error.message.includes("Invalid login credentials")) {
        friendlyError = "Invalid email or password. Please check your login credentials.";
      } else if (error.message.includes("Email not confirmed")) {
        friendlyError = "Email not confirmed. Please check your inbox to confirm your account before logging in.";
      }
      return NextResponse.json({ error: friendlyError }, { status: 400 });
    }

    return response;
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "An unexpected server error occurred during login.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
