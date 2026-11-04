import { ExternalLink } from "lucide-react";
import { CertificateImage } from "@/components/certificate-image";
import { SectionHeading } from "@/components/section-heading";
import { TechTag } from "@/components/tech-tag";
import { certifications } from "@/data/certifications";
import { formatMonth } from "@/lib/format";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Credentials" title="My certifications" />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm"
            >
              <CertificateImage src={item.image} title={item.title} />

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title} credential`}
                      className="mt-1 shrink-0 text-primary hover:opacity-80"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>

                <p className="mt-1 text-sm">
                  <span className="font-medium text-primary">
                    {item.issuer}
                  </span>
                  <span className="text-muted-foreground">
                    {" · "}
                    {formatMonth(item.issuedAt)}
                  </span>
                </p>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <TechTag key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
