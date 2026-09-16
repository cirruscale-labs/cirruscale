import Link from "next/link";
import Image from "next/image";
import { getMembers } from "@/lib/getMembers";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FoundersSection() {
  const founders = getMembers().filter((m) => m.isFounder);

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute top-10 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60A5FA, transparent)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Meet the Founders"
          subtitle="Two engineers who decided to build the company they wished existed."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {founders.map((founder) => (
            <Link
              key={founder.id}
              href={`/company/members/${founder.id}`}
              className="group block"
            >
              <div className="bg-brand-light rounded-2xl border border-brand-border p-8 hover:border-brand-accent/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  {founder.image ? (
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
                      style={{ backgroundColor: founder.avatarColor }}
                    >
                      {founder.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-accent transition-colors">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-brand-accent font-medium">{founder.role}</p>
                  </div>
                </div>

                <p className="text-brand-muted text-sm leading-relaxed">{founder.bio}</p>

                {founder.skills && (
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-brand-border">
                    {founder.skills.slice(0, 6).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-brand-muted border border-brand-border"
                      >
                        {skill}
                      </span>
                    ))}
                    {founder.skills.length > 6 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-brand-accent border border-brand-border">
                        +{founder.skills.length - 6} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
