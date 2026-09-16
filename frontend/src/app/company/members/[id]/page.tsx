import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMembers } from "@/lib/getMembers";
import Link from "next/link";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return getMembers().map((m) => ({ id: m.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const member = getMembers().find((m) => m.id === params.id);
  if (!member) return { title: "Not Found" };
  return {
    title: `${member.name} — ${member.role}`,
    description: member.bio,
  };
}

export default function MemberDetailPage({ params }: Props) {
  const member = getMembers().find((m) => m.id === params.id);
  if (!member) notFound();

  return (
    <>
      {/* Header */}
      <section className="py-20 relative overflow-hidden" style={{ background: "transparent" }}>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/company/members"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
              style={{ backgroundColor: member.avatarColor }}
            >
              {member.initials}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">{member.name}</h1>
              <p className="text-brand-accent text-lg font-medium mt-1">{member.role}</p>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed">{member.bio}</p>

          {/* Social links */}
          <div className="flex gap-4 mt-6">
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors">
                LinkedIn
              </a>
            )}
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer"
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors">
                GitHub
              </a>
            )}
            {member.twitter && (
              <a href={member.twitter} target="_blank" rel="noopener noreferrer"
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors">
                Twitter
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Skills */}
      {member.skills && member.skills.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1.5 rounded-lg bg-brand-light text-brand-primary border border-brand-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {member.experience && member.experience.length > 0 && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-8">Experience</h2>
            <div className="space-y-8">
              {member.experience.map((exp) => (
                <div key={exp.company} className="bg-brand-light rounded-2xl border border-brand-border p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-brand-primary">{exp.company}</h3>
                    <p className="text-sm text-brand-accent font-medium">{exp.role}</p>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-brand-muted leading-relaxed">
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-accent"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {member.projects && member.projects.length > 0 && (
        <section className="py-12 pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-8">Notable Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {member.projects.map((proj) => (
                <div key={proj.name} className="bg-brand-light rounded-2xl border border-brand-border p-6">
                  <h3 className="text-base font-bold text-brand-primary mb-2">{proj.name}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-brand-accent border border-brand-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
