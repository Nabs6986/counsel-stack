import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "How We Review Legal Practice Management Software",
  description:
    "Learn how CounselStack independently evaluates legal practice management software. Our 5-step testing process, scoring criteria, and editorial standards explained.",
  alternates: { canonical: "https://counselstack.io/how-we-review" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Review Legal Practice Management Software",
  url: "https://counselstack.io/how-we-review",
  description:
    "CounselStack's methodology for independently evaluating legal practice management software platforms.",
  publisher: {
    "@type": "Organization",
    name: "CounselStack",
    url: "https://counselstack.io",
  },
};

const steps = [
  {
    number: "01",
    title: "Account Setup & Configuration",
    desc: "We create real accounts on every platform we review using free trials or demo access. We set up a simulated law firm with realistic matters, contacts, billing rates, and trust accounts to evaluate the onboarding experience and initial configuration process.",
  },
  {
    number: "02",
    title: "Core Workflow Testing",
    desc: "We test the day-to-day workflows an attorney relies on: creating and managing matters, entering time, generating invoices, processing payments, managing the calendar, and handling client communications. We evaluate each workflow for speed, intuitiveness, and reliability.",
  },
  {
    number: "03",
    title: "Trust Accounting & Compliance Verification",
    desc: "We verify trust accounting capabilities including IOLTA compliance, three-way reconciliation, trust-to-operating transfers, and ledger reporting. We test whether the platform prevents common compliance violations and supports state-specific trust accounting rules.",
  },
  {
    number: "04",
    title: "Integration & Ecosystem Evaluation",
    desc: "We test key integrations including email (Outlook, Gmail), document storage (Google Drive, Dropbox, OneDrive), accounting (QuickBooks, Xero), court e-filing, and legal research tools. We assess the breadth and quality of the integration ecosystem.",
  },
  {
    number: "05",
    title: "Pricing Verification & Total Cost Analysis",
    desc: "We verify all pricing directly from vendor websites and calculate the total cost of ownership including subscription fees, payment processing fees, add-on costs, per-user charges, and any hidden fees. We note the date of price verification and update when changes occur.",
  },
];

const criteria = [
  {
    name: "Ease of Use",
    weight: "20%",
    desc: "Interface design, learning curve, navigation clarity, and how quickly a new user reaches productivity. We assess the experience for both tech-savvy attorneys and those less comfortable with software.",
  },
  {
    name: "Case Management & Billing",
    weight: "20%",
    desc: "Matter management, time tracking accuracy, invoice generation, payment processing, and billing workflow completeness. We evaluate whether the platform handles hourly, flat fee, and contingency billing effectively.",
  },
  {
    name: "Trust Accounting & Compliance",
    weight: "20%",
    desc: "IOLTA compliance, three-way reconciliation, trust ledger reporting, and safeguards against compliance violations. This is non-negotiable for law firms and we weight it accordingly.",
  },
  {
    name: "Document Management & Integrations",
    weight: "15%",
    desc: "Document storage, organization, version control, template automation, and the breadth and quality of third-party integrations including email, cloud storage, e-filing, and accounting platforms.",
  },
  {
    name: "Support & Reliability",
    weight: "15%",
    desc: "Support channel availability (phone, chat, email), response times, onboarding quality, help documentation, uptime reliability, and the quality of mobile apps for iOS and Android.",
  },
  {
    name: "Value for Money",
    weight: "10%",
    desc: "Features delivered relative to total cost of ownership. We assess whether the pricing is fair for the functionality provided, including comparison to competing platforms at similar price points.",
  },
];

export default function HowWeReviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-3xl px-6">
            <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-800 font-medium">How We Review</span>
            </nav>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              How We Review Legal Practice Management Software
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every review on CounselStack follows a rigorous, consistent evaluation process.
              Here is exactly how we test, score, and rank legal practice management platforms.
            </p>
          </div>
        </section>

        {/* Testing Process */}
        <section className="py-14">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Our 5-Step Evaluation Process
            </h2>
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold text-sm">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scoring Criteria */}
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Scoring Criteria & Weights
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Each platform receives a score from 1 to 5 in six categories. The weighted average
              produces the overall rating. Weights reflect what matters most to the typical law
              firm choosing practice management software.
            </p>
            <div className="space-y-4">
              {criteria.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-bold text-brand-700">
                      {item.weight}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Update Cadence */}
        <section className="py-14">
          <div className="mx-auto max-w-3xl px-6 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Update Cadence</h2>
              <p className="text-slate-600 leading-relaxed">
                We re-evaluate every reviewed platform at least twice per year. Pricing is
                verified quarterly. When a vendor announces a major feature update or pricing
                change, we update the relevant review within two weeks. Every review displays
                the date it was last verified so you know how current the information is.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Editorial Independence</h2>
              <p className="text-slate-600 leading-relaxed">
                CounselStack is reader-supported through affiliate commissions. When you click a
                link to a software vendor and sign up, we may earn a referral fee at no cost to
                you. However, affiliate relationships never influence our ratings, rankings, or
                editorial verdicts. We apply the same evaluation criteria to every platform
                regardless of whether we have an affiliate relationship with the vendor. Some
                platforms we recommend highly have no affiliate program; some platforms we rate
                poorly do.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Corrections & Feedback</h2>
              <p className="text-slate-600 leading-relaxed">
                If you spot an error in our pricing data, feature descriptions, or any other
                factual claim, please email us at{" "}
                <a
                  href="mailto:editorial@counselstack.io"
                  className="text-brand-600 hover:text-brand-700 underline"
                >
                  editorial@counselstack.io
                </a>
                . We investigate every correction request and update our content within 48 hours
                when an error is confirmed. Accuracy is the foundation of our credibility.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              See our methodology in action
            </h2>
            <p className="text-slate-600 mb-6">
              Read our in-depth reviews to see how we apply this evaluation framework to real
              legal practice management platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/reviews"
                className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-700 transition-colors"
              >
                Read Our Reviews
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                View FAQ
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
              <Link href="/faq" className="hover:text-brand-600">FAQ</Link>
              <Link href="/contact" className="hover:text-brand-600">Contact</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
