import type { Experience } from "@/lib/content";
import { professionalExperience } from "@/lib/content";
import { Section } from "@/components/section";

function ExperienceCard({ job }: { job: Experience }) {
  return (
    <article className="rounded-lg border border-edge bg-canvas-elevated p-6 shadow-card sm:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-ink">{job.title}</h3>
          <p className="text-sm font-medium text-brand">{job.company}</p>
        </div>
        <p className="text-sm text-ink-faint">{job.period}</p>
      </div>
      <ul className="mt-5 space-y-2">
        {job.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand" aria-hidden />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2 border-t border-edge pt-5">
        {job.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-edge bg-canvas-subtle px-2.5 py-1 font-mono text-xs text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProfessionalExperience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Professional experience"
      description="Systems integration, enterprise software, data analysis, and production support."
      className="bg-canvas-subtle/50"
    >
      <div className="space-y-6">
        {professionalExperience.map((job) => (
          <ExperienceCard key={`${job.company}-${job.title}-${job.period}`} job={job} />
        ))}
      </div>
    </Section>
  );
}
