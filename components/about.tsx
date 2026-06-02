import { aboutHighlights, education } from "@/lib/content";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="Computer Science graduate building enterprise-ready systems"
      description="I integrate business systems, ship production software, and solve technical problems alongside operations, finance, and engineering teams."
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ul className="grid gap-3 sm:grid-cols-2">
          {aboutHighlights.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-lg border border-edge bg-canvas-elevated p-4 shadow-card"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" aria-hidden />
              <span className="text-sm leading-relaxed text-ink">{item}</span>
            </li>
          ))}
        </ul>
        <aside className="rounded-lg border border-edge bg-canvas-elevated p-6 shadow-card">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">Education</h3>
          <p className="mt-3 text-lg font-semibold text-ink">{education.school}</p>
          <p className="mt-1 text-sm text-ink-muted">{education.degree}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {education.period} · GPA {education.gpa}
          </p>
          <p className="mt-4 border-t border-edge pt-4 text-sm text-ink-muted">{education.note}</p>
        </aside>
      </div>
    </Section>
  );
}
