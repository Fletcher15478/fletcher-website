import Image from "next/image";
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
          {site.location.city}, {site.location.region} · field engineering · implementation & integration ·
          travel‑ready
        </div>

        <div
          className="mt-8 grid animate-fade-up items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,280px)] lg:gap-12"
          style={{ animationDelay: "0.05s" }}
        >
          <div>
            <h1
              id="hero-heading"
              className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]"
            >
              {site.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">{site.headlineSub}</p>
          </div>

          <figure className="relative mx-auto w-full max-w-[280px] shrink-0 justify-self-center lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/[0.12] bg-canvas-subtle shadow-soft ring-1 ring-white/[0.06]">
              <Image
                src="/headshot.png"
                alt={`${site.name} — professional headshot`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 280px, 280px"
                priority
              />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[11px] text-ink-faint lg:text-right">
              {site.name}
            </figcaption>
          </figure>
        </div>

        <dl
          className="mt-10 grid animate-fade-up gap-6 sm:grid-cols-3"
          style={{ animationDelay: "0.18s" }}
        >
          <div className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-4 shadow-soft backdrop-blur">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Field posture</dt>
            <dd className="mt-2 text-sm text-ink">
              On‑site support, installation leadership, and operator training across multi‑location deployments—not
              desk‑only ticket routing.
            </dd>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-4 shadow-soft backdrop-blur">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Hardware baseline</dt>
            <dd className="mt-2 text-sm text-ink">
              EcoCAR vehicle systems work—sensors, soldering, wiring, diagnostics—plus operational peripheral support in
              production environments.
            </dd>
          </div>
          <div className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-4 shadow-soft backdrop-blur">
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">Open lanes</dt>
            <dd className="mt-2 text-sm text-ink">
              Field engineering with travel, implementation and integration engineering, and platform operations—quick
              study on specialized equipment when training is provided.
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
