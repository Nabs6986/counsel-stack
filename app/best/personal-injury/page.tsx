import { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { StarRating } from "@/components/ui/StarRating";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title: "Best Legal Software for Personal Injury Firms 2026 | CounselStack",
  description:
    "Best legal practice management software for personal injury law firms in 2026. Compare Clio, Smokeball, and MyCase for PI case management, demand letters, and settlement tracking.",
  alternates: {
    canonical: `${baseUrl}/best/personal-injury`,
  },
};

const picks = [
  {
    rank: 1,
    name: "Smokeball",
    slug: "smokeball",
    rating: 4.6,
    price: "$89/user/month (annual)",
    badge: "Best for PI Workflow",
    affiliateUrl: "https://www.smokeball.com/free-trial/",
    why: "Smokeball is the best fit for personal injury firms because of its Autotime feature — it automatically tracks every second spent on a case without manual timers. For PI firms working on contingency where time tracking matters for case valuation and fee petitions, this is transformative. The document automation generates demand letters and medical record requests from case data, and the intake workflow is optimized for high-volume PI lead processing.",
    features: ["Autotime automatic time tracking (no manual timers)", "PI-specific document templates (demand letters, medicals)", "Medical record request automation", "Settlement tracking and distribution calculations", "Intake workflow with lead scoring", "Automatic activity tracking per case"],
    bestFor: "PI firms (2-25 attorneys)",
    freeTrial: "Free trial available",
  },
  {
    rank: 2,
    name: "Clio Manage",
    slug: "clio",
    rating: 4.5,
    price: "$89/user/month (annual)",
    badge: "Best Ecosystem for PI",
    affiliateUrl: "https://www.clio.com/signup/",
    why: "Clio is the strongest choice for PI firms that need to integrate with medical record retrieval services, lien resolution platforms, and legal funding companies. With 250+ integrations, Clio connects your case management to the entire PI ecosystem. The client portal keeps plaintiffs informed without constant phone calls, and the intake system (Clio Grow) handles the high lead volumes typical in PI marketing.",
    features: ["250+ integrations (medical records, liens, funding)", "Clio Grow for lead intake and conversion", "Client portal reduces plaintiff phone calls", "Custom fields for PI case data (injuries, treatment, liability)", "Trust accounting for settlement disbursements", "Comprehensive reporting on case pipeline"],
    bestFor: "PI firms wanting ecosystem depth",
    freeTrial: "7-day free trial",
  },
  {
    rank: 3,
    name: "MyCase Pro",
    slug: "mycase",
    rating: 4.4,
    price: "$89/user/month (annual)",
    badge: "Best PI Communication",
    affiliateUrl: "https://www.mycase.com/free-trial/",
    why: "MyCase Pro wins for PI firms where client communication is the biggest bottleneck. Unlimited two-way texting keeps plaintiffs updated without clogging your phone. The 8am IQ AI assistant helps draft demand letters and correspondence faster. For PI firms that get the most complaints about 'my lawyer never calls me back,' MyCase directly solves that problem.",
    features: ["Unlimited 2-way texting with clients", "8am IQ AI for demand letter drafting", "Client portal with case status updates", "eSignature for retainer agreements", "Text message intake for new leads", "Medical provider contact management"],
    bestFor: "PI firms prioritizing client communication",
    freeTrial: "10-day free trial",
  },
];

const faqs = [
  {
    q: "What is the best case management software for personal injury attorneys?",
    a: "Smokeball is our top pick for PI firms due to its automatic time tracking (Autotime), PI-specific document templates, and settlement tracking. Clio is best for firms needing deep integrations with medical record services and lien resolution platforms.",
  },
  {
    q: "Do personal injury firms need time tracking software?",
    a: "Yes, even on contingency cases. Accurate time records are essential for fee petitions, case valuation, and firm profitability analysis. Smokeball's Autotime tracks time automatically without manual timers — critical for PI firms where attorneys resist time entry.",
  },
  {
    q: "What features should PI software include?",
    a: "Essential PI features: intake/lead management, statute of limitations tracking, medical record request templates, demand letter generation, settlement tracking with disbursement calculations, and client communication tools. Nice to have: medical provider databases, lien tracking, and litigation calendaring.",
  },
  {
    q: "How much does legal software cost for a personal injury firm?",
    a: "Expect $89-$129/user/month for quality PI case management. Smokeball, Clio, and MyCase all start at $89/user/month (annual). The ROI is typically positive within 30 days through improved intake conversion and reduced administrative time.",
  },
];

export default function BestPersonalInjuryPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Best", url: `${baseUrl}/best` },
    { name: "Best for Personal Injury", url: `${baseUrl}/best/personal-injury` },
  ];

  return (
    <>
      <FAQSchema
        faqs={faqs.map((faq) => ({
          question: faq.q,
          answer: faq.a,
        }))}
      />
      <ItemListSchema
        name="Best Legal Software for Personal Injury Firms"
        url={`${baseUrl}/best/personal-injury`}
        items={picks.map((pick) => ({
          name: pick.name,
          url: `${baseUrl}/reviews/${pick.slug}`,
          description: pick.why,
        }))}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Best Legal Software for Personal Injury Firms
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Personal injury firms have unique software needs: high-volume intake processing, contingency fee tracking, medical record management, demand letter automation, and keeping plaintiffs informed. Here are the best options for 2026.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-8 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-5 border border-brand-200">
              <p className="text-sm text-slate-700">
                <strong>Key finding:</strong> PI firms lose an average of 15&ndash;20% of potential cases due to slow intake response times. Software with automated lead capture and instant follow-up (Clio Grow, MyCase intake) directly impacts revenue.
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
                    <p className="text-xs text-slate-500">Best for: {pick.bestFor}</p>
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
                    Full review &rarr;
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

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Also Consider</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/reviews/practicepanther" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">PracticePanther</h3>
                <p className="text-sm text-slate-500">Self-contained platform with native eSignature and intake forms. Good for PI firms wanting fewer third-party tools.</p>
              </Link>
              <Link href="/best/small-law-firms" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Best for Small Law Firms</h3>
                <p className="text-sm text-slate-500">Small PI firms may also benefit from our small firm guide for affordable options.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
