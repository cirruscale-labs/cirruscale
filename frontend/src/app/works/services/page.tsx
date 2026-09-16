import type { Metadata } from "next";
import { getServices } from "@/lib/getServices";
import ServiceCard from "@/components/works/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-stack development, Docker, CI/CD, Kubernetes, and cloud deployment by CirruScale.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Professional Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            Full-stack software development, containerization, CI/CD, Kubernetes, and cloud
            deployment — everything your project needs from code to production.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="How We Engage" centered />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery call", desc: "We learn about your stack, team, and goals." },
              { step: "02", title: "Proposal", desc: "A scoped proposal with clear deliverables and milestones." },
              { step: "03", title: "Delivery", desc: "Regular check-ins, working code, and zero hand-wavy slides." },
              { step: "04", title: "Handoff & support", desc: "Full documentation, runbooks, and ongoing support." },
            ].map((s) => (
              <div key={s.step} className="bg-brand-light rounded-2xl border border-brand-border p-6">
                <p className="text-4xl font-bold text-brand-accent/20">{s.step}</p>
                <h3 className="text-base font-bold text-brand-primary mt-2">{s.title}</h3>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-primary">Ready to start?</h2>
          <p className="mt-4 text-brand-muted">
            The discovery call is free. The proposal arrives in 48 hours.
          </p>
          <div className="mt-8">
            <Button href="/contact">Book a Discovery Call</Button>
          </div>
        </div>
      </section>
    </>
  );
}
