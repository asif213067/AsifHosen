interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-sm text-primary">{eyebrow}</p>
      <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="bg-brand-gradient mx-auto mt-4 h-1 w-16 rounded-full" />
    </div>
  );
}

