import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Our Mission to Democratize Viral Content | CreatorLuck",
  description:
    "CreatorLuck helps 12,000+ creators make data-driven decisions. We've analyzed 2.3M+ videos to decode what makes content go viral. Learn about our mission and values.",
  keywords: [
    "about CreatorLuck",
    "viral content analysis company",
    "YouTube creator tools",
    "video analytics platform",
    "content creator community",
  ],
  openGraph: {
    title: "About — Our Mission to Democratize Viral Content | CreatorLuck",
    description:
      "We've analyzed 2.3M+ videos to decode what makes content go viral. Learn about our mission.",
    siteName: "CreatorLuck",
    type: "website",
    url: "https://creatorluck.io/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Our Mission to Democratize Viral Content | CreatorLuck",
    description:
      "We've analyzed 2.3M+ videos to decode what makes content go viral. Learn about our mission.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
