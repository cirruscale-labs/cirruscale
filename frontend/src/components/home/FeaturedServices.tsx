import { getServices } from "@/lib/getServices";
import ServiceCard from "@/components/works/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function FeaturedServices() {
  const services = getServices();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow blobs */}
      <div
        className="absolute top-20 right-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60A5FA, transparent)" }}
      />
      <div
        className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What We Do"
          subtitle="Full-stack development, containerization, CI/CD, Kubernetes, and cloud deployment — end to end."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/works/services" variant="outline">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
