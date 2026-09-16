const PILLARS = [
  {
    label: "Mission",
    text: "Help engineering teams build great software and deploy it to the cloud — without the DevOps headaches. From two-person startups to Fortune 500s.",
    color: "#60A5FA",
  },
  {
    label: "Vision",
    text: "A world where going from code push to production deployment is measured in minutes, not months.",
    color: "#38BDF8",
  },
  {
    label: "Founded",
    text: "2022, San Francisco. Built by engineers who were tired of watching teams struggle with Docker, CI/CD, and cloud deployments instead of building features.",
    color: "#3B82F6",
  },
];

const MILESTONES = [
  { year: "2022", event: "Founded in San Francisco. First client backend built and deployed to AWS." },
  { year: "2023", event: "Expanded to full DevOps services. Crossed 20 clients. Series A — $18M." },
  { year: "2024", event: "Opened EU operations. Multi-cloud support (AWS, GCP, Azure). 100+ projects delivered." },
  { year: "2025", event: "Series B — $62M. APAC expansion. 40+ enterprise clients across three continents." },
  { year: "2026", event: "Launched managed Kubernetes operations. CloudDeploy Conf as annual flagship event." },
];

export default function AboutHero() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Our Story</p>
          <h1 className="text-5xl font-bold text-white leading-tight">
            We Build What We Wish Existed
          </h1>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            CirruScale was founded by Tahshin and Saad — two backend engineers who spent years
            watching teams lose months to DevOps complexity instead of shipping features.
            The cloud providers existed, the tooling existed — but stitching it all together was
            still a full-time job.
          </p>
          <p className="mt-4 text-slate-400 text-lg leading-relaxed">
            We built CirruScale to change that. Today we build full-stack software, then
            handle Docker, CI/CD, Kubernetes, and cloud deployment — and we
            are still solving the same core problem: letting engineering teams focus on code,
            not infrastructure.
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-primary mb-10 text-center">How We Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔍", title: "Depth over breadth", desc: "We solve hard infrastructure problems thoroughly rather than skimming the surface of many." },
              { icon: "📣", title: "Radical transparency", desc: "Incident postmortems are public. Pricing is public. We do not hide behind enterprise sales opacity." },
              { icon: "⚡", title: "Ship fast, iterate faster", desc: "We deploy to production multiple times a day. Perfection at the cost of speed is not a trade we make." },
              { icon: "🤝", title: "Customer as partner", desc: "Half of our product roadmap comes directly from customer Slack channels. We build what people actually need." },
            ].map((v) => (
              <div key={v.title} className="bg-brand-light rounded-2xl border border-brand-border p-6">
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
                    <div className="w-4 h-4 rounded-full border-2 border-brand-accent bg-brand-dark" />
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
