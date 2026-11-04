const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatMonth(value: string): string {
  const [year, month] = value.split("-");
  return `${months[Number(month) - 1]} ${year}`;
}
