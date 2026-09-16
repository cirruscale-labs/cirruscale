import type { Metadata } from "next";
import { getBlogs } from "@/lib/getBlogs";
import BlogCard from "@/components/resources/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering insights, infrastructure deep-dives, and company stories from the CirruScale team.",
};

export default function BlogsPage() {
  const blogs = getBlogs();

  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Engineering Insights
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            Deep dives into backend development, DevOps, cloud infrastructure, and the real-world
            lessons from deploying software at scale.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
