import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { HiringCta } from "@/components/hiring-cta";
import { Pillars } from "@/components/pillars";
import { ProjectGrid } from "@/components/project-grid";
import { SkillsMatrix } from "@/components/skills-matrix";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Pillars />
        <ProjectGrid projects={projects} />
        <SkillsMatrix />
        <HiringCta />
      </main>
      <SiteFooter />
    </>
  );
}
