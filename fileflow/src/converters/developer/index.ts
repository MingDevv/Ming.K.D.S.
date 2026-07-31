import { BaseConverter, type ConvertResult } from "../types";
import { converterRegistry } from "../registry";
import { Code } from "lucide-react";
import Papa from "papaparse";
import { load, dump } from "js-yaml";

// 1. JSON to CSV
export class JsonToCsvConverter extends BaseConverter {
  constructor() {
    super({
      id: "json-to-csv",
      name: "JSON to CSV",
      slug: "json-to-csv",
      description: "Convert JSON arrays or objects into structured CSV spreadsheets",
      category: "developer",
      inputFormats: [".json"],
      outputFormats: [".csv"],
      maxFileSize: 10 * 1024 * 1024,
      icon: Code,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const text = await file.text();
      let jsonData = JSON.parse(text);

      if (!Array.isArray(jsonData)) {
        if (typeof jsonData === "object" && jsonData !== null) {
          jsonData = [jsonData];
        } else {
          throw new Error("JSON input must be an array of objects or a single JSON object");
        }
      }

      const csvString = Papa.unparse(jsonData);
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.csv`,
        outputMimeType: "text/csv",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "JSON to CSV conversion failed",
      };
    }
  }
}

// 2. CSV to JSON
export class CsvToJsonConverter extends BaseConverter {
  constructor() {
    super({
      id: "csv-to-json",
      name: "CSV to JSON",
      slug: "csv-to-json",
      description: "Convert CSV spreadsheets into clean formatted JSON data",
      category: "developer",
      inputFormats: [".csv"],
      outputFormats: [".json"],
      maxFileSize: 10 * 1024 * 1024,
      icon: Code,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const text = await file.text();
      const parseResult = Papa.parse(text, { header: true, dynamicTyping: true, skipEmptyLines: true });

      if (parseResult.errors.length > 0 && parseResult.data.length === 0) {
        throw new Error(`CSV Parsing error: ${parseResult.errors[0].message}`);
      }

      const jsonString = JSON.stringify(parseResult.data, null, 2);
      const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.json`,
        outputMimeType: "application/json",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "CSV to JSON conversion failed",
      };
    }
  }
}

// 3. YAML to JSON
export class YamlToJsonConverter extends BaseConverter {
  constructor() {
    super({
      id: "yaml-to-json",
      name: "YAML to JSON",
      slug: "yaml-to-json",
      description: "Convert YAML configuration files to formatted JSON",
      category: "developer",
      inputFormats: [".yaml", ".yml"],
      outputFormats: [".json"],
      maxFileSize: 10 * 1024 * 1024,
      icon: Code,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const text = await file.text();
      const yamlData = load(text);
      const jsonString = JSON.stringify(yamlData, null, 2);

      const blob = new Blob([jsonString], { type: "application/json;charset=utf-8;" });
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.json`,
        outputMimeType: "application/json",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "YAML to JSON conversion failed",
      };
    }
  }
}

// 4. JSON to YAML
export class JsonToYamlConverter extends BaseConverter {
  constructor() {
    super({
      id: "json-to-yaml",
      name: "JSON to YAML",
      slug: "json-to-yaml",
      description: "Convert JSON data to clean YAML format",
      category: "developer",
      inputFormats: [".json"],
      outputFormats: [".yaml"],
      maxFileSize: 10 * 1024 * 1024,
      icon: Code,
      isPremium: false,
      isEnabled: true,
    });
  }

  async convert(file: File): Promise<ConvertResult> {
    const startTime = performance.now();
    try {
      const text = await file.text();
      const jsonData = JSON.parse(text);
      const yamlString = dump(jsonData);

      const blob = new Blob([yamlString], { type: "text/yaml;charset=utf-8;" });
      const baseName = file.name.replace(/\.[^/.]+$/, "");

      return {
        success: true,
        outputFile: blob,
        outputFileName: `${baseName}.yaml`,
        outputMimeType: "text/yaml",
        processingTimeMs: Math.round(performance.now() - startTime),
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "JSON to YAML conversion failed",
      };
    }
  }
}

// Register developer converters
converterRegistry.register(new JsonToCsvConverter());
converterRegistry.register(new CsvToJsonConverter());
converterRegistry.register(new YamlToJsonConverter());
converterRegistry.register(new JsonToYamlConverter());
