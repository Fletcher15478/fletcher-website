import { skillGroups } from "@/lib/content";

export function SkillsMatrix() {
  return (
    <section id="stack" className="border-b border-white/5 bg-canvas-subtle/20" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Technical coverage</p>
          <h2 id="stack-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Stack matches the roles, not the bootcamp syllabus
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Day‑to‑day delivery leans on TypeScript, React, and Next.js for customer and internal surfaces, with the
            heavy lifting happening in integrations, data contracts, permissions, and deployment discipline—exactly where
            solutions and platform salaries justify themselves.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/[0.08] bg-canvas-elevated/70 p-5 shadow-soft backdrop-blur"
            >
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent/80" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
