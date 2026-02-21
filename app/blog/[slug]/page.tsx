import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { getPost, getAllPostSlugs, getAllPosts } from "../_data/posts";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  const canonicalUrl = `https://counselstack.io/blog/${slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      url: canonicalUrl,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
    },
  };
}

const categoryColors: Record<string, string> = {
  guide: "bg-blue-100 text-blue-700",
  comparison: "bg-purple-100 text-purple-700",
  tips: "bg-green-100 text-green-700",
  news: "bg-orange-100 text-orange-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const pageUrl = `https://counselstack.io/blog/${post.slug}`;
  const breadcrumbItems = [
    { name: "Home", url: "https://counselstack.io" },
    { name: "Blog", url: "https://counselstack.io/blog" },
    { name: post.title, url: pageUrl },
  ];

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        author={post.author.name}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        url={pageUrl}
      />
      {post.faqs && post.faqs.length > 0 && (
        <FAQSchema
          faqs={post.faqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}
      <BreadcrumbSchema items={breadcrumbItems} />
      <Navbar />

      <main className="min-h-screen">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${slug}` },
          ]}
        />

        {/* Header */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-10 pb-8">
          <div className="mx-auto max-w-3xl px-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category]}`}>
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-4">{post.title}</h1>
            <p className="text-lg text-slate-600 mb-6">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
              <span className="font-medium text-slate-700">{post.author.name}</span>
              <span>·</span>
              <span>{post.author.role}</span>
              <span>·</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime} min read
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-10">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose-legal">
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return <h2 key={i}>{line.replace("## ", "")}</h2>;
                } else if (line.startsWith("### ")) {
                  return <h3 key={i}>{line.replace("### ", "")}</h3>;
                } else if (line.startsWith("#### ")) {
                  return <h4 key={i} className="text-lg font-semibold text-slate-800 mt-6 mb-2">{line.replace("#### ", "")}</h4>;
                } else if (line.trim() === "---") {
                  return <hr key={i} className="my-8 border-slate-200" />;
                } else if (line.startsWith("| ")) {
                  // Simple table row rendering
                  const cells = line.split("|").filter((c) => c.trim());
                  const isHeader = i > 0 && post.content.split("\n")[i + 1]?.startsWith("|---");
                  return (
                    <tr key={i} className={isHeader ? "bg-slate-50" : ""}>
                      {cells.map((cell, j) => (
                        isHeader
                          ? <th key={j} className="border border-slate-200 px-3 py-2 text-left text-sm font-semibold text-slate-700">{cell.trim()}</th>
                          : <td key={j} className="border border-slate-200 px-3 py-2 text-sm text-slate-600">{cell.trim()}</td>
                      ))}
                    </tr>
                  );
                } else if (line.startsWith("|---")) {
                  return null;
                } else if (line.startsWith("```")) {
                  return null;
                } else if (line.startsWith("- ") || line.startsWith("* ")) {
                  return (
                    <li key={i} dangerouslySetInnerHTML={{
                      __html: line.replace(/^[-*] /, "")
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        .replace(/`(.*?)`/g, "<code>$1</code>")
                    }} />
                  );
                } else if (/^\d+\. /.test(line)) {
                  return (
                    <li key={i} dangerouslySetInnerHTML={{
                      __html: line.replace(/^\d+\. /, "")
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    }} />
                  );
                } else if (line.trim() === "") {
                  return <br key={i} />;
                } else {
                  return (
                    <p key={i} dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        .replace(/`(.*?)`/g, "<code class='bg-slate-100 px-1 rounded text-sm font-mono'>$1</code>")
                    }} />
                  );
                }
              })}
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6">
                      <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-slate-50 py-12">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Related Posts</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="rounded-xl border border-slate-200 bg-white p-5 hover:border-brand-300 hover:shadow-sm transition-all group"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 text-sm mb-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {related.readingTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl bg-brand-600 p-8 text-center text-white">
              <h2 className="text-xl font-bold mb-2">Ready to find your legal PM software?</h2>
              <p className="text-brand-100 mb-6 text-sm">Compare all platforms and find the right fit for your practice.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/best/legal-practice-management-software-2026"
                  className="rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
                >
                  See Top Picks
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-lg border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Compare Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
