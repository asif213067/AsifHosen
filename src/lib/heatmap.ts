export type HeatmapLevel = 0 | 1 | 2 | 3;

export function generateHeatmap(weeks: number, seed: number): HeatmapLevel[][] {
  let state = seed;

  const next = (): number => {
    state = (state * 9301 + 49297) % 233280;
    return state / 233280;
  };

  const level = (): HeatmapLevel => {
    const value = next();
    if (value > 0.82) return 3;
    if (value > 0.62) return 2;
    if (value > 0.38) return 1;
    return 0;
  };

  return Array.from({ length: weeks }, () => Array.from({ length: 7 }, level));
}
