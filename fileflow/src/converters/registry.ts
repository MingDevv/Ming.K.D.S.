import type { ConverterDefinition } from "./types";
import type { ToolCategory } from "@/config/tools";

/**
 * Central converter registry.
 *
 * All converters register themselves here. This allows:
 * - Dynamic discovery of available converters
 * - Lookup by ID, category, or search query
 * - Easy addition of new converters without modifying existing code
 *
 * @example
 * ```ts
 * // In a converter file:
 * import { converterRegistry } from "@/converters/registry";
 * converterRegistry.register(myConverter);
 *
 * // To query:
 * const pdfConverters = converterRegistry.getByCategory("pdf");
 * const specific = converterRegistry.get("pdf-to-word");
 * ```
 */
class ConverterRegistry {
  private converters = new Map<string, ConverterDefinition>();

  /** Register a new converter */
  register(converter: ConverterDefinition): void {
    if (this.converters.has(converter.id)) {
      console.warn(
        `[ConverterRegistry] Converter "${converter.id}" is already registered. Overwriting.`
      );
    }
    this.converters.set(converter.id, converter);
  }

  /** Unregister a converter by ID */
  unregister(id: string): boolean {
    return this.converters.delete(id);
  }

  /** Get a converter by its unique ID */
  get(id: string): ConverterDefinition | undefined {
    return this.converters.get(id);
  }

  /** Get all converters in a specific category */
  getByCategory(category: ToolCategory): ConverterDefinition[] {
    return Array.from(this.converters.values()).filter(
      (c) => c.category === category
    );
  }

  /** Get all registered converters */
  getAll(): ConverterDefinition[] {
    return Array.from(this.converters.values());
  }

  /** Get only enabled converters */
  getEnabled(): ConverterDefinition[] {
    return this.getAll().filter((c) => c.isEnabled);
  }

  /** Search converters by query string */
  search(query: string): ConverterDefinition[] {
    const lowerQuery = query.toLowerCase();
    return this.getAll().filter(
      (c) =>
        c.name.toLowerCase().includes(lowerQuery) ||
        c.description.toLowerCase().includes(lowerQuery) ||
        c.inputFormats.some((f) => f.includes(lowerQuery)) ||
        c.outputFormats.some((f) => f.includes(lowerQuery))
    );
  }

  /** Get the total number of registered converters */
  get count(): number {
    return this.converters.size;
  }

  /** Check if a converter is registered */
  has(id: string): boolean {
    return this.converters.has(id);
  }
}

// Singleton instance
export const converterRegistry = new ConverterRegistry();
