import { Metadata } from "next";
import { Shield, Users, Scale, BookOpen } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "About CounselStack — Our Mission and Editorial Standards",
  description:
    "CounselStack is an independent legal technology review site. Learn about our editorial standards, affiliate disclosure, and how we evaluate software.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About CounselStack</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We help attorneys and law firms find the right practice management software through independent, 
              rigorous reviews — without vendor influence.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6 space-y-12">

            {/* Mission */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Legal practice management software is a significant investment — both financially and operationally. 
                The average law firm keeps their PM software for 7–10 years. Choosing the wrong platform means 
                years of workarounds, expensive migrations, and productivity drag.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                CounselStack exists to make that decision easier. We research real pricing (including the hidden costs 
                vendors don&apos;t advertise), test actual features, and give you honest, unsponsored verdicts on which 
                platforms work for which types of practices.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe every attorney — from solo practitioners to managing partners at mid-size firms — deserves 
                access to the same quality of information that large law firms can afford to obtain through technology 
                consultants.
              </p>
            </div>

            {/* Editorial Standards */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6" id="editorial-standards">
                Editorial Standards
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Shield,
                    title: "Independent Research",
                    desc: "We evaluate software based on our own analysis, not vendor briefings or sponsored content. No platform pays to be reviewed or ranked higher.",
                  },
                  {
                    icon: BookOpen,
                    title: "Verified Pricing",
                    desc: "We verify all pricing directly from vendor websites before publishing. We note the verification date and update reviews when prices change.",
                  },
                  {
                    icon: Users,
                    title: "Real Feature Testing",
                    desc: "Our reviews include hands-on evaluation of features, not just marketing copy. We use free trials to test the workflows we describe.",
                  },
                  {
                    icon: Scale,
                    title: "Balanced Verdicts",
                    desc: "Every review includes both pros and cons. We don&apos;t omit weaknesses to please vendors, and we don&apos;t manufacture flaws where they don&apos;t exist.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <item.icon className="h-6 w-6 text-brand-600 mb-3" />
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliate Disclosure */}
            <div id="affiliate-disclosure">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Affiliate Disclosure</h2>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  <strong>CounselStack is reader-supported.</strong> When you click links to software products and make a purchase, 
                  we may earn a commission from the vendor. This is how we fund the research and writing that makes this site possible.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Affiliate commissions <strong>do not influence our editorial ratings, rankings, or verdicts.</strong> We apply 
                  the same evaluation criteria to all platforms, whether or not we have an affiliate relationship with the vendor. 
                  Some platforms we recommend highly have no affiliate program; some platforms we rate poorly do.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  When a platform offers a free trial through an affiliate link, clicking that link doesn&apos;t affect your trial 
                  experience, pricing, or relationship with the vendor. It simply allows us to receive credit for the referral.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  If you have questions about our affiliate relationships with any specific vendor, contact us at{" "}
                  <a href="mailto:editorial@counselstack.io" className="text-brand-600 underline">
                    editorial@counselstack.io
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* How We Review */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Evaluate Software</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our reviews use a consistent scoring framework across five dimensions, each weighted by importance to the typical law firm:
              </p>
              <div className="space-y-4">
                {[
                  { dimension: "Features (30%)", desc: "Breadth of functionality, key differentiators, and feature availability at each plan tier." },
                  { dimension: "Ease of Use (25%)", desc: "Learning curve, interface quality, and how quickly new users reach productivity." },
                  { dimension: "Value for Money (20%)", desc: "Features delivered relative to pricing, including hidden costs and total cost of ownership." },
                  { dimension: "Customer Support (15%)", desc: "Support availability, response times, and quality of onboarding resources." },
                  { dimension: "Mobile App (10%)", desc: "Quality and completeness of iOS and Android applications." },
                ].map((item) => (
                  <div key={item.dimension} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-brand-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">{item.dimension}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-4">
                Questions about our reviews, corrections, or partnership inquiries:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>Editorial: <a href="mailto:editorial@counselstack.io" className="text-brand-600 hover:text-brand-700">editorial@counselstack.io</a></li>
                <li>Corrections: <a href="mailto:corrections@counselstack.io" className="text-brand-600 hover:text-brand-700">corrections@counselstack.io</a></li>
                <li>Partnerships: <a href="mailto:partnerships@counselstack.io" className="text-brand-600 hover:text-brand-700">partnerships@counselstack.io</a></li>
              </ul>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
