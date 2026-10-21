document.querySelectorAll("[data-action]").forEach((control) => {
  control.addEventListener(
    control.tagName === "SELECT" ? "change" : "click",
    () => {
      const action = control.dataset.action;
      if (action === "printPage") window.print();
      else if (
        [
          "adjustRecipe",
          "adjustRecipeOriginal",
          "adjustRecipeHalf",
          "adjustRecipeDouble",
        ].includes(action) &&
        typeof window[action] === "function"
      )
        window[action]();
    },
  );
});
document.querySelectorAll('[data-toggle="collapse"]').forEach((button) =>
  button.addEventListener("click", () => {
    const target = document.querySelector(button.dataset.target);
    if (target)
      button.setAttribute("aria-expanded", target.classList.toggle("show"));
  }),
);
