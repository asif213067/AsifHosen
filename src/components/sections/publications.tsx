import { SectionHeading } from "@/components/section-heading";
import { PublicationCard } from "@/components/sections/publication-card";
import { publications } from "@/data/publications";

export function Publications() {
  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Research" title="My publications" />
        <div className="flex flex-col gap-6">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
}
