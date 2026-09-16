"use client";

import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const NAV_ITEMS = [
  {
    label: "Our Works",
    children: [
      { label: "Products", href: "/works/products", desc: "CloudBurst, DataNexus, InferGrid" },
      { label: "Services", href: "/works/services", desc: "Architecture, MLOps, Managed Ops" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/company/about", desc: "Our story and mission" },
      { label: "Team", href: "/company/members", desc: "The people behind Cirruscale" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/resources/blogs", desc: "Engineering insights and stories" },
      { label: "Events", href: "/resources/events", desc: "Conferences and workshops" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
               style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}>
            C
          </div>
          <span className="text-lg font-semibold text-brand-primary tracking-tight">
            Cirruscale
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.label}>
                <DropdownMenu label={item.label} items={item.children} />
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href!}
                  className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-primary rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-border bg-white px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="py-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-2 px-2">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-2 py-2 text-sm text-brand-primary hover:text-brand-accent rounded-lg hover:bg-brand-light transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="block px-2 py-2 text-sm font-medium text-brand-primary hover:text-brand-accent rounded-lg hover:bg-brand-light transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-brand-border">
            <Link
              href="/contact"
              className="block w-full text-center py-2.5 text-sm font-semibold text-white rounded-lg"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
