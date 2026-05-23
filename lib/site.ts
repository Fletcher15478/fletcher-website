export const site = {
  name: "Fletcher Hartsock",
  title:
    "Field & Implementation Engineer · Charlotte, NC · Technical Operations & Customer Systems",
  headline:
    "Technical operator for field deployments, customer support, and production systems",
  headlineSub:
    "Charlotte‑based engineer with hardware and integration background—leads on‑site rollouts, trains operators, troubleshoots field issues, and builds production infrastructure. Open to field engineering with travel, implementation engineering, and integration roles.",
  resume: "/Fletcher_Hartsock_RSM.pdf",
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
