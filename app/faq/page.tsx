import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "FAQ — Legal Practice Management Software Questions Answered",
  description:
    "Frequently asked questions about legal practice management software. Get answers about pricing, features, IOLTA compliance, data migration, and choosing the right platform for your law firm.",
  alternates: { canonical: "https://counselstack.io/faq" },
};

const faqCategories = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What is legal practice management software?",
        a: "Legal practice management software is a platform that helps law firms manage their daily operations in one system. It typically includes case and matter management, time tracking, billing and invoicing, client communication, document management, calendaring, and trust accounting. Leading platforms include Clio, MyCase, PracticePanther, Smokeball, and CosmoLex.",
      },
      {
        q: "Who needs legal practice management software?",
        a: "Any law firm or solo attorney who tracks billable time, manages client matters, handles trust accounts, or sends invoices benefits from practice management software. Solo practitioners, small firms (2\u201310 attorneys), and mid-size firms (10\u201350 attorneys) are the primary users. Even firms already using generic tools like spreadsheets or QuickBooks typically see a significant productivity improvement after switching to a legal-specific platform.",
      },
      {
        q: "Is legal practice management software cloud-based or on-premise?",
        a: "Most modern legal practice management software is cloud-based (SaaS), meaning you access it through a web browser and your data is stored on the vendor\u2019s servers. Clio, MyCase, PracticePanther, and CosmoLex are all cloud-based. Smokeball offers both cloud and desktop options. Cloud-based platforms provide automatic updates, remote access, and lower upfront costs compared to on-premise solutions.",
      },
      {
        q: "How does CounselStack evaluate and rank legal software?",
        a: "CounselStack independently evaluates legal practice management software using a consistent scoring framework. We test features hands-on using free trials, verify pricing directly from vendor websites, and assess each platform across categories including features, ease of use, value for money, customer support, and mobile app quality. No vendor pays for placement or higher rankings. See our How We Review page for the full methodology.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Costs",
    questions: [
      {
        q: "How much does legal practice management software cost?",
        a: "Legal practice management software typically costs $39\u2013$149 per user per month when billed annually. MyCase starts at $39/user/month (Basic). Clio starts at $49/user/month (EasyStart). PracticePanther starts at $49/user/month (Solo). CosmoLex starts at $109/user/month with built-in accounting. Smokeball uses flat-rate pricing starting around $149/month. Most vendors offer 7\u201330 day free trials.",
      },
      {
        q: "Are there hidden costs beyond the subscription price?",
        a: "Yes. Common hidden costs include: payment processing fees (typically 2.9% + $0.30 per transaction for credit cards), additional charges for eSignature integrations, court filing add-ons, premium support tiers, SMS/texting fees, data storage overages, and per-user costs for client portal access. Always calculate total cost of ownership, not just the advertised subscription price.",
      },
      {
        q: "Do any legal practice management platforms offer free plans?",
        a: "No major legal practice management platform offers a permanently free plan with meaningful functionality. However, most offer free trials: Clio offers a 7-day trial, MyCase offers a 10-day trial, and PracticePanther offers a free trial period. Some platforms like CosmoLex offer extended demos. For budget-constrained solo attorneys, MyCase Basic at $39/user/month is the most affordable entry point from a major vendor.",
      },
      {
        q: "Is it cheaper to pay annually or monthly?",
        a: "Annual billing is almost always cheaper \u2014 typically 10\u201320% less than month-to-month pricing. For example, a platform that charges $59/user/month on a monthly plan might drop to $49/user/month with annual billing. The downside is you\u2019re locked in for a year. We recommend starting with monthly billing during your first 2\u20133 months to ensure the platform is the right fit, then switching to annual billing.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Capabilities",
    questions: [
      {
        q: "Does legal practice management software handle trust accounting and IOLTA compliance?",
        a: "Yes, most legal practice management platforms include trust accounting features, but the depth varies significantly. CosmoLex has the most comprehensive built-in trust accounting with full IOLTA compliance and three-way reconciliation. Clio and MyCase offer solid trust accounting modules. PracticePanther integrates with QuickBooks for accounting. Always verify that the platform supports your state\u2019s specific trust accounting rules.",
      },
      {
        q: "Can legal software generate invoices and track billable time?",
        a: "Yes, time tracking and billing are core features of every legal practice management platform. All major platforms support multiple billing methods (hourly, flat fee, contingency), automatic time capture, timer-based and manual time entry, invoice generation with customizable templates, and online payment acceptance. Clio and Smokeball stand out for automatic time tracking that captures time from emails, calls, and documents.",
      },
      {
        q: "Do these platforms include document management?",
        a: "Yes. Legal practice management platforms include document storage, organization by matter, version history, and document templates. Smokeball has the most advanced document automation with 20,000+ legal templates. Clio integrates deeply with Google Drive, Dropbox, and OneDrive. Most platforms support document assembly for common legal forms and allow you to generate documents from matter data.",
      },
      {
        q: "Is the software compatible with court e-filing systems?",
        a: "Some platforms offer direct court e-filing integrations, but availability varies by jurisdiction. Clio integrates with several e-filing providers. Smokeball has built-in e-filing for supported courts. MyCase and PracticePanther offer integrations with third-party e-filing services. Check whether your specific court system is supported before selecting a platform based on this feature.",
      },
      {
        q: "Do legal practice management tools offer a client portal?",
        a: "Yes. Client portals allow your clients to securely view case updates, share documents, approve invoices, and make payments. Clio\u2019s client portal (Clio Connect) is one of the most polished. MyCase includes a client portal with messaging. PracticePanther and CosmoLex also offer secure client portals. A good client portal reduces back-and-forth emails and improves the client experience.",
      },
    ],
  },
  {
    id: "switching",
    title: "Switching & Migration",
    questions: [
      {
        q: "Can I switch legal practice management software without losing data?",
        a: "Yes. Most platforms offer data migration assistance, and your matters, contacts, documents, and billing history can typically be exported as CSV or transferred via API. Vendors like PracticePanther and Clio offer free migration support on higher-tier plans. Budget 2\u20134 weeks for a smooth transition, including data migration, team training, and parallel operation of both systems.",
      },
      {
        q: "How long does it take to migrate from one platform to another?",
        a: "A typical migration takes 2\u20134 weeks for a small firm and 4\u20138 weeks for a mid-size firm. The timeline includes data export and mapping (3\u20135 days), data import and validation (3\u20137 days), testing and quality assurance (3\u20135 days), and team training (1\u20132 weeks). Many firms run both systems in parallel for 1\u20132 weeks to catch any issues before fully cutting over.",
      },
      {
        q: "What data can I export from my current platform?",
        a: "Most legal practice management platforms allow you to export: contact lists, matter/case details, time entries and billing records, invoices and payment history, and documents (typically as bulk downloads). Trust accounting ledgers and calendar entries are sometimes harder to export cleanly. Before committing to a switch, verify what your current platform allows you to export and what format the new platform can import.",
      },
    ],
  },
  {
    id: "choosing",
    title: "Choosing the Right Software",
    questions: [
      {
        q: "What is the best legal practice management software for solo attorneys?",
        a: "For solo attorneys, PracticePanther and MyCase are the strongest options. PracticePanther offers a Solo plan at $49/user/month with robust automation. MyCase Basic at $39/user/month is the most affordable option with solid core features. Clio EasyStart at $49/user/month is also competitive. The best choice depends on whether you prioritize automation (PracticePanther), affordability (MyCase), or integrations (Clio).",
      },
      {
        q: "Which platform is best for small law firms (2\u201310 attorneys)?",
        a: "Clio is the strongest all-around choice for small firms thanks to its 250+ integrations, mature platform, and scalability. MyCase offers the best value for small firms on a budget. PracticePanther is excellent for firms that want strong workflow automation. CosmoLex is ideal if you need built-in accounting without a separate QuickBooks subscription.",
      },
      {
        q: "How do I choose between Clio and MyCase?",
        a: "Clio is better for firms that need extensive third-party integrations (250+), a polished client portal, and advanced reporting. MyCase is better for firms that want a lower entry price ($39 vs $49/user/month), built-in texting, and a simpler interface. Both are excellent platforms. Clio suits firms that plan to scale and need ecosystem flexibility; MyCase suits firms that want a clean, affordable, all-in-one solution.",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Updates",
    questions: [
      {
        q: "What kind of customer support do legal software vendors offer?",
        a: "Support varies by vendor and plan tier. Clio offers phone, email, and chat support on all plans, with priority support on higher tiers. MyCase provides phone and email support during business hours. PracticePanther offers chat and email support with phone support on premium plans. CosmoLex includes dedicated onboarding support. Most vendors also provide help centers, webinars, and video tutorials.",
      },
      {
        q: "How often do legal practice management platforms release updates?",
        a: "Cloud-based platforms release updates continuously \u2014 typically weekly or bi-weekly for bug fixes and monthly for feature releases. Major feature updates are usually announced quarterly. Clio hosts an annual conference (ClioCon) where major product updates are unveiled. Because updates are delivered automatically via the cloud, you always have access to the latest version without manual installation.",
      },
      {
        q: "Is my data secure in cloud-based legal software?",
        a: "Reputable legal practice management platforms use bank-level security measures including 256-bit AES encryption for data at rest, TLS encryption for data in transit, SOC 2 Type II compliance, regular security audits, and multi-factor authentication. Clio, MyCase, PracticePanther, and CosmoLex all maintain SOC 2 compliance. Your data in a well-maintained cloud platform is typically more secure than data stored on a local office server.",
      },
    ],
  },
];

const allQuestions = faqCategories.flatMap((cat) => cat.questions);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQuestions.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-3xl px-6">
            <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-800 font-medium">FAQ</span>
            </nav>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Answers to common questions about legal practice management software, pricing,
              features, migration, and choosing the right platform for your law firm.
            </p>
          </div>
        </section>

        {/* Jump-to-section nav */}
        <section className="py-8">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Jump to Section
              </h2>
              <div className="flex flex-wrap gap-2">
                {faqCategories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="pb-16">
          <div className="mx-auto max-w-3xl px-6 space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{cat.title}</h2>
                <div className="space-y-4">
                  {cat.questions.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        {item.q}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to find the right software for your firm?
            </h2>
            <p className="text-slate-600 mb-6">
              Read our in-depth reviews or learn more about how we evaluate legal practice
              management platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/reviews"
                className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-700 transition-colors"
              >
                Read Our Reviews
              </Link>
              <Link
                href="/how-we-review"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                How We Review
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom nav */}
        <section className="border-t border-slate-200 py-8">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <Link href="/reviews" className="hover:text-brand-600">Reviews</Link>
              <Link href="/about" className="hover:text-brand-600">About</Link>
              <Link href="/how-we-review" className="hover:text-brand-600">How We Review</Link>
              <Link href="/contact" className="hover:text-brand-600">Contact</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
