import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";

// const placeholders = [
//   "experience",
//   "skills",
//   "projects",
//   "education",
//   "publications",
//   "contact",
// ];

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
        {/* {placeholders.map((id) => (
          <section
            key={id}
            id={id}
            className="flex min-h-[70vh] items-center justify-center border-t"
          >
            <h2 className="text-gradient text-4xl font-bold capitalize">
              {id}
            </h2>
          </section>
        ))} */}
      </main>
      <Footer />
    </>
  );
}
