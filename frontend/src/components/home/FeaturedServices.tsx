import { getServices } from "@/lib/getServices";
import ServiceCard from "@/components/works/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function FeaturedServices() {
  const services = getServices();

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Expert Services, End to End"
          subtitle="From architecture design to 24/7 managed operations — our engineering team has done it before and can do it for you."
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
