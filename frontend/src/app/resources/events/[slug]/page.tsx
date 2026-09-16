import type { Metadata } from "next";
import { getEvents } from "@/lib/getEvents";
import { notFound } from "next/navigation";
import Link from "next/link";

const TYPE_LABELS: Record<string, string> = {
  conference: "Conference",
  webinar: "Webinar",
  workshop: "Workshop",
};

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = getEvents().find((e) => e.slug === params.slug);
  return {
    title: event?.title ?? "Event",
    description: event?.description?.slice(0, 160),
  };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEvents().find((e) => e.slug === params.slug);
  if (!event) notFound();

  const otherEvents = getEvents().filter((e) => e.slug !== event.slug);

  return (
    <>
      {/* Hero */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: event.coverGradient }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3), transparent 60%)" }}
        />
        <div className="relative max-w-3xl mx-auto px-4">
          <Link
            href="/resources/events"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Events
          </Link>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
            {TYPE_LABELS[event.type]}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mt-5">
            {event.title}
          </h1>

          <div className="flex flex-wrap gap-6 mt-6">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {event.endDate ? `${event.date} – ${event.endDate}` : event.date}
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-brand-primary text-lg leading-relaxed">{event.description}</p>
          </div>

          {event.registrationLink && (
            <div className="mt-10 flex gap-4">
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
              >
                Register Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          )}

          {/* Event details card */}
          <div className="mt-12 rounded-2xl border border-brand-border bg-brand-light p-8">
            <h2 className="text-lg font-bold text-brand-primary mb-6">Event Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">Type</p>
                <p className="text-sm text-brand-primary font-medium">{TYPE_LABELS[event.type]}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">Date</p>
                <p className="text-sm text-brand-primary font-medium">
                  {event.endDate ? `${event.date} – ${event.endDate}` : event.date}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">Location</p>
                <p className="text-sm text-brand-primary font-medium">{event.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">Hosted by</p>
                <p className="text-sm text-brand-primary font-medium">Cirruscale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other events */}
      {otherEvents.length > 0 && (
        <section className="py-16 bg-brand-light border-t border-brand-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-brand-primary mb-8">More events</h2>
            <div className="space-y-6">
              {otherEvents.map((e) => (
                <Link
                  key={e.slug}
                  href={`/resources/events/${e.slug}`}
                  className="flex gap-5 group"
                >
                  <div
                    className="w-20 h-16 rounded-xl flex-shrink-0"
                    style={{ background: e.coverGradient }}
                  />
                  <div>
                    <p className="text-xs text-brand-muted mb-1">
                      {e.date} · {TYPE_LABELS[e.type]}
                    </p>
                    <h3 className="text-base font-semibold text-brand-primary group-hover:text-brand-accent transition-colors leading-snug">
                      {e.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
