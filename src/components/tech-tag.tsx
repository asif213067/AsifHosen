interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="rounded-md border bg-primary/10 px-2.5 py-0.5 font-mono text-xs text-primary">
      {label}
    </span>
  );
}
