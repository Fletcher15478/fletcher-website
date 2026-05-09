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
    title: "Systems architecture",
    body: "End‑to‑end design for operational software: boundaries, data ownership, failure modes, and how teams actually run the system day to day.",
  },
  {
    title: "Integration & API orchestration",
    body: "Square, WordPress REST surfaces, Supabase, Google Business workflows—connected with clear contracts, retries, and observable sync paths.",
  },
  {
    title: "Operational automation",
    body: "Fewer manual handoffs: batch codes, shipments, catalog semantics, training content, and announcements flowing through controlled pipelines.",
  },
  {
    title: "Platform reliability",
    body: "Production discipline on Render—DNS, TLS, auth hardening, structured logging, RBAC, and audit trails that stakeholders can reason about.",
  },
] as const;

export const engagements = [
  "Solutions engineering engagements with business owners and operators",
  "Integration engineering for payments, CMS, and internal data stores",
  "Internal tools for franchise and field operations",
  "Platform operations: deploy, monitor, and debug production paths",
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
    name: "Events discovery — marketing site modernization",
    role: "Frontend & integration engineer",
    summary:
      "Rebuilt Millie’s events experience inside the existing TopHat stack using JavaScript and Tailwind for a sharper, SEO‑conscious layout. Integrated with the live database and admin tooling so marketing can publish without engineering, then shipped on Render with coordinated DNS for a no‑downtime cutover.",
    impact: [
      "Improved crawlability and content hierarchy for event discovery",
      "Editorial independence for non‑technical operators",
    ],
    stack: ["TopHat", "JavaScript", "Tailwind CSS", "Render", "DNS"],
    links: [
      { label: "Repository", href: "https://github.com/Fletcher15478/millies-calendar" },
      { label: "Live events", href: "https://millies-homemade.com/events" },
    ],
    image: {
      src: "/millies-events.png",
      fallbackSrc: "/card-events.svg",
      alt: "Millie's events page showing categories like parties, fundraisers, catering, and calendar",
    },
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
    title: "Architecture & reliability",
    items: [
      "Service boundaries",
      "Data ownership diagrams",
      "Failure‑mode conversations with operators",
      "Structured logging",
      "RBAC",
      "Audit trails",
    ],
  },
  {
    title: "Integration surface",
    items: [
      "Square",
      "WordPress REST",
      "Google Business workflows",
      "Supabase / Postgres‑backed primitives",
      "Webhook & polling patterns",
    ],
  },
  {
    title: "Frontend stack",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "TopHat deployments"],
  },
  {
    title: "Infrastructure & ops",
    items: [
      "Render",
      "DNS",
      "TLS",
      "Auth debugging",
      "Environment strategy for production tenants",
    ],
  },
];

export const recruiterNotes = [
  "Comfortable translating dense operational narratives into phased technical roadmaps executives can approve.",
  "Experienced aligning engineering delivery with billing, catalogs, franchises, or multi‑tenant constraints.",
  "Works where product, infra, API vendors, and on‑site operations intersect—not only greenfield prototypes.",
];
