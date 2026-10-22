import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { scaleQuantity } from "../js/portions.mjs";
test("printing includes collapsed ingredients and steps, then restores the reading state", () => {
  const closed = [{ open: false }, { open: false }];
  const events = {};
  const motionButton = { setAttribute() {}, addEventListener() {} };
  const document = {
    documentElement: { dataset: {} },
    querySelector: (selector) =>
      selector === ".motion-toggle" ? motionButton : null,
    querySelectorAll: (selector) =>
      selector === "main details:not([open])" ? closed : [],
  };
  const source = readFileSync(
    new URL("../js/demo.js", import.meta.url),
    "utf8",
  ).replace(/^import .*;\n/, "");
  vm.runInNewContext(source, {
    document,
    scaleQuantity,
    matchMedia: () => ({ matches: true, addEventListener() {} }),
    window: {
      addEventListener: (name, handler) => {
        events[name] = handler;
      },
    },
  });
  assert.equal(document.documentElement.dataset.motion, "paused");
  events.beforeprint();
  assert.deepEqual(
    closed.map((item) => item.open),
    [true, true],
  );
  events.afterprint();
  assert.deepEqual(
    closed.map((item) => item.open),
    [false, false],
  );
});
