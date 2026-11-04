import { dsa } from "@/data/dsa";
import { generateHeatmap, type HeatmapLevel } from "@/lib/heatmap";
import { cn } from "@/lib/utils";

const levelClass: Record<HeatmapLevel, string> = {
  0: "bg-foreground/10",
  1: "bg-primary/30",
  2: "bg-primary/55",
  3: "bg-primary",
};

const weeks = generateHeatmap(52, 7);

export function SubmissionHeatmap() {
  return (
    <div className="rounded-2xl border bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold">
          {dsa.submissionsPastYear} submissions in the past year
        </h3>
        <p className="text-sm text-muted-foreground">
          Active days:{" "}
          <span className="font-semibold text-foreground">
            {dsa.activeDays}
          </span>
          {" · "}Max streak:{" "}
          <span className="font-semibold text-foreground">{dsa.maxStreak}</span>
        </p>
      </div>

      <div className="mt-5 overflow-x-auto pb-2">
        <div
          role="img"
          aria-label={`${dsa.submissionsPastYear} submissions in the past year`}
          className="grid min-w-140 auto-cols-fr grid-flow-col grid-rows-7 gap-0.75"
        >
          {weeks.flatMap((week, weekIndex) =>
            week.map((level, dayIndex) => (
              <span
                key={`${weekIndex}-${dayIndex}`}
                className={cn("aspect-square rounded-[3px]", levelClass[level])}
              />
            )),
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-2 text-xs text-muted-foreground">
        <span>Less</span>
        {([0, 1, 2, 3] as const).map((level) => (
          <span
            key={level}
            className={cn("size-3 rounded-[3px]", levelClass[level])}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
