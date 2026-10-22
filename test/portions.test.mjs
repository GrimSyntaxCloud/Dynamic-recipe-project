import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { scaleQuantity } from "../js/portions.mjs";
test("sandwich flour halves correctly, and thirds retain exact fractions", () => {
  assert.equal(scaleQuantity("1 1/2", 0.5), "3/4");
  assert.equal(scaleQuantity("2/3", 0.5), "1/3");
  assert.equal(scaleQuantity("2/3", 2), "1 1/3");
  assert.equal(scaleQuantity("1/4", 0.5), "1/8");
});
test("all three recipe quantities return exactly to the original after any selection", () => {
  for (const path of [
    "recipe/beef/chili/chili.html",
    "recipe/chicken/chickenBroc/chickenBroc.html",
    "recipe/chicken/chickenSandwich/chickenSandwich.html",
  ]) {
    const html = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
    const quantities = [...html.matchAll(/data-quantity="([^"]+)"/g)].map(
      (match) => match[1],
    );
    assert.ok(quantities.length >= 10);
    for (const quantity of quantities) {
      for (const scale of [0.5, 2, 1, 0.5, 1])
        assert.ok(scaleQuantity(quantity, scale));
      assert.equal(scaleQuantity(quantity, 1), quantity);
    }
  }
});
test("all serving sizes match original, half and double batches", () => {
  for (const original of [6, 3, 4]) {
    assert.equal(scaleQuantity(String(original), 2), String(original * 2));
    assert.equal(
      scaleQuantity(String(original), 0.5),
      original === 3 ? "1 1/2" : String(original / 2),
    );
  }
});
test("invalid scaling and malformed fractions cannot update the UI", () => {
  assert.throws(() => scaleQuantity("1", 3), RangeError);
  assert.throws(() => scaleQuantity("1/0", 1), TypeError);
  assert.throws(() => scaleQuantity("nope", 1), TypeError);
});
