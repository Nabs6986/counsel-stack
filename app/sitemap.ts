import { MetadataRoute } from "next";
import { getAllToolSlugs } from "./reviews/_data/tools";
import { getAllComparisonSlugs } from "./vs/_data/comparisons";
import { getAllPostSlugs } from "./blog/_data/posts";
import { getAllAudienceSlugs } from "./for/_data/audiences";

const standaloneBlogSlugs = [
  "legal-practice-management-software-pricing",
  "best-legal-document-automation-tools-small-firms-2026",
  "how-to-choose-case-management-software-personal-injury",
  "how-to-evaluate-legal-software-data-migration",
  "switching-from-google-docs-to-practice-management",
  "getting-attorneys-to-use-practice-management-software",
  "legal-client-intake-software-revenue-driver",
  "legal-software-iolta-trust-accounting",
  "solo-attorney-billable-hour-leakage",
  "all-in-one-vs-best-of-breed-legal-software",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://counselstack.io";
  const now = new Date().toISOString();

  const staticPages = [
    `${baseUrl}`,
    `${baseUrl}/reviews`,
    `${baseUrl}/compare`,
    `${baseUrl}/best`,
    `${baseUrl}/pricing`,
    `${baseUrl}/best/legal-practice-management-software-2026`,
    `${baseUrl}/best/solo-practitioners`,
    `${baseUrl}/best/small-law-firms`,
    `${baseUrl}/best/free-budget-options`,
    `${baseUrl}/best/immigration-law`,
    `${baseUrl}/best/personal-injury`,
    `${baseUrl}/best/document-management`,
    `${baseUrl}/best/client-portal`,
    `${baseUrl}/blog`,
    `${baseUrl}/about`,
    `${baseUrl}/faq`,
    `${baseUrl}/answers`,
    `${baseUrl}/how-we-review`,
    `${baseUrl}/affiliate-disclosure`,
    `${baseUrl}/contact`,
    `${baseUrl}/waitlist`,
    `${baseUrl}/guides`,
    `${baseUrl}/guides/best-legal-practice-management-software-2026`,
    `${baseUrl}/about-this-site`,
    `${baseUrl}/for`,
  ].map((url) => ({
    url,
    lastModified: now,
  }));

  const audiencePages = getAllAudienceSlugs().map((slug) => ({
    url: `${baseUrl}/for/${slug}`,
    lastModified: now,
  }));

  const reviewPages = getAllToolSlugs().map((slug) => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: now,
  }));

  const comparisonPages = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: now,
  }));

  const blogPages = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
  }));

  const standaloneBlogPages = standaloneBlogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
  }));

  return [
    ...staticPages,
    ...audiencePages,
    ...reviewPages,
    ...comparisonPages,
    ...blogPages,
    ...standaloneBlogPages,
  ];
}
