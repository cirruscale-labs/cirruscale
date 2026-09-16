import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60A5FA, transparent)" }}
      />
      <div
        className="absolute bottom-10 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">

        {/* Label badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          We build, deploy, and scale — so you can focus on shipping
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Software Engineering &
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #93C5FD, #38BDF8)" }}
          >
            Cloud Solutions
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Cloud deployment, CI/CD pipelines, Kubernetes, and infrastructure management
          on AWS, GCP, and Azure. We also build full-stack software in Go, Python, and modern frameworks.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/works/services"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #60A5FA, #38BDF8)" }}
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            Talk to an Engineer
          </Link>
        </div>

      </div>
    </section>
  );
}
