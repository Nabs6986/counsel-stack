import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { StarRating } from "@/components/ui/StarRating";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { getAllTools } from "./_data/tools";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title: "Legal Practice Management Software Reviews 2026",
  description:
    "In-depth, independent reviews of Clio, MyCase, PracticePanther, Smokeball, and CosmoLex. Real pricing, real features, honest verdicts.",
  alternates: {
    canonical: `${baseUrl}/reviews`,
  },
};

const tools = getAllTools();

export default function ReviewsIndexPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Reviews", url: `${baseUrl}/reviews` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ItemListSchema
        name="Legal Practice Management Software Reviews"
        url={`${baseUrl}/reviews`}
        items={tools.map((tool) => ({
          name: `${tool.name} Review`,
          url: `${baseUrl}/reviews/${tool.slug}`,
          description: tool.tagline,
        }))}
      />
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Legal Practice Management Software Reviews
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Independent, in-depth reviews of every major legal PM platform. We research real pricing, 
              test features, and give honest verdicts — no sponsored rankings.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-6">
            {tools.map((tool, index) => (
              <Link
                key={tool.slug}
                href={`/reviews/${tool.slug}`}
                className="block rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-sm text-slate-400 font-medium">#{index + 1}</span>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                        {tool.name}
                      </h2>
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                        {tool.bestFor.split(",")[0]}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{tool.tagline}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                      <span className="text-slate-600">
                        <strong className="text-slate-800">Starting at:</strong> {tool.pricing[0].price}
                      </span>
                      <span className="text-slate-600">
                        <strong className="text-slate-800">Free trial:</strong> {tool.freeTrial}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {tool.verdict}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <div className="text-2xl font-bold text-brand-600">{tool.overallRating}</div>
                    <StarRating rating={tool.overallRating} size="sm" showNumber={false} />
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-brand-500 mt-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
