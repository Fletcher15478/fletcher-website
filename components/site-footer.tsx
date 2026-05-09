import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-mono text-sm text-white">{site.name}</p>
          <p className="mt-1 max-w-md text-sm text-ink-muted">
            Production systems for franchises, operators, and teams that treat software as infrastructure—not
            an art project.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-ink-muted">
          <Link className="underline-offset-4 hover:text-ink hover:underline" href={site.github}>
            GitHub
          </Link>
          <Link className="underline-offset-4 hover:text-ink hover:underline" href={site.linkedin}>
            LinkedIn
          </Link>
          <Link className="underline-offset-4 hover:text-ink hover:underline" href={`mailto:${site.email}`}>
            Email
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-[12px] text-ink-faint">
        © {new Date().getFullYear()} {site.name}. Charlotte, NC · solutions & integration engineering for
        operational software.
      </div>
    </footer>
  );
}
