import { Metadata } from "next";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | CounselStack",
  description:
    "Read CounselStack's affiliate disclosure and editorial independence policy.",
  alternates: {
    canonical: `${baseUrl}/affiliate-disclosure`,
  },
};

export default function AffiliateDisclosurePage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Affiliate Disclosure", url: `${baseUrl}/affiliate-disclosure` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Affiliate Disclosure</h1>
            <p className="text-lg text-slate-600">
              CounselStack is reader-supported. This page explains how affiliate
              commissions work and how we protect editorial independence.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 space-y-4 text-slate-700">
              <p>
                <strong>CounselStack may earn commissions</strong> when you click
                software links on our site and purchase from a vendor.
              </p>
              <p>
                These commissions help fund our research and publishing work, but
                they <strong>do not influence rankings, ratings, or verdicts</strong>.
              </p>
              <p>
                We apply the same evaluation criteria across all products, including
                products without affiliate relationships.
              </p>
              <p>
                Questions about a specific relationship can be sent to
                editorial@counselstack.io.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
