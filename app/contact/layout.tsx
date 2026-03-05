import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CounselStack — Questions, Corrections & Partnerships",
  description:
    "Get in touch with the CounselStack editorial team. Send questions about reviews, report corrections, or inquire about partnerships.",
  alternates: { canonical: "https://counselstack.io/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
