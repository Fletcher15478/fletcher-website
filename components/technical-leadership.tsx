import { technicalLeadership } from "@/lib/content";
import { Section } from "@/components/section";

export function TechnicalLeadership() {
  return (
    <Section
      id="leadership"
      label="Technical Leadership"
      title="Ownership, process improvement, and delivery"
      description="How I lead implementations and cross-functional work in production environments."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {technicalLeadership.map((item) => (
          <article key={item.title} className="rounded-lg border border-edge bg-canvas-elevated p-6 shadow-card">
            <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
