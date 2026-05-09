export const site = {
  name: "Fletcher Hartsock",
  title:
    "Solutions & Integration Engineer · Charlotte, NC · Operations Platforms & API Systems",
  headline:
    "Solutions & integration engineer shaping production operations software",
  headlineSub:
    "Architecting multi‑location platforms, API orchestration layers, and internal tools that reduce overhead, improve reliability, and synchronize real business workflows—not demo apps.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "fletchhartsock93@gmail.com",
  linkedin: "https://www.linkedin.com/in/fletcher-hartsock-4b1a80239",
  github: "https://github.com/Fletcher15478",
  location: {
    city: "Charlotte",
    region: "NC",
    country: "United States",
    /** ISO 3166 */
    countryCode: "US",
  },
} as const;
