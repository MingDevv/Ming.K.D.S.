import { BaseConverter, type ConvertResult } from "../types";
import { converterRegistry } from "../registry";
import { FileText } from "lucide-react";
import { PDFDocument } from "pdf-lib";

// 1. Merge PDF
export class MergePdfConverter extends BaseConverter {
  constructor() {
    super({
      id: "merge-pdf",
      name: "Merge PDF",
      slug: "merge-pdf",
      description: "Combine multiple PDF documents or pages into a single PDF file",
      category: "pdf",
      inputFormats: [".pdf"],
      outputFormats: [".pdf"],
      maxFileSize: 50 * 1024 * 1024,
      icon: FileText,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const bytes = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(bytes);
      
      const mergedPdf = await PDFDocument.create();
      const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}_processed.pdf`,
        outputMimeType: "application/pdf",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "PDF merging failed",
      };
    }
  }
}

// 2. Image to PDF
export class ImageToPdfConverter extends BaseConverter {
  constructor() {
    super({
      id: "jpg-to-pdf",
      name: "Image to PDF",
      slug: "jpg-to-pdf",
      description: "Convert JPG or PNG images into a PDF document",
      category: "pdf",
      inputFormats: [".jpg", ".jpeg", ".png"],
      outputFormats: [".pdf"],
      maxFileSize: 25 * 1024 * 1024,
      icon: FileText,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.create();

      let pdfImage;
      if (file.type === "image/png" || file.name.endsWith(".png")) {
        pdfImage = await pdfDoc.embedPng(arrayBuffer);
      } else {
        pdfImage = await pdfDoc.embedJpg(arrayBuffer);
      }

      const page = pdfDoc.addPage([pdfImage.width, pdfImage.height]);
      page.drawImage(pdfImage, {
        x: 0,
        y: 0,
        width: pdfImage.width,
        height: pdfImage.height,
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: "application/pdf" });
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.pdf`,
        outputMimeType: "application/pdf",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Image to PDF conversion failed",
      };
    }
  }
}

// Register PDF converters
converterRegistry.register(new MergePdfConverter());
converterRegistry.register(new ImageToPdfConverter());
