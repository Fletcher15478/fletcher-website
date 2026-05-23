export type Project = {
  name: string;
  role: string;
  summary: string;
  impact: readonly string[];
  stack: readonly string[];
  links: readonly { label: string; href: string }[];
  /** Primary visual; PNG/JPEG screenshots may be swapped in `/public`. */
  image?: { src: string; alt: string; fallbackSrc?: string };
  featured?: boolean;
};

export const pillars = [
  {
    title: "On‑site & remote technical support",
    body: "Hands‑on troubleshooting at customer and operator locations—diagnosing production issues, documenting findings, and driving remediation until systems match what the field actually needs.",
  },
  {
    title: "Installation & project leadership",
    body: "Coordinating multi‑location rollouts end to end: sequencing work, aligning stakeholders, managing cutovers, and owning delivery from planning through sign‑off.",
  },
  {
    title: "Training & technical documentation",
    body: "Translating complex systems into operator‑ready training, runbooks, and support materials—so teams can run, maintain, and escalate without engineering in the loop.",
  },
  {
    title: "Integration & systems troubleshooting",
    body: "Connecting payments, CMS, data stores, and internal tooling with clear contracts and observable paths—then debugging vendor APIs, sync failures, and auth issues under production pressure.",
  },
] as const;

export const engagements = [
  "Field engineering and on‑site technical assistance for customer deployments",
  "Project leadership for multi‑location installations and system rollouts",
  "Operator training, documentation, and technical support workflows",
  "Implementation, integration, and platform engineering for production systems",
  "Hardware troubleshooting, installation testing, and systems diagnostics",
] as const;

export const projects: Project[] = [
  {
    name: "Millie's Manager — multi‑location operations platform",
    role: "Lead solutions & platform engineer",
    featured: true,
    summary:
      "Production operations platform for Millie’s Homemade Ice Cream connecting stores, digital surfaces, and franchise workflows. Owned architecture and delivery: role‑based access with audit logging, synchronization of business hours, rotating flavors, announcements, and training resources across WordPress, Square, Supabase, and internal tooling—reducing duplicate data entry and tightening operational control across locations.",
    impact: [
      "Single operational source of truth aligned to how the business actually runs—not a generic dashboard bolted on afterward",
      "Auditability and permissions modeled for real franchises, not synthetic roles",
      "Cross‑system sync that keeps hours, menu changes, and announcements consistent where customers and staff interact with the brand",
    ],
    stack: [
      "Next.js / React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Square APIs",
      "WordPress REST",
      "Google Business tooling",
      "Render",
      "DNS / TLS / auth hardening",
    ],
    links: [
      { label: "Live dashboard", href: "https://millies-manager.onrender.com/dashboard" },
      { label: "Repository", href: "https://github.com/Fletcher15478/my-millies-manager" },
    ],
    image: {
      src: "/millies-manager.png",
      fallbackSrc: "/project-millies-manager.svg",
      alt: "Millie's Manager dashboard showing operations sections and team updates",
    },
  },
  {
    name: "Millie's e‑commerce runtime",
    role: "Solutions engineer (end‑to‑end)",
    featured: true,
    summary:
      "Custom Next.js and Supabase application translating Square catalogs, fulfillment rules, batch codes, and order handling into a deployable storefront the team can operate. Reduced reliance on heavyweight SaaS by owning payments integration, administrative workflows, and observable order paths while keeping reconciliation explicit for operators.",
    impact: [
      "Square‑native semantics encoded in shipping and catalog logic instead of brittle spreadsheet workflows",
      "Admin surfaces for products, orders, and batch identifiers tied to fulfillment reality",
      "Production deployment on Render with costs and operational friction aligned to a growing brand",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Square",
      "Render",
    ],
    links: [
      { label: "Repository", href: "https://github.com/Fletcher15478/Ecomm" },
      { label: "Live products", href: "https://ecomm-5tdf.onrender.com/products" },
    ],
    image: {
      src: "/millies-ecomm-store.png",
      fallbackSrc: "/card-ecomm.svg",
      alt: "Millie's e-commerce storefront and admin workflows",
    },
  },
  {
    name: "EcoCAR EV Challenge — WVU",
    role: "Hardware & vehicle systems engineer",
    featured: true,
    summary:
      "Cross‑functional engineering participant on West Virginia University’s EcoCAR EV Challenge team—working with sensors, embedded systems, vehicle technology workflows, and hands‑on hardware assembly. Soldered and wired electronic components, ran system diagnostics, and supported collaborative testing across mechanical, electrical, and software workstreams.",
    impact: [
      "Hands‑on soldering, assembly, and troubleshooting of electronic hardware and wiring connections",
      "Systems testing and diagnostic work within sensor and vehicle integration environments",
      "Collaborative engineering across hardware, embedded, and vehicle systems disciplines—not solo bench work in isolation",
    ],
    stack: [
      "Sensor systems",
      "Embedded systems",
      "Hardware diagnostics",
      "Soldering & wiring",
      "PLC fundamentals",
      "System installation & testing",
    ],
    links: []
  },
  {
    name: "Sports forecasting models",
    role: "Applied ML engineer",
    summary:
      "End‑to‑end pipelines for NFL and NBA prediction experiments—feature engineering, model training, and lightweight surfaces for viewing outputs. Demonstrates comfort shipping analytical systems where correctness, evaluation, and iteration discipline matter.",
    impact: [
      "Repeatable training and evaluation loops instead of one‑off notebooks",
      "Clear separation between data prep, model artifacts, and presentation",
    ],
    stack: ["Python", "scikit‑learn", "Linear & tree‑based models", "Vercel"],
    links: [
      { label: "Repository", href: "https://github.com/Fletcher15478/nba-game-predictor" },
      { label: "Live demo", href: "https://nba-game-predictor-ml.vercel.app/" },
    ],
    image: {
      src: "/sports-predictor.png",
      fallbackSrc: "/card-ml.svg",
      alt: "NBA Game Predictor dashboard showing totals, accuracy, and daily predictions",
    },
  },
];

export const skillGroups = [
  {
    title: "Field & customer operations",
    items: [
      "On‑site troubleshooting & remediation",
      "Multi‑location rollout coordination",
      "Customer & operator technical support",
      "Travel‑ready (up to ~75%) · Charlotte, NC base",
      "Valid driver’s license & reliable transport",
    ],
  },
  {
    title: "Hardware & industrial systems",
    items: [
      "Sensor systems & embedded concepts",
      "Hardware installation & testing",
      "Soldering, wiring & system diagnostics",
      "PLC fundamentals & electrical basics",
      "Peripheral & equipment troubleshooting",
    ],
  },
  {
    title: "Training & documentation",
    items: [
      "Operator training content",
      "Technical runbooks & SOPs",
      "Stakeholder‑ready status reporting",
      "Quick study on employer‑provided equipment training",
    ],
  },
  {
    title: "Integration & systems",
    items: [
      "Square · WordPress REST · Supabase",
      "React / Next.js / TypeScript / Python",
      "Production debugging under pressure",
      "DNS / TLS / deployment coordination",
    ],
  },
];

export const recruiterNotes = [
  "Comfortable as the primary technical contact at customer and operator sites—not only behind a desk.",
  "Hardware background from EcoCAR plus operational peripheral support; quick study on specialized field equipment with structured training.",
  "Open to field engineering with travel, implementation engineering, integration work, and platform operations—not locked to one lane.",
];
