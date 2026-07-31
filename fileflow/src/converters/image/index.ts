import { BaseConverter, type ConvertOptions, type ConvertResult } from "../types";
import { converterRegistry } from "../registry";
import { Image } from "lucide-react";

/** Helper function to load an image file into HTMLImageElement */
function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new globalThis.Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image file: " + err));
    };
    img.src = url;
  });
}

/** Helper function to convert canvas to Blob */
function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality: number = 0.92
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Canvas conversion to Blob failed"));
      },
      mimeType,
      quality
    );
  });
}

// 1. PNG to JPG
export class PngToJpgConverter extends BaseConverter {
  constructor() {
    super({
      id: "png-to-jpg",
      name: "PNG to JPG",
      slug: "png-to-jpg",
      description: "Convert PNG images to JPG format with quality adjustment",
      category: "image",
      inputFormats: [".png"],
      outputFormats: [".jpg"],
      maxFileSize: 25 * 1024 * 1024,
      icon: Image,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File, options?: ConvertOptions): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const img = await loadImageFromFile(file);
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get 2D canvas context");

      // Fill white background for transparent PNGs converted to JPG
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const quality = typeof options?.quality === "number" ? options.quality : 0.9;
      const blob = await canvasToBlob(canvas, "image/jpeg", quality);

      const baseName = file.name.replace(/\.[^/.]+$/, "");
      const outputFileName = `${baseName}.jpg`;

      return {
        success: true,
        outputFile: blob,
        outputFileName,
        outputMimeType: "image/jpeg",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Image conversion failed",
      };
    }
  }
}

// 2. JPG to PNG
export class JpgToPngConverter extends BaseConverter {
  constructor() {
    super({
      id: "jpg-to-png",
      name: "JPG to PNG",
      slug: "jpg-to-png",
      description: "Convert JPG images to high quality PNG format",
      category: "image",
      inputFormats: [".jpg", ".jpeg"],
      outputFormats: [".png"],
      maxFileSize: 25 * 1024 * 1024,
      icon: Image,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const img = await loadImageFromFile(file);
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get 2D canvas context");
      ctx.drawImage(img, 0, 0);

      const blob = await canvasToBlob(canvas, "image/png");
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.png`,
        outputMimeType: "image/png",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "JPG to PNG conversion failed",
      };
    }
  }
}

// 3. WebP to PNG
export class WebpToPngConverter extends BaseConverter {
  constructor() {
    super({
      id: "webp-to-png",
      name: "WebP to PNG",
      slug: "webp-to-png",
      description: "Convert WebP images to PNG format",
      category: "image",
      inputFormats: [".webp"],
      outputFormats: [".png"],
      maxFileSize: 25 * 1024 * 1024,
      icon: Image,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const img = await loadImageFromFile(file);
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get 2D canvas context");
      ctx.drawImage(img, 0, 0);

      const blob = await canvasToBlob(canvas, "image/png");
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.png`,
        outputMimeType: "image/png",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "WebP to PNG conversion failed",
      };
    }
  }
}

// 4. SVG to PNG
export class SvgToPngConverter extends BaseConverter {
  constructor() {
    super({
      id: "svg-to-png",
      name: "SVG to PNG",
      slug: "svg-to-png",
      description: "Convert SVG vector graphics to PNG raster images",
      category: "image",
      inputFormats: [".svg"],
      outputFormats: [".png"],
      maxFileSize: 25 * 1024 * 1024,
      icon: Image,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File, options?: ConvertOptions): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const text = await file.text();
      const blobSvg = new Blob([text], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blobSvg);

      const img = new globalThis.Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

      const width = options?.width || img.width || 800;
      const height = options?.height || img.height || 600;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get 2D canvas context");
      ctx.drawImage(img, 0, 0, width, height);

      URL.revokeObjectURL(url);
      const blob = await canvasToBlob(canvas, "image/png");
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.png`,
        outputMimeType: "image/png",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "SVG to PNG conversion failed",
      };
    }
  }
}

// 5. Image Resize
export class ImageResizeConverter extends BaseConverter {
  constructor() {
    super({
      id: "image-resize",
      name: "Resize Image",
      slug: "image-resize",
      description: "Resize images to custom width and height",
      category: "image",
      inputFormats: [".png", ".jpg", ".jpeg", ".webp"],
      outputFormats: [".png", ".jpg", ".webp"],
      maxFileSize: 25 * 1024 * 1024,
      icon: Image,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File, options?: ConvertOptions): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const img = await loadImageFromFile(file);
      const width = Number(options?.width) || Math.round(img.width / 2);
      const height = Number(options?.height) || Math.round(img.height / 2);
      const format = (options?.format as string) || "image/png";

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get 2D canvas context");
      ctx.drawImage(img, 0, 0, width, height);

      const blob = await canvasToBlob(canvas, format);
      const ext = format.split("/")[1] || "png";
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}_resized.${ext}`,
        outputMimeType: format,
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Image resize failed",
      };
    }
  }
}

// Register image converters
converterRegistry.register(new PngToJpgConverter());
converterRegistry.register(new JpgToPngConverter());
converterRegistry.register(new WebpToPngConverter());
converterRegistry.register(new SvgToPngConverter());
converterRegistry.register(new ImageResizeConverter());
