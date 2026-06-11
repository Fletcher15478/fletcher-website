import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study-page";
import { getCaseStudyDetail } from "@/lib/case-study-detail";

const slug = "weekly-performance-dashboard";

export const metadata: Metadata = {
  title: "Weekly Performance Dashboard — Millie's Homemade Ice Cream",
  description:
    "Executive weekly sales dashboard unifying Square POS and third-party delivery — WoW/YoY, location health, flavor mix, and auto-generated insights across 17+ franchise locations.",
};

export default function WeeklyPerformanceDashboardPage() {
  const study = getCaseStudyDetail(slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} />;
}
