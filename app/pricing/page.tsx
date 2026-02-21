import { Metadata } from "next";
import Link from "next/link";
import { Check, X, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title: "Legal Practice Management Software Pricing Comparison 2026 | CounselStack",
  description:
    "Compare pricing for Clio, MyCase, PracticePanther, Smokeball, and CosmoLex. Real 2026 pricing including hidden fees, add-ons, and annual vs monthly rates.",
  alternates: {
    canonical: `${baseUrl}/pricing`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the cheapest legal practice management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MyCase Basic is the cheapest major legal practice management platform at $39/user/month billed annually ($49/month billed monthly). It includes full case management, billing, client portal, and unlimited document storage.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Clio cost per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clio's pricing is per user per month: EasyStart $49 (annual) / $59 (monthly), Essentials $89/$99, Advanced $119/$139, Expand $149/$169. All plans include a 7-day free trial.",
      },
    },
  ],
};

const platforms = [
  {
    name: "MyCase",
    slug: "mycase",
    affiliateUrl: "https://www.mycase.com/free-trial/",
    badge: "Lowest Price",
    plans: [
      { name: "Basic", annual: "$39", monthly: "$49" },
      { name: "Pro", annual: "$89", monthly: "$99" },
      { name: "Advanced", annual: "$109", monthly: "$119" },
    ],
    freeTrial: "10 days",
    contract: "Month-to-month",
    trustAccounting: true,
    builtInAccounting: false,
    eSignature: "Pro plan+",
    texting: "Pro plan+",
    mobileApp: true,
    integrations: "~50",
    highlight: "Best value — lowest entry price",
  },
  {
    name: "Clio",
    slug: "clio",
    affiliateUrl: "https://www.clio.com/signup/",
    badge: "Most Integrations",
    plans: [
      { name: "EasyStart", annual: "$49", monthly: "$59" },
      { name: "Essentials", annual: "$89", monthly: "$99" },
      { name: "Advanced", annual: "$119", monthly: "$139" },
      { name: "Expand", annual: "$149", monthly: "$169" },
    ],
    freeTrial: "7 days",
    contract: "Month-to-month",
    trustAccounting: true,
    builtInAccounting: false,
    eSignature: "Add-on",
    texting: "Add-on",
    mobileApp: true,
    integrations: "250+",
    highlight: "Industry standard — 250+ integrations",
  },
  {
    name: "PracticePanther",
    slug: "practicepanther",
    affiliateUrl: "https://www.practicepanther.com/free-trial/",
    badge: "Best for Solos",
    plans: [
      { name: "Solo", annual: "$49", monthly: "$59" },
      { name: "Essential", annual: "$69", monthly: "$79" },
      { name: "Business", annual: "$89", monthly: "$99" },
    ],
    freeTrial: "7 days",
    contract: "Month-to-month",
    trustAccounting: true,
    builtInAccounting: false,
    eSignature: "Business plan",
    texting: "Business plan",
    mobileApp: true,
    integrations: "~40",
    highlight: "Native eSign + texting — no add-ons",
  },
  {
    name: "Smokeball",
    slug: "smokeball",
    affiliateUrl: "https://www.smokeball.com/free-trial/",
    badge: "Best Doc Automation",
    plans: [
      { name: "Bill", annual: "From $149/mo", monthly: "Custom" },
      { name: "Boost", annual: "From $149/mo", monthly: "Custom" },
      { name: "Grow", annual: "From $149/mo", monthly: "Custom" },
      { name: "Prosper+", annual: "From $149/mo", monthly: "Custom" },
    ],
    freeTrial: "Trial available",
    contract: "Annual contract required",
    trustAccounting: true,
    builtInAccounting: false,
    eSignature: "Add-on",
    texting: "Add-on",
    mobileApp: true,
    integrations: "~30",
    highlight: "Autotime + deepest document automation",
  },
  {
    name: "CosmoLex",
    slug: "cosmolex",
    affiliateUrl: "https://www.cosmolex.com/free-trial/",
    badge: "Built-in Accounting",
    plans: [
      { name: "Standard", annual: "$109", monthly: "Higher" },
      { name: "Elite", annual: "$129", monthly: "Higher" },
    ],
    freeTrial: "10 days",
    contract: "Month-to-month",
    trustAccounting: true,
    builtInAccounting: true,
    eSignature: "Varies",
    texting: "Limited",
    mobileApp: true,
    integrations: "~20",
    highlight: "Only platform with full accounting built in",
  },
];

const featureRows = [
  { label: "Trust Accounting", key: "trustAccounting" },
  { label: "Built-in Firm Accounting", key: "builtInAccounting" },
  { label: "eSignature", key: "eSignature" },
  { label: "Two-Way Texting", key: "texting" },
  { label: "Mobile App", key: "mobileApp" },
];

export default function PricingPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Pricing", url: `${baseUrl}/pricing` },
  ];

  return (
    <>
      <FAQSchema
        faqs={jsonLd.mainEntity.map((faq) => ({
          question: faq.name,
          answer: faq.acceptedAnswer.text,
        }))}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />

      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Legal Practice Management Software Pricing Comparison 2026
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Current pricing for all major legal PM platforms. All prices verified in early 2026. Annual billing shown (save 10–20% vs monthly).
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        {/* Platform Cards */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Plan Pricing by Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform) => (
                <div key={platform.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{platform.name}</h3>
                      <span className="text-xs font-semibold text-brand-600">{platform.badge}</span>
                    </div>
                    <Link
                      href={platform.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-1 text-xs font-medium text-white bg-brand-600 px-3 py-1.5 rounded-lg hover:bg-brand-700"
                    >
                      Try Free <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">{platform.highlight}</p>

                  {/* Plans */}
                  <div className="space-y-2 mb-4 flex-1">
                    {platform.plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0">
                        <span className="text-sm font-medium text-slate-700">{plan.name}</span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-slate-900">{plan.annual}<span className="text-xs font-normal text-slate-500">/user/mo</span></div>
                          {plan.monthly !== "Custom" && plan.monthly !== "Higher" && (
                            <div className="text-xs text-slate-400">{plan.monthly}/mo billed monthly</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between"><span>Free trial:</span><span className="font-medium">{platform.freeTrial}</span></div>
                    <div className="flex justify-between"><span>Contract:</span><span className="font-medium">{platform.contract}</span></div>
                    <div className="flex justify-between"><span>Integrations:</span><span className="font-medium">{platform.integrations}</span></div>
                  </div>

                  <Link href={`/reviews/${platform.slug}`} className="mt-4 text-xs text-center text-brand-600 hover:text-brand-700 font-medium">
                    Read full review →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big Comparison Table */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Feature Availability by Platform</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="py-3 px-4 text-left font-semibold text-slate-600 min-w-48">Feature</th>
                    {platforms.map((p) => (
                      <th key={p.slug} className="py-3 px-4 text-center font-semibold text-slate-700">
                        <Link href={`/reviews/${p.slug}`} className="hover:text-brand-600">{p.name}</Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-700">Starting Price (annual)</td>
                    <td className="py-3 px-4 text-center font-bold text-brand-600">$39/user/mo</td>
                    <td className="py-3 px-4 text-center">$49/user/mo</td>
                    <td className="py-3 px-4 text-center">$49/user/mo</td>
                    <td className="py-3 px-4 text-center">From $149/mo</td>
                    <td className="py-3 px-4 text-center">$109/user/mo</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-700">Free Trial</td>
                    <td className="py-3 px-4 text-center font-semibold text-green-700">10 days</td>
                    <td className="py-3 px-4 text-center">7 days</td>
                    <td className="py-3 px-4 text-center">7 days</td>
                    <td className="py-3 px-4 text-center text-slate-500">Contact</td>
                    <td className="py-3 px-4 text-center font-semibold text-green-700">10 days</td>
                  </tr>
                  {featureRows.map((row) => (
                    <tr key={row.key}>
                      <td className="py-3 px-4 font-medium text-slate-700">{row.label}</td>
                      {platforms.map((p) => {
                        const val = p[row.key as keyof typeof p];
                        return (
                          <td key={p.slug} className="py-3 px-4 text-center">
                            {val === true ? (
                              <Check className="h-4 w-4 text-green-500 mx-auto" />
                            ) : val === false ? (
                              <X className="h-4 w-4 text-red-400 mx-auto" />
                            ) : (
                              <span className="text-xs text-slate-600">{String(val)}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-700">Third-Party Integrations</td>
                    {platforms.map((p) => (
                      <td key={p.slug} className="py-3 px-4 text-center text-sm text-slate-700">
                        {p.integrations}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">All pricing current as of early 2026. Verify with vendor before purchasing. eSignature and texting availability varies by plan tier.</p>
          </div>
        </section>

        {/* Annual vs Monthly calculator */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Annual vs. Monthly Billing: How Much You Save</h2>
            <p className="text-slate-600 mb-8">Annual billing saves 10–20% on every major platform. For a 3-attorney firm, the savings are significant:</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="py-3 px-4 text-left font-semibold text-slate-700">Platform / Plan</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700">Monthly Billing (3 users)</th>
                    <th className="py-3 px-4 text-center font-semibold text-slate-700">Annual Billing (3 users)</th>
                    <th className="py-3 px-4 text-center font-semibold text-green-700">Annual Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { plan: "MyCase Basic", monthly: "$49 × 3 = $147/mo", annual: "$39 × 3 = $117/mo", saving: "$360/year" },
                    { plan: "MyCase Pro", monthly: "$99 × 3 = $297/mo", annual: "$89 × 3 = $267/mo", saving: "$360/year" },
                    { plan: "Clio EasyStart", monthly: "$59 × 3 = $177/mo", annual: "$49 × 3 = $147/mo", saving: "$360/year" },
                    { plan: "Clio Essentials", monthly: "$99 × 3 = $297/mo", annual: "$89 × 3 = $267/mo", saving: "$360/year" },
                    { plan: "Clio Advanced", monthly: "$139 × 3 = $417/mo", annual: "$119 × 3 = $357/mo", saving: "$720/year" },
                    { plan: "PracticePanther Business", monthly: "$99 × 3 = $297/mo", annual: "$89 × 3 = $267/mo", saving: "$360/year" },
                  ].map((row) => (
                    <tr key={row.plan} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 font-medium text-slate-800">{row.plan}</td>
                      <td className="py-3 px-4 text-center text-slate-600">{row.monthly}</td>
                      <td className="py-3 px-4 text-center text-slate-600">{row.annual}</td>
                      <td className="py-3 px-4 text-center font-semibold text-green-700">{row.saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Pricing FAQs</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the cheapest legal practice management software?",
                  a: "MyCase Basic is the cheapest at $39/user/month billed annually. It includes full case management, billing, client portal, and unlimited storage — more than most competitors' entry plans.",
                },
                {
                  q: "Do legal PM platforms charge extra for trust accounting?",
                  a: "No — trust accounting is included in all major platforms at no extra charge. It's a baseline requirement, not a premium feature. CosmoLex additionally includes full firm accounting (P&L, balance sheet) that competitors don't.",
                },
                {
                  q: "Are there setup fees for legal practice management software?",
                  a: "Most cloud platforms have no setup fees. Smokeball requires an annual contract and may have implementation costs. PracticePanther includes free data migration on their Business plan. Always ask about any one-time costs before signing.",
                },
                {
                  q: "Can I negotiate pricing with legal PM vendors?",
                  a: "For firms of 10+ attorneys, negotiating is worthwhile. Most vendors will discuss volume discounts, extended trial periods, or implementation support as part of a contract. Smaller firms generally pay list price.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
