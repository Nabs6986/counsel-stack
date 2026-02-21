import Link from "next/link";
import { Scale } from "lucide-react";

const footerLinks = {
  Reviews: [
    { name: "Clio Review", href: "/reviews/clio" },
    { name: "MyCase Review", href: "/reviews/mycase" },
    { name: "PracticePanther Review", href: "/reviews/practicepanther" },
    { name: "Smokeball Review", href: "/reviews/smokeball" },
    { name: "CosmoLex Review", href: "/reviews/cosmolex" },
  ],
  Compare: [
    { name: "All Comparisons", href: "/compare" },
    { name: "Clio vs MyCase", href: "/compare/clio-vs-mycase" },
    { name: "Clio vs PracticePanther", href: "/compare/clio-vs-practicepanther" },
    { name: "MyCase vs PracticePanther", href: "/compare/mycase-vs-practicepanther" },
    { name: "Pricing Comparison", href: "/pricing" },
  ],
  "Best Of": [
    { name: "Best Overall 2026", href: "/best/legal-practice-management-software-2026" },
    { name: "Best for Solos", href: "/best/solo-practitioners" },
    { name: "Best for Small Firms", href: "/best/small-law-firms" },
    { name: "Best Free/Budget", href: "/best/free-budget-options" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white font-bold mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                <Scale className="h-4 w-4 text-white" />
              </div>
              CounselStack
            </Link>
            <p className="text-sm leading-relaxed">
              Independent reviews of legal practice management software. Trusted by 10,000+ attorneys.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CounselStack. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 max-w-2xl">
            <strong className="text-slate-400">Affiliate Disclosure:</strong> CounselStack may earn commissions when you click links and purchase software through our site. This does not influence our editorial ratings or reviews. We independently evaluate every product.{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-slate-300">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
