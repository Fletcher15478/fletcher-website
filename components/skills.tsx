import { skillCategories } from "@/lib/content";
import { Section } from "@/components/section";

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Technical capabilities"
      description="Grouped for recruiters and hiring managers reviewing software engineering and systems integration profiles."
      className="bg-canvas-subtle/50"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <div
            key={group.title}
            className={`rounded-lg border bg-canvas-elevated p-5 shadow-card ${
              "featured" in group && group.featured
                ? "border-brand/30 ring-1 ring-brand/15 sm:col-span-2 lg:col-span-3"
                : "border-edge"
            }`}
          >
            <h3 className="text-sm font-semibold text-brand">{group.title}</h3>
            {"featured" in group && group.featured ? (
              <p className="mt-1 text-xs text-ink-muted">
                Keywords most commonly matched in software engineering and platform role searches.
              </p>
            ) : null}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`rounded-md border px-2.5 py-1 text-sm ${
                    "featured" in group && group.featured
                      ? "border-brand/20 bg-brand-light font-medium text-ink"
                      : "border-edge bg-canvas-subtle text-ink"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
