export function random_range(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}