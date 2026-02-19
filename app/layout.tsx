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
  verification: {
    google: "ADD_YOUR_GSC_VERIFICATION_CODE_HERE", // Get from Google Search Console
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
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://counselstack.io/#website",
      url: "https://counselstack.io",
      name: "CounselStack",
      publisher: { "@id": "https://counselstack.io/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://counselstack.io/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://counselstack.io/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best legal practice management software in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best legal practice management software in 2026 depends on firm size and needs. Clio is the industry leader with the most integrations (250+) starting at $49/user/month. MyCase offers the best value for small firms starting at $39/user/month. PracticePanther is the best all-in-one at $49/user/month for solos. Smokeball is best for high-volume document-intensive practices. CosmoLex is best for firms needing built-in accounting at $109/user/month.",
          },
        },
        {
          "@type": "Question",
          name: "How much does legal practice management software cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Legal practice management software typically costs $39–$149 per user per month, billed annually. MyCase starts at $39/user/month (Basic). Clio starts at $49/user/month (EasyStart). PracticePanther starts at $49/user/month (Solo). Smokeball starts at $149/month flat-rate. CosmoLex starts at $109/user/month. Most vendors offer a free trial of 7–30 days.",
          },
        },
        {
          "@type": "Question",
          name: "What features should legal practice management software have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Essential features include: case/matter management, time tracking and billing, trust accounting (IOLTA compliance), client portal, document management, calendar and deadline management, and conflict checking. Advanced features include: legal AI assistance, intake forms, automated workflows, e-signature, two-way texting, and court filing integrations.",
          },
        },
        {
          "@type": "Question",
          name: "Is Clio worth the price?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clio is generally worth the price for firms that need a mature, well-integrated platform. With 250+ integrations, strong mobile apps, and the largest third-party ecosystem in legal software, Clio justifies its $49–$149/user/month price for most practices. Solo attorneys often find MyCase or PracticePanther more cost-effective.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch legal practice management software without losing data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most legal practice management platforms offer data migration assistance. You can typically export matters, contacts, documents, and billing history as CSV or via API. Vendors like PracticePanther and Clio offer free migration support on their higher-tier plans. Budget 2–4 weeks for a smooth transition.",
          },
        },
      ],
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
