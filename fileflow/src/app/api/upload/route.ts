import { NextResponse } from "next/server";
import { validateFileSize, validateFileType } from "@/lib/validators";
import type { ToolCategory } from "@/config/tools";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const category = (formData.get("category") as ToolCategory) || "pdf";

    if (!file) {
      return NextResponse.json(
        { error: "No file provided." },
        { status: 400 }
      );
    }

    // Validate Size
    const sizeCheck = validateFileSize(file, "free");
    if (!sizeCheck.valid) {
      return NextResponse.json({ error: sizeCheck.error }, { status: 400 });
    }

    // Validate Type
    const typeCheck = validateFileType(file, category);
    if (!typeCheck.valid) {
      return NextResponse.json({ error: typeCheck.error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
      message: "File validated and ready for conversion.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Upload validation failed." },
      { status: 500 }
    );
  }
}
