import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Get in Touch | CreatorLuck",
  description:
    "Questions about CreatorLuck? Reach out for general inquiries, technical support, or partnership opportunities. We're here to help creators succeed.",
  keywords: [
    "contact CreatorLuck",
    "CreatorLuck support",
    "creator tools help",
    "video analytics support",
  ],
  openGraph: {
    title: "Contact — Get in Touch | CreatorLuck",
    description:
      "Questions about CreatorLuck? Reach out for inquiries, support, or partnerships.",
    siteName: "CreatorLuck",
    type: "website",
    url: "https://creatorluck.io/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Get in Touch | CreatorLuck",
    description:
      "Questions about CreatorLuck? Reach out for inquiries, support, or partnerships.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
