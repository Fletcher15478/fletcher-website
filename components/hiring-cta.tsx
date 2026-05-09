import Link from "next/link";
import { recruiterNotes } from "@/lib/content";
import { site } from "@/lib/site";

export function HiringCta() {
  return (
    <section id="contact" className="bg-canvas" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-canvas-elevated via-canvas to-canvas-elevated shadow-soft ring-1 ring-white/5">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:p-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Recruiter &amp; hiring manager lane</p>
              <h2 id="contact-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Charlotte‑anchored engineer for solutions, integration, and platform operations work
              </h2>
              <p className="mt-4 text-base text-ink-muted sm:text-lg">
                Open to full‑time, contract‑to‑hire, and project‑based engagements with teams that need someone who can
                sit in architecture reviews, debug vendor APIs, and still ship typed React surfaces when the business
                requires it.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={`mailto:${site.email}?subject=Solutions%20%2F%20Integration%20role%20%E2%80%94%20intro`}
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-canvas transition hover:bg-white/90"
                >
                  Email to schedule intros
                </Link>
                <Link
                  href={site.linkedin}
                  className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-ink transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  LinkedIn messages welcome
                </Link>
                <Link
                  href="/Fletcher-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-ink transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Resume (PDF)
                </Link>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-ink-muted">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">What interviewing teams get</p>
                <ul className="space-y-2">
                  {recruiterNotes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 text-accent" aria-hidden>
                        ●
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-black/35 p-6 shadow-inner backdrop-blur">
              <dl className="space-y-4 text-sm">
                <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-4">
                  <dt className="text-ink-faint">Search targets</dt>
                  <dd className="text-right font-mono text-xs text-white sm:text-[13px]">
                    Solutions engineer · Integration engineer · Technical consultant · Platform operations · Internal tools
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-4">
                  <dt className="text-ink-faint">Metro focus</dt>
                  <dd className="text-right font-mono text-xs text-white sm:text-[13px]">
                    Charlotte, NC + remote engagements with disciplined travel cadence
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-4">
                  <dt className="text-ink-faint">Stacks in production</dt>
                  <dd className="text-right font-mono text-xs text-white sm:text-[13px]">
                    Next.js · TypeScript · Tailwind CSS · Supabase · Square APIs · WP REST · Render
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <dt className="text-ink-faint">Supporting artifacts</dt>
                  <dd className="text-right font-mono text-xs text-white sm:text-[13px]">
                    GitHub repos, live storefronts &amp; dashboards, stakeholder‑ready narratives
                  </dd>
                </div>
              </dl>
              <Link
                href={site.github}
                className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-ink transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Open GitHub profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
