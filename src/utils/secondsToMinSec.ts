export default function(s: number): string {
  const minutes = Math.floor(s / 60),
    seconds = s - minutes * 60;

  return `${minutes}:${seconds.toFixed(0)}`;
}
