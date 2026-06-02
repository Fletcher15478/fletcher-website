import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-edge bg-canvas-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {site.title} · {site.relocating}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href={site.github} className="text-ink-muted hover:text-brand">
            GitHub
          </Link>
          <Link href={site.linkedin} className="text-ink-muted hover:text-brand">
            LinkedIn
          </Link>
          <Link href={`mailto:${site.email}`} className="text-ink-muted hover:text-brand">
            Email
          </Link>
          <Link href={site.resume} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-brand">
            Resume
          </Link>
        </div>
      </div>
      <p className="border-t border-edge py-4 text-center text-xs text-ink-faint">
        © {new Date().getFullYear()} {site.name}. Full-time engineering roles · {site.location.city},{" "}
        {site.location.region}
      </p>
    </footer>
  );
}
