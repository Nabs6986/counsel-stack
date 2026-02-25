import { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ArrowRight, ExternalLink, BookOpen, Lightbulb, Quote } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { StarRating } from "@/components/ui/StarRating";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title:
    "Best Legal Practice Management Software 2026 — Expert Guide | CounselStack",
  description:
    "The 5 best legal practice management software platforms in 2026, ranked by experts. Clio, MyCase, PracticePanther, Smokeball, CosmoLex — with verified pricing, pros/cons, and honest verdicts.",
  alternates: {
    canonical: `${baseUrl}/guides/best-legal-practice-management-software-2026`,
  },
};

/* ── TL;DR ────────────────────────────────────────────────────────── */
const tldrParagraph =
  "For most law firms in 2026, Clio ($49/user/mo) is the best legal practice management software thanks to 250+ integrations and the strongest mobile apps. MyCase ($39/user/mo) offers the best value with a clean interface and built-in AI. Solo attorneys should consider PracticePanther ($49/user/mo) for its native eSignature and texting. Smokeball suits document-heavy practices, while CosmoLex ($109/user/mo) is the only platform with full built-in accounting.";

/* ── How to Choose ────────────────────────────────────────────────── */
const howToChoose = [
  {
    title: "Match to your firm size",
    description:
      "Solo attorneys need simplicity and affordability; mid-size firms need workflow automation and integrations; large firms need enterprise security and multi-office support.",
  },
  {
    title: "Evaluate integrations",
    description:
      "Check that your court filing system, document management, email, and accounting tools have native or Zapier integrations with the platform.",
  },
  {
    title: "Test billing and trust accounting",
    description:
      "Every state bar has IOLTA compliance rules. Ensure the platform handles three-way trust reconciliation and LEDES billing if you do insurance defense.",
  },
  {
    title: "Prioritize mobile access",
    description:
      "Attorneys need to log time and check calendars from court. Test the mobile app during the free trial — not all platforms have full-featured apps.",
  },
  {
    title: "Calculate total cost of ownership",
    description:
      "Factor in per-user pricing at your firm's size, add-ons (eSignature, intake forms, texting), and any accounting software you can eliminate.",
  },
];

/* ── Citations ────────────────────────────────────────────────────── */
const citations = [
  {
    title: "2024 Legal Technology Survey Report",
    url: "https://www.americanbar.org/groups/law_practice/resources/tech-report/",
    source: "American Bar Association",
  },
  {
    title: "Clio Legal Trends Report 2024",
    url: "https://www.clio.com/resources/legal-trends/",
    source: "Clio",
  },
  {
    title: "Best Legal Practice Management Software",
    url: "https://www.g2.com/categories/legal-practice-management",
    source: "G2",
  },
  {
    title: "Legal Practice Management Software Reviews",
    url: "https://www.capterra.com/legal-case-management-software/",
    source: "Capterra",
  },
  {
    title: "Top Legal Software for Small Law Firms",
    url: "https://www.lawsitesblog.com/legal-technology/practice-management",
    source: "LawSites (Bob Ambrogi)",
  },
  {
    title: "Legal Tech Buyer's Guide",
    url: "https://abovethelaw.com/legal-tech/",
    source: "Above the Law",
  },
];

/* ── Picks ────────────────────────────────────────────────────────── */
const picks = [
  {
    rank: 1,
    badge: "Editor's Choice",
    name: "Clio",
    slug: "clio",
    rating: 4.7,
    price: "From $49/user/month (annual)",
    affiliateUrl: "https://www.clio.com/signup/",
    highlight:
      "Best overall — largest ecosystem with 250+ integrations and industry-leading mobile apps",
    bestFor: "Mid-size to large firms, integration-heavy workflows",
    pros: [
      "250+ integrations",
      "Best mobile apps in legal tech",
      "Clio Grow CRM included on Expand plan",
      "Industry-leading support",
    ],
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
    highlight:
      "Lowest entry price with the cleanest interface and built-in AI tools",
    bestFor:
      "Solo attorneys and small firms prioritizing value and simplicity",
    pros: [
      "$39/user/mo entry price",
      "Best-in-class interface",
      "Built-in AI assistant (8am IQ)",
      "10-day free trial",
    ],
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
    highlight:
      "Native eSignature and two-way texting eliminate extra subscriptions",
    bestFor:
      "Solo practitioners wanting a self-contained, intuitive platform",
    pros: [
      "Native eSignature (Business plan)",
      "Built-in 2-way texting",
      "LEDES billing for insurance defense",
      "Free data migration",
    ],
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
    highlight:
      "Autotime + deepest document automation in the industry",
    bestFor: "Real estate, family law, and estate planning practices",
    pros: [
      "Autotime (AI time tracking)",
      "Largest document template library",
      "Deep Microsoft 365 integration",
      "Practice area workflows",
    ],
    cons: [
      "Annual contract required",
      "Opaque pricing",
      "Steeper learning curve",
    ],
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
    highlight:
      "Only platform with full accounting built in — no QuickBooks needed",
    bestFor:
      "Firms frustrated with QuickBooks sync issues, accounting-integrated needs",
    pros: [
      "Built-in double-entry accounting",
      "Full trust accounting + 3-way reconciliation",
      "Single platform for everything",
      "No QuickBooks subscription needed",
    ],
    cons: [
      "Higher price point",
      "Smaller integration library",
      "Less polished interface",
    ],
    freeTrial: "10-day free trial",
  },
];

/* ── FAQs ─────────────────────────────────────────────────────────── */
const faqs = [
  {
    question:
      "What is the best legal practice management software in 2026?",
    answer:
      "Clio is the best overall legal practice management software in 2026 for most firms, with 250+ integrations and the strongest mobile apps, starting at $49/user/month. MyCase ($39/user/mo) is the best value pick. PracticePanther ($49/user/mo) is best for solo attorneys. Smokeball excels at document automation, and CosmoLex ($109/user/mo) is the only option with full built-in accounting.",
  },
  {
    question: "How much does legal practice management software cost?",
    answer:
      "Legal practice management software typically costs $39–$149 per user per month billed annually. MyCase starts at $39/user/mo (Basic). Clio and PracticePanther both start at $49/user/mo. Smokeball starts around $149/month flat-rate. CosmoLex starts at $109/user/mo. Most vendors offer 7–10 day free trials.",
  },
  {
    question:
      "Which legal software is best for small law firms?",
    answer:
      "MyCase Pro ($89/user/mo) is ideal for most small law firms — it offers a clean interface, built-in AI, two-way texting, and unlimited storage. Clio Suite ($89/user/mo) is a strong alternative for firms needing more integrations. Both scale from 2 to 25+ attorneys without complexity.",
  },
  {
    question:
      "Can I switch legal software without losing data?",
    answer:
      "Yes. Most platforms offer CSV export for matters, contacts, documents, and billing history. PracticePanther and Clio offer free migration assistance on higher-tier plans. Budget 2–4 weeks for a smooth transition and run both systems in parallel during that time.",
  },
  {
    question:
      "Do I need separate accounting software with legal PM tools?",
    answer:
      "Most legal PM platforms (Clio, MyCase, PracticePanther, Smokeball) require QuickBooks or Xero for full accounting. CosmoLex is the exception — it includes double-entry accounting, trust accounting, and three-way reconciliation built in, eliminating the need for separate accounting software.",
  },
  {
    question:
      "What features should I prioritize in legal software?",
    answer:
      "Prioritize: (1) case/matter management, (2) time tracking and billing, (3) trust accounting with IOLTA compliance, (4) document management, (5) client portal, (6) calendar/deadline management. Advanced features like AI assistance, intake forms, and eSignature are valuable but secondary.",
  },
];

export default function BestLegalPMGuidePage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Guides", url: `${baseUrl}/guides` },
    {
      name: "Best Legal Practice Management Software 2026",
      url: `${baseUrl}/guides/best-legal-practice-management-software-2026`,
    },
  ];

  return (
    <>
      <FAQSchema faqs={faqs} />
      <ItemListSchema
        name="Best Legal Practice Management Software 2026"
        url={`${baseUrl}/guides/best-legal-practice-management-software-2026`}
        items={picks.map((pick) => ({
          name: pick.name,
          url: `${baseUrl}/reviews/${pick.slug}`,
          description: pick.highlight,
        }))}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
              <Star className="h-3 w-3 fill-brand-500 text-brand-500" />{" "}
              Updated February 2026
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Best Legal Practice Management Software 2026
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We analyzed pricing, features, usability, and integrations across
              12 platforms to bring you the 5 best legal practice management
              tools for law firms in 2026. All pricing is current and verified.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        {/* TL;DR Box */}
        <section className="py-8 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex gap-3">
              <Quote className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-semibold text-brand-800 uppercase tracking-wide mb-2">
                  TL;DR — The Short Answer
                </h2>
                <p className="text-slate-800 leading-relaxed">
                  {tldrParagraph}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-8 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border border-slate-200">
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Platform
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Rating
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Starting Price
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-600">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {picks.map((p, i) => (
                    <tr
                      key={p.slug}
                      className={`border-b border-slate-100 ${i === 0 ? "bg-brand-50" : ""}`}
                    >
                      <td className="py-2.5 px-3 font-medium text-slate-900">
                        <Link
                          href={`/reviews/${p.slug}`}
                          className="hover:text-brand-600"
                        >
                          {p.name}
                        </Link>
                        {i === 0 && (
                          <span className="ml-2 text-xs text-brand-600 font-semibold">
                            ★ Top Pick
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">
                        {p.rating}/5
                      </td>
                      <td className="py-2.5 px-3 text-slate-700">
                        {p.price.split(" ")[1]}
                      </td>
                      <td className="py-2.5 px-3 text-slate-600">
                        {p.bestFor.split(",")[0]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-10 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-bold text-slate-900">
                How to Choose Legal Practice Management Software
              </h2>
            </div>
            <div className="space-y-4">
              {howToChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
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
                      <span className="text-xl font-bold text-slate-400">
                        #{pick.rank}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {pick.name}
                      </h2>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${pick.rank === 1 ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"}`}
                      >
                        {pick.badge}
                      </span>
                    </div>
                    <StarRating rating={pick.rating} />
                    <p className="mt-2 text-brand-700 font-semibold">
                      {pick.price}
                    </p>
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

                <p className="text-slate-700 font-medium mb-4">
                  {pick.highlight}
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  <strong>Best for:</strong> {pick.bestFor}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-2">
                      ✓ PROS
                    </p>
                    <ul className="space-y-1">
                      {pick.pros.map((pro) => (
                        <li
                          key={pro}
                          className="flex items-start gap-1.5 text-sm text-slate-700"
                        >
                          <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-green-500" />{" "}
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-red-600 mb-2">
                      ✗ CONS
                    </p>
                    <ul className="space-y-1">
                      {pick.cons.map((con) => (
                        <li
                          key={con}
                          className="text-sm text-slate-600 flex items-start gap-1.5"
                        >
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
                    Full {pick.name} review{" "}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-xs text-slate-400">|</span>
                  <span className="text-xs text-slate-500">
                    {pick.freeTrial}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 py-12 border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white group"
                >
                  <summary className="cursor-pointer p-5 font-semibold text-slate-900 hover:text-brand-700 list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-slate-400 group-open:rotate-45 transition-transform text-lg">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Citations */}
        <section className="py-10 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-4 w-4 text-slate-500" />
              <h2 className="text-lg font-semibold text-slate-900">
                Sources & Further Reading
              </h2>
            </div>
            <ol className="space-y-2 list-decimal list-inside">
              {citations.map((cite) => (
                <li key={cite.url} className="text-sm text-slate-600">
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-700 underline"
                  >
                    {cite.title}
                  </a>{" "}
                  — {cite.source}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* More Guides CTA */}
        <section className="bg-slate-50 py-12 border-t border-slate-100">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              More Recommendations
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/best/solo-practitioners"
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">
                  Best for Solo Practitioners
                </h3>
                <p className="text-sm text-slate-500">
                  The most affordable options for attorneys running solo
                  practices.
                </p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">
                  View picks <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/best/small-law-firms"
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">
                  Best for Small Law Firms
                </h3>
                <p className="text-sm text-slate-500">
                  Platforms that scale from 2 to 25 attorneys without
                  complexity.
                </p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">
                  View picks <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/reviews"
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">
                  All Software Reviews
                </h3>
                <p className="text-sm text-slate-500">
                  In-depth reviews of every legal PM platform we cover.
                </p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">
                  Browse reviews <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/pricing"
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">
                  Compare All Pricing
                </h3>
                <p className="text-sm text-slate-500">
                  Side-by-side pricing table for all major legal PM platforms.
                </p>
                <span className="mt-3 flex items-center gap-1 text-sm text-brand-600 font-medium">
                  View table <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
