import type { Metadata } from "next";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import { Plus_Jakarta_Sans, Space_Mono, Instrument_Serif } from "next/font/google";
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
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${jakarta.variable} ${spaceMono.variable} ${instrumentSerif.variable}`}
      >
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.edgetag=window.edgetag||function(){(edgetag.stubs=edgetag.stubs||[]).push(arguments)};
                edgetag('init', {
                  edgeURL: 'https://brdja.creatorluck.io',
                  disableConsentCheck: true
                });
              `,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script async src="https://brdja.creatorluck.io/load" />
        </head>
        <body className="font-sans bg-background text-foreground antialiased">
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w2grevsvt5");
            `}
          </Script>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
