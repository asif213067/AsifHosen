import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Who I am" title="About me" />
        <div className="space-y-4 text-lg text-muted-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
