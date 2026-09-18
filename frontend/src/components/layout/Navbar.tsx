"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

const NAV_ITEMS = [
  {
    label: "Our Works",
    children: [
      { label: "Products", href: "/works/products", desc: "Our product offerings" },
      { label: "Services", href: "/works/services", desc: "Development, DevOps, Cloud" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/company/about", desc: "Our story and mission" },
      { label: "Team", href: "/company/members", desc: "The people behind CirruScale" },
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
    <header className="sticky top-0 z-50 bg-[#080a0f]/95 backdrop-blur-sm border-b border-brand-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logo.jpeg"
            alt="CirruScale Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
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
                  className="px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-primary rounded-lg hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>


        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
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
        <div className="md:hidden border-t border-brand-border bg-brand-dark px-4 py-4 space-y-1">
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
              style={{ background: "linear-gradient(135deg, #60A5FA, #38BDF8)" }}
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
