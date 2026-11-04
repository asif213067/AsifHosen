export interface SiteLink {
  label: string;
  href: string;
}

/**
 * Single source of truth for section anchor links.
 * Every href must match an existing <section> id on the page.
 */
export const siteLinks: SiteLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
];
