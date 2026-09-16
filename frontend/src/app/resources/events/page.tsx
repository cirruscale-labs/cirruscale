import type { Metadata } from "next";
import { getEvents } from "@/lib/getEvents";
import EventCard from "@/components/resources/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description: "Cirruscale conferences, workshops, and webinars for AI infrastructure engineers.",
};

export default function EventsPage() {
  const events = getEvents();
  const upcoming = events; // In Phase 2: filter by date dynamically

  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Events</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Learn, Build, Connect
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            Conferences, workshops, and open office hours for AI infrastructure engineers.
            All events welcome practitioners of every experience level.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
