import { MetadataRoute } from "next";
import { getAllToolSlugs } from "./reviews/_data/tools";
import { getAllComparisonSlugs } from "./vs/_data/comparisons";
import { getAllPostSlugs } from "./blog/_data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://counselstack.io";
  const now = new Date().toISOString();

  const staticPages = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/reviews`, priority: 0.9 },
    { url: `${baseUrl}/compare`, priority: 0.9 },
    { url: `${baseUrl}/best`, priority: 0.85 },
    { url: `${baseUrl}/pricing`, priority: 0.9 },
    { url: `${baseUrl}/best/legal-practice-management-software-2026`, priority: 0.95 },
    { url: `${baseUrl}/best/solo-practitioners`, priority: 0.85 },
    { url: `${baseUrl}/best/small-law-firms`, priority: 0.85 },
    { url: `${baseUrl}/best/free-budget-options`, priority: 0.8 },
    { url: `${baseUrl}/best/immigration-law`, priority: 0.85 },
    { url: `${baseUrl}/best/personal-injury`, priority: 0.85 },
    { url: `${baseUrl}/best/document-management`, priority: 0.85 },
    { url: `${baseUrl}/best/client-portal`, priority: 0.85 },
    { url: `${baseUrl}/blog`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.6 },
    { url: `${baseUrl}/affiliate-disclosure`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.5 },
    { url: `${baseUrl}/waitlist`, priority: 0.7 },
  ].map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.priority,
  }));

  const reviewPages = getAllToolSlugs().map((slug) => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const comparisonPages = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = getAllPostSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...reviewPages, ...comparisonPages, ...blogPages];
}
