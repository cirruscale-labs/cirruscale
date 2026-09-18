import Link from "next/link";
import Image from "next/image";

const LINKS = {
  "Our Works": [
    { label: "Products", href: "/works/products" },
    { label: "Services", href: "/works/services" },
  ],
  Company: [
    { label: "About Us", href: "/company/about" },
    { label: "Team", href: "/company/members" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/resources/blogs" },
    { label: "Events", href: "/resources/events" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="CirruScale Logo"
                width={160}
                height={54}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Cloud deployment, CI/CD, Kubernetes, and infrastructure management on
              AWS, GCP, and Azure. We also build full-stack software.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-white transition-colors text-sm">
                Twitter / X
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-white transition-colors text-sm">
                GitHub
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} CirruScale, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            <a href="mailto:hello@cirruscale.com" className="hover:text-slate-300 transition-colors">
              hello@cirruscale.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
