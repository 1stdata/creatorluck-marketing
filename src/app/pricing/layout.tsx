import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Plans for Every Creator | CreatorLuck",
  description:
    "Simple, transparent pricing for YouTube analytics and viral video analysis. Start with a free trial. Plans from $49/mo for individuals to $499/mo for teams.",
  keywords: [
    "CreatorLuck pricing",
    "YouTube analytics pricing",
    "video analysis tool cost",
    "creator tools pricing",
    "viral video software plans",
  ],
  openGraph: {
    title: "Pricing — Plans for Every Creator | CreatorLuck",
    description:
      "Simple, transparent pricing. Start with a free trial. Plans from $49/mo to $499/mo.",
    siteName: "CreatorLuck",
    type: "website",
    url: "https://creatorluck.io/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Plans for Every Creator | CreatorLuck",
    description:
      "Simple, transparent pricing. Start with a free trial. Plans from $49/mo to $499/mo.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
