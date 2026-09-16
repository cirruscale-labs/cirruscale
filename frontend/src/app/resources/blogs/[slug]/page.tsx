import type { Metadata } from "next";
import { getBlogs } from "@/lib/getBlogs";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return getBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = getBlogs().find((b) => b.slug === params.slug);
  return {
    title: blog?.title ?? "Blog Post",
    description: blog?.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = getBlogs().find((b) => b.slug === params.slug);
  if (!blog) notFound();

  const relatedBlogs = getBlogs().filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: blog.coverGradient }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3), transparent 60%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <Link
            href="/resources/blogs"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            {blog.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">{blog.title}</h1>
          <div className="mt-6 flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              {blog.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{blog.author}</p>
              <p className="text-white/60 text-xs">{blog.authorRole}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-white/70 text-xs">{blog.date}</p>
              <p className="text-white text-xs font-medium">{blog.readTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg prose-slate max-w-none">
            {blog.body.split("\n\n").map((para, i) => {
              // Detect section headings (lines without a period at end, short, in bold-ish position)
              if (para.trim() && !para.includes(".") && para.length < 60 && i > 0) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-brand-primary mt-10 mb-4">
                    {para.trim()}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-brand-primary leading-relaxed mb-6">
                  {para.trim()}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 bg-brand-light border-t border-brand-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-brand-primary mb-8">More from the blog</h2>
            <div className="space-y-6">
              {relatedBlogs.map((b) => (
                <Link
                  key={b.slug}
                  href={`/resources/blogs/${b.slug}`}
                  className="flex gap-5 group"
                >
                  <div
                    className="w-20 h-16 rounded-xl flex-shrink-0"
                    style={{ background: b.coverGradient }}
                  />
                  <div>
                    <p className="text-xs text-brand-muted mb-1">{b.date} · {b.readTime}</p>
                    <h3 className="text-base font-semibold text-brand-primary group-hover:text-brand-accent transition-colors leading-snug">
                      {b.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
