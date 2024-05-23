export function formatDate(publishedAt: string): string {
  const date = new Date(publishedAt);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
}
