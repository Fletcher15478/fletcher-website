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
              Field‑ready technical operator for customer sites and production systems
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              {site.name} works where technical support, installation leadership, and systems integration meet—leading
              multi‑location rollouts, training operators, troubleshooting field and hardware issues, and building the
              infrastructure that keeps customer‑facing systems reliable after launch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              Based in {site.location.city}, {site.location.region}, travel‑ready for field engineering and technical
              operations roles. Also open to implementation, integration, and platform engineering engagements—comfortable
              picking up specialized equipment and procedures through structured employer training when the role requires
              it.
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
              Good fit for field service teams, technical operations groups, SaaS vendors with customer deployments, and
              platform teams that need someone comfortable on‑site—not only in architecture reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
