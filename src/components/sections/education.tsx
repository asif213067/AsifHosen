import { ExternalLink, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TechTag } from "@/components/tech-tag";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Academic journey" title="My education" />

        <div className="flex flex-col gap-6">
          {education.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-l-4 border-l-primary bg-card p-6 text-card-foreground shadow-sm"
            >
              <div className="flex flex-wrap items-start gap-4">
                <span
                  aria-hidden="true"
                  className="bg-brand-gradient flex size-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                >
                  <GraduationCap className="size-6" />
                </span>

                <div className="min-w-0 flex-1 max-sm:order-last max-sm:basis-full">
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="font-medium text-primary">
                    {item.institutionUrl ? (
                      <a
                        href={item.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline"
                      >
                        {item.institution}
                        <ExternalLink className="size-3.5" />
                      </a>
                    ) : (
                      item.institution
                    )}
                  </p>
                </div>

                <span className="bg-brand-gradient rounded-full px-4 py-1 font-mono text-xs font-medium text-primary-foreground max-sm:ml-auto">
                  {item.startYear} – {item.endYear ?? "Present"}
                </span>
              </div>

              <p className="mt-4 text-muted-foreground">{item.description}</p>

              <h4 className="mt-5 text-sm font-semibold">
                Relevant coursework
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <TechTag key={course} label={course} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
