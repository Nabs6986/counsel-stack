import { NextResponse } from "next/server";

export async function GET() {
  const response = {
    industry: "legal",
    lastUpdated: new Date().toISOString().split("T")[0],
    stats: [
      {
        metric: "average-billable-rate",
        value: 350,
        unit: "USD/hour",
        source: "ABA Legal Technology Survey 2025",
        category: "pricing",
      },
      {
        metric: "practice-management-software-adoption",
        value: 67,
        unit: "percent",
        source: "2025 Law Firm Technology Survey",
        category: "adoption",
      },
      {
        metric: "average-monthly-cost-per-user",
        value: 79,
        unit: "USD",
        source: "CounselStack Market Analysis 2026",
        category: "pricing",
      },
      {
        metric: "cloud-based-software-preference",
        value: 89,
        unit: "percent",
        source: "Legal Tech Trends Report 2025",
        category: "adoption",
      },
      {
        metric: "time-saved-with-automation",
        value: 12,
        unit: "hours/week",
        source: "Clio Legal Trends Report 2025",
        category: "productivity",
      },
      {
        metric: "solo-practitioners-using-software",
        value: 58,
        unit: "percent",
        source: "ABA Solo & Small Firm Survey 2025",
        category: "adoption",
      },
      {
        metric: "small-firms-using-software",
        value: 81,
        unit: "percent",
        source: "ABA Solo & Small Firm Survey 2025",
        category: "adoption",
      },
      {
        metric: "average-roi-after-12-months",
        value: 240,
        unit: "percent",
        source: "Legal Software ROI Study 2025",
        category: "roi",
      },
      {
        metric: "client-satisfaction-improvement",
        value: 34,
        unit: "percent",
        source: "Client Portal Impact Study 2025",
        category: "satisfaction",
      },
      {
        metric: "payment-collection-rate-improvement",
        value: 28,
        unit: "percent",
        source: "Legal Billing Report 2025",
        category: "revenue",
      },
      {
        metric: "document-retrieval-time-reduction",
        value: 75,
        unit: "percent",
        source: "Document Management Study 2025",
        category: "productivity",
      },
      {
        metric: "average-free-trial-duration",
        value: 10,
        unit: "days",
        source: "CounselStack Vendor Analysis 2026",
        category: "pricing",
      },
    ],
    metadata: {
      totalStats: 12,
      categories: ["pricing", "adoption", "productivity", "roi", "satisfaction", "revenue"],
      source: "CounselStack",
      url: "https://counselstack.io",
    },
  };

  return NextResponse.json(response, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Content-Type": "application/json",
    },
  });
}
