import { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { StarRating } from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title: "Best Legal Practice Management Software for Small Law Firms 2026 | CounselStack",
  description:
    "Best legal PM software for small law firms (2–25 attorneys) in 2026. Compare Clio, MyCase, and PracticePanther for small firm needs.",
};

const picks = [
  {
    rank: 1,
    name: "Clio Essentials",
    slug: "clio",
    rating: 4.7,
    price: "$89/user/month (annual)",
    badge: "Best Overall",
    affiliateUrl: "https://www.clio.com/signup/",
    why: "For small firms ready to build a professional legal tech stack, Clio Essentials at $89/user/month delivers the integration ecosystem no competitor matches. 250+ app connections mean your billing, document management, accounting, and communication tools all connect seamlessly. The client portal and document templates save hours weekly.",
    features: ["250+ integrations", "Document templates", "Client portal", "Matter templates", "Workflow automation (Advanced)", "Full mobile app"],
    firmSize: "2–50 attorneys",
    freeTrial: "7-day free trial",
  },
  {
    rank: 2,
    name: "MyCase Pro",
    slug: "mycase",
    rating: 4.5,
    price: "$89/user/month (annual)",
    badge: "Best Value for Small Firms",
    affiliateUrl: "https://www.mycase.com/free-trial/",
    why: "MyCase Pro matches Clio Essentials on price but beats it on simplicity and AI. The 8am IQ AI assistant helps with drafting and document review, unlimited two-way texting is included, and the interface is the cleanest in the category. For small firms prioritizing usability over integration depth, MyCase Pro is the better choice.",
    features: ["Legal AI (8am IQ)", "Unlimited 2-way texting", "eSignature included", "Client intake management", "Google + Outlook integration", "Advanced billing"],
    firmSize: "1–20 attorneys",
    freeTrial: "10-day free trial",
  },
  {
    rank: 3,
    name: "PracticePanther Business",
    slug: "practicepanther",
    rating: 4.4,
    price: "$89/user/month (annual)",
    badge: "Best Self-Contained",
    affiliateUrl: "https://www.practicepanther.com/free-trial/",
    why: "All three of these plans cost $89/user/month but PracticePanther Business is best for firms that want to minimize third-party tool subscriptions. Native eSignature (unlimited), built-in two-way texting, LEDES billing, and free data migration make it the most self-sufficient platform at this price point.",
    features: ["Native eSignature (unlimited)", "Native 2-way texting", "LEDES billing", "Free data migration", "VIP support", "Intake forms"],
    firmSize: "1–25 attorneys",
    freeTrial: "7-day free trial",
  },
];

export default function BestForSmallFirmsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Best Legal Practice Management Software for Small Law Firms
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Small firms (2–25 attorneys) need software that scales with growth, doesn&apos;t require an IT department, and covers the full practice management lifecycle. Here are the best options for 2026.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-8 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-5 border border-brand-200">
              <p className="text-sm text-slate-700">
                <strong>Key finding:</strong> Clio Essentials, MyCase Pro, and PracticePanther Business all cost $89/user/month (annual) — but they&apos;re meaningfully different in what they include. Clio wins on integrations, MyCase wins on AI and usability, PracticePanther wins on self-contained features (no third-party eSignature tool needed).
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-6">
            {picks.map((pick) => (
              <div key={pick.slug} className={`rounded-2xl border p-8 ${pick.rank === 1 ? "border-brand-300 bg-brand-50" : "border-slate-200 bg-white"} shadow-sm`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-slate-400 font-bold">#{pick.rank}</span>
                      <h2 className="text-2xl font-bold text-slate-900">{pick.name}</h2>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">{pick.badge}</span>
                    </div>
                    <StarRating rating={pick.rating} />
                    <p className="mt-1 font-semibold text-brand-700">{pick.price}</p>
                    <p className="text-xs text-slate-500">Best for: {pick.firmSize}</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                  {pick.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-sm text-slate-700">
                      <Check className="h-3.5 w-3.5 text-green-500 flex-shrink-0" /> {f}
                    </div>
                  ))}
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
            <h2 className="text-xl font-bold text-slate-900 mb-4">Also Consider</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/reviews/smokeball" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Smokeball</h3>
                <p className="text-sm text-slate-500">Best for document-heavy small firms (real estate, family law, estate planning). Unique Autotime feature.</p>
              </Link>
              <Link href="/reviews/cosmolex" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">CosmoLex</h3>
                <p className="text-sm text-slate-500">Best for firms wanting practice management + accounting in one platform. No QuickBooks needed.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
