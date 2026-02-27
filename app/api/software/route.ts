import { NextResponse } from "next/server";
import { tools } from "@/app/reviews/_data/tools";

export async function GET() {
  const software = Object.values(tools).map((tool) => ({
    name: tool.name,
    slug: tool.slug,
    pricing: tool.pricing.reduce((acc, tier) => {
      acc[tier.name.toLowerCase().replace(/\s+/g, "")] = tier.price;
      return acc;
    }, {} as Record<string, string>),
    features: tool.keyFeatures,
    bestFor: tool.bestFor,
    rating: tool.overallRating,
    founded: tool.founded,
    headquarters: tool.headquarters,
    website: tool.website,
    freeTrial: tool.freeTrial,
  }));

  const response = {
    category: "legal-practice-management",
    lastUpdated: new Date().toISOString().split("T")[0],
    software,
    metadata: {
      totalSoftware: software.length,
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
