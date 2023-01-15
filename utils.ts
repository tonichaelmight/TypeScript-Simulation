export function getRandomInt(start: number, range?: number) {
  if (range === undefined) {
    range = start;
    start = 0;
  }
  return Math.floor(Math.random() * range + start);
}