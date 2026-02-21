import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

const baseUrl = "https://counselstack.io";

const guides = [
  {
    name: "Best Legal Practice Management Software 2026",
    href: "/best/legal-practice-management-software-2026",
    description: "Our overall ranking of the best legal PM software.",
  },
  {
    name: "Best for Solo Practitioners",
    href: "/best/solo-practitioners",
    description: "Top tools for solo attorneys and lean teams.",
  },
  {
    name: "Best for Small Law Firms",
    href: "/best/small-law-firms",
    description: "Best options for firms with 2-25 attorneys.",
  },
  {
    name: "Best Free and Budget Options",
    href: "/best/free-budget-options",
    description: "Affordable and trial-based options for constrained budgets.",
  },
];

export const metadata: Metadata = {
  title: "Best Legal Software Guides 2026",
  description:
    "Browse all CounselStack best-of legal software guides by firm size and budget.",
  alternates: {
    canonical: `${baseUrl}/best`,
  },
};

export default function BestIndexPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Best", url: `${baseUrl}/best` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ItemListSchema
        name="Best Legal Software Guides"
        url={`${baseUrl}/best`}
        items={guides.map((guide) => ({
          name: guide.name,
          url: `${baseUrl}${guide.href}`,
          description: guide.description,
        }))}
      />
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Best Legal Software Guides</h1>
            <p className="text-lg text-slate-600">
              Ranked recommendations for legal practice management software based on
              firm size, budget, and workflow complexity.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 grid sm:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <h2 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-2">
                  {guide.name}
                </h2>
                <p className="text-sm text-slate-600 mb-3">{guide.description}</p>
                <span className="text-sm text-brand-600 font-medium inline-flex items-center gap-1">
                  Open guide <ArrowRight className="h-3.5 w-3.5" />
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
