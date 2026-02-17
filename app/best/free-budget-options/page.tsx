import { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";

export const metadata: Metadata = {
  title: "Free and Budget Legal Practice Management Software 2026 | CounselStack",
  description:
    "Best free and low-cost legal practice management software for 2026. Find affordable options for solo attorneys and small law firms.",
};

export default function FreeOptionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Free & Budget Legal Practice Management Software 2026
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              Affordable options for solo attorneys, new practices, and cost-conscious firms. We cover truly free tools, extended free trials, and the most affordable paid options.
            </p>
            <AffiliateDisclosure />
          </div>
        </section>

        <section className="py-8 bg-amber-50 border-y border-amber-100">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-800 mb-1">The Truth About Free Legal Software</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  There is no fully-featured, permanently free legal practice management platform. Bar compliance requirements (trust accounting, data security) make a truly free professional-grade product economically unviable. However, several platforms offer extended free trials or genuinely affordable entry-level plans below $40/user/month.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Best Free Trials (Ranked by Trial Length)</h2>
            <div className="space-y-4">
              {[
                {
                  name: "MyCase",
                  slug: "mycase",
                  trialLength: "10 days",
                  price: "$39/user/month after trial",
                  affiliateUrl: "https://www.mycase.com/free-trial/",
                  note: "Full feature access during trial. No credit card required. Best trial value: entry price is the lowest in the category.",
                  highlight: "10 days + lowest starting price",
                },
                {
                  name: "CosmoLex",
                  slug: "cosmolex",
                  trialLength: "10 days",
                  price: "$109/user/month after trial",
                  affiliateUrl: "https://www.cosmolex.com/free-trial/",
                  note: "Full access to both practice management and built-in accounting. If you want to evaluate whether CosmoLex replaces QuickBooks for you, 10 days is enough to find out.",
                  highlight: "10 days — test built-in accounting",
                },
                {
                  name: "Clio",
                  slug: "clio",
                  trialLength: "7 days",
                  price: "$49/user/month after trial",
                  affiliateUrl: "https://www.clio.com/signup/",
                  note: "7-day trial with no credit card. Full access to the Essentials tier. Sufficient to evaluate integrations and core workflows.",
                  highlight: "7 days — industry-standard platform",
                },
                {
                  name: "PracticePanther",
                  slug: "practicepanther",
                  trialLength: "7 days",
                  price: "$49/user/month after trial",
                  affiliateUrl: "https://www.practicepanther.com/free-trial/",
                  note: "7-day trial, no credit card. Enough time to evaluate the workflow automation and billing features that differentiate PracticePanther.",
                  highlight: "7 days — best for evaluating workflows",
                },
              ].map((item) => (
                <div key={item.slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                      <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                        {item.trialLength} free
                      </span>
                    </div>
                    <p className="text-sm font-medium text-brand-700 mb-2">{item.highlight}</p>
                    <p className="text-sm text-slate-500 mb-2">{item.note}</p>
                    <p className="text-xs text-slate-400">Then: {item.price}</p>
                    <Link href={`/reviews/${item.slug}`} className="mt-2 inline-block text-sm text-brand-600 hover:text-brand-700 font-medium">
                      Read full review →
                    </Link>
                  </div>
                  <Link
                    href={item.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex-shrink-0 flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                  >
                    Try Free <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Lowest-Cost Paid Options</h2>
            <p className="text-slate-600 mb-8">
              After free trials, here are the most affordable paid plans among reputable legal practice management platforms:
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Platform</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Lowest Plan</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Price (Annual)</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">What&apos;s Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-brand-50">
                    <td className="py-3 px-4 font-semibold text-brand-700">MyCase ★</td>
                    <td className="py-3 px-4">Basic</td>
                    <td className="py-3 px-4 font-bold">$39/user/mo</td>
                    <td className="py-3 px-4">Full PM, billing, portal, unlimited storage</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Clio</td>
                    <td className="py-3 px-4">EasyStart</td>
                    <td className="py-3 px-4">$49/user/mo</td>
                    <td className="py-3 px-4">Core PM, time, billing, e-signatures</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">PracticePanther</td>
                    <td className="py-3 px-4">Solo</td>
                    <td className="py-3 px-4">$49/user/mo</td>
                    <td className="py-3 px-4">PM, billing, document templates, workflows</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">CosmoLex</td>
                    <td className="py-3 px-4">Standard</td>
                    <td className="py-3 px-4">$109/user/mo</td>
                    <td className="py-3 px-4">PM + full accounting (no QuickBooks needed)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Smokeball</td>
                    <td className="py-3 px-4">Boost</td>
                    <td className="py-3 px-4">From $149/mo</td>
                    <td className="py-3 px-4">PM, billing, Microsoft 365 deep integration</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">★ Lowest starting price in the category. All prices verified as of early 2026.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Budget-Saving Tips</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  tip: "Always choose annual billing",
                  detail: "Annual plans save 10–20% versus monthly billing on every major platform. A 3-attorney firm on MyCase Pro saves ~$360/year by paying annually.",
                },
                {
                  tip: "Use the full free trial before deciding",
                  detail: "MyCase offers 10 days — enough time to set up your practice and run a real client invoice. Don't judge based on demos alone.",
                },
                {
                  tip: "Factor in what you won't need to buy separately",
                  detail: "PracticePanther Business includes eSignature and texting. That eliminates a $45/month DocuSign subscription and a $30/month texting tool — real savings.",
                },
                {
                  tip: "Consider CosmoLex if you pay for QuickBooks",
                  detail: "For small firms paying $90/month for QuickBooks Plus + $49/user for another PM platform, CosmoLex at $109/user/month can be cheaper once QuickBooks is eliminated.",
                },
              ].map((item) => (
                <div key={item.tip} className="rounded-xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.tip}</h3>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
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
