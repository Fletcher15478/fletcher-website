export type MermaidDiagram = {
  title: string;
  chart: string;
};

export type CaseStudy = {
  id: string;
  name: string;
  role: string;
  featured?: boolean;
  oneLiner?: string;
  detailHref?: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: readonly string[];
  businessImpact: readonly string[];
  lessonsLearned: readonly string[];
  diagrams: readonly MermaidDiagram[];
  links: readonly { label: string; href: string }[];
  image?: { src: string; alt: string; fallbackSrc?: string };
};

export const aboutHighlights = [
  "B.S. Computer Science, West Virginia University (2025)",
  "Stack aligned to current hiring demand: Python, Java, React, AWS, Docker, Kubernetes, SQL, Spring Boot",
  "Red Hat System Administration I & II · Cisco networking (foundational)",
  "Systems integration across POS, e-commerce, ERP, and operational platforms",
  "Enterprise software implementation, configuration, and production support",
  "Hardware validation, CAN Bus telemetry, and vehicle systems (EcoCAR)",
  "Data analytics, SQL reporting, and business systems alignment",
] as const;

export const skillCategories = [
  {
    title: "High-demand stack",
    featured: true,
    items: [
      "Python",
      "Java",
      "React",
      "AWS",
      "Docker",
      "Kubernetes",
      "SQL",
      "Spring Boot",
      "REST APIs",
      "CI/CD",
    ],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "Git", "CI/CD"],
  },
  {
    title: "Data & databases",
    items: ["PostgreSQL", "SQL", "Supabase", "MySQL", "Data Analytics", "Reporting", "ETL"],
  },
  {
    title: "Integration & systems",
    items: [
      "REST APIs",
      "System Integration",
      "Business Systems Analysis",
      "Technical Support",
      "Node.js",
      "Authentication",
    ],
  },
  {
    title: "Networking & infrastructure",
    items: ["Network Administration", "Cisco Networking"],
  },
  {
    title: "Engineering & hardware",
    items: [
      "CAN Bus Telemetry",
      "Hardware Validation",
      "Sensor Integration",
      "Vehicle Telemetry",
      "Diagnostics",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Cisco Networking (foundational)",
      "Red Hat System Administration I",
      "Red Hat System Administration II",
    ],
  },
  {
    title: "Professional",
    items: [
      "System Design",
      "Technical Documentation",
      "Requirements Gathering",
      "Stakeholder Communication",
      "Project Coordination",
      "Agile / Scrum",
    ],
  },
] as const;

export const architecturePrinciples = [
  {
    title: "Design for operational reality",
    body: "Start from how teams actually run the business—permissions, audit trails, failure modes, and handoffs—before choosing frameworks or vendors.",
  },
  {
    title: "Scalability through clear boundaries",
    body: "Separate integration adapters, domain logic, and presentation. Make data ownership explicit so multi-location and multi-system growth does not collapse into spaghetti sync jobs.",
  },
  {
    title: "Integrations as contracts",
    body: "Treat every external API as a contract: versioning, retries, idempotency, observability, and documented failure behavior—not one-off scripts that break on the next vendor change.",
  },
  {
    title: "Troubleshoot from signal to root cause",
    body: "Structured logging, reproducible steps, and environment parity. Narrow whether the failure is configuration, data, network, auth, or code—then fix the class of problem, not just the symptom.",
  },
] as const;

export const engineeringExperience = [
  {
    title: "CAN Bus & vehicle telemetry",
    body: "Participated in EcoCAR EV Challenge workstreams involving vehicle systems, sensor data paths, and collaborative validation across mechanical, electrical, and software disciplines.",
  },
  {
    title: "Sensor integration & hardware validation",
    body: "Hands-on assembly, soldering, wiring, and diagnostic testing of electronic components—verifying sensor behavior and system responses in integrated environments.",
  },
  {
    title: "Testing & diagnostics",
    body: "Supported structured test cycles, documented anomalies, and iterated with cross-functional engineers to isolate hardware vs. software vs. configuration issues.",
  },
] as const;

export const technicalLeadership = [
  {
    title: "End-to-end ownership",
    body: "Led enterprise system implementations from requirements through production rollout—Square, delivery platforms, ERP alignment, and internal operations tooling.",
  },
  {
    title: "Process improvement",
    body: "Built automation (Python, Zapier) and SQL reporting pipelines that reduced manual work by 40%+ on key workflows and saved 10+ hours per week per location.",
  },
  {
    title: "Cross-functional delivery",
    body: "Coordinated vendors (Square, DoorDash, Uber Eats), franchise stakeholders, and internal teams for testing, configuration, and zero-downtime cutovers.",
  },
] as const;

export type Experience = {
  company: string;
  title: string;
  period: string;
  bullets: readonly string[];
  technologies: readonly string[];
};

export const professionalExperience: Experience[] = [
  {
    company: "Millie's Homemade Ice Cream",
    title: "Franchise Support Communications & Technology Specialist",
    period: "Aug 2025 — Present",
    bullets: [
      "Lead enterprise system implementations and integrations across multi-location franchise operations.",
      "Gather and document requirements from franchise owners and leadership; configure POS, e-commerce, delivery, and reporting systems.",
      "Designed integrations between Square POS, DoorDash, and Uber Eats—reducing manual intervention by ~40%.",
      "Support NetSuite and Oracle alignment for financial reporting, reconciliation, and enterprise data consistency.",
      "Develop SQL reporting pipelines for transactional and operational data used in forecasting and executive reporting.",
      "Engineer Python and Zapier automation connecting Square, Google Workspace, and ERP systems.",
      "Coordinate vendor implementations with Square, Uber Eats, and DoorDash for testing and zero-downtime rollouts.",
      "Diagnose production issues across integrated systems; implement durable configuration and access controls.",
    ],
    technologies: [
      "SQL",
      "PostgreSQL",
      "Python",
      "REST APIs",
      "Square API",
      "NetSuite",
      "Oracle",
      "Zapier",
    ],
  },
  {
    company: "Millie's Homemade Ice Cream",
    title: "Systems Analyst",
    period: "May 2025 — Aug 2025",
    bullets: [
      "Analyzed franchise workflows and standardized system configurations across POS and online ordering.",
      "Supported feature deployment and production validation; resolved post-launch configuration issues.",
      "Created technical documentation and training materials to improve adoption and reduce support load.",
      "Investigated data inconsistencies and implemented system-level fixes for reporting accuracy.",
    ],
    technologies: ["SQL", "Workflow Automation", "System Configuration", "Technical Documentation"],
  },
  {
    company: "Auto Max Chrysler Dodge Jeep Ram",
    title: "Integrated Services Manager",
    period: "Dec 2022 — May 2025",
    bullets: [
      "Managed dealership software (Auto/Mate, TechMetric)—configuring workflows and training staff.",
      "Aggregated financial and inventory data with SQL-based reporting to support procurement strategy.",
      "Aligned cross-department processes with system capabilities; served as liaison for technical issue resolution.",
    ],
    technologies: ["MySQL", "Business Systems", "Data Analysis", "Troubleshooting"],
  },
];

export const education = {
  school: "West Virginia University",
  degree: "Bachelor of Science, Computer Science",
  period: "2021 — 2025",
  gpa: "3.5",
  note: "EcoCAR EV Challenge participant",
} as const;

export const caseStudies: CaseStudy[] = [
  {
    id: "weekly-performance-dashboard",
    name: "Weekly Performance Dashboard",
    role: "Sole developer · Full-stack engineer",
    featured: true,
    oneLiner:
      "Executive weekly sales dashboard unifying Square POS and third-party delivery — WoW/YoY, location health, flavor mix, and auto-generated insights across 17+ locations.",
    detailHref: "/projects/weekly-performance-dashboard",
    problem:
      "Leadership reviewed weekly performance in a manual Monday spreadsheet. In-store Square sales and delivery platforms were separate data paths, gross/net scope had to reconcile, and week comparisons needed Eastern Time boundaries — all independent of royalty workflows.",
    solution:
      "Built an authenticated executive dashboard with workbook-aligned net overrides, composable server analytics behind `/api/analytics/week`, sequential multi-week trend loading, and auto-generated Monday leadership insights.",
    architecture:
      "Square + delivery sync → ET week-boundary analytics module (`leadershipNet`, `composeDashboard`, `insights`, `health`, `compare`) → Next.js dashboard UI with Recharts. Read-only layer isolated from royalty tables.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Recharts",
      "Square API",
      "Supabase",
    ],
    businessImpact: [
      "Replaced manual Monday spreadsheet review with a live dashboard leadership can trust",
      "Single view across shops, food trucks, and corporate locations",
      "Product and flavor insights surfaced automatically for weekly leadership meetings",
    ],
    lessonsLearned: [
      "Treat the leadership workbook as a contract — timezone bugs on week keys can silently break overrides",
      "Headline sales scope and product-mix analytics need explicit separation to keep gross ≥ net",
    ],
    diagrams: [],
    links: [{ label: "View case study", href: "/projects/weekly-performance-dashboard" }],
    image: {
      src: "/weekly-performance-overview.png",
      alt: "Weekly Performance Dashboard executive overview",
    },
  },
  {
    id: "millies-manager",
    name: "Millie's Manager Platform",
    role: "Lead engineer · systems integration",
    featured: true,
    problem:
      "Multi-location franchise operations relied on disconnected POS, web, and manual updates—creating inconsistent hours, menu data, and training content across stores.",
    solution:
      "Designed and deployed a centralized operations platform with RBAC, audit logging, and automated synchronization across Square, WordPress, Google Business, and Supabase-backed data stores.",
    architecture:
      "Layered Next.js application with integration adapters per vendor, Postgres as system of record, and scheduled sync jobs with explicit failure handling and operator-facing status.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "PostgreSQL",
      "Square API",
      "WordPress REST",
      "Render",
    ],
    businessImpact: [
      "Single operational source of truth for franchise and corporate locations",
      "Reduced duplicate data entry and configuration drift across stores",
      "Audit trails and permissions aligned to real franchise operating roles",
    ],
    lessonsLearned: [
      "Model permissions and data ownership before UI—franchise reality drives schema design",
      "Observable sync paths matter as much as happy-path integrations",
    ],
    diagrams: [
      {
        title: "System Architecture",
        chart: `flowchart TB
  subgraph Presentation
    UI[Next.js Operations Dashboard]
  end
  subgraph Application
    API[App Layer + RBAC]
    SYNC[Sync Orchestration]
  end
  subgraph Data
    DB[(Supabase / PostgreSQL)]
  end
  subgraph External
    SQ[Square API]
    WP[WordPress REST]
    GB[Google Business]
  end
  UI --> API
  API --> DB
  SYNC --> DB
  SYNC --> SQ
  SYNC --> WP
  SYNC --> GB
  API --> SYNC`,
      },
      {
        title: "API Flow",
        chart: `sequenceDiagram
  participant Op as Operator
  participant App as Platform
  participant DB as Database
  participant SQ as Square
  Op->>App: Update hours / menu / announcement
  App->>DB: Persist + audit log
  App->>SQ: Push catalog / location data
  App->>WP: Sync public content
  SQ-->>App: Ack / error
  App-->>Op: Status + retry guidance`,
      },
      {
        title: "Deployment Architecture",
        chart: `flowchart LR
  DEV[Local / Staging] --> CI[Build + Validate]
  CI --> RENDER[Render Production]
  RENDER --> DNS[DNS + TLS]
  DNS --> USERS[Franchise Operators]`,
      },
    ],
    links: [
      { label: "Live dashboard", href: "https://millies-manager.onrender.com/dashboard" },
      { label: "Repository", href: "https://github.com/Fletcher15478/my-millies-manager" },
    ],
    image: {
      src: "/millies-manager.png",
      fallbackSrc: "/project-millies-manager.svg",
      alt: "Millie's Manager operations dashboard",
    },
  },
  {
    id: "catering-ordering",
    name: "Catering & Ordering Systems",
    role: "Systems integration engineer",
    featured: true,
    problem:
      "Catering, delivery, and in-store ordering ran on fragmented platforms—manual handoffs between Square, DoorDash, Uber Eats, and internal teams slowed fulfillment and increased errors.",
    solution:
      "Configured and integrated delivery and ordering workflows across Square POS and third-party marketplaces, with validation testing and production rollout coordination.",
    architecture:
      "Hub-and-spoke integration model: Square as commerce source of truth, marketplace adapters for menu and order sync, operational checkpoints before production promotion.",
    technologies: ["Square API", "DoorDash", "Uber Eats", "REST APIs", "SQL", "System Configuration"],
    businessImpact: [
      "~40% reduction in manual intervention on integrated delivery workflows",
      "Improved order accuracy and faster time-to-production for new locations",
      "Clearer operational visibility for franchise support teams",
    ],
    lessonsLearned: [
      "Vendor cutovers need rollback plans and parallel validation windows",
      "Operations teams need configuration documentation, not just engineering runbooks",
    ],
    diagrams: [
      {
        title: "Integration Topology",
        chart: `flowchart TB
  SQ[Square POS / Catalog]
  DD[DoorDash]
  UE[Uber Eats]
  OPS[Operations Team]
  SQ <-->|Menu + Orders| DD
  SQ <-->|Menu + Orders| UE
  OPS -->|Configure + Validate| SQ
  OPS -->|Monitor| DD
  OPS -->|Monitor| UE`,
      },
    ],
    links: [
      { label: "E-commerce platform", href: "https://ecomm-5tdf.onrender.com/products" },
      { label: "Repository", href: "https://github.com/Fletcher15478/Ecomm" },
    ],
    image: {
      src: "/millies-events.png",
      fallbackSrc: "/card-events.svg",
      alt: "Catering and events ordering experience",
    },
  },
  {
    id: "ops-automation",
    name: "Business Operations Automation",
    role: "Integration & automation engineer",
    featured: true,
    problem:
      "Franchise and corporate teams spent hours weekly on repetitive data movement between Square, Google Workspace, ERP systems, and reporting tools.",
    solution:
      "Built Python scripts and Zapier workflows to automate data extraction, transformation, and routing—with SQL pipelines for forecasting and executive reporting.",
    architecture:
      "Event-driven and scheduled jobs pulling from APIs and databases, normalizing into reporting schemas, with error notifications and idempotent retries.",
    technologies: ["Python", "Zapier", "SQL", "PostgreSQL", "Square API", "Google Workspace", "NetSuite", "Oracle"],
    businessImpact: [
      "10+ hours saved per week per location on key administrative workflows",
      "More reliable executive and operational reporting from consistent data pipelines",
      "Reduced human error in cross-system data handoffs",
    ],
    lessonsLearned: [
      "Automate the boring path first—highest ROI is often data movement, not new UI",
      "Every automation needs a failure alert and a manual override documented",
    ],
    diagrams: [
      {
        title: "Automation Pipeline",
        chart: `flowchart LR
  SQ[Square] --> PY[Python / Zapier]
  GW[Google Workspace] --> PY
  PY --> SQL[SQL Reporting Layer]
  SQL --> ERP[NetSuite / Oracle]
  SQL --> RPT[Executive Dashboards]`,
      },
    ],
    links: [],
    image: {
      src: "/millies-ecomm-admin.png",
      fallbackSrc: "/card-ecomm.svg",
      alt: "Business operations admin and automation workflows",
    },
  },
  {
    id: "ecocar",
    name: "EcoCAR Telemetry & Validation",
    role: "Engineering technologist · hardware validation",
    featured: true,
    problem:
      "Vehicle systems required validated sensor behavior, reliable telemetry paths, and cross-disciplinary testing before competition-ready integration.",
    solution:
      "Contributed to WVU EcoCAR EV Challenge work—sensor integration, CAN Bus exposure, hardware assembly, diagnostic testing, and collaborative validation with mechanical and electrical teams.",
    architecture:
      "Sensor data acquisition through vehicle networks, bench and integrated testing cycles, and documented validation results for engineering review.",
    technologies: [
      "CAN Bus",
      "Vehicle Telemetry",
      "Sensor Integration",
      "Hardware Validation",
      "Diagnostics",
      "Embedded Systems",
    ],
    businessImpact: [
      "Strengthened hands-on engineering credibility across software and hardware domains",
      "Demonstrated structured testing and documentation in team-based engineering environments",
      "Built foundation for industrial and field-adjacent technical roles",
    ],
    lessonsLearned: [
      "Hardware issues often present as software bugs—isolate the layer before fixing",
      "Cross-functional communication is as critical as the schematic",
    ],
    diagrams: [
      {
        title: "Telemetry & Validation Flow",
        chart: `flowchart TB
  SENS[Sensors] --> CAN[CAN Bus Network]
  CAN --> ECU[Vehicle Controllers]
  ECU --> LOG[Telemetry / Logs]
  LOG --> TEST[Validation & Diagnostics]
  TEST --> TEAM[Cross-Functional Review]`,
      },
    ],
    links: [],
  },
  {
    id: "square-ecommerce",
    name: "Square API E-Commerce Integration",
    role: "Full stack engineer",
    featured: true,
    problem:
      "The business needed a production e-commerce layer with real-time catalog, inventory, and order sync to Square—aligned with financial reconciliation requirements.",
    solution:
      "Architected a Next.js and Supabase platform with secure REST integrations for payments, inventory, and order auditing—designed for NetSuite/Oracle alignment.",
    architecture:
      "Service-oriented backend modules for catalog, orders, and webhooks; relational schemas for transaction history; automated deployment and validation gates.",
    technologies: ["Square API", "Next.js", "TypeScript", "PostgreSQL", "Supabase", "REST APIs", "Python"],
    businessImpact: [
      "Owned payments and inventory semantics instead of brittle third-party SaaS constraints",
      "Clear audit path for orders and reconciliation with enterprise financial systems",
      "Production deployment with operational controls the business can maintain",
    ],
    lessonsLearned: [
      "Payment and inventory domains need explicit state machines—not implicit UI logic",
      "Reconciliation requirements should shape the schema on day one",
    ],
    diagrams: [
      {
        title: "Database Design",
        chart: `erDiagram
  PRODUCTS ||--o{ ORDER_ITEMS : contains
  ORDERS ||--|{ ORDER_ITEMS : includes
  ORDERS {
    string id
    string square_payment_id
    string status
    timestamp created_at
  }
  PRODUCTS {
    string id
    string square_catalog_id
    int inventory_count
  }`,
      },
      {
        title: "API Flow",
        chart: `sequenceDiagram
  participant Store as Storefront
  participant API as Backend
  participant DB as PostgreSQL
  participant SQ as Square API
  Store->>API: Checkout request
  API->>SQ: Create payment + order
  SQ-->>API: Confirmation
  API->>DB: Persist transaction audit
  API-->>Store: Order status`,
      },
    ],
    links: [
      { label: "Live products", href: "https://ecomm-5tdf.onrender.com/products" },
      { label: "Repository", href: "https://github.com/Fletcher15478/Ecomm" },
    ],
    image: {
      src: "/millies-ecomm-store.png",
      fallbackSrc: "/card-ml.svg",
      alt: "Square-integrated e-commerce platform",
    },
  },
];
