"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const body = `Name: ${name}\nPhone: ${phone || "N/A"}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:cirruscaleltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-border bg-brand-light px-8 py-12 text-center">
        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-primary">Message received!</h3>
        <p className="text-brand-muted mt-2 text-sm">
          One of our engineers will reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-primary mb-1.5" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm bg-brand-light text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow placeholder:text-brand-muted"
            placeholder="Alex Chen"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-primary mb-1.5" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm bg-brand-light text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow placeholder:text-brand-muted"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-primary mb-1.5" htmlFor="email">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm bg-brand-light text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow placeholder:text-brand-muted"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-primary mb-1.5" htmlFor="subject">
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm bg-brand-light text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow placeholder:text-brand-muted"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-primary mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm bg-brand-light text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-shadow placeholder:text-brand-muted resize-none"
          placeholder="Tell us about your use case, team size, or questions..."
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
