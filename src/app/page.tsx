import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { DsaOverview } from "@/components/sections/dsa-overview";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Publications } from "@/components/sections/publications";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <DsaOverview />
        <Education />
        <Certifications />
        <Publications />
      </main>
      <Footer />
    </>
  );
}
