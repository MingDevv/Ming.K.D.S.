/**
 * PDF Converters
 *
 * This module will contain all PDF-related converters.
 * Each converter should extend BaseConverter and register itself.
 *
 * Planned converters:
 * - PDF to Word
 * - PDF to Excel
 * - PDF to Image
 * - Merge PDF
 * - Compress PDF
 * - Split PDF
 * - PDF to PowerPoint
 */

// import { converterRegistry } from "../registry";
// import { BaseConverter } from "../types";

// Example implementation (uncomment when ready):
//
// class PdfToWordConverter extends BaseConverter {
//   constructor() {
//     super({
//       id: "pdf-to-word",
//       name: "PDF to Word",
//       slug: "pdf-to-word",
//       description: "Convert PDF documents to editable Word files",
//       category: "pdf",
//       inputFormats: [".pdf"],
//       outputFormats: [".docx"],
//       maxFileSize: 25 * 1024 * 1024,
//       icon: FileText,
//       isPremium: false,
//       isEnabled: true,
//     });
//   }
//
//   async convert(file: File): Promise<ConvertResult> {
//     // Implementation here
//     throw new Error("Not implemented");
//   }
// }
//
// converterRegistry.register(new PdfToWordConverter());

export {};
