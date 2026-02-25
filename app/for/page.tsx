import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { audiences, getAllAudienceSlugs } from "./_data/audiences";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title: "Best Legal Software by Practice Type & Firm Size (2026) | CounselStack",
  description:
    "Find the best legal practice management software for your specific needs. Browse recommendations by practice type (family law, personal injury, immigration, criminal defense) and firm size (solo, small, mid-size).",
  alternates: {
    canonical: `${baseUrl}/for`,
  },
};

const audienceCards: { slug: string; icon: string; description: string }[] = [
  { slug: "solo-attorneys", icon: "\U0001F464", description: "Affordable, intuitive tools for attorneys running their own practice." },
  { slug: "small-firms", icon: "\U0001F46B", description: "Platforms that scale from 2 to 25 attorneys without enterprise complexity." },
  { slug: "mid-size-firms", icon: "\U0001F3E2", description: "Enterprise-grade capabilities for firms with 25-100+ attorneys." },
  { slug: "family-law", icon: "\U0001F3E0", description: "Document automation for divorce, custody, and domestic relations cases." },
  { slug: "personal-injury", icon: "\U0001F3E5", description: "High-volume intake, medical records management, and settlement tracking." },
  { slug: "real-estate-attorneys", icon: "\U0001F3D7\uFE0F", description: "Closing management, escrow accounting, and transactional document automation." },
  { slug: "immigration-attorneys", icon: "\U0001F30D", description: "USCIS form auto-fill, processing time tracking, and multi-language support." },
  { slug: "criminal-defense", icon: "\u2696\uFE0F", description: "Court calendar management, discovery tracking, and client communication tools." },
];

export default function ForIndexPage() {
  const slugs = getAllAudienceSlugs();

  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "By Practice Type", url: `${baseUrl}/for` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ItemListSchema
        name="Best Legal Software by Practice Type"
        url={`${baseUrl}/for`}
        items={slugs.map((slug) => ({
          name: audiences[slug].title,
          url: `${baseUrl}/for/${slug}`,
          description: audiences[slug].heroSubtext,
        }))}
      />
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-12">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-medium text-brand-700 mb-6">
              <Scale className="h-3.5 w-3.5" /> Updated for 2026
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Best Legal Software by Practice Type & Firm Size
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every law practice is different. Find tailored software recommendations for your specific firm size, practice area, and workflow needs.
            </p>
          </div>
        </section>

        {/* Firm Size Section */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">By Firm Size</h2>
            <p className="text-slate-600 mb-8">Software recommendations based on how many attorneys are in your practice.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {audienceCards.filter(c => ["solo-attorneys", "small-firms", "mid-size-firms"].includes(c.slug)).map((card) => {
                const audience = audiences[card.slug];
                return (
                  <Link
                    key={card.slug}
                    href={`/for/${card.slug}`}
                    className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
                  >
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <h3 className="font-bold text-slate-900 group-hover:text-brand-700 mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">{card.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                      View picks <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Practice Area Section */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">By Practice Area</h2>
            <p className="text-slate-600 mb-8">Software recommendations tailored to the unique workflows of your practice area.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {audienceCards.filter(c => !["solo-attorneys", "small-firms", "mid-size-firms"].includes(c.slug)).map((card) => {
                const audience = audiences[card.slug];
                return (
                  <Link
                    key={card.slug}
                    href={`/for/${card.slug}`}
                    className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl shrink-0">{card.icon}</div>
                      <div>
                        <h3 className="font-bold text-slate-900 group-hover:text-brand-700 mb-2">
                          {audience.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">{card.description}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                          View picks <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Not sure where to start?</h2>
              <p className="text-slate-600 mb-6">
                Check our overall rankings or compare specific platforms side by side.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/best/legal-practice-management-software-2026"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-800 transition-colors"
                >
                  Overall Rankings <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700 transition-colors"
                >
                  Compare Pricing <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
