import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { getAllComparisons } from "@/app/vs/_data/comparisons";

const baseUrl = "https://counselstack.io";
const comparisons = getAllComparisons();

export const metadata: Metadata = {
  title: "Legal Software Comparison Pages 2026",
  description:
    "Head-to-head legal practice management software comparisons with clear winner recommendations for law firms.",
  alternates: {
    canonical: `${baseUrl}/compare`,
  },
};

export default function CompareIndexPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Compare", url: `${baseUrl}/compare` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ItemListSchema
        name="Legal Practice Management Software Comparisons"
        url={`${baseUrl}/compare`}
        items={comparisons.map((comparison) => ({
          name: `${comparison.tool1Name} vs ${comparison.tool2Name}`,
          url: `${baseUrl}/compare/${comparison.slug}`,
          description: comparison.summaryReason,
        }))}
      />
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Legal PM Software Comparisons
            </h1>
            <p className="text-lg text-slate-600">
              Compare top legal practice management tools side-by-side on pricing,
              features, and fit by firm type.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-4">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.slug}
                href={`/compare/${comparison.slug}`}
                className="block rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                  {comparison.tool1Name} vs {comparison.tool2Name}
                </h2>
                <p className="text-sm text-slate-600 mb-3">{comparison.summaryReason}</p>
                <span className="text-sm text-brand-600 font-medium inline-flex items-center gap-1">
                  Read comparison <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
