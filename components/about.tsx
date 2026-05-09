import { engagements } from "@/lib/content";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="profile" className="border-b border-white/5 bg-canvas" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">About</p>
            <h2 id="about-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Operator‑grade software for teams that cannot afford mystery boxes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {site.name} works at the intersection of business operations and production systems—translating how
              franchises, retail, and field teams actually run into architecture, integrations, and internal tools that
              stay maintainable after launch. Engagement style is direct: clarify constraints, sequence risk, instrument
              the path, then hand teams something they can audit and extend without heroics.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Based in {site.location.city}, {site.location.region}, with experience shipping on{" "}
              <span className="text-ink">Render</span>, hardening <span className="text-ink">DNS, TLS, and auth</span>,
              and keeping cross‑platform synchronization honest when catalog data, hours, or training content has to match
              reality on the ground.
            </p>
          </div>
          <div className="rounded-3xl border border-white/[0.08] bg-canvas-elevated/80 p-6 shadow-soft backdrop-blur">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">Engagement coverage</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink">
              {engagements.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/5 pt-6 text-sm text-ink-muted">
              Ideal partners: SaaS vendors modernizing operational surfaces, consulting firms embedding integration
              engineers, platform teams shipping internal tools, and growth‑stage brands consolidating systems of record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
