import Link from "next/link";
import type { Project } from "@/lib/content";
import { ProjectMedia } from "@/components/project-media";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-canvas-elevated/70 shadow-soft backdrop-blur transition hover:border-white/15 ${
        project.featured ? "ring-1 ring-accent/25" : ""
      }`}
    >
      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5 bg-black/30">
          <ProjectMedia
            src={project.image.src}
            alt={project.image.alt}
            fallbackSrc={project.image.fallbackSrc}
            className="h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          />
          {project.featured ? (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-canvas">
              Flagship delivery
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{project.role}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-ink">
          {project.impact.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-white/40" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-muted"
            >
              {chip}
            </span>
          ))}
        </div>
        {project.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-3 border-t border-white/5 pt-5">
            {project.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-full bg-white px-4 py-2 text-sm font-semibold text-canvas transition hover:bg-white/90"
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

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="border-b border-white/5 bg-canvas" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Delivery record</p>
          <h2 id="work-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Delivery record across field operations and production systems
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Framed for field engineering and implementation roles: software delivery, hardware systems work, on‑site
            operational reality, and production integration—not hypothetical weekend builds.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
