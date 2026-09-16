import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to a CirruScale engineer about backend development, cloud deployment, or DevOps.",
};

const CONTACT_INFO = [
  {
    icon: "✉",
    label: "Email",
    value: "hello@cirruscale.com",
    href: "mailto:hello@cirruscale.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (415) 000-0000",
    href: "tel:+14150000000",
  },
  {
    icon: "📍",
    label: "HQ",
    value: "548 Market St, San Francisco, CA 94104",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "transparent" }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Talk to an Engineer
          </h1>
          <p className="mt-5 text-slate-400 text-lg">
            No sales scripts. No month-long procurement processes. Tell us what you are
            building and we will tell you if we can help — honestly.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-brand-primary mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-primary mb-8">Contact info</h2>
                <div className="space-y-5">
                  {CONTACT_INFO.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-xl flex-shrink-0">
                        {c.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">
                          {c.label}
                        </p>
                        <p className="text-sm text-brand-primary group-hover:text-brand-accent transition-colors">
                          {c.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-2xl bg-brand-light border border-brand-border p-6">
                <p className="text-sm font-bold text-brand-primary mb-2">Response time</p>
                <p className="text-sm text-brand-muted leading-relaxed">
                  We respond to all inquiries within one business day. For urgent production
                  issues, existing customers should use the dedicated Slack channel.
                </p>
              </div>

              {/* Offices */}
              <div>
                <p className="text-sm font-bold text-brand-primary mb-4">Our Offices</p>
                {[
                  { city: "San Francisco", role: "HQ", flag: "🇺🇸" },
                  { city: "London", role: "EU Operations", flag: "🇬🇧" },
                  { city: "Singapore", role: "APAC Operations", flag: "🇸🇬" },
                ].map((o) => (
                  <div key={o.city} className="flex items-center gap-3 py-2.5 border-b border-brand-border last:border-0">
                    <span className="text-xl">{o.flag}</span>
                    <div>
                      <p className="text-sm font-medium text-brand-primary">{o.city}</p>
                      <p className="text-xs text-brand-muted">{o.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
