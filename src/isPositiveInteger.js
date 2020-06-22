export function isPositiveInteger(number) {
  return +number <= 0 || !isFinite(Number(+number)) || +number % 1 !== 0;
}
