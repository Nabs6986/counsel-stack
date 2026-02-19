import { Metadata } from "next";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { CheckCircle, Users, Zap, DollarSign } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Early Access Waitlist | CounselStack",
  description:
    "Join the waitlist for simpler, more affordable legal practice management software. Built for solo attorneys and small firms.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Get Early Access | CounselStack",
    description:
      "We're building lightweight legal software for solo attorneys and small firms. No bloat, fair pricing.",
  },
};

const benefits = [
  {
    icon: DollarSign,
    title: "Fair Pricing",
    desc: "No per-user fees that punish growth. Flat rate plans for small firms.",
  },
  {
    icon: Zap,
    title: "No Feature Bloat",
    desc: "The 20% of features used 80% of the time, done really well.",
  },
  {
    icon: Users,
    title: "Built With You",
    desc: "Early access members shape the roadmap. Your pain points drive our priorities.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Early Access — Limited Spots
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Legal software that doesn&apos;t<br />
              <span className="text-brand-400">cost a fortune</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We&apos;re researching what solo attorneys and small firms actually need — 
              and we want your input before we build it.
            </p>
          </div>
        </section>

        {/* Benefits + Form */}
        <section className="py-16 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  What we&apos;re building
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-white rounded-xl border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Why join now?
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Influence what features we build first</li>
                    <li>• Get early access pricing (locked in forever)</li>
                    <li>• Free migration help when we launch</li>
                    <li>• Direct line to the founding team</li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-12 border-t border-slate-200">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-slate-500 text-sm">
              CounselStack has helped 10,000+ attorneys evaluate legal practice management software.
              Now we&apos;re using that research to build something better.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
