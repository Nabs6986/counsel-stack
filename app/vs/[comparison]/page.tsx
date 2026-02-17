import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { getComparison, getAllComparisonSlugs } from "../_data/comparisons";

interface Props {
  params: Promise<{ comparison: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ comparison: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { comparison: slug } = await params;
  const comp = getComparison(slug);
  if (!comp) return { title: "Comparison Not Found" };
  return {
    title: comp.metaTitle,
    description: comp.metaDescription,
    openGraph: { title: comp.metaTitle, description: comp.metaDescription },
  };
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="h-5 w-5 text-red-400 mx-auto" />;
  return <span className="text-sm text-slate-600">{value}</span>;
}

export default async function ComparisonPage({ params }: Props) {
  const { comparison: slug } = await params;
  const comp = getComparison(slug);
  if (!comp) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": comp.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />

      <main className="min-h-screen">
        <div className="bg-slate-50 border-b border-slate-100 py-3">
          <div className="mx-auto max-w-4xl px-6">
            <Link href="/reviews" className="flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600">
              <ArrowLeft className="h-3.5 w-3.5" /> All Reviews
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-10 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">
              {comp.tool1Name} vs {comp.tool2Name}
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Which legal practice management software is right for your law firm?
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        {/* Intro */}
        <section className="py-8 border-y border-slate-100 bg-blue-50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <h2 className="font-semibold text-slate-900 mb-2">Quick Summary</h2>
              <p className="text-slate-600 leading-relaxed">{comp.intro}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">
          {/* At a Glance */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">At a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-500 w-40"></th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-brand-700">{comp.tool1Name}</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-slate-700">{comp.tool2Name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-slate-600">Price Range</td>
                    <td className="py-3 px-4 text-sm font-semibold text-slate-900">{comp.tool1Price}</td>
                    <td className="py-3 px-4 text-sm text-slate-600">{comp.tool2Price}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-slate-600">Founded</td>
                    <td className="py-3 px-4 text-sm text-slate-900">{comp.tool1Founded}</td>
                    <td className="py-3 px-4 text-sm text-slate-600">{comp.tool2Founded}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm font-medium text-slate-600">Users</td>
                    <td className="py-3 px-4 text-sm text-slate-900">{comp.tool1Users}</td>
                    <td className="py-3 px-4 text-sm text-slate-600">{comp.tool2Users}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left text-sm font-medium text-slate-500">Feature</th>
                    <th className="py-3 px-4 text-center text-sm font-semibold text-brand-700">{comp.tool1Name}</th>
                    <th className="py-3 px-4 text-center text-sm font-semibold text-slate-700">{comp.tool2Name}</th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-slate-400">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comp.features.map((feat) => (
                    <tr key={feat.name} className="hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm font-medium text-slate-700">{feat.name}</td>
                      <td className="py-3 px-4 text-center">
                        <FeatureValue value={feat.tool1} />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <FeatureValue value={feat.tool2} />
                      </td>
                      <td className="py-3 px-4 text-center text-sm">
                        {feat.winner === "tie" ? (
                          <span className="text-slate-400">Tie</span>
                        ) : feat.winner === "tool1" ? (
                          <span className="font-semibold text-brand-600">{comp.tool1Name}</span>
                        ) : (
                          <span className="font-semibold text-slate-700">{comp.tool2Name}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When to Choose */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">When to Choose Each</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
                <h3 className="font-semibold text-brand-900 mb-4">Choose {comp.tool1Name} if...</h3>
                <ul className="space-y-2">
                  {comp.choiceCriteria.chooseT1.map((reason) => (
                    <li key={reason} className="flex items-start gap-2 text-sm text-brand-900">
                      <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-brand-600" />
                      {reason}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/reviews/${comp.tool1}`}
                  className="mt-4 inline-block text-sm font-medium text-brand-700 underline hover:text-brand-900"
                >
                  Read full {comp.tool1Name} review →
                </Link>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Choose {comp.tool2Name} if...</h3>
                <ul className="space-y-2">
                  {comp.choiceCriteria.chooseT2.map((reason) => (
                    <li key={reason} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-500" />
                      {reason}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/reviews/${comp.tool2}`}
                  className="mt-4 inline-block text-sm font-medium text-slate-700 underline hover:text-slate-900"
                >
                  Read full {comp.tool2Name} review →
                </Link>
              </div>
            </div>
          </section>

          {/* Verdict */}
          <section className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-xl font-bold mb-3">Our Verdict</h2>
            <p className="text-slate-300 leading-relaxed">{comp.verdict}</p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {comp.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Other Comparisons */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Other Comparisons</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Clio vs MyCase", href: "/vs/clio-vs-mycase" },
                { title: "Clio vs PracticePanther", href: "/vs/clio-vs-practicepanther" },
                { title: "MyCase vs PracticePanther", href: "/vs/mycase-vs-practicepanther" },
                { title: "Clio vs CosmoLex", href: "/vs/clio-vs-cosmolex" },
              ]
                .filter((c) => c.href !== `/vs/${slug}`)
                .map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="flex items-center justify-between p-4 rounded-lg border border-slate-200 bg-white hover:border-brand-300 text-sm font-medium text-slate-700 hover:text-brand-700 transition-colors"
                  >
                    {c.title} <span className="text-brand-500">→</span>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
