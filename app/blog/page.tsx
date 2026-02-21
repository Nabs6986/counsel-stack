import { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";
import { getAllPosts } from "./_data/posts";
import { formatDate } from "@/lib/utils";

const baseUrl = "https://counselstack.io";

export const metadata: Metadata = {
  title: "Legal Technology Blog — CounselStack",
  description:
    "Guides, comparisons, and practical advice on legal practice management software. Written for attorneys and law firm administrators.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

const posts = getAllPosts();

const categoryColors: Record<string, string> = {
  guide: "bg-blue-100 text-blue-700",
  comparison: "bg-purple-100 text-purple-700",
  tips: "bg-green-100 text-green-700",
  news: "bg-orange-100 text-orange-700",
};

export default function BlogIndexPage() {
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    { name: "Blog", url: `${baseUrl}/blog` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ItemListSchema
        name="CounselStack Blog"
        url={`${baseUrl}/blog`}
        items={posts.map((post) => ({
          name: post.title,
          url: `${baseUrl}/blog/${post.slug}`,
          description: post.excerpt,
        }))}
      />
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">Legal Technology Blog</h1>
            <p className="text-lg text-slate-600">
              Practical guides and expert analysis on legal practice management software — written for attorneys who want to make smarter decisions.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[post.category]}`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                      <span className="text-xs text-slate-400">{formatDate(post.publishedAt)}</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {post.readingTime} min read
                      </span>
                      <span>{post.author.name}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-brand-500 flex-shrink-0 mt-1 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
