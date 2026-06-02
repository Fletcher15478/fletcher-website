import { About } from "@/components/about";
import { ArchitectureThinking } from "@/components/architecture-thinking";
import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { EngineeringExperience } from "@/components/engineering-experience";
import { Hero } from "@/components/hero";
import { ProfessionalExperience } from "@/components/professional-experience";
import { RecruiterStrip } from "@/components/recruiter-strip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { TechnicalLeadership } from "@/components/technical-leadership";
import { caseStudies } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RecruiterStrip />
        <About />
        <Skills />
        <ArchitectureThinking />
        <CaseStudies studies={caseStudies} />
        <EngineeringExperience />
        <TechnicalLeadership />
        <ProfessionalExperience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
