import { architecturePrinciples } from "@/lib/content";
import { Section } from "@/components/section";

export function ArchitectureThinking() {
  return (
    <Section
      id="architecture"
      label="Architecture"
      title="How I design and troubleshoot systems"
      description="A consistent approach across software, integrations, and engineering work."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {architecturePrinciples.map((item) => (
          <article key={item.title} className="rounded-lg border border-edge bg-canvas-elevated p-6 shadow-card">
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
