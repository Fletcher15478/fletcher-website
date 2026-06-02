import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ProjectMedia } from "@/components/project-media";
import { Section } from "@/components/section";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      id={study.id}
      className={`scroll-mt-24 overflow-hidden rounded-xl border border-edge bg-canvas-elevated shadow-card ${
        study.featured ? "ring-1 ring-brand/20" : ""
      }`}
    >
      {study.image ? (
        <div className="relative aspect-[21/9] border-b border-edge bg-canvas-subtle">
          <ProjectMedia
            src={study.image.src}
            alt={study.image.alt}
            fallbackSrc={study.image.fallbackSrc}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : null}

      <div className="p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">{study.role}</p>
        <h3 className="mt-2 text-2xl font-semibold text-ink">{study.name}</h3>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-ink">Problem</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink">Solution</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.solution}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink">Architecture</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.architecture}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-ink">Technologies</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-edge bg-canvas-subtle px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink">Business Impact</h4>
              <ul className="mt-2 space-y-2">
                {study.businessImpact.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-ink">Lessons Learned</h4>
              <ul className="mt-2 space-y-2">
                {study.lessonsLearned.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-ink-faint" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {study.diagrams.length > 0 ? (
          <div className="mt-10 space-y-4">
            <h4 className="text-sm font-semibold text-ink">Architecture Diagrams</h4>
            <div className="grid gap-4 lg:grid-cols-2">
              {study.diagrams.map((diagram) => (
                <MermaidDiagram key={diagram.title} title={diagram.title} chart={diagram.chart} />
              ))}
            </div>
          </div>
        ) : null}

        {study.links.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-edge pt-6">
            {study.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dim"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function CaseStudies({ studies }: { studies: CaseStudy[] }) {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Enterprise case studies"
      description="Problem → solution → architecture → impact. Selected work across operations platforms, integrations, automation, and engineering validation."
      className="bg-white"
    >
      <div className="space-y-12">
        {studies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </Section>
  );
}
