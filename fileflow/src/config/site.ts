export const siteConfig = {
  name: "FileFlow",
  description:
    "Modern online file conversion platform. Convert documents, images, videos, audio, archives and developer files — all in one place.",
  url: "https://fileflow.app",
  ogImage: "https://fileflow.app/og-image.png",
  creator: "FileFlow Team",
  keywords: [
    "file converter",
    "online converter",
    "pdf converter",
    "image converter",
    "video converter",
    "audio converter",
    "document converter",
    "file conversion",
    "free converter",
    "convert files online",
  ] as string[],
  links: {
    twitter: "https://twitter.com/fileflow",
    github: "https://github.com/fileflow",
  },
};

export type SiteConfig = typeof siteConfig;
