import type { ReactNode } from "react";
import Link from "next/link";
import type { CaseStudyDetail } from "@/lib/case-study-detail";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ProjectMedia } from "@/components/project-media";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-edge">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function CaseStudyPage({ study }: { study: CaseStudyDetail }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-edge bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <Link
              href="/#projects"
              className="focus-ring inline-flex items-center gap-1 text-sm font-medium text-brand transition hover:text-brand-dim"
            >
              ← All projects
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Case study</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {study.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">{study.oneLiner}</p>
            <p className="mt-4 text-sm font-semibold text-ink">{study.role}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-edge bg-canvas-subtle px-2.5 py-1 font-mono text-xs text-ink-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {study.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-edge bg-canvas-elevated px-5 py-4 shadow-card"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{metric.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-ink">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <ContentSection title="Problem">
          <BulletList items={study.problem} />
        </ContentSection>

        <ContentSection title="Approach">
          <BulletList items={study.approach} />
        </ContentSection>

        <ContentSection title="Solution">
          <BulletList items={study.solution} />
        </ContentSection>

        <section className="border-b border-edge bg-canvas-subtle">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Architecture</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted">
              Square POS and delivery sync feed a server-side analytics layer behind a week-scoped API. The dashboard
              UI loads executive summaries immediately and pulls trend context sequentially.
            </p>
            <div className="mt-8 grid gap-4 lg:grid-cols-1">
              {study.diagrams.map((diagram) => (
                <MermaidDiagram key={diagram.title} title={diagram.title} chart={diagram.chart} />
              ))}
            </div>
          </div>
        </section>

        <ContentSection title="Features">
          <BulletList items={study.features} />
        </ContentSection>

        <section className="border-b border-edge bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Technical challenges</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {study.technicalChallenges.map((challenge) => (
                <article
                  key={challenge.title}
                  className="rounded-xl border border-edge bg-canvas-elevated p-6 shadow-card"
                >
                  <h3 className="text-base font-semibold text-ink">{challenge.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{challenge.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-edge bg-canvas-subtle">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Screenshots</h2>
            <p className="mt-4 text-sm text-ink-muted">Internal production dashboard — private deployment, not publicly accessible.</p>
            <div className="mt-8 space-y-10">
              {study.screenshots.map((shot) => (
                <figure key={shot.src} className="overflow-hidden rounded-xl border border-edge bg-white shadow-card">
                  <div className="border-b border-edge bg-canvas-subtle">
                    <ProjectMedia
                      src={shot.src}
                      alt={shot.alt}
                      className="w-full object-cover object-top"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm text-ink-muted">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ContentSection title="Results">
          <BulletList items={study.results} />
        </ContentSection>

        {study.links.length > 0 ? (
          <section className="border-b border-edge bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="flex flex-wrap gap-3">
                {study.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="focus-ring rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dim"
                    {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
