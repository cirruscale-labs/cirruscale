const PILLARS = [
  {
    label: "Mission",
    text: "Make enterprise-grade AI infrastructure accessible to every engineering team — from two-person startups to Fortune 500s.",
    color: "#2563EB",
  },
  {
    label: "Vision",
    text: "A world where the gap between a model idea and a model in production is measured in minutes, not months.",
    color: "#7C3AED",
  },
  {
    label: "Founded",
    text: "2022, San Francisco. Built by infrastructure engineers who were tired of building the same GPU cluster for the fifth time.",
    color: "#059669",
  },
];

const MILESTONES = [
  { year: "2022", event: "Founded in San Francisco. First CloudBurst cluster deployed for beta customers." },
  { year: "2023", event: "Launched DataNexus. Crossed 100 enterprise customers. Series A — $18M." },
  { year: "2024", event: "Opened second region (EU-West). Launched InferGrid. 1,000 GPUs under management." },
  { year: "2025", event: "Series B — $62M. Third region (APAC). 10,000 GPUs. 50+ enterprise clients." },
  { year: "2026", event: "InferGrid 2.0 with gRPC streaming. CloudScale Summit launched as annual flagship event." },
];

export default function AboutHero() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Story</p>
          <h1 className="text-5xl font-bold text-white leading-tight">
            We Build What We Wish Existed
          </h1>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Cirruscale was founded in 2022 by two infrastructure engineers who had spent the
            better part of a decade watching AI teams lose months to the same infrastructure
            problems. The tooling existed, the hardware existed — but nothing was designed to
            work together at the speed that modern AI development demands.
          </p>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            We built Cirruscale to change that. Today our platform orchestrates over 10,000 GPUs
            for 50+ enterprise clients across North America, Europe, and Asia-Pacific — and we
            are still solving the same core problem we started with: making world-class AI
            infrastructure invisible.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Founded */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-brand-border p-8"
                style={{ borderLeftColor: p.color, borderLeftWidth: 4 }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider mb-3"
                   style={{ color: p.color }}>
                  {p.label}
                </p>
                <p className="text-brand-primary leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔍", title: "Depth over breadth", desc: "We solve hard infrastructure problems thoroughly rather than skimming the surface of many." },
              { icon: "📣", title: "Radical transparency", desc: "Incident postmortems are public. Pricing is public. We do not hide behind enterprise sales opacity." },
              { icon: "⚡", title: "Ship fast, iterate faster", desc: "We deploy to production multiple times a day. Perfection at the cost of speed is not a trade we make." },
              { icon: "🤝", title: "Customer as partner", desc: "Half of our product roadmap comes directly from customer Slack channels. We build what people actually need." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-brand-border p-6">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="mt-3 text-base font-bold text-brand-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-primary mb-12 text-center">Timeline</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-brand-border" />
            <div className="space-y-10">
              {MILESTONES.map((m) => (
                <div key={m.year} className="flex gap-6">
                  <div className="w-12 text-right flex-shrink-0">
                    <span className="text-sm font-bold text-brand-accent">{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full border-2 border-brand-accent bg-white" />
                  </div>
                  <p className="text-brand-primary text-sm leading-relaxed pt-0.5">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
