import type { Metadata } from "next";
import { getMembers } from "@/lib/getMembers";
import MemberCard from "@/components/company/MemberCard";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the engineers and product leaders behind CirruScale.",
};

export default function MembersPage() {
  const members = getMembers();

  const foundingMembers = members.filter((m) => m.isFounder);
  const backendTeam = members.filter((m) => m.team === "backend");
  const devopsTeam = members.filter((m) => m.team === "devops");
  const qaTeam = members.filter((m) => m.team === "qa");

  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">The Team</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Built by Engineers, for Engineers
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            A team of engineers building backend systems, cloud infrastructure, and DevOps pipelines at scale.
          </p>
        </div>
      </section>

      {/* Meet Founding Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">Leadership</p>
            <h2 className="text-2xl font-bold text-white">Meet Founding Members</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {foundingMembers.map((member) => (
              <MemberCard key={member.id} member={member} displayRole="Co-founder" />
            ))}
          </div>
        </div>
      </section>

      {/* Backend Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">Engineering</p>
            <h2 className="text-2xl font-bold text-white">Backend Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {backendTeam.map((member) => (
              <MemberCard key={member.id} member={member} displayRole={member.teamRole} />
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">Infrastructure</p>
            <h2 className="text-2xl font-bold text-white">DevOps Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {devopsTeam.map((member) => (
              <MemberCard key={member.id} member={member} displayRole={member.teamRole} />
            ))}
          </div>
        </div>
      </section>

      {/* QA Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">Quality</p>
            <h2 className="text-2xl font-bold text-white">QA Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {qaTeam.map((member) => (
              <MemberCard key={member.id} member={member} displayRole={member.teamRole} />
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-3xl text-brand-primary">👋</p>
          <h2 className="text-3xl font-bold text-brand-primary mt-4">Join the team</h2>
          <p className="mt-4 text-brand-muted">
            We are a small team that builds backends and handles cloud infrastructure. If
            that sounds like your kind of work, let us talk.
          </p>
          <div className="mt-8">
            <Button disabled className="opacity-50 cursor-not-allowed">View Open Roles — Coming Soon</Button>
          </div>
        </div>
      </section>
    </>
  );
}
