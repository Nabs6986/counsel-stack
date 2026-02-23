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
  title: "Best Legal Software for Immigration Law 2026 | CounselStack",
  description:
    "Best legal practice management software for immigration lawyers in 2026. Compare Clio, Docketwise, and INSZoom for case tracking, forms, and USCIS integration.",
  alternates: {
    canonical: `${baseUrl}/best/immigration-law`,
  },
};

const picks = [
  {
    rank: 1,
    name: "Docketwise",
    slug: "docketwise",
    rating: 4.7,
    price: "$69/user/month",
    badge: "Best Immigration-Specific",
    affiliateUrl: "https://www.docketwise.com/",
    why: "Docketwise is purpose-built for immigration law. It auto-fills USCIS forms from your case data, tracks case statuses against USCIS processing times, manages questionnaires in multiple languages, and handles the unique workflow of immigration cases (petitions, RFEs, appeals). No general-purpose platform comes close to this level of immigration-specific functionality.",
    features: ["USCIS form auto-fill (I-130, I-485, I-765, etc.)", "Case status tracking with USCIS processing times", "Multi-language client questionnaires", "Immigration-specific case types and workflows", "Client portal with document upload", "Bulk form generation for family petitions"],
    bestFor: "Immigration firms of all sizes",
    freeTrial: "14-day free trial",
  },
  {
    rank: 2,
    name: "Clio Manage",
    slug: "clio",
    rating: 4.5,
    price: "$89/user/month (annual)",
    badge: "Best General PM + Immigration",
    affiliateUrl: "https://www.clio.com/signup/",
    why: "For immigration attorneys who also handle other practice areas (family law, business law), Clio provides the strongest general practice management platform with enough flexibility to handle immigration workflows. Custom matter types, document templates for common immigration forms, and 250+ integrations (including Docketwise) make it a solid foundation. It lacks native USCIS form filling but compensates with ecosystem breadth.",
    features: ["Custom matter types for immigration cases", "Document templates for common filings", "Client portal for document exchange", "250+ integrations (including Docketwise)", "Trust accounting (IOLTA compliance)", "Full mobile app for case access"],
    bestFor: "Multi-practice firms with immigration",
    freeTrial: "7-day free trial",
  },
  {
    rank: 3,
    name: "INSZoom",
    slug: "inszoom",
    rating: 4.3,
    price: "Custom pricing (contact for quote)",
    badge: "Best for Corporate Immigration",
    affiliateUrl: "https://www.inszoom.com/",
    why: "INSZoom is the enterprise solution for corporate immigration departments and large immigration firms processing high volumes of H-1B, L-1, and PERM cases. Its compliance tracking, government processing time dashboards, and employer petition management are unmatched. The price and complexity make it wrong for solo immigration attorneys, but right for firms processing 100+ cases monthly.",
    features: ["Corporate immigration case management", "H-1B cap tracking and compliance", "PERM labor certification workflow", "Government processing time dashboards", "Employer portal for corporate clients", "Compliance audit trails and reporting"],
    bestFor: "Corporate immigration and large firms",
    freeTrial: "Demo available",
  },
];

const faqs = [
  {
    q: "What is the best software for immigration lawyers?",
    a: "Docketwise is the best immigration-specific software — it auto-fills USCIS forms and tracks case statuses against processing times. For firms that also handle other practice areas, Clio provides the best general platform with immigration workflow support.",
  },
  {
    q: "Can legal software auto-fill USCIS immigration forms?",
    a: "Yes. Docketwise auto-fills over 100 USCIS forms (I-130, I-485, I-765, I-140, etc.) from your case data. This eliminates hours of manual form completion per case and reduces errors that lead to RFEs.",
  },
  {
    q: "How much does immigration law software cost?",
    a: "Docketwise starts at $69/user/month, making it the most affordable immigration-specific option. Clio starts at $89/user/month for general practice management. INSZoom requires custom pricing for enterprise deployments.",
  },
  {
    q: "Do I need immigration-specific software or general legal software?",
    a: "If 50%+ of your caseload is immigration, Docketwise will save you significant time with form auto-fill and USCIS tracking. If immigration is a secondary practice area, Clio's general platform with custom workflows is more cost-effective.",
  },
];

export default function BestImmigrationLawPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Best", url: `${baseUrl}/best` },
    { name: "Best for Immigration Law", url: `${baseUrl}/best/immigration-law` },
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
        name="Best Legal Software for Immigration Law"
        url={`${baseUrl}/best/immigration-law`}
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
              Best Legal Software for Immigration Law
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Immigration law has unique software needs: USCIS form auto-fill, case status tracking against processing times, multi-language client intake, and compliance documentation. General legal software falls short. Here are the best options for 2026.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-8 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-5 border border-brand-200">
              <p className="text-sm text-slate-700">
                <strong>Key finding:</strong> Immigration-specific software (Docketwise) saves 3&ndash;5 hours per case on form completion alone compared to general legal platforms. For firms processing 20+ immigration cases monthly, the ROI is immediate.
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
              <Link href="/reviews/mycase" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">MyCase</h3>
                <p className="text-sm text-slate-500">Good general platform with immigration templates. AI assistant (8am IQ) helps with document drafting.</p>
              </Link>
              <Link href="/best/solo-practitioners" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Best for Solo Practitioners</h3>
                <p className="text-sm text-slate-500">Solo immigration attorneys may also benefit from our solo practitioner guide for affordable options.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
