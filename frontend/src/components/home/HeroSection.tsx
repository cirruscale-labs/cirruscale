import Link from "next/link";

const STATS = [
  { value: "10,000+", label: "GPUs Orchestrated" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "60s", label: "Cluster Spin-Up" },
  { value: "50+", label: "Enterprise Clients" },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 60%, #0C1A36 100%)" }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative glow blobs */}
      <div
        className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563EB, transparent)" }}
      />
      <div
        className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">

        {/* Label badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Now available: InferGrid 2.0 with gRPC streaming
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Scale AI Infrastructure
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #60A5FA, #06B6D4)" }}
          >
            Without Limits
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          On-demand GPU clusters, intelligent distributed storage, and production-ready
          AI inference — all engineered for teams that cannot afford to wait.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/works/products"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            Talk to an Engineer
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white/5 px-6 py-6">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
