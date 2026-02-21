import { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ArrowRight, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { StarRating } from "@/components/ui/StarRating";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title: "Best Legal Practice Management Software 2026 | CounselStack",
  description:
    "The best legal practice management software in 2026, ranked by experts. Clio, MyCase, PracticePanther, Smokeball, and CosmoLex — with real pricing and honest verdicts.",
  alternates: {
    canonical: `${baseUrl}/best/legal-practice-management-software-2026`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best legal practice management software in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best legal practice management software in 2026 is Clio for firms needing deep integrations (250+ apps, from $49/user/month), MyCase for the best value (from $39/user/month), PracticePanther for solo practitioners (from $49/user/month with native eSignature), Smokeball for document-intensive practices, and CosmoLex for firms wanting built-in accounting.",
      },
    },
    {
      "@type": "Question",
      "name": "Which legal software is best for small law firms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MyCase Pro ($89/user/month) is the best legal practice management software for most small law firms in 2026. It offers the cleanest interface, built-in AI features, two-way texting, and unlimited storage at a competitive price.",
      },
    },
  ],
};

const picks = [
  {
    rank: 1,
    badge: "Editor's Choice",
    name: "Clio",
    slug: "clio",
    rating: 4.7,
    price: "From $49/user/month (annual)",
    affiliateUrl: "https://www.clio.com/signup/",
    highlight: "Best overall — largest ecosystem with 250+ integrations",
    bestFor: "Mid-size to large firms, integration-heavy workflows",
    pros: ["250+ integrations", "Best mobile apps", "Clio Grow CRM included on Expand", "Industry-leading support"],
    cons: ["More expensive than alternatives", "No built-in accounting"],
    freeTrial: "7-day free trial",
  },
  {
    rank: 2,
    badge: "Best Value",
    name: "MyCase",
    slug: "mycase",
    rating: 4.5,
    price: "From $39/user/month (annual)",
    affiliateUrl: "https://www.mycase.com/free-trial/",
    highlight: "Lowest entry price, cleanest interface, built-in AI",
    bestFor: "Solo attorneys and small firms prioritizing value and simplicity",
    pros: ["$39/user/mo entry price", "Best-in-class interface", "Built-in AI (8am IQ)", "10-day free trial"],
    cons: ["Fewer integrations than Clio", "Limited API on lower plans"],
    freeTrial: "10-day free trial",
  },
  {
    rank: 3,
    badge: "Best for Solos",
    name: "PracticePanther",
    slug: "practicepanther",
    rating: 4.5,
    price: "From $49/user/month (annual)",
    affiliateUrl: "https://www.practicepanther.com/free-trial/",
    highlight: "Native eSignature and two-way texting eliminate extra subscriptions",
    bestFor: "Solo practitioners wanting a self-contained, intuitive platform",
    pros: ["Native eSignature (Business plan)", "Built-in 2-way texting", "LEDES billing for insurance defense", "Free data migration"],
    cons: ["Mid-tier pricing", "No built-in accounting"],
    freeTrial: "7-day free trial",
  },
  {
    rank: 4,
    badge: "Best for Documents",
    name: "Smokeball",
    slug: "smokeball",
    rating: 4.4,
    price: "From $149/month (annual contract)",
    affiliateUrl: "https://www.smokeball.com/free-trial/",
    highlight: "Autotime + deepest document automation in the industry",
    bestFor: "Real estate, family law, and estate planning practices",
    pros: ["Autotime (AI time tracking)", "Largest document template library", "Deep Microsoft 365 integration", "Practice area workflows"],
    cons: ["Annual contract required", "Opaque pricing", "Steeper learning curve"],
    freeTrial: "Trial available",
  },
  {
    rank: 5,
    badge: "Best Accounting",
    name: "CosmoLex",
    slug: "cosmolex",
    rating: 4.3,
    price: "From $109/user/month (annual)",
    affiliateUrl: "https://www.cosmolex.com/free-trial/",
    highlight: "Only platform with full accounting built in — no QuickBooks needed",
    bestFor: "Firms frustrated with QuickBooks sync issues, accounting-integrated needs",
    pros: ["Built-in double-entry accounting", "Full trust accounting + 3-way reconciliation", "Single platform for everything", "No QuickBooks subscription needed"],
    cons: ["Higher price point", "Smaller integration library", "Less polished interface"],
    freeTrial: "10-day free trial",
  },
];

export default function BestLegalPMPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Best", url: `${baseUrl}/best` },
    {
      name: "Best Legal Practice Management Software 2026",
      url: `${baseUrl}/best/legal-practice-management-software-2026`,
    },
  ];

  return (
    <>
      <FAQSchema
        faqs={jsonLd.mainEntity.map((faq) => ({
          question: faq.name,
          answer: faq.acceptedAnswer.text,
        }))}
      />
      <ItemListSchema
        name="Best Legal Practice Management Software 2026"
        url={`${baseUrl}/best/legal-practice-management-software-2026`}
        items={picks.map((pick) => ({
          name: pick.name,
          url: `${baseUrl}/reviews/${pick.slug}`,
          description: pick.highlight,
        }))}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />

      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
              <Star className="h-3 w-3 fill-brand-500 text-brand-500" /> Updated February 2026
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Best Legal Practice Management Software 2026
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We analyzed pricing, features, usability, and integrations across 12 platforms to bring you the 5 best legal practice management tools for law firms in 2026. All pricing is current and verified.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        {/* Quick Picks Table */}
        <section className="py-8 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border border-slate-200">
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">Platform</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">Rating</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">Starting Price</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {picks.map((p, i) => (
                    <tr key={p.slug} className={`border-b border-slate-100 ${i === 0 ? "bg-brand-50" : ""}`}>
                      <td className="py-2.5 px-3 font-medium text-slate-900">
                        <Link href={`/reviews/${p.slug}`} className="hover:text-brand-600">{p.name}</Link>
                        {i === 0 && <span className="ml-2 text-xs text-brand-600 font-semibold">★ Top Pick</span>}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">{p.rating}/5</td>
                      <td className="py-2.5 px-3 text-slate-700">{p.price.split(" ")[1]}</td>
                      <td className="py-2.5 px-3 text-slate-600">{p.bestFor.split(",")[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Picks */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-8">
            {picks.map((pick) => (
              <div
                key={pick.slug}
                className={`rounded-2xl border p-8 ${pick.rank === 1 ? "border-brand-300 bg-brand-50 shadow-md" : "border-slate-200 bg-white shadow-sm"}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-slate-400">#{pick.rank}</span>
                      <h2 className="text-2xl font-bold text-slate-900">{pick.name}</h2>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pick.rank === 1 ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                        {pick.badge}
                      </span>
                    </div>
                    <StarRating rating={pick.rating} />
                    <p className="mt-2 text-brand-700 font-semibold">{pick.price}</p>
                  </div>
                  <Link
                    href={pick.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-shrink-0 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors flex items-center gap-1.5"
                  >
                    Try Free <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <p className="text-slate-700 font-medium mb-4">{pick.highlight}</p>
                <p className="text-sm text-slate-600 mb-4"><strong>Best for:</strong> {pick.bestFor}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-2">✓ PROS</p>
                    <ul className="space-y-1">
                      {pick.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-sm text-slate-700">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-green-500" /> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 mb-2">✗ CONS</p>
                    <ul className="space-y-1">
                      {pick.cons.map((con) => (
                        <li key={con} className="text-sm text-slate-600 flex items-start gap-1.5">
                          <span className="text-red-400 mt-0.5">—</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/reviews/${pick.slug}`}
                    className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    Full {pick.name} review <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-xs text-slate-400">|</span>
                  <span className="text-xs text-slate-500">{pick.freeTrial}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More picks */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">More Recommendations</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/best/solo-practitioners" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Best for Solo Practitioners</h3>
                <p className="text-sm text-slate-500">The most affordable options for attorneys running solo practices.</p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">View picks <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
              <Link href="/best/small-law-firms" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Best for Small Law Firms</h3>
                <p className="text-sm text-slate-500">Platforms that scale from 2 to 25 attorneys without complexity.</p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">View picks <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
              <Link href="/best/free-budget-options" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Best Free / Budget Options</h3>
                <p className="text-sm text-slate-500">Free trials and low-cost options for cost-conscious practices.</p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">View picks <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
              <Link href="/pricing" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Compare All Pricing</h3>
                <p className="text-sm text-slate-500">Side-by-side pricing table for all major legal PM platforms.</p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">View table <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
