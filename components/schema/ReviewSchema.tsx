import { JsonLd } from "./JsonLd";

interface ReviewSchemaProps {
  name: string;
  reviewBody: string;
  ratingValue: number;
  softwareName: string;
  softwareUrl: string;
  price: string;
  datePublished?: string;
  dateModified?: string;
}

export function ReviewSchema({
  name,
  reviewBody,
  ratingValue,
  softwareName,
  softwareUrl,
  price,
  datePublished = "2026-02-01",
  dateModified = "2026-02-17",
}: ReviewSchemaProps) {
  const numericPrice = price.replace(/[^0-9.]/g, "") || "0";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    name,
    reviewBody,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "CounselStack",
      url: "https://counselstack.io",
    },
    publisher: { "@id": "https://counselstack.io/#organization" },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: softwareName,
      url: softwareUrl,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: numericPrice,
        priceCurrency: "USD",
      },
    },
  };

  return <JsonLd data={schema} />;
}
