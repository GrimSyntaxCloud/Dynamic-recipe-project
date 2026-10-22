import { scaleQuantity } from "./portions.mjs";
const motionButton = document.querySelector(".motion-toggle");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
let paused = reducedMotion.matches;
function updateMotion() {
  document.documentElement.dataset.motion = paused ? "paused" : "playing";
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.textContent = paused ? "Motion paused" : "Pause motion";
}
motionButton.addEventListener("click", () => {
  paused = !paused;
  updateMotion();
});
reducedMotion.addEventListener("change", (event) => {
  paused = event.matches;
  updateMotion();
});
updateMotion();
const quantities = document.querySelectorAll("[data-quantity]");
document.querySelectorAll("[data-scale]").forEach((button) => {
  button.addEventListener("click", () => {
    const scale = Number(button.dataset.scale);
    quantities.forEach((quantity) => {
      quantity.textContent = scaleQuantity(quantity.dataset.quantity, scale);
    });
    document
      .querySelectorAll("[data-scale]")
      .forEach((control) =>
        control.setAttribute("aria-pressed", String(control === button)),
      );
    const label =
      scale === 0.5
        ? "Half recipe"
        : scale === 2
          ? "Double recipe"
          : "Original recipe";
    document.querySelector(".portion-status").textContent =
      `${label} · ${document.querySelector("#servSize").textContent} servings`;
  });
});
document
  .querySelector(".print-button")
  ?.addEventListener("click", () => window.print());
// Browsers may omit closed details from print; open them only for the print session.
let closedDetails = [];
window.addEventListener("beforeprint", () => {
  closedDetails = [...document.querySelectorAll("main details:not([open])")];
  closedDetails.forEach((details) => {
    details.open = true;
  });
});
window.addEventListener("afterprint", () => {
  closedDetails.forEach((details) => {
    details.open = false;
  });
  closedDetails = [];
});
