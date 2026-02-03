import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Plus_Jakarta_Sans, Space_Mono, Instrument_Serif } from "next/font/google";
// Styles loaded from main.css - globals.css removed
import "./main.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CreatorLuck — Read The Cards",
  description: "Stop guessing. Discover what makes videos go viral.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO: Re-enable ClerkProvider after Design Mode changes
    // <ClerkProvider>
      <html
        lang="en"
        className={`${jakarta.variable} ${spaceMono.variable} ${instrumentSerif.variable}`}
      >
        <body className="font-sans bg-background text-foreground antialiased">
          {children}
        </body>
      </html>
    // </ClerkProvider>
  );
}
