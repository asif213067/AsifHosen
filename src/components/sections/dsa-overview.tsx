import { SectionHeading } from "@/components/section-heading";
import { SolvedOverview } from "@/components/sections/solved-overview";
import { SubmissionHeatmap } from "@/components/sections/submission-heatmap";
import { dsa } from "@/data/dsa";

const stats = [
  { label: "Max rating", value: dsa.maxRating.toLocaleString("en-US") },
  { label: "Level", value: dsa.level, gradient: true },
  {
    label: "Global ranking",
    value: dsa.globalRanking.toLocaleString("en-US"),
  },
  { label: "Contests attended", value: String(dsa.contestsAttended) },
];

export function DsaOverview() {
  return (
    <section id="dsa" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Problem solving"
          title="Data structures & algorithms"
        />

        <div className="grid grid-cols-2 gap-6 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p
                className={
                  stat.gradient
                    ? "text-gradient text-2xl font-bold"
                    : "text-2xl font-bold"
                }
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <SolvedOverview />
          <SubmissionHeatmap />
        </div>
      </div>
    </section>
  );
}
