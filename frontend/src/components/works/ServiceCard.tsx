import Card from "@/components/ui/Card";
import { Service } from "@/types/service";

interface Props {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: Props) {
  return (
    <Card className="group hover:shadow-card-hover transition-shadow duration-300 flex flex-col overflow-hidden">
      {/* Top accent strip */}
      <div className="h-1.5" style={{ background: service.gradient }} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
          style={{ background: service.gradient + "22" }}
        >
          {service.icon}
        </div>

        <h3 className="text-xl font-bold text-brand-primary">{service.name}</h3>
        <p
          className="text-sm font-medium mt-1 bg-clip-text text-transparent"
          style={{ backgroundImage: service.gradient }}
        >
          {service.tagline}
        </p>
        <p className="text-brand-muted text-sm mt-3 leading-relaxed flex-1">
          {service.description}
        </p>

        <div className="mt-5 pt-5 border-t border-brand-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
            What you get
          </p>
          <ul className="space-y-2">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-brand-primary">
                <svg
                  className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
