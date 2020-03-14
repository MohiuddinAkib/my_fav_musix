export default function(text: string, limit: number): string {
  // Make sure an element and number of items to truncate is provided
  if (!text || !limit) throw new Error("Please provide a text");

  const shortened = text.indexOf(" ", limit);

  return shortened === -1 ? text : text.substring(0, shortened) + "...";
}
