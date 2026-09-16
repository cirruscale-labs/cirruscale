import type { Metadata } from "next";
import { getMembers } from "@/lib/getMembers";
import MemberCard from "@/components/company/MemberCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the engineers and product leaders behind Cirruscale.",
};

export default function MembersPage() {
  const members = getMembers();

  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">The Team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Built by Engineers, for Engineers
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            Our team has built GPU infrastructure at some of the world&apos;s largest technology
            companies. We started Cirruscale to make that expertise available to everyone.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-3xl text-brand-primary">👋</p>
          <h2 className="text-3xl font-bold text-brand-primary mt-4">Join the team</h2>
          <p className="mt-4 text-brand-muted">
            We are a small team solving genuinely hard problems in distributed systems and
            GPU infrastructure. If that sounds like your kind of work, let us talk.
          </p>
          <div className="mt-8">
            <Button href="/contact">View Open Roles</Button>
          </div>
        </div>
      </section>
    </>
  );
}
