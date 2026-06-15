import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Viral Video Analysis Tools | CreatorLuck",
  description:
    "Analyze any YouTube channel with frame-by-frame comparison, communication heatmaps, AI script generation, and viral pattern detection. See what makes top creators go viral.",
  keywords: [
    "YouTube video analysis",
    "viral video tools",
    "frame-by-frame video comparison",
    "video hook analysis",
    "communication heatmap",
    "AI script generator",
    "content optimization",
    "YouTube analytics",
  ],
  openGraph: {
    title: "Features — Viral Video Analysis Tools | CreatorLuck",
    description:
      "Analyze any YouTube channel with frame-by-frame comparison, communication heatmaps, and AI script generation.",
    siteName: "CreatorLuck",
    type: "website",
    url: "https://creatorluck.io/features",
  },
  twitter: {
    card: "summary_large_image",
    title: "Features — Viral Video Analysis Tools | CreatorLuck",
    description:
      "Analyze any YouTube channel with frame-by-frame comparison, communication heatmaps, and AI script generation.",
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
