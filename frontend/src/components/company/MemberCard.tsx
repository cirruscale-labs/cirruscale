import Card from "@/components/ui/Card";
import { Member } from "@/types/member";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="p-6 hover:shadow-card-hover transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        {/* Initials avatar */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
          style={{ backgroundColor: member.avatarColor }}
        >
          {member.initials}
        </div>
        <div>
          <h3 className="text-base font-bold text-brand-primary">{member.name}</h3>
          <p className="text-sm text-brand-accent font-medium">{member.role}</p>
        </div>
      </div>

      <p className="text-brand-muted text-sm leading-relaxed">{member.bio}</p>

      <div className="flex gap-3 mt-5 pt-4 border-t border-brand-border">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-accent transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        )}
        {member.twitter && (
          <a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-brand-accent transition-colors font-medium"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter
          </a>
        )}
      </div>
    </Card>
  );
}
