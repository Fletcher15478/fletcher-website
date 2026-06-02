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
          <div key={group.title} className="rounded-lg border border-edge bg-canvas-elevated p-5 shadow-card">
            <h3 className="text-sm font-semibold text-brand">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-edge bg-canvas-subtle px-2.5 py-1 text-sm text-ink"
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
