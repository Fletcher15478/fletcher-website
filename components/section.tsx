import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`border-b border-edge bg-canvas ${className}`} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <header className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{label}</p>
          <h2 id={id ? `${id}-heading` : undefined} className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          {description ? <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p> : null}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
