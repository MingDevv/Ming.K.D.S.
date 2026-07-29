import type { LucideIcon } from "lucide-react";
import type { ToolCategory } from "@/config/tools";

export interface ConvertOptions {
  quality?: number;
  width?: number;
  height?: number;
  format?: string;
  [key: string]: unknown;
}

export interface ConvertResult {
  success: boolean;
  outputFile?: Blob;
  outputFileName?: string;
  outputMimeType?: string;
  error?: string;
  processingTimeMs?: number;
}

export interface ConverterDefinition {
  /** Unique ID, e.g. "pdf-to-word" */
  id: string;
  /** Display name, e.g. "PDF to Word" */
  name: string;
  /** URL slug, e.g. "pdf-to-word" */
  slug: string;
  /** Short description */
  description: string;
  /** Which category this converter belongs to */
  category: ToolCategory;
  /** Accepted input file extensions */
  inputFormats: string[];
  /** Available output file extensions */
  outputFormats: string[];
  /** Max file size in bytes for this specific converter */
  maxFileSize: number;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Whether this converter requires a paid plan */
  isPremium: boolean;
  /** Whether this converter is currently operational */
  isEnabled: boolean;
  /** The actual conversion function */
  convert: (file: File, options?: ConvertOptions) => Promise<ConvertResult>;
}

/**
 * Base class for creating converters.
 * Extend this to implement a new converter.
 *
 * @example
 * ```ts
 * class PdfToWordConverter extends BaseConverter {
 *   constructor() {
 *     super({
 *       id: "pdf-to-word",
 *       name: "PDF to Word",
 *       // ...
 *     });
 *   }
 *
 *   async convert(file: File, options?: ConvertOptions): Promise<ConvertResult> {
 *     // Implementation here
 *   }
 * }
 * ```
 */
export abstract class BaseConverter implements ConverterDefinition {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly description: string;
  readonly category: ToolCategory;
  readonly inputFormats: string[];
  readonly outputFormats: string[];
  readonly maxFileSize: number;
  readonly icon: LucideIcon;
  readonly isPremium: boolean;
  readonly isEnabled: boolean;

  constructor(definition: Omit<ConverterDefinition, "convert">) {
    this.id = definition.id;
    this.name = definition.name;
    this.slug = definition.slug;
    this.description = definition.description;
    this.category = definition.category;
    this.inputFormats = definition.inputFormats;
    this.outputFormats = definition.outputFormats;
    this.maxFileSize = definition.maxFileSize;
    this.icon = definition.icon;
    this.isPremium = definition.isPremium;
    this.isEnabled = definition.isEnabled;
  }

  abstract convert(file: File, options?: ConvertOptions): Promise<ConvertResult>;
}
