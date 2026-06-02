import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-white/95 shadow-header backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#top" className="focus-ring rounded-md">
          <span className="block text-sm font-semibold text-ink">{site.name}</span>
          <span className="block text-xs text-ink-muted">Software & Systems Integration</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm text-ink-muted transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden rounded-md border border-edge px-4 py-2 text-sm font-medium text-ink transition hover:bg-brand-light sm:inline-flex"
          >
            Resume
          </Link>
          <Link
            href="#contact"
            className="focus-ring hidden rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dim sm:inline-flex"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
