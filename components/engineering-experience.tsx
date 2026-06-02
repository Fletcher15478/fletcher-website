import { engineeringExperience } from "@/lib/content";
import { Section } from "@/components/section";

export function EngineeringExperience() {
  return (
    <Section
      id="engineering"
      label="Engineering Experience"
      title="Hardware, telemetry, and validation"
      description="Hands-on engineering work complementing software and systems integration experience."
      className="bg-canvas-subtle/50"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {engineeringExperience.map((item) => (
          <article key={item.title} className="rounded-lg border border-edge bg-canvas-elevated p-6 shadow-card">
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
