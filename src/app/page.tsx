import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function Home() {
  return (
    <main>
      <section className="mx-auto flex max-w-5xl items-center justify-between px-6 py-16">
        <h1 className="text-gradient text-5xl font-bold">Asif</h1>
        <ThemeToggle />
      </section>

      <section className="bg-section-gradient px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-xl border bg-card p-6 text-card-foreground">
          <h2 className="text-xl font-semibold">Experience</h2>
          <p className="text-muted-foreground">Theme token test card</p>
          <span className="bg-brand-gradient mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground">
            Download resume
          </span>
        </div>
      </section>
    </main>
  );
}
