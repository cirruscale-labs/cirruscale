import Link from "next/link";
import Card from "@/components/ui/Card";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="group hover:shadow-card-hover transition-shadow duration-300 flex flex-col">
      {/* Gradient header */}
      <div
        className="h-40 relative overflow-hidden flex items-end p-5"
        style={{ background: blog.coverGradient }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2), transparent 50%)",
          }}
        />
        <div className="relative flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <Link href={`/resources/blogs/${blog.slug}`}>
          <h3 className="text-lg font-bold text-brand-primary leading-snug group-hover:text-brand-accent transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>
        <p className="text-brand-muted text-sm mt-3 leading-relaxed line-clamp-3 flex-1">
          {blog.excerpt}
        </p>

        <div className="mt-5 pt-4 border-t border-brand-border flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-brand-primary">{blog.author}</p>
            <p className="text-xs text-brand-muted">{blog.authorRole}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-brand-muted">{blog.date}</p>
            <p className="text-xs text-brand-accent font-medium">{blog.readTime}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
