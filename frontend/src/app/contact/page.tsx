import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to a CirruScale engineer about backend development, cloud deployment, or DevOps.",
};

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

      {/* Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-primary mb-8">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
