import { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { StarRating } from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title: "Best Legal Practice Management Software for Solo Attorneys 2026 | CounselStack",
  description:
    "The best legal PM software for solo practitioners in 2026. Affordable options with time tracking, billing, and client portal — without enterprise complexity.",
};

const picks = [
  {
    rank: 1,
    name: "MyCase Basic",
    slug: "mycase",
    rating: 4.6,
    price: "$39/user/month (annual)",
    monthlyPrice: "$49/user/month",
    affiliateUrl: "https://www.mycase.com/free-trial/",
    badge: "Best Value",
    why: "MyCase Basic is the most complete entry-level plan in legal software. At $39/user/month (annual), you get full case management, time tracking, billing with online payments, a client portal, unlimited document storage, and legal calendaring. For a solo attorney just switching from spreadsheets, it's the lowest-risk, highest-value starting point.",
    mustHaves: ["Case and matter management", "Time tracking and billing", "Client portal", "Unlimited storage", "Legal calendaring"],
    freeTrial: "10-day free trial, no credit card",
  },
  {
    rank: 2,
    name: "PracticePanther Solo",
    slug: "practicepanther",
    rating: 4.5,
    price: "$49/user/month (annual)",
    monthlyPrice: "$59/user/month",
    affiliateUrl: "https://www.practicepanther.com/free-trial/",
    badge: "Best Features",
    why: "PracticePanther's Solo plan at $49/user/month includes document templates and task workflows that MyCase Basic does not. If you're document-intensive or want automation from day one (not as an upgrade), PracticePanther Solo is worth the $10/month premium.",
    mustHaves: ["Document templates", "Task and event workflows", "PantherPayments (built-in)", "Client portal", "Daily agenda email"],
    freeTrial: "7-day free trial, no credit card",
  },
  {
    rank: 3,
    name: "Clio EasyStart",
    slug: "clio",
    rating: 4.4,
    price: "$49/user/month (annual)",
    monthlyPrice: "$59/user/month",
    affiliateUrl: "https://www.clio.com/signup/",
    badge: "Best Ecosystem",
    why: "Clio EasyStart is the right choice for solo attorneys who plan to grow and build a larger legal tech stack. Starting on Clio means 250+ integrations are available as you add tools, and upgrading within Clio is seamless as your practice grows.",
    mustHaves: ["Core practice management", "Time tracking and billing", "Built-in e-signatures", "Secure client communications", "Access to 250+ integrations"],
    freeTrial: "7-day free trial, no credit card",
  },
];

const faqs = [
  {
    q: "What is the cheapest legal practice management software for solo attorneys?",
    a: "MyCase Basic at $39/user/month (annual) is the lowest-priced full-featured legal practice management platform. It includes case management, time tracking, billing, and a client portal. Free trials are available on all major platforms.",
  },
  {
    q: "Do solo attorneys need practice management software?",
    a: "Yes. Solo attorneys using dedicated software capture 15–25% more billable hours than those using spreadsheets, according to industry research. The productivity gain typically pays for the software in the first week of use.",
  },
  {
    q: "What features does a solo attorney need in legal software?",
    a: "Essential features for solo attorneys: time tracking, billing and invoicing, trust accounting, client portal, document storage, and calendar management. Nice-to-have features: eSignature, two-way texting, and intake forms.",
  },
];

export default function BestForSoloPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Best Legal Practice Management Software for Solo Practitioners
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Solo attorneys have different needs than large firms: affordability, simplicity, and quick setup matter more than enterprise features. Here are our top picks for 2026.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-6">
            {picks.map((pick) => (
              <div key={pick.slug} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-slate-400 font-bold">#{pick.rank}</span>
                      <h2 className="text-2xl font-bold text-slate-900">{pick.name}</h2>
                      <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                        {pick.badge}
                      </span>
                    </div>
                    <StarRating rating={pick.rating} />
                    <p className="mt-1 font-semibold text-brand-700">{pick.price}</p>
                    <p className="text-xs text-slate-500">{pick.monthlyPrice} billed monthly</p>
                  </div>
                  <Link
                    href={pick.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-shrink-0 flex items-center gap-1.5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                  >
                    Try Free <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">{pick.why}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-600 mb-2">WHAT YOU GET:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {pick.mustHaves.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-sm text-slate-700">
                        <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link href={`/reviews/${pick.slug}`} className="text-sm font-medium text-brand-600 hover:text-brand-700">
                    Full review →
                  </Link>
                  <span className="text-xs text-slate-400">{pick.freeTrial}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
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
