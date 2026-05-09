import Link from "next/link";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#systems", label: "Systems" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-canvas/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="focus-ring group rounded-md font-mono text-[13px] font-medium tracking-tight text-ink"
        >
          <span className="text-white/90">Fletcher Hartsock</span>
          <span className="ml-2 rounded bg-white/5 px-2 py-0.5 text-[11px] font-normal text-ink-muted ring-1 ring-white/10 transition group-hover:bg-white/10">
            Solutions / Integration Engineer
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm text-ink-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/Fletcher-Resume.pdf"
            className="focus-ring hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink transition hover:border-white/20 hover:bg-white/[0.06] sm:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Link>
          <Link
            href="#contact"
            className="focus-ring hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-canvas shadow-soft transition hover:bg-white/90 sm:inline-flex"
          >
            Discuss an engagement
          </Link>
          <Link
            href="#work"
            className="focus-ring inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink transition hover:border-white/20 hover:bg-white/[0.07] md:hidden"
          >
            Menu
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 bg-canvas/95 px-4 py-2 md:hidden">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2 sm:px-6 lg:px-8">
          <Link
            href="/Fletcher-Resume.pdf"
            className="focus-ring rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-muted"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full border border-white/10 px-3 py-1.5 text-[13px] text-ink-muted"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
