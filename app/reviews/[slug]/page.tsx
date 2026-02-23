import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { AffiliateDisclosure } from "@/components/marketing/AffiliateDisclosure";
import { StarRating } from "@/components/ui/StarRating";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ReviewSchema } from "@/components/schema/ReviewSchema";
import { getTool, getAllToolSlugs } from "../_data/tools";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Review Not Found" };
  const canonicalUrl = `https://counselstack.io/reviews/${slug}`;
  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      type: "article",
      url: canonicalUrl,
    },
  };
}

const ratingLabels: Record<string, string> = {
  easeOfUse: "Ease of Use",
  features: "Features",
  valueForMoney: "Value for Money",
  customerSupport: "Customer Support",
  mobileApp: "Mobile App",
};

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const pageUrl = `https://counselstack.io/reviews/${slug}`;
  const breadcrumbItems = [
    { name: "Home", url: "https://counselstack.io" },
    { name: "Reviews", url: "https://counselstack.io/reviews" },
    { name: `${tool.name} Review`, url: pageUrl },
  ];

  return (
    <>
      <ReviewSchema
        name={`${tool.name} Review 2026`}
        reviewBody={tool.verdict}
        ratingValue={tool.overallRating}
        softwareName={tool.name}
        softwareUrl={pageUrl}
        price={tool.pricing[0].price}
      />
      <FAQSchema
        faqs={tool.faqs.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />

      <main className="min-h-screen">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Reviews", href: "/reviews" },
            { name: tool.name, href: `/reviews/${slug}` },
          ]}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-10 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <AffiliateDisclosure />
            <div className="mt-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">{tool.name} Review 2026</h1>
                <p className="text-lg text-slate-600 mb-4">{tool.tagline}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-slate-600"><strong>Founded:</strong> {tool.founded}</span>
                  <span className="text-slate-600"><strong>HQ:</strong> {tool.headquarters}</span>
                  <span className="text-slate-600"><strong>Integrations:</strong> {tool.integrations}+</span>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex-shrink-0 min-w-48">
                <div className="text-3xl font-bold text-brand-600 mb-1">{tool.overallRating}/5</div>
                <StarRating rating={tool.overallRating} size="md" showNumber={false} />
                <p className="text-xs text-slate-500 mt-1 mb-4">CounselStack Rating</p>
                <Link
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center gap-1.5 w-full rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
                >
                  Try {tool.name} Free <ExternalLink className="h-3.5 w-3.5" />
                </Link>
                <p className="text-xs text-center text-slate-400 mt-2">{tool.freeTrial}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Verdict */}
        <section className="py-8 border-y border-slate-100 bg-brand-50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="bg-white rounded-xl border border-brand-100 p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-brand-700 uppercase tracking-wide mb-2">Our Verdict</h2>
              <p className="text-slate-700 leading-relaxed">{tool.verdict}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-12 space-y-12">
          {/* Rating Breakdown */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Rating Breakdown</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(tool.ratings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-sm font-medium text-slate-700">{ratingLabels[key]}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-slate-200 rounded-full h-1.5">
                      <div
                        className="bg-brand-500 h-1.5 rounded-full"
                        style={{ width: `${(value / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 w-8">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pros and Cons */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pros & Cons</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5" /> Pros
                </h3>
                <ul className="space-y-2">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-green-900">
                      <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-green-600" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <h3 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <X className="h-5 w-5" /> Cons
                </h3>
                <ul className="space-y-2">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-red-900">
                      <X className="h-4 w-4 flex-shrink-0 mt-0.5 text-red-500" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing Plans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {tool.pricing.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`rounded-xl border p-6 ${i === Math.floor(tool.pricing.length / 2) ? "border-brand-300 bg-brand-50 shadow-brand" : "border-slate-200 bg-white"}`}
                >
                  {i === Math.floor(tool.pricing.length / 2) && (
                    <div className="text-xs font-semibold text-brand-600 mb-2 uppercase tracking-wide">Most Popular</div>
                  )}
                  <h3 className="font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <div className="text-2xl font-bold text-brand-600 mb-1">{plan.price}</div>
                  <p className="text-xs text-slate-500 mb-4">{plan.billingNote}</p>
                  <ul className="space-y-1.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-sm text-slate-600">
                        <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">* Pricing as of early 2026. Visit {tool.name}&apos;s website to confirm current pricing.</p>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tool.keyFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-50">
                  <Check className="h-4 w-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Deep Dive */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">In-Depth Analysis</h2>
            <div className="prose-legal">
              {tool.deepDive.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return <h2 key={i}>{line.replace("## ", "")}</h2>;
                } else if (line.startsWith("### ")) {
                  return <h3 key={i}>{line.replace("### ", "")}</h3>;
                } else if (line.startsWith("| ")) {
                  return null; // Skip table lines in basic render
                } else if (line.startsWith("**")) {
                  return <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                } else if (line.trim() === "" || line.trim() === "---") {
                  return <br key={i} />;
                } else if (line.startsWith("- ")) {
                  return <li key={i} className="ml-4 text-slate-600">{line.replace("- ", "")}</li>;
                } else if (line.trim().length > 0) {
                  return (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    }} />
                  );
                }
                return null;
              })}
            </div>
          </section>

          {/* Best For / Not For */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Who Should Choose {tool.name}?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
                <h3 className="font-semibold text-brand-800 mb-3">✅ Great For</h3>
                <p className="text-sm text-brand-900 leading-relaxed">{tool.bestFor}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-700 mb-3">⚠️ Not Ideal For</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{tool.notGreatFor}</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {tool.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl bg-brand-600 p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Ready to try {tool.name}?</h2>
            <p className="text-brand-100 mb-6">{tool.freeTrial} — no credit card required</p>
            <Link
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Start Free Trial <ExternalLink className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
