import { site } from "@/lib/site";

export function RecruiterStrip() {
  return (
    <section className="border-b border-edge bg-brand-light" aria-label="Target roles">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Open to full-time roles in {site.location.city}, {site.location.region}
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {site.targetRoles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-brand/20 bg-white px-3 py-1.5 text-sm font-medium text-ink shadow-sm"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
