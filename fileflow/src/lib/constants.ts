export const APP_NAME = "FileFlow" as const;
export const APP_VERSION = "0.1.0" as const;

export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
export const MAX_FREE_FILE_SIZE = 25 * 1024 * 1024; // 25MB
export const MAX_PRO_FILE_SIZE = 500 * 1024 * 1024; // 500MB

export const ALLOWED_MIME_TYPES = {
  pdf: ["application/pdf"],
  image: ["image/png", "image/jpeg", "image/webp", "image/svg+xml", "image/gif", "image/bmp"],
  video: ["video/mp4", "video/webm", "video/quicktime", "video/x-msvideo"],
  audio: ["audio/mpeg", "audio/wav", "audio/ogg", "audio/flac", "audio/aac"],
  document: [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "text/markdown",
    "text/html",
  ],
  archive: [
    "application/zip",
    "application/x-rar-compressed",
    "application/gzip",
    "application/x-tar",
    "application/x-7z-compressed",
  ],
  developer: [
    "application/json",
    "text/csv",
    "text/yaml",
    "application/xml",
    "text/xml",
    "text/plain",
  ],
} as const;

export const RATE_LIMITS = {
  free: {
    conversionsPerDay: 10,
    maxConcurrent: 1,
  },
  pro: {
    conversionsPerDay: 100,
    maxConcurrent: 5,
  },
  enterprise: {
    conversionsPerDay: -1, // unlimited
    maxConcurrent: 20,
  },
} as const;

export const TEMP_FILE_TTL = 60 * 60 * 1000; // 1 hour in ms

export const PLANS = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for occasional file conversions",
    price: { monthly: 0, yearly: 0 },
    features: [
      "10 conversions per day",
      "25MB max file size",
      "Basic file formats",
      "Standard speed",
      "Community support",
    ],
    limitations: ["Watermark on exports", "Single file at a time"],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professionals who need more power",
    price: { monthly: 9.99, yearly: 99.99 },
    features: [
      "100 conversions per day",
      "500MB max file size",
      "All file formats",
      "Priority speed",
      "Batch processing",
      "No watermarks",
      "Email support",
      "API access",
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Unlimited conversions for your entire team",
    price: { monthly: 49.99, yearly: 499.99 },
    features: [
      "Unlimited conversions",
      "Unlimited file size",
      "All file formats",
      "Fastest speed",
      "Unlimited batch processing",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "SSO & team management",
      "Custom API limits",
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
  },
] as const;
