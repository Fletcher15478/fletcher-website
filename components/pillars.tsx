import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section id="systems" className="border-b border-white/5 bg-canvas-subtle/30" aria-labelledby="systems-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Systems posture</p>
          <h2 id="systems-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How work is framed before a line of UI ships
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            The throughline is simple: trace data from the operator’s reality to every external system that depends on it,
            then make failure, access, and history legible—the same expectations you would hold for enterprise SaaS.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-6 shadow-soft transition hover:border-white/15"
            >
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
