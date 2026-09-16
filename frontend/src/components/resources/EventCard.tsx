import Link from "next/link";
import Card from "@/components/ui/Card";
import { Event } from "@/types/event";

const TYPE_LABELS: Record<Event["type"], string> = {
  conference: "Conference",
  webinar: "Webinar",
  workshop: "Workshop",
};

export default function EventCard({ event }: { event: Event }) {
  return (
    <Card className="group hover:shadow-card-hover transition-shadow duration-300 flex flex-col">
      {/* Gradient header */}
      <div
        className="h-44 relative overflow-hidden flex items-end p-6"
        style={{ background: event.coverGradient }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3), transparent 60%)",
          }}
        />
        <div className="relative">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
            {TYPE_LABELS[event.type]}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <Link href={`/resources/events/${event.slug}`}>
          <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition-colors leading-snug">
            {event.title}
          </h3>
        </Link>

        {/* Date & Location */}
        <div className="flex flex-wrap gap-4 mt-3">
          <div className="flex items-center gap-1.5 text-xs text-brand-muted">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {event.endDate ? `${event.date} – ${event.endDate}` : event.date}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-brand-muted">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
        </div>

        <p className="text-brand-muted text-sm mt-4 leading-relaxed line-clamp-3 flex-1">
          {event.description}
        </p>

        {event.registrationLink && (
          <div className="mt-5">
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-primary transition-colors"
            >
              Register Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}
