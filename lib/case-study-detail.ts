import type { MermaidDiagram } from "@/lib/content";

export type CaseStudyDetail = {
  slug: string;
  name: string;
  oneLiner: string;
  role: string;
  tags: readonly string[];
  metrics: readonly { label: string; value: string }[];
  problem: readonly string[];
  approach: readonly string[];
  solution: readonly string[];
  features: readonly string[];
  technicalChallenges: readonly { title: string; body: string }[];
  results: readonly string[];
  diagrams: readonly MermaidDiagram[];
  screenshots: readonly { src: string; alt: string; caption: string }[];
  links: readonly { label: string; href: string; external?: boolean }[];
};

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  "weekly-performance-dashboard": {
    slug: "weekly-performance-dashboard",
    name: "Weekly Performance Dashboard",
    oneLiner:
      "Executive weekly sales dashboard that unifies Square POS and third-party delivery into a Monday leadership view — WoW/YoY, location health scores, flavor mix, and auto-generated insights across 17+ locations.",
    role: "Sole developer · Full-stack engineer",
    tags: ["Next.js", "TypeScript", "Square API", "Data Analytics", "Recharts", "Supabase"],
    metrics: [
      { label: "Locations tracked", value: "17+" },
      { label: "Trend weeks loaded", value: "6" },
      { label: "Week boundary", value: "Mon 00:00 ET" },
      { label: "Deployment", value: "Internal" },
    ],
    problem: [
      "Leadership reviewed weekly performance in a manual spreadsheet every Monday. Numbers had to match that workbook exactly, but pulling live data was messy.",
      "In-store Square sales and DoorDash, Uber Eats, and Grubhub delivery run on separate data paths — gross vs net scope had to stay consistent (gross cannot be lower than net).",
      "Week boundaries, prior-week, and same-week-last-year comparisons needed to align to Eastern Time (Monday 00:00 ET through the following Monday, exclusive).",
      "Product and flavor analytics required different order exclusions than headline sales totals.",
      "The dashboard had to stay independent of royalty calculation workflows — a read-only analytics layer leadership could trust without touching franchise billing.",
    ],
    approach: [
      "I started from the Monday spreadsheet as the contract: published net totals must match leadership's workbook when overrides are provided, with live Square data as the fallback.",
      "I separated headline sales scope (in-store + delivery) from product-mix analytics (filtered in-store exclusions) so gross and net reconciled correctly across channels.",
      "I built a composable server analytics module behind a single week API, then assembled the executive view on the client with sequential multi-week loads to avoid timeouts.",
      "I kept the analytics layer isolated from royalty tables and workflows — same Square source data, different domain boundaries.",
    ],
    solution: [
      "Built `/dashboard/weekly-performance` — an authenticated executive dashboard with prev/next week navigation and Eastern Time week keys.",
      "Location performance table with gross and net (both include in-store + delivery), WoW %, YoY %, and health badges.",
      "Company summary cards and auto-generated executive insight bullets (top grower, biggest decline, flavor winners, highest-grossing location).",
      "Trend charts (Recharts) with multi-week context loaded sequentially (`full` vs `sales` detail) to stay within API limits.",
      "Server analytics module (`leadershipNet`, `composeDashboard`, `insights`, `health`, `compare`) behind `/api/analytics/week`.",
      "Workbook override layer so published nets match leadership's Monday spreadsheet when provided; live Square fallback otherwise.",
      "Reconciliation dev scripts to verify computed totals against source-of-truth JSON.",
    ],
    features: [
      "Authenticated executive dashboard with week navigation and generated-at timestamp",
      "Company overview: total gross/net, company WoW/YoY, locations up/down vs prior week and prior year",
      "Per-location table with gross, net, WoW %, YoY %, and health badges",
      "Auto-generated executive insights for Monday leadership review",
      "Product performance by location — top selling flavor and item with mix percentages",
      "Multi-week trend charts: company sales, top locations, gross vs net comparison",
      "Workbook override layer with live Square fallback for net totals",
      "Dedicated error boundary and safe JSON parsing on heavy week payloads",
    ],
    technicalChallenges: [
      {
        title: "Data reconciliation at scale",
        body: "Aligned computed Square totals with a human-maintained spreadsheet source of truth. Fixed week-key timezone bugs that caused overrides to silently not apply — a subtle failure mode that eroded trust until the ET boundary logic was corrected.",
      },
      {
        title: "Scope correctness",
        body: "Separated headline sales (in-store + delivery) from product-mix analytics (filtered in-store exclusions). Fixed gross/net mismatch by including delivery merchandise gross in gross sales so company totals always reconciled.",
      },
      {
        title: "Performance & reliability",
        body: "Split heavy week loads into sequential API calls (`full` vs `sales` detail), respected Square batch limits, and added safe JSON parsing plus a dedicated error boundary so one slow week does not break the entire dashboard.",
      },
      {
        title: "Clean architecture",
        body: "Isolated the analytics layer from royalty tables and workflows. Composable week payload assembly on the server with client-side dashboard composition kept the domain readable as features grew.",
      },
    ],
    results: [
      "Replaced manual Monday spreadsheet review with a live dashboard leadership can open before the weekly meeting.",
      "Single view across shops, food trucks, and corporate locations — no more stitching Square and delivery exports by hand.",
      "Numbers reconcile to the same workbook leadership already trusts, with live data when overrides are not yet published.",
      "Product and flavor insights surfaced automatically instead of requiring separate ad-hoc pulls.",
    ],
    diagrams: [
      {
        title: "Data flow architecture",
        chart: `flowchart LR
  subgraph Sources
    SQ[Square API]
    DD[DoorDash sync]
    UE[Uber Eats sync]
    GH[Grubhub sync]
    WB[Leadership workbook overrides]
  end
  subgraph Server
    WK[Week boundary ET]
    AN[Analytics module]
    API["/api/analytics/week"]
  end
  subgraph Client
    UI[Weekly Performance Dashboard]
    CH[Recharts trends]
  end
  SQ --> AN
  DD --> AN
  UE --> AN
  GH --> AN
  WB --> AN
  WK --> AN
  AN --> API
  API --> UI
  API --> CH`,
      },
    ],
    screenshots: [
      {
        src: "/weekly-performance-overview.png",
        alt: "Weekly Performance Dashboard company overview and executive insights",
        caption: "Company overview cards, WoW/YoY metrics, and auto-generated executive insights.",
      },
      {
        src: "/weekly-performance-products.png",
        alt: "Product performance by location showing top flavors and items",
        caption: "Per-location product performance — top selling flavor and item with mix percentages.",
      },
      {
        src: "/weekly-performance-charts.png",
        alt: "Multi-week trend charts for company and top locations",
        caption: "Trend charts with sequential multi-week loading for company and top locations.",
      },
    ],
    links: [{ label: "Back to all projects", href: "/#projects" }],
  },
};

export function getCaseStudyDetail(slug: string): CaseStudyDetail | undefined {
  return caseStudyDetails[slug];
}
