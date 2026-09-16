import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl px-8 md:px-16 py-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)" }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 50% 50%, #2563EB, transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Get Started Today
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Your first cluster in
              <br />
              under 60 seconds.
            </h2>
            <p className="mt-5 text-slate-400 text-lg max-w-xl mx-auto">
              No long sales cycles. No infrastructure provisioning tickets. Talk to one of our
              engineers and have GPUs running today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl text-sm font-semibold text-brand-primary bg-white hover:bg-blue-50 transition-colors"
              >
                Talk to an Engineer
              </Link>
              <Link
                href="/works/products"
                className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
