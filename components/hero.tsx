import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="border-b border-edge bg-white" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_260px] lg:gap-14">
          <div>
            <p className="text-sm font-medium text-brand">{site.relocating}</p>
            <h1 id="hero-heading" className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-ink sm:text-2xl">{site.title}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">{site.headline}</p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">{site.headlineSub}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#projects"
                className="focus-ring inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dim"
              >
                View Projects
              </Link>
              <Link
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center rounded-md border border-edge bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand/30 hover:bg-brand-light"
              >
                Download Resume
              </Link>
              <Link
                href="#contact"
                className="focus-ring inline-flex items-center justify-center rounded-md border border-edge bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand/30 hover:bg-brand-light"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[260px] lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-edge shadow-card">
              <Image
                src="/headshot.png"
                alt={`${site.name} professional headshot`}
                fill
                className="object-cover object-top"
                sizes="260px"
                priority
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
