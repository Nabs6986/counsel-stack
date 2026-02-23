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
  title: "Best Legal Software with Client Portal 2026 | CounselStack",
  description:
    "Best legal practice management software with client portals in 2026. Compare Clio, MyCase, and PracticePanther for secure client communication, document sharing, and billing transparency.",
  alternates: {
    canonical: `${baseUrl}/best/client-portal`,
  },
};

const picks = [
  {
    rank: 1,
    name: "Clio (Clio Connect)",
    slug: "clio",
    rating: 4.7,
    price: "$89/user/month (Essentials, annual)",
    badge: "Best Client Portal",
    affiliateUrl: "https://www.clio.com/signup/",
    why: "Clio Connect is the most polished client portal in legal software. Clients can view case updates, upload documents securely, approve invoices, make payments, and sign documents — all without creating a separate account. The portal is white-labeled with your firm's branding, mobile-responsive, and integrates seamlessly with Clio Manage. For firms where client satisfaction and communication reduce malpractice risk, Clio Connect is the gold standard.",
    features: ["White-labeled portal with firm branding", "Secure document sharing and upload", "Invoice viewing and online payment", "eSignature within the portal", "Case timeline and status updates", "No client login required (magic link access)"],
    bestFor: "Firms prioritizing client experience",
    freeTrial: "7-day free trial",
  },
  {
    rank: 2,
    name: "MyCase",
    slug: "mycase",
    rating: 4.5,
    price: "$39/user/month (Basic, annual)",
    badge: "Best Value Portal",
    affiliateUrl: "https://www.mycase.com/free-trial/",
    why: "MyCase includes a client portal on every plan — even the $39/month Basic tier. Clients can view case documents, pay invoices online, and communicate securely through the portal. The addition of unlimited two-way texting on the Pro plan ($89/month) means clients can choose their preferred communication channel. For budget-conscious firms that still want a professional client experience, MyCase delivers the best portal value.",
    features: ["Client portal included on all plans (even $39/mo)", "Secure messaging between client and attorney", "Document sharing with read receipts", "Online invoice payment through portal", "Unlimited 2-way texting (Pro plan)", "Mobile-optimized client experience"],
    bestFor: "Firms wanting portal value at lowest cost",
    freeTrial: "10-day free trial",
  },
  {
    rank: 3,
    name: "PracticePanther",
    slug: "practicepanther",
    rating: 4.4,
    price: "$49/user/month (Solo, annual)",
    badge: "Best Self-Contained Portal",
    affiliateUrl: "https://www.practicepanther.com/free-trial/",
    why: "PracticePanther's client portal stands out because it includes native eSignature (unlimited) and built-in two-way texting at no extra cost. Clients can sign retainer agreements, view documents, pay invoices, and message their attorney — all within the PracticePanther ecosystem. For firms that want to minimize third-party tool subscriptions, PracticePanther's portal eliminates the need for DocuSign and separate messaging apps.",
    features: ["Native eSignature (unlimited, no extra cost)", "Built-in 2-way texting", "Client portal with document sharing", "Online payment through PantherPayments", "Intake forms integrated with portal", "Automated appointment reminders"],
    bestFor: "Firms wanting all-in-one without add-ons",
    freeTrial: "7-day free trial",
  },
];

const faqs = [
  {
    q: "What is a legal client portal?",
    a: "A legal client portal is a secure online space where clients can view their case status, share documents with their attorney, pay invoices, sign documents, and communicate — all without email. It improves client satisfaction, reduces 'where is my case?' phone calls, and creates a documented communication trail.",
  },
  {
    q: "Do all legal software platforms include a client portal?",
    a: "Most modern legal practice management platforms include a client portal. Clio, MyCase, and PracticePanther all offer client portals. CosmoLex and Smokeball have more limited portal features. MyCase is notable for including a full portal even on its $39/month Basic plan.",
  },
  {
    q: "Is a legal client portal secure enough for confidential documents?",
    a: "Yes. All major legal client portals use AES-256 encryption, TLS for data in transit, and role-based access controls. They are significantly more secure than email attachments for sharing sensitive legal documents. Clio, MyCase, and PracticePanther all meet or exceed ABA security recommendations.",
  },
  {
    q: "Can clients pay invoices through the portal?",
    a: "Yes. Clio (via Clio Payments), MyCase (via MyCase Payments), and PracticePanther (via PantherPayments) all support online invoice payment through the client portal. Firms that enable online payment through the portal typically collect 30-40% faster than those relying on mailed checks.",
  },
];

export default function BestClientPortalPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Best", url: `${baseUrl}/best` },
    { name: "Best with Client Portal", url: `${baseUrl}/best/client-portal` },
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
        name="Best Legal Software with Client Portal"
        url={`${baseUrl}/best/client-portal`}
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
              Best Legal Software with Client Portal
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              A client portal transforms your firm&apos;s client experience. No more emailing documents back and forth, no more &quot;where is my case?&quot; phone calls, and no more chasing payments. Here are the best client portals in legal software for 2026.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-8 bg-brand-50 border-y border-brand-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl p-5 border border-brand-200">
              <p className="text-sm text-slate-700">
                <strong>Key finding:</strong> Law firms with client portals report 40% fewer &quot;status update&quot; phone calls and 30&ndash;40% faster invoice collection. The client experience improvement also directly impacts Google reviews and referral rates.
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
                <p className="text-sm text-slate-500">Built-in accounting plus client portal. Good for firms wanting to eliminate QuickBooks and offer client-facing billing.</p>
              </Link>
              <Link href="/best/document-management" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 transition-all group">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">Best Document Management</h3>
                <p className="text-sm text-slate-500">Secure document sharing through client portals starts with strong document management.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
