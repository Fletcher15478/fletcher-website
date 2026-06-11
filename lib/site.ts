export const site = {
  name: "Fletcher Hartsock",
  title: "Full Stack Software Engineer & Systems Integration Engineer",
  headline: "Building scalable systems, integrations, automation, and engineering solutions",
  headlineSub:
    "Computer Science graduate focused on enterprise software, systems integration, and production operations—translating business requirements into reliable technical implementations.",
  relocating: "Relocating to Charlotte, NC",
  resume: "/Fletcher-Hartsock-Resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "fletchhartsock93@gmail.com",
  phone: "724-557-9213",
  linkedin: "https://www.linkedin.com/in/fletcher-hartsock-4b1a80239",
  github: "https://github.com/Fletcher15478",
  location: {
    city: "Charlotte",
    region: "NC",
    country: "United States",
    countryCode: "US",
  },
  /** Visible in hero for 15-second recruiter scan */
  targetRoles: [
    "Software Engineer",
    "Systems Integration Engineer",
    "Engineering Technologist",
    "Technical Analyst",
    "Solutions Engineer",
    "Implementation Engineer",
  ] as const,
} as const;
