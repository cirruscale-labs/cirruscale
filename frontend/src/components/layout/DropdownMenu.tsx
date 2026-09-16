"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface DropdownItem {
  label: string;
  href: string;
  desc?: string;
}

interface Props {
  label: string;
  items: DropdownItem[];
}

export default function DropdownMenu({ label, items }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-brand-muted hover:text-brand-primary rounded-lg hover:bg-gray-50 transition-colors"
      >
        {label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-brand-border py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 hover:bg-brand-light transition-colors group"
            >
              <p className="text-sm font-medium text-brand-primary group-hover:text-brand-accent">
                {item.label}
              </p>
              {item.desc && (
                <p className="text-xs text-brand-muted mt-0.5">{item.desc}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
