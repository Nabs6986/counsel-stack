import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://counselstack.io"),
  title: {
    default: "CounselStack — Legal Practice Management Software Reviews",
    template: "%s | CounselStack",
  },
  description:
    "Independent reviews and comparisons of the best legal practice management software in 2026. Expert analysis of Clio, MyCase, PracticePanther, Smokeball, CosmoLex and more.",
  keywords: [
    "legal practice management software",
    "law firm software",
    "legal case management",
    "attorney software",
    "best legal software 2026",
    "Clio review",
    "MyCase review",
    "PracticePanther review",
    "Smokeball review",
    "CosmoLex review",
  ],
  authors: [{ name: "CounselStack Editorial Team" }],
  creator: "CounselStack",
  publisher: "CounselStack",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://counselstack.io",
    siteName: "CounselStack",
    title: "CounselStack — Legal Practice Management Software Reviews",
    description:
      "Independent reviews of the best legal practice management software. Compare Clio, MyCase, PracticePanther, Smokeball, CosmoLex and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CounselStack — Legal Practice Management Software Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CounselStack — Legal Practice Management Software Reviews",
    description:
      "Independent reviews of the best legal practice management software.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://counselstack.io",
  },
  category: "Technology",
};

// Global JSON-LD for AI search engines (GEO)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://counselstack.io/#organization",
      name: "CounselStack",
      url: "https://counselstack.io",
      logo: {
        "@type": "ImageObject",
        url: "https://counselstack.io/logo.png",
      },
      description:
        "CounselStack provides independent, expert reviews of legal practice management software to help attorneys and law firms choose the right tools.",
    },
    {
      "@type": "WebSite",
      "@id": "https://counselstack.io/#website",
      url: "https://counselstack.io",
      name: "CounselStack",
      publisher: { "@id": "https://counselstack.io/#organization" },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
