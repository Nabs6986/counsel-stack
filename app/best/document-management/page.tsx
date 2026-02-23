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
  title: "Best Legal Document Management Software 2026 | CounselStack",
  description:
    "Best legal document management software in 2026. Compare Smokeball, Clio, and NetDocuments for document automation, version control, and secure storage for law firms.",
  alternates: {
    canonical: `${baseUrl}/best/document-management`,
  },
};

const picks = [
  {
    rank: 1,
    name: "Smokeball",
    slug: "smokeball",
    rating: 4.6,
    price: "$89/user/month (annual)",
    badge: "Best Document Automation",
    affiliateUrl: "https://www.smokeball.com/free-trial/",
    why: "Smokeball is the best choice for document-heavy law firms. Its document automation engine generates legal documents from matter data in seconds — not minutes. The 20,000+ pre-built legal form templates cover every common document type across real estate, family law, estate planning, and more. Auto-save captures every version automatically, and the desktop app integrates deeply with Microsoft Office for a seamless editing experience.",
    features: ["20,000+ pre-built legal document templates", "Auto-fill documents from matter/contact data", "Automatic version control and save history", "Deep Microsoft Office integration (Word, Outlook)", "OCR scanning for paper document digitization", "Document tagging and full-text search"],
    bestFor: "Document-heavy firms (real estate, estate planning, family law)",
    freeTrial: "Free trial available",
  },
  {
    rank: 2,
    name: "Clio Manage",
    slug: "clio",
    rating: 4.5,
    price: "$89/user/month (annual)",
    badge: "Best All-in-One DMS",
    affiliateUrl: "https://www.clio.com/signup/",
    why: "Clio provides the best document management system integrated within a full practice management platform. Every document is linked to its matter, searchable via full-text, and accessible from any device. The built-in eSignature removes the need for DocuSign, document templates auto-populate from client data, and unlimited storage means you never worry about running out of space.",
    features: ["Unlimited cloud document storage", "Built-in eSignature (no DocuSign needed)", "Document templates with auto-population", "Full-text search across all documents", "Version history and audit trail", "Google Drive and Dropbox integration"],
    bestFor: "Firms wanting DMS + practice management in one",
    freeTrial: "7-day free trial",
  },
  {
    rank: 3,
    name: "NetDocuments",
    slug: "netdocuments",
    rating: 4.4,
    price: "$20+/user/month (custom pricing)",
    badge: "Best Enterprise DMS",
    affiliateUrl: "https://www.netdocuments.com/",
    why: "NetDocuments is the gold standard for large law firms that need enterprise-grade document management with advanced security, compliance, and governance features. Ethical walls, granular permissions, and retention policies make it the choice for firms handling sensitive matters (M&A, litigation holds). It's not a practice management system — it's a dedicated DMS that integrates with platforms like Clio and others.",
    features: ["Enterprise security with ethical walls", "Granular permission controls per document", "Retention policies and litigation hold", "Advanced full-text and metadata search", "Microsoft 365 deep integration", "Compliance reporting and audit trails"],
    bestFor: "Large firms and enterprise deployments",
    freeTrial: "Demo available",
  },
];

const faqs = [
  {
    q: "What is the best document management system for law firms?",
    a: "Smokeball is best for document automation and template-driven workflows. Clio is best for firms wanting document management integrated into practice management. NetDocuments is best for enterprise firms needing advanced security and compliance features.",
  },
  {
    q: "Do law firms need separate document management software?",
    a: "Small to mid-size firms (1-25 attorneys) can usually rely on the DMS built into their practice management platform (Clio, Smokeball, MyCase). Firms with 25+ attorneys or strict compliance requirements (banking, M&A) often benefit from a dedicated DMS like NetDocuments alongside their PM tool.",
  },
  {
    q: "How secure is cloud-based legal document management?",
    a: "All three platforms (Smokeball, Clio, NetDocuments) use AES-256 encryption, SOC 2 compliance, and role-based access controls. NetDocuments adds ethical walls and granular document-level permissions for the most sensitive matters. Cloud storage is generally more secure than local servers for most law firms.",
  },
  {
    q: "Can legal document management software automate document creation?",
    a: "Yes. Smokeball leads with 20,000+ templates that auto-fill from matter data. Clio and MyCase also offer document templates with variable fields. This automation typically saves 30-60 minutes per document compared to manual creation.",
  },
];

export default function BestDocumentManagementPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Best", url: `${baseUrl}/best` },
    { name: "Document Management", url: `${baseUrl}/best/document-management` },
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
        name="Best Legal Document Management Software"
        url={`${baseUrl}/best/document-management`}
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
              Best Legal Document Management Software
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Documents are the lifeblood of legal work. The right DMS eliminates lost files, automates document creation, and ensures every version is tracked. Here are the best options for law firms in 2026.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-8 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-5 border border-brand-200">
              <p className="text-sm text-slate-700">
                <strong>Key finding:</strong> Attorneys spend an average of 2.5 hours per day on document-related tasks. Document automation (auto-fill from matter data) can reduce document creation time by 60&ndash;80%, freeing 1&ndash;2 billable hours daily.
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
              <Link href="/reviews/cosmolex" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">CosmoLex</h3>
                <p className="text-sm text-slate-500">Combines document management with built-in accounting. Good for firms that want to eliminate QuickBooks.</p>
              </Link>
              <Link href="/best/client-portal" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Best with Client Portal</h3>
                <p className="text-sm text-slate-500">Share documents securely with clients through integrated client portals.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
