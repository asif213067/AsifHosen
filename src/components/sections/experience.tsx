import { SectionHeading } from "@/components/section-heading";
import { ExperienceCard } from "@/components/sections/experience-card";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="My journey" title="Professional experience" />
        <div className="flex flex-col gap-6">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.id}
              item={item}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
