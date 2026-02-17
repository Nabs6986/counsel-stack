import Link from "next/link";
import { Check, Star, ArrowRight, Shield, Award, Users, BookOpen } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getAllTools } from "./reviews/_data/tools";
import { StarRating } from "@/components/ui/StarRating";

const tools = getAllTools();

const trustSignals = [
  { icon: Users, stat: "150,000+", label: "Attorneys Evaluated" },
  { icon: BookOpen, stat: "5 Platforms", label: "Deeply Reviewed" },
  { icon: Shield, stat: "100%", label: "Independent" },
  { icon: Award, stat: "2026", label: "Current Data" },
];

const featuredTools = [
  {
    slug: "clio",
    name: "Clio",
    badge: "Editor's Choice",
    rating: 4.7,
    price: "From $49/user/mo",
    highlight: "250+ integrations, largest ecosystem",
    bestFor: "Growing firms",
  },
  {
    slug: "mycase",
    name: "MyCase",
    badge: "Best Value",
    rating: 4.5,
    price: "From $39/user/mo",
    highlight: "Lowest price, cleanest interface",
    bestFor: "Small firms & solos",
  },
  {
    slug: "practicepanther",
    name: "PracticePanther",
    badge: "Best for Solos",
    rating: 4.5,
    price: "From $49/user/mo",
    highlight: "Native eSign & texting included",
    bestFor: "Solo practitioners",
  },
  {
    slug: "smokeball",
    name: "Smokeball",
    badge: "Best for Docs",
    rating: 4.4,
    price: "From $149/mo",
    highlight: "Autotime + document automation",
    bestFor: "Document-heavy practices",
  },
  {
    slug: "cosmolex",
    name: "CosmoLex",
    badge: "Built-in Accounting",
    rating: 4.3,
    price: "From $109/user/mo",
    highlight: "No QuickBooks needed",
    bestFor: "Accounting-integrated firms",
  },
];

const faqs = [
  {
    q: "What is the best legal practice management software?",
    a: "The best depends on firm size and priorities. Clio is the industry leader with 250+ integrations. MyCase offers the best value at $39/user/month. PracticePanther is best for solos with native eSignature. Smokeball excels for document-heavy practices. CosmoLex is best for firms wanting built-in accounting.",
  },
  {
    q: "How much does legal practice management software cost?",
    a: "Prices range from $39/user/month (MyCase Basic) to $149/user/month (Clio Expand). Most small firms spend $50–100/user/month. Factor in add-ons: payment processing (2.9%+), QuickBooks ($35–200/month), and potential eSignature tools if not included.",
  },
  {
    q: "Do I need legal practice management software as a solo attorney?",
    a: "Yes. Solo attorneys who switch from spreadsheets typically capture 15–25% more billable hours through automatic time tracking and better billing workflows. At $300/hour, that's significant revenue. MyCase Basic at $39/month is the most accessible entry point.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-brand-50 via-white to-white pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
            <Star className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
            Updated for 2026 — Real pricing, real reviews
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find the Best Legal Practice
            <br />
            <span className="text-brand-600">Management Software</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Independent reviews of every major legal PM platform — with real pricing, feature breakdowns, 
            and honest recommendations. We help 10,000+ attorneys choose the right tools every month.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/best/legal-practice-management-software-2026"
              className="rounded-lg bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              See Top Picks for 2026
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            >
              Compare Pricing
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> No vendor sponsorship</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Current 2026 pricing</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-green-500" /> Real feature testing</span>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-y border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustSignals.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <item.icon className="h-6 w-6 text-brand-500" />
                <p className="text-2xl font-bold text-slate-900">{item.stat}</p>
                <p className="text-sm text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Top Legal PM Software for 2026</h2>
              <p className="mt-2 text-slate-500">Ranked by overall score across features, price, and usability</p>
            </div>
            <Link href="/reviews" className="hidden sm:flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
              All reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {featuredTools.map((tool, index) => (
              <Link
                key={tool.slug}
                href={`/reviews/${tool.slug}`}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-brand-200 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-sm font-bold text-brand-700">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                      {tool.name}
                    </h3>
                    <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">{tool.highlight}</p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
                  <StarRating rating={tool.rating} size="sm" />
                  <span className="text-sm font-medium text-slate-700">{tool.price}</span>
                  <span className="text-xs text-slate-400">Best for: {tool.bestFor}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 group-hover:text-brand-500 transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700">
              View all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Shortcut */}
      <section className="bg-brand-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Head-to-Head Comparisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Clio vs MyCase", href: "/vs/clio-vs-mycase", desc: "Value vs. ecosystem" },
              { title: "Clio vs PracticePanther", href: "/vs/clio-vs-practicepanther", desc: "Integrations vs. native features" },
              { title: "MyCase vs PracticePanther", href: "/vs/mycase-vs-practicepanther", desc: "Price vs. automation" },
            ].map((comp) => (
              <Link
                key={comp.href}
                href={comp.href}
                className="rounded-xl bg-white border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">{comp.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{comp.desc}</p>
                <span className="text-sm font-medium text-brand-600 flex items-center gap-1">
                  Compare <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Of Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">Browse by Firm Type</h2>
          <p className="text-center text-slate-500 mb-10">Tailored recommendations for your specific situation</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Best Overall 2026", href: "/best/legal-practice-management-software-2026", emoji: "🏆" },
              { title: "Best for Solo Attorneys", href: "/best/solo-practitioners", emoji: "👤" },
              { title: "Best for Small Firms", href: "/best/small-law-firms", emoji: "🏛️" },
              { title: "Best Free / Budget", href: "/best/free-budget-options", emoji: "💰" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-slate-800 group-hover:text-brand-700 text-sm">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900">From the Blog</h2>
            <Link href="/blog" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
              All posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: "/blog/how-to-choose-legal-practice-management-software-2026",
                title: "How to Choose Legal Practice Management Software in 2026",
                time: "12 min read",
                tag: "Guide",
              },
              {
                href: "/blog/hidden-costs-legal-pm-software",
                title: "Hidden Costs of Legal PM Software: What Vendors Don't Tell You",
                time: "10 min read",
                tag: "Guide",
              },
              {
                href: "/blog/migrating-spreadsheets-to-legal-pm",
                title: "Migrating from Spreadsheets to Legal PM: Step-by-Step Guide",
                time: "11 min read",
                tag: "Guide",
              },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-200 hover:shadow-sm transition-all group"
              >
                <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 mb-3">
                  {post.tag}
                </span>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400">{post.time}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
