/** Scale the original quantity, never the previously displayed quantity. */
export function scaleQuantity(quantity, scale) {
  if (![0.5, 1, 2].includes(scale))
    throw new RangeError("Unsupported portion size");
  let value = 0;
  for (const part of quantity.trim().split(/\s+/)) {
    const values = part.split("/").map(Number);
    if (
      values.some((v) => !Number.isFinite(v)) ||
      values.length > 2 ||
      values[1] === 0
    )
      throw new TypeError("Invalid quantity");
    value += values.length === 2 ? values[0] / values[1] : values[0];
  }
  const scaled = value * scale;
  const whole = Math.floor(scaled + 1e-9);
  const remainder = scaled - whole;
  if (Math.abs(remainder) < 1e-8) return String(whole);
  for (const denominator of [2, 3, 4, 6, 8, 12, 16, 24]) {
    const numerator = Math.round(remainder * denominator);
    if (Math.abs(remainder - numerator / denominator) < 1e-8)
      return `${whole ? `${whole} ` : ""}${numerator}/${denominator}`;
  }
  return String(Number(scaled.toFixed(3)));
}
