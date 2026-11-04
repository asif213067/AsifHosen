import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Project showcase"
          title="Innovative projects"
        />
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
