import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/5 bg-app"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-overlay bg-grid-fine opacity-[0.35]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-muted shadow-glow sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
          {site.location.city}, {site.location.region} · targeting solutions, integration, platform operations &
          internal tools roles (onsite / hybrid / remote with travel)
        </div>

        <h1
          id="hero-heading"
          className="mt-8 max-w-3xl animate-fade-up text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.05s" }}
        >
          {site.headline}
        </h1>

        <p
          className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-ink-muted sm:text-lg"
          style={{ animationDelay: "0.12s" }}
        >
          {site.headlineSub}
        </p>

        <dl
          className="mt-10 grid animate-fade-up gap-6 sm:grid-cols-3"
          style={{ animationDelay: "0.18s" }}
        >
          <div className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-4 shadow-soft backdrop-blur">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Primary surface</dt>
            <dd className="mt-2 text-sm text-ink">
              Multi‑tenant franchises, storefronts, and cross‑surface operational data—not toy CRUD demos.
            </dd>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-4 shadow-soft backdrop-blur">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Integration spine</dt>
            <dd className="mt-2 text-sm text-ink">
              Payments, catalogs, CMS, Google workflows, Postgres/Supabase, and guarded internal automation.
            </dd>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-4 shadow-soft backdrop-blur">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Operational proof</dt>
            <dd className="mt-2 text-sm text-ink">
              Delivered RBAC + audit trails, Render deployments, TLS/DNS remediation, stakeholder‑ready dashboards.
            </dd>
          </div>
        </dl>

        <div
          className="mt-10 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.22s" }}
        >
          <Link
            href="#contact"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow ring-1 ring-white/10 transition hover:bg-accent-dim"
          >
            Book a hiring conversation
          </Link>
          <Link
            href="#work"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-medium text-ink transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            Review delivery record
          </Link>
          <div className="hidden h-px w-8 bg-white/10 sm:block" aria-hidden />
          <div className="flex flex-wrap gap-3 text-sm text-ink-muted">
            <Link className="underline-offset-4 hover:text-ink hover:underline" href={site.github}>
              GitHub
            </Link>
            <span aria-hidden className="text-white/15">
              ·
            </span>
            <Link className="underline-offset-4 hover:text-ink hover:underline" href={site.linkedin}>
              LinkedIn
            </Link>
            <span aria-hidden className="text-white/15">
              ·
            </span>
            <Link className="underline-offset-4 hover:text-ink hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
