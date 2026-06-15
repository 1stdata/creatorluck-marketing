import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Search, Analyze, Apply | CreatorLuck",
  description:
    "Three steps to data-driven content creation. Search any topic or channel, analyze viral patterns with AI, and apply insights to grow your YouTube channel.",
  keywords: [
    "how to analyze YouTube videos",
    "viral video analysis process",
    "data-driven content creation",
    "YouTube channel growth",
    "video optimization steps",
    "content strategy tool",
  ],
  openGraph: {
    title: "How It Works — Search, Analyze, Apply | CreatorLuck",
    description:
      "Three steps to data-driven content creation. Stop guessing, start knowing.",
    siteName: "CreatorLuck",
    type: "website",
    url: "https://creatorluck.io/how-it-works",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works — Search, Analyze, Apply | CreatorLuck",
    description:
      "Three steps to data-driven content creation. Stop guessing, start knowing.",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
