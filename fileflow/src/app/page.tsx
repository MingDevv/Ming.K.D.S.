import { Hero } from "@/components/home/Hero";
import { UploadArea } from "@/components/home/UploadArea";
import { PopularCategories } from "@/components/home/PopularCategories";
import { PopularTools } from "@/components/home/PopularTools";
import { Features } from "@/components/home/Features";
import { FAQ } from "@/components/home/FAQ";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FileFlow",
    url: "https://fileflow.app",
    description:
      "Modern online file conversion platform. Convert documents, images, videos, audio, archives and developer files.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <UploadArea />
      <PopularCategories />
      <PopularTools />
      <Features />
      <FAQ />
      <Newsletter />
    </>
  );
}
