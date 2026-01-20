import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEOScribes | AI-Powered SEO Content That Performs",
  description: "Transform your SEO workflow with AI-driven content creation, GSC integration, and seamless publishing. From search intent to published posts—automatically.",
  keywords: "SEO, AI content, Google Search Console, content marketing, WordPress publishing",
  verification: {
    google: "2Zog45VlOrbCx0RFiulA9CaXEHHBSOOd7hRqPwa_WUc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/seoscibesfavicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* AEO/GEO Optimization - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SEOScribes",
              "operatingSystem": "Web-based",
              "applicationCategory": "SEO Software",
              "description": "AI-powered SEO platform that automates content creation, detects traffic decay, and optimizes for Google and AI answer engines.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is SEOScribes?",
                  "acceptedAnswer": {
                    "@type": "AcceptedAnswer",
                    "text": "SEOScribes is an AI-native SEO platform designed to automate content creation and ranking recovery. It connects directly to your Google Search Console to detect traffic drops."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does SEOScribes help with AEO and GEO?",
                  "acceptedAnswer": {
                    "@type": "AcceptedAnswer",
                    "text": "SEOScribes optimizes for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) using structured data and clear semantic hierarchies to increase citations by AI models like ChatGPT and Google SGE."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}