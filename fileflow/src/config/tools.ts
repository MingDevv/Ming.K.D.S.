import {
  FileText,
  Image,
  Video,
  Music,
  FileSpreadsheet,
  Archive,
  Code,
  type LucideIcon,
} from "lucide-react";

export type ToolCategory =
  | "pdf"
  | "image"
  | "video"
  | "audio"
  | "document"
  | "archive"
  | "developer";

export interface ToolDefinition {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: ToolCategory;
  inputFormats: string[];
  outputFormats: string[];
  isPremium: boolean;
  isEnabled: boolean;
}

export interface CategoryDefinition {
  id: ToolCategory;
  name: string;
  description: string;
  color: string;
  gradient: string;
  tools: ToolDefinition[];
}

export const categoryIconMap: Record<ToolCategory, LucideIcon> = {
  pdf: FileText,
  image: Image,
  video: Video,
  audio: Music,
  document: FileSpreadsheet,
  archive: Archive,
  developer: Code,
};

export const categories: CategoryDefinition[] = [
  {
    id: "pdf",
    name: "PDF",
    description: "Convert, merge, split, and compress PDF files",
    color: "text-red-500",
    gradient: "from-red-500/20 to-orange-500/20",
    tools: [
      {
        id: "pdf-to-word",
        name: "PDF to Word",
        slug: "pdf-to-word",
        description: "Convert PDF documents to editable Word files",
        category: "pdf",
        inputFormats: [".pdf"],
        outputFormats: [".docx"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "pdf-to-excel",
        name: "PDF to Excel",
        slug: "pdf-to-excel",
        description: "Extract tables from PDF to Excel spreadsheets",
        category: "pdf",
        inputFormats: [".pdf"],
        outputFormats: [".xlsx"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "pdf-to-image",
        name: "PDF to Image",
        slug: "pdf-to-image",
        description: "Convert PDF pages to high-quality images",
        category: "pdf",
        inputFormats: [".pdf"],
        outputFormats: [".png", ".jpg"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "merge-pdf",
        name: "Merge PDF",
        slug: "merge-pdf",
        description: "Combine multiple PDF files into one document",
        category: "pdf",
        inputFormats: [".pdf"],
        outputFormats: [".pdf"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "jpg-to-pdf",
        name: "Image to PDF",
        slug: "jpg-to-pdf",
        description: "Convert JPG or PNG images to a PDF document",
        category: "pdf",
        inputFormats: [".jpg", ".png"],
        outputFormats: [".pdf"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "compress-pdf",
        name: "Compress PDF",
        slug: "compress-pdf",
        description: "Reduce PDF file size while maintaining quality",
        category: "pdf",
        inputFormats: [".pdf"],
        outputFormats: [".pdf"],
        isPremium: true,
        isEnabled: false,
      },
    ],
  },
  {
    id: "image",
    name: "Image",
    description: "Convert, resize, compress, and optimize images",
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-cyan-500/20",
    tools: [
      {
        id: "png-to-jpg",
        name: "PNG to JPG",
        slug: "png-to-jpg",
        description: "Convert PNG images to JPG format",
        category: "image",
        inputFormats: [".png"],
        outputFormats: [".jpg"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "jpg-to-png",
        name: "JPG to PNG",
        slug: "jpg-to-png",
        description: "Convert JPG images to PNG format",
        category: "image",
        inputFormats: [".jpg", ".jpeg"],
        outputFormats: [".png"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "webp-to-png",
        name: "WebP to PNG",
        slug: "webp-to-png",
        description: "Convert WebP images to PNG format",
        category: "image",
        inputFormats: [".webp"],
        outputFormats: [".png"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "svg-to-png",
        name: "SVG to PNG",
        slug: "svg-to-png",
        description: "Convert SVG vector graphics to PNG raster images",
        category: "image",
        inputFormats: [".svg"],
        outputFormats: [".png"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "image-resize",
        name: "Resize Image",
        slug: "image-resize",
        description: "Resize images to any dimension",
        category: "image",
        inputFormats: [".png", ".jpg", ".webp"],
        outputFormats: [".png", ".jpg", ".webp"],
        isPremium: false,
        isEnabled: true,
      },
    ],
  },
  {
    id: "video",
    name: "Video",
    description: "Convert, compress, and transform video files",
    color: "text-purple-500",
    gradient: "from-purple-500/20 to-pink-500/20",
    tools: [
      {
        id: "mp4-to-webm",
        name: "MP4 to WebM",
        slug: "mp4-to-webm",
        description: "Convert MP4 videos to WebM format",
        category: "video",
        inputFormats: [".mp4"],
        outputFormats: [".webm"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "mp4-to-gif",
        name: "MP4 to GIF",
        slug: "mp4-to-gif",
        description: "Create animated GIFs from video files",
        category: "video",
        inputFormats: [".mp4"],
        outputFormats: [".gif"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "video-compress",
        name: "Compress Video",
        slug: "video-compress",
        description: "Reduce video file size while maintaining quality",
        category: "video",
        inputFormats: [".mp4", ".webm", ".avi"],
        outputFormats: [".mp4"],
        isPremium: true,
        isEnabled: false,
      },
      {
        id: "mov-to-mp4",
        name: "MOV to MP4",
        slug: "mov-to-mp4",
        description: "Convert MOV videos to MP4 format",
        category: "video",
        inputFormats: [".mov"],
        outputFormats: [".mp4"],
        isPremium: false,
        isEnabled: false,
      },
    ],
  },
  {
    id: "audio",
    name: "Audio",
    description: "Convert, trim, and optimize audio files",
    color: "text-green-500",
    gradient: "from-green-500/20 to-emerald-500/20",
    tools: [
      {
        id: "mp3-to-wav",
        name: "MP3 to WAV",
        slug: "mp3-to-wav",
        description: "Convert MP3 audio to WAV format",
        category: "audio",
        inputFormats: [".mp3"],
        outputFormats: [".wav"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "wav-to-mp3",
        name: "WAV to MP3",
        slug: "wav-to-mp3",
        description: "Convert WAV audio to MP3 format",
        category: "audio",
        inputFormats: [".wav"],
        outputFormats: [".mp3"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "flac-to-mp3",
        name: "FLAC to MP3",
        slug: "flac-to-mp3",
        description: "Convert FLAC lossless audio to MP3",
        category: "audio",
        inputFormats: [".flac"],
        outputFormats: [".mp3"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "ogg-to-mp3",
        name: "OGG to MP3",
        slug: "ogg-to-mp3",
        description: "Convert OGG audio to MP3 format",
        category: "audio",
        inputFormats: [".ogg"],
        outputFormats: [".mp3"],
        isPremium: false,
        isEnabled: false,
      },
    ],
  },
  {
    id: "document",
    name: "Document",
    description: "Convert between document formats seamlessly",
    color: "text-amber-500",
    gradient: "from-amber-500/20 to-yellow-500/20",
    tools: [
      {
        id: "word-to-pdf",
        name: "Word to PDF",
        slug: "word-to-pdf",
        description: "Convert Word documents to PDF format",
        category: "document",
        inputFormats: [".docx", ".doc"],
        outputFormats: [".pdf"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "excel-to-pdf",
        name: "Excel to PDF",
        slug: "excel-to-pdf",
        description: "Convert Excel spreadsheets to PDF format",
        category: "document",
        inputFormats: [".xlsx", ".xls"],
        outputFormats: [".pdf"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "pptx-to-pdf",
        name: "PowerPoint to PDF",
        slug: "pptx-to-pdf",
        description: "Convert PowerPoint presentations to PDF",
        category: "document",
        inputFormats: [".pptx", ".ppt"],
        outputFormats: [".pdf"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "markdown-to-html",
        name: "Markdown to HTML",
        slug: "markdown-to-html",
        description: "Convert Markdown files to HTML",
        category: "document",
        inputFormats: [".md"],
        outputFormats: [".html"],
        isPremium: false,
        isEnabled: true,
      },
    ],
  },
  {
    id: "archive",
    name: "Archive",
    description: "Compress, extract, and convert archive files",
    color: "text-teal-500",
    gradient: "from-teal-500/20 to-cyan-500/20",
    tools: [
      {
        id: "zip-to-rar",
        name: "ZIP to RAR",
        slug: "zip-to-rar",
        description: "Convert ZIP archives to RAR format",
        category: "archive",
        inputFormats: [".zip"],
        outputFormats: [".rar"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "rar-to-zip",
        name: "RAR to ZIP",
        slug: "rar-to-zip",
        description: "Convert RAR archives to ZIP format",
        category: "archive",
        inputFormats: [".rar"],
        outputFormats: [".zip"],
        isPremium: false,
        isEnabled: false,
      },
      {
        id: "tar-gz-extract",
        name: "Extract TAR.GZ",
        slug: "tar-gz-extract",
        description: "Extract TAR.GZ archive contents",
        category: "archive",
        inputFormats: [".tar.gz", ".tgz"],
        outputFormats: [".zip"],
        isPremium: false,
        isEnabled: false,
      },
    ],
  },
  {
    id: "developer",
    name: "Developer",
    description: "Tools for developers — JSON, YAML, CSV, and more",
    color: "text-indigo-500",
    gradient: "from-indigo-500/20 to-violet-500/20",
    tools: [
      {
        id: "json-to-csv",
        name: "JSON to CSV",
        slug: "json-to-csv",
        description: "Convert JSON data to CSV spreadsheets",
        category: "developer",
        inputFormats: [".json"],
        outputFormats: [".csv"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "csv-to-json",
        name: "CSV to JSON",
        slug: "csv-to-json",
        description: "Convert CSV spreadsheets to JSON data",
        category: "developer",
        inputFormats: [".csv"],
        outputFormats: [".json"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "yaml-to-json",
        name: "YAML to JSON",
        slug: "yaml-to-json",
        description: "Convert YAML to JSON format",
        category: "developer",
        inputFormats: [".yaml", ".yml"],
        outputFormats: [".json"],
        isPremium: false,
        isEnabled: true,
      },
      {
        id: "json-to-yaml",
        name: "JSON to YAML",
        slug: "json-to-yaml",
        description: "Convert JSON to YAML format",
        category: "developer",
        inputFormats: [".json"],
        outputFormats: [".yaml"],
        isPremium: false,
        isEnabled: true,
      },
    ],
  },
];

export function getCategoryById(id: ToolCategory): CategoryDefinition | undefined {
  return categories.find((c) => c.id === id);
}

export function getToolById(id: string): ToolDefinition | undefined {
  for (const category of categories) {
    const tool = category.tools.find((t) => t.id === id);
    if (tool) return tool;
  }
  return undefined;
}

export function getAllTools(): ToolDefinition[] {
  return categories.flatMap((c) => c.tools);
}

export function getToolsByCategory(categoryId: ToolCategory): ToolDefinition[] {
  return getCategoryById(categoryId)?.tools ?? [];
}

export function searchTools(query: string): ToolDefinition[] {
  const lowerQuery = query.toLowerCase();
  return getAllTools().filter(
    (tool) =>
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.description.toLowerCase().includes(lowerQuery) ||
      tool.inputFormats.some((f) => f.toLowerCase().includes(lowerQuery)) ||
      tool.outputFormats.some((f) => f.toLowerCase().includes(lowerQuery))
  );
}

export function getLiveTools(): ToolDefinition[] {
  return getAllTools().filter((t) => t.isEnabled);
}

export function getComingSoonTools(): ToolDefinition[] {
  return getAllTools().filter((t) => !t.isEnabled);
}

export function getPopularTools(): ToolDefinition[] {
  return [
    getToolById("png-to-jpg")!,
    getToolById("jpg-to-png")!,
    getToolById("merge-pdf")!,
    getToolById("jpg-to-pdf")!,
    getToolById("json-to-csv")!,
    getToolById("image-resize")!,
  ].filter((t) => t && t.isEnabled);
}

export const totalToolCount = categories.reduce((acc, c) => acc + c.tools.length, 0);
export const totalLiveToolCount = categories.reduce(
  (acc, c) => acc + c.tools.filter((t) => t.isEnabled).length,
  0
);
export const totalComingSoonCount = totalToolCount - totalLiveToolCount;
