import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Find Homes for Sale & Rent | RealEstatePro",
  description: "Browse real estate listings for sale and rent. Find your dream home with RealEstatePro.",
  keywords: ["real estate", "homes for sale", "rentals", "apartments", "houses"],
  openGraph: {
    title: "Find Homes for Sale & Rent | RealEstatePro",
    description: "Browse real estate listings for sale and rent.",
    url: "https://yourdomain.com",
    images: [{ url: "https://yourdomain.com/og-image.jpg" }],
  },
};

export default function SEO({ metadata }: { metadata?: Metadata }) {
  // Next.js uses metadata export, so this is for custom tags if needed
  return null;
}
