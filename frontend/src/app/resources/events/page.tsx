import type { Metadata } from "next";
import { getEvents } from "@/lib/getEvents";
import EventCard from "@/components/resources/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description: "CirruScale conferences, workshops, and webinars for backend and cloud engineers.",
};

export default function EventsPage() {
  const events = getEvents();
  const upcoming = events; // In Phase 2: filter by date dynamically

  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">Events</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Learn, Build, Connect
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            Conferences, workshops, and open office hours for backend and cloud engineers.
            All events welcome practitioners of every experience level.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {upcoming.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No upcoming events yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
