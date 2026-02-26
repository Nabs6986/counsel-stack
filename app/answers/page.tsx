import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { FAQSchema } from "@/components/schema/FAQSchema";

export const metadata: Metadata = {
  title: "Legal Practice Management Software — Common Questions Answered",
  description:
    "Get direct answers to the most common questions about legal practice management software: pricing, features, IOLTA compliance, migration, integrations, and choosing the right platform.",
  alternates: { canonical: "https://counselstack.io/answers" },
};

const faqs = [
  {
    question: "What does legal practice management software cost in 2026?",
    answer: "Legal practice management software typically costs $39–$149 per user per month. MyCase Basic starts at $39/user/month, making it the most affordable major platform. Clio EasyStart and PracticePanther Solo both start at $49/user/month. CosmoLex starts at $109/user/month with built-in accounting. Smokeball uses flat-rate pricing starting around $149/month. Most vendors offer 7–30 day free trials. When calculating cost, factor in payment processing fees (typically 2.9% + $0.30 per transaction), add-on integrations, and per-user charges.",
  },
  {
    question: "Which legal software is best for solo practitioners?",
    answer: "For solo attorneys, PracticePanther Solo ($49/month) and MyCase Basic ($39/month) are the strongest options. PracticePanther offers robust workflow automation and document assembly. MyCase is the most affordable with solid core features including time tracking, billing, and client portal. Clio EasyStart ($49/month) is also competitive with 250+ integrations. The best choice depends on whether you prioritize automation (PracticePanther), affordability (MyCase), or ecosystem flexibility (Clio).",
  },
  {
    question: "Does legal software handle trust accounting and IOLTA compliance?",
    answer: "Yes, most legal practice management platforms include trust accounting, but depth varies. CosmoLex has the most comprehensive built-in trust accounting with full IOLTA compliance and three-way reconciliation. Clio and MyCase offer solid trust accounting modules. PracticePanther integrates with QuickBooks for accounting. Always verify that the platform supports your state's specific trust accounting rules and offers audit trails, three-way reconciliation, and automated IOLTA interest calculations.",
  },
  {
    question: "Can I switch legal software without losing my data?",
    answer: "Yes. Most platforms offer data migration assistance, and your matters, contacts, documents, and billing history can typically be exported as CSV or transferred via API. Vendors like PracticePanther and Clio offer free migration support on higher-tier plans. Budget 2–4 weeks for a smooth transition: data export and mapping (3–5 days), data import and validation (3–7 days), testing (3–5 days), and team training (1–2 weeks). Many firms run both systems in parallel for 1–2 weeks to catch issues.",
  },
  {
    question: "What features should I look for in legal practice management software?",
    answer: "Essential features include: matter/case management (organize cases by client, practice area, status), time tracking and billing (timer-based and manual entry, customizable invoices, trust accounting), document management (version control, templates, document assembly), calendar and task management (court deadlines, reminders, conflict checks), client portal (secure messaging, document sharing, online payments), and reporting (profitability by matter, time utilization, collection rates). Advanced features include AI-powered time capture, automated workflows, court e-filing, and legal billing rate tables.",
  },
  {
    question: "How long does it take to learn legal practice management software?",
    answer: "Most solo attorneys become proficient in 1–2 weeks. Small firms (2–10 attorneys) typically need 2–4 weeks for full team adoption. Core features like time tracking, billing, and matter management are intuitive and take 2–3 days to learn. Advanced features like trust accounting, document automation, and workflow rules require additional training. All major vendors (Clio, MyCase, PracticePanther) offer onboarding support, video tutorials, and help centers. Start with a free trial to test the learning curve before committing.",
  },
  {
    question: "Is cloud-based legal software secure enough for confidential client data?",
    answer: "Yes. Reputable platforms use bank-level security including 256-bit AES encryption for data at rest, TLS encryption for data in transit, SOC 2 Type II compliance, regular security audits, and multi-factor authentication. Clio, MyCase, PracticePanther, and CosmoLex all maintain SOC 2 compliance. Cloud platforms typically offer stronger security than local office servers because they have dedicated security teams, automatic updates, and redundant backups. Most state bar associations explicitly approve cloud-based legal software.",
  },
  {
    question: "What integrations should I expect from legal practice management software?",
    answer: "Essential integrations include: accounting software (QuickBooks, Xero), document storage (Google Drive, Dropbox, OneDrive), email (Gmail, Outlook), e-signature (DocuSign, Adobe Sign), payment processing (LawPay, Stripe), court e-filing, and calendar sync (Google Calendar, Outlook Calendar). Clio leads with 250+ integrations. MyCase and PracticePanther offer 50–100 integrations each. Smokeball has fewer integrations but includes more built-in features. Check that your current tools integrate before switching platforms.",
  },
  {
    question: "Can legal software track billable time automatically?",
    answer: "Yes. Modern platforms offer automatic time capture that tracks time spent in emails, calls, and documents. Clio and Smokeball have the most advanced automatic time tracking. Most platforms also support: timer-based entry (start/stop timers for tasks), manual entry (add time after the fact), calendar-based entry (convert calendar events to time entries), and activity-based suggestions (AI suggests time entries based on activity). Automatic time capture typically increases billable time recovery by 10–20%.",
  },
  {
    question: "Do I need separate accounting software if I use legal practice management software?",
    answer: "It depends. CosmoLex includes full accounting features (general ledger, accounts payable/receivable, financial reporting) so you don't need QuickBooks. Clio, MyCase, and PracticePanther handle trust accounting and client billing but integrate with QuickBooks for firm-level accounting. Solo practitioners and small firms can often manage with the built-in accounting features. Mid-size firms (10+ attorneys) typically need QuickBooks integration for comprehensive financial management.",
  },
  {
    question: "How does Clio compare to MyCase?",
    answer: "Clio is better for firms that need extensive third-party integrations (250+), advanced reporting, and a polished client portal (Clio Connect). MyCase is better for firms that want a lower entry price ($39 vs $49/user/month), built-in texting, and a simpler interface. Both platforms offer solid time tracking, billing, trust accounting, and document management. Clio suits firms planning to scale and needing ecosystem flexibility. MyCase suits firms wanting a clean, affordable, all-in-one solution.",
  },
  {
    question: "What is the best legal software for small law firms with 2–10 attorneys?",
    answer: "Clio is the strongest all-around choice for small firms thanks to its 250+ integrations, mature platform, and scalability. MyCase offers the best value for small firms on a budget. PracticePanther is excellent for firms that want strong workflow automation and document assembly. CosmoLex is ideal if you need built-in accounting without a separate QuickBooks subscription. All four platforms support multi-user access, role-based permissions, and centralized matter management.",
  },
  {
    question: "Do legal practice management platforms offer mobile apps?",
    answer: "Yes. All major platforms offer iOS and Android mobile apps. Key mobile features include: time tracking on the go, access to matter details and documents, client communication via secure messaging, calendar and task management, and invoice approvals. Clio and MyCase have the most polished mobile apps. PracticePanther and Smokeball offer solid mobile experiences. Mobile apps allow attorneys to track time during client meetings, court appearances, and travel.",
  },
  {
    question: "Can I generate legal documents from templates using practice management software?",
    answer: "Yes. All major platforms support document automation and template management. Smokeball has the most extensive template library with 20,000+ legal forms across practice areas. Clio integrates with document automation tools like HotDocs and Clio Draft. MyCase and PracticePanther offer built-in document assembly with merge fields (pull client and matter data into templates). Document automation saves hours per week and reduces errors in routine forms like engagement letters, pleadings, and contracts.",
  },
  {
    question: "What customer support do legal software vendors offer?",
    answer: "Support varies by vendor and plan tier. Clio offers phone, email, and chat support on all plans, with priority support on higher tiers. MyCase provides phone and email support during business hours. PracticePanther offers chat and email support with phone support on premium plans. CosmoLex includes dedicated onboarding support. Smokeball offers phone and email support. All vendors provide help centers, webinars, and video tutorials. Check response times and support hours before selecting a platform.",
  },
  {
    question: "Are there hidden costs in legal practice management software?",
    answer: "Yes. Common hidden costs include: payment processing fees (typically 2.9% + $0.30 per transaction for credit cards), additional charges for e-signature integrations, court filing add-ons, premium support tiers, SMS/texting fees beyond included limits, data storage overages (documents and emails), per-user costs for client portal access, and API access fees for custom integrations. Always calculate total cost of ownership, not just the advertised subscription price. Request a detailed pricing breakdown during the sales process.",
  },
  {
    question: "Can legal software help with compliance and ethics requirements?",
    answer: "Yes. Legal practice management platforms help meet ethics requirements through: trust accounting with IOLTA compliance and audit trails, conflict checking (flag potential conflicts before accepting new matters), secure client communication (encrypted messaging and client portals meet confidentiality standards), document retention policies, and time tracking accuracy (required for billing and malpractice defense). Most platforms generate compliance reports for state bar audits. Check that the platform supports your state's specific trust accounting rules.",
  },
  {
    question: "How often do legal practice management platforms release updates?",
    answer: "Cloud-based platforms release updates continuously—typically weekly or bi-weekly for bug fixes and monthly for feature releases. Major feature updates are usually announced quarterly. Clio hosts an annual conference (ClioCon) where major product updates are unveiled. Updates are delivered automatically via the cloud, so you always have access to the latest version without manual installation. This ensures you benefit from new features, security patches, and performance improvements immediately.",
  },
  {
    question: "What practice areas are supported by legal practice management software?",
    answer: "Most platforms support all practice areas, but some specialize. Clio, MyCase, and PracticePanther are practice-area agnostic and work for: personal injury, family law, criminal defense, immigration, estate planning, business law, and real estate. Smokeball offers specialized workflows for personal injury, family law, and estate planning. Some platforms offer practice-specific templates and workflows. Check whether your practice area has dedicated features or templates before committing to a platform.",
  },
  {
    question: "Can I accept online payments through legal practice management software?",
    answer: "Yes. All major platforms support online payment processing for credit cards, debit cards, and ACH/eCheck. Common payment processors include LawPay, Stripe, and platform-native payment gateways. Clients can pay invoices via the client portal, email payment links, or text-to-pay. Processing fees typically range from 2.5% to 3.5% for credit cards and $0.50 to $1.00 for ACH transfers. Trust account payments and operating account payments are handled separately for IOLTA compliance.",
  },
  {
    question: "How does legal software pricing compare to hiring additional staff?",
    answer: "Legal practice management software typically costs $500–$1,800 per user per year (based on $39–$149/month). This is significantly less than hiring additional administrative staff (average $35,000–$50,000 per year for a legal assistant). Automation features like time tracking, document assembly, and billing can save 5–10 hours per attorney per week. For solo practitioners and small firms, practice management software often pays for itself within 2–3 months through increased billable time recovery and reduced administrative overhead.",
  },
  {
    question: "What is the difference between cloud-based and on-premise legal software?",
    answer: "Cloud-based software (SaaS) is accessed through a web browser, hosted on vendor servers, and requires no IT infrastructure. Benefits include automatic updates, remote access from any device, lower upfront costs, and vendor-managed security. On-premise software is installed on local servers, requires IT maintenance, and offers more control over data. Most modern platforms (Clio, MyCase, PracticePanther, CosmoLex) are cloud-based. Smokeball offers both cloud and desktop options. Cloud-based is now the industry standard due to convenience and security.",
  },
  {
    question: "Can I customize legal practice management software for my firm's workflow?",
    answer: "Yes. Customization options include: custom fields for matters and contacts, custom invoice templates and letterhead, custom document templates with merge fields, custom task and workflow automation rules, custom dashboard and report layouts, and custom practice areas and matter types. PracticePanther and Clio offer the most robust customization options. Some platforms charge extra for advanced customization or require higher-tier plans. Start with out-of-the-box workflows and customize as you identify specific needs.",
  },
  {
    question: "What happens to my data if I cancel my legal practice management software subscription?",
    answer: "Most vendors allow you to export your data (contacts, matters, time entries, billing records, documents) as CSV files or bulk downloads before canceling. Clio, MyCase, and PracticePanther offer data export tools. After cancellation, you typically have 30–90 days to export data before the account is deleted. Some vendors charge data export fees for large datasets. Always verify the vendor's data export policy and test the export process before canceling. Download all documents and billing records before your subscription ends.",
  },
  {
    question: "How does legal software improve client communication?",
    answer: "Client portals allow clients to: view case updates in real time, securely share documents, approve and pay invoices online, and message their attorney via encrypted messaging. Automated client notifications (email and SMS) keep clients informed about case milestones, upcoming deadlines, and billing updates. Clio's client portal (Clio Connect) is one of the most polished. MyCase includes built-in texting. Client portals reduce back-and-forth emails, improve client satisfaction, and free up staff time for higher-value work.",
  },
];

export default function AnswersPage() {
  return (
    <>
      <Navbar />
      <FAQSchema faqs={faqs} />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <nav className="text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-800 font-medium">Answers</span>
            </nav>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Legal Practice Management Software — Questions Answered
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Direct, detailed answers to the most common questions about choosing, using, and switching legal practice management software. Updated for 2026.
            </p>
          </div>
        </section>

        {/* Category navigation */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                Browse by Topic
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Pricing & Costs
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Features & Capabilities
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Switching & Migration
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Security & Compliance
                </span>
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                  Choosing the Right Software
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Answers grid */}
        <section className="pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h2>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 border-t border-slate-200 py-12">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Need help choosing the right platform?
            </h2>
            <p className="text-slate-600 mb-6">
              Read our detailed reviews or see how we evaluate legal practice management software.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/reviews"
                className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-700 transition-colors"
              >
                Read Our Reviews
              </Link>
              <Link
                href="/best/legal-practice-management-software-2026"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                Best Legal Software 2026
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
