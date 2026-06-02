import Link from "next/link";
import { site } from "@/lib/site";
import { Section } from "@/components/section";

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's connect about full-time engineering roles"
      description={`Seeking full-time software engineering, systems integration, and engineering technologist positions in ${site.location.city}, ${site.location.region}.`}
      className="bg-white"
    >
      <div className="mx-auto max-w-2xl rounded-xl border border-edge bg-canvas-elevated p-8 shadow-card sm:p-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">Email</p>
            <Link href={`mailto:${site.email}`} className="focus-ring mt-1 block text-ink hover:text-brand">
              {site.email}
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">Phone</p>
            <Link href={`tel:${site.phone}`} className="focus-ring mt-1 block text-ink hover:text-brand">
              {site.phone}
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">LinkedIn</p>
            <Link href={site.linkedin} className="focus-ring mt-1 block text-ink hover:text-brand">
              LinkedIn profile
            </Link>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">GitHub</p>
            <Link href={site.github} className="focus-ring mt-1 block text-ink hover:text-brand">
              GitHub profile
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`mailto:${site.email}?subject=Full-time%20Engineering%20Role%20%E2%80%94%20${site.name}`}
            className="focus-ring inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dim"
          >
            Email Fletcher
          </Link>
          <Link
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-md border border-edge px-6 py-3 text-sm font-semibold text-ink transition hover:bg-brand-light"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </Section>
  );
}
