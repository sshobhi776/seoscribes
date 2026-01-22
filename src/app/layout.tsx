import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEOScribes | AI-Powered SEO Content That Performs",
  description: "The AI-native SEO platform that automatically detects ranking drops, recovers lost traffic, and optimizes for Google and AI answer engines using real performance data.",
  keywords: "SEO, AI content, Google Search Console, content marketing, WordPress publishing, AEO, GEO, search engine optimization",
  metadataBase: new URL('https://seoscribes.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SEOScribes | AI-Powered SEO Content That Performs",
    description: "The AI-native SEO platform that automatically detects ranking drops, recovers lost traffic, and optimizes for Google and AI answer engines.",
    url: 'https://seoscribes.com',
    siteName: 'SEOScribes',
    images: [
      {
        url: '/images/seoscribeslogo.webp',
        width: 1200,
        height: 630,
        alt: 'SEOScribes - AI-Powered SEO Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEOScribes | AI-Powered SEO Content That Performs",
    description: "The AI-native SEO platform that automatically detects ranking drops and recovers lost traffic.",
    images: ['/images/seoscribeslogo.webp'],
  },
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
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/images/seoscibesfavicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Brand/Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SEOScribes",
              "url": "https://seoscribes.com",
              "logo": "https://seoscribes.com/images/seoscribeslogo.webp",
              "sameAs": [
                "https://twitter.com/seoscribes",
                "https://linkedin.com/company/seoscribes"
              ]
            })
          }}
        />

        {/* Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SEOScribes",
              "operatingSystem": "Web-based",
              "applicationCategory": "SEO Software",
              "description": "AI-native SEO platform that automatically detects ranking drops, recovers lost traffic, and simplifies AI and search engine optimization using real-time GSC data.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />

        {/* FAQ Schema for AEO/GEO */}
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
                    "@type": "Answer",
                    "text": "SEOScribes is an AI-native SEO platform designed to automate content creation and ranking recovery. It connects directly to your Google Search Console to detect traffic drops and identify content gaps using real performance data."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does SEOScribes help with AEO and GEO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "SEOScribes optimizes for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) by using structured data, clear semantic hierarchies, and LLM-optimized content structures. This increases the likelihood of your content being cited by AI models like ChatGPT, Perplexity, and Google SGE."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is SEOScribes different from generic AI writing tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike generic tools that write based on prompts alone, SEOScribes uses your actual Google Search Console data and real-time SERP analysis of the top 10 competitors to ensure your content is statistically more likely to rank and recover lost traffic."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does SEOScribes support WordPress?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, SEOScribes is built for a seamless workflow, allowing you to generate, optimize, and prepare content for easy publishing to WordPress and other CMS platforms."
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
