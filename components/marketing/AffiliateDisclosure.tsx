import Link from "next/link";
import { Info } from "lucide-react";

export function AffiliateDisclosure() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 flex gap-3">
      <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800">
        <strong>Affiliate Disclosure:</strong> CounselStack may earn a commission when you purchase software through links on this page. This doesn&apos;t affect our editorial scores or rankings — we evaluate every tool independently.{" "}
        <Link href="/affiliate-disclosure" className="underline hover:text-amber-900">
          Read our editorial standards →
        </Link>
      </p>
    </div>
  );
}
