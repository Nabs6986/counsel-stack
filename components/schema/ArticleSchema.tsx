import { JsonLd } from "./JsonLd";

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  url,
  image = "https://counselstack.io/og-image.png",
}: ArticleSchemaProps) {
  const isOrgAuthor =
    author.includes("CounselStack") || author.includes("Editorial");

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    author: isOrgAuthor
      ? {
          "@type": "Organization",
          name: author,
          url: "https://counselstack.io",
        }
      : {
          "@type": "Person",
          name: author,
          url: `https://counselstack.io/about`,
        },
    publisher: {
      "@type": "Organization",
      name: "CounselStack",
      url: "https://counselstack.io",
      logo: {
        "@type": "ImageObject",
        url: "https://counselstack.io/logo.png",
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <JsonLd data={schema} />;
}
