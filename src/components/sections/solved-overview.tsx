import { ArrowUpRight } from "lucide-react";
import { dsa } from "@/data/dsa";

const difficulties = [
  { key: "easy", label: "Easy", color: "#10b981" },
  { key: "medium", label: "Medium", color: "#f59e0b" },
  { key: "hard", label: "Hard", color: "#ef4444" },
] as const;

export function SolvedOverview() {
  const { solved } = dsa;

  const easyEnd = (solved.easy / solved.total) * 100;
  const mediumEnd = easyEnd + (solved.medium / solved.total) * 100;
  const ring = `conic-gradient(#10b981 0 ${easyEnd}%, #f59e0b ${easyEnd}% ${mediumEnd}%, #ef4444 ${mediumEnd}% 100%)`;

  return (
    <div className="rounded-2xl border bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">Overview</h3>
        <a
          href={dsa.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          View {dsa.platform} profile
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-8">
        <div
          role="img"
          aria-label={`${solved.total} problems solved`}
          className="grid size-36 shrink-0 place-items-center rounded-full"
          style={{ background: ring }}
        >
          <div className="grid size-28 place-items-center rounded-full bg-card text-center">
            <div>
              <p className="text-3xl font-semibold leading-none">
                {solved.total}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">Solved</p>
            </div>
          </div>
        </div>

        <ul className="min-w-44 flex-1 space-y-2">
          {difficulties.map(({ key, label, color }) => (
            <li
              key={key}
              className="flex items-center justify-between rounded-lg bg-foreground/5 px-4 py-2 text-sm"
            >
              <span className="font-medium" style={{ color }}>
                {label}
              </span>
              <span className="font-semibold">{solved[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
