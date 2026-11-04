import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { JSX, SVGProps } from "react";
import { buttonVariants } from "@/components/ui/button";
import { BackToTopButton } from "@/components/layout/back-to-top-button";
import { CopyEmailButton } from "@/components/layout/copy-email-button";
import { profile } from "@/data/profile";
import { siteLinks } from "@/data/site";
import { cn } from "@/lib/utils";

/* lucide-react no longer ships brand icons; small inline SVGs instead. */
function LinkedInIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socialIcons: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
  profile.email,
)}`;

/* Evaluated once at build time (avoided inside render: Next 16 blocks
   unstable Date rendering during prerender). Refreshed on each deploy. */
const currentYear = new Date().getFullYear();

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "group inline-flex w-fit flex-col gap-1 font-medium text-muted-foreground transition-colors duration-200 motion-reduce:transition-none",
          "hover:text-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        {label}
        <span
          aria-hidden="true"
          className="h-px w-0 bg-primary transition-all duration-300 ease-out motion-reduce:transition-none group-hover:w-3"
        />
      </a>
    </li>
  );
}

export function Footer() {
  const initials = profile.name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("");

  return (
    <footer>
      <div aria-hidden="true" className="bg-brand-gradient h-px w-full" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Contact strip */}
        <div className="flex flex-col gap-6 rounded-2xl border border-l-4 border-l-primary bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Have a project or an idea?
            </h2>
            <p className="mt-1.5 text-muted-foreground">
              I’m open to new work and collaborations. Let’s talk.
            </p>
          </div>
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "shrink-0 rounded-xl bg-brand-gradient text-primary-foreground hover:bg-brand-gradient hover:opacity-90",
            )}
          >
            Get in touch
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        {/* Three columns */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand column */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              {profile.logo ? (
                <Image
                  src={profile.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-xl object-contain"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="bg-brand-gradient flex size-12 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground"
                >
                  {initials}
                </span>
              )}
              <div>
                <p className="text-lg font-bold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground">
              {profile.bio}
            </p>
            <ul className="mt-6 flex gap-3">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.label];
                if (!Icon) return null;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={cn(
                        "inline-flex size-10 items-center justify-center rounded-lg border text-muted-foreground transition-all duration-200 motion-reduce:transition-none",
                        "hover:-translate-y-0.5 hover:border-primary hover:text-primary motion-reduce:hover:translate-y-0",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      )}
                    >
                      <Icon aria-hidden="true" className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigate column */}
          <nav aria-label="Footer">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {siteLinks.map((link) => (
                <NavLink key={link.href} label={link.label} href={link.href} />
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <CopyEmailButton email={profile.email} />
              </li>
              <li className="flex items-center gap-2.5 font-medium text-muted-foreground">
                <MapPin aria-hidden="true" className="size-4 text-primary" />
                {profile.location}
              </li>
              <li>
                <span className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs">
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full bg-emerald-500"
                  />
                  {profile.availability}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
