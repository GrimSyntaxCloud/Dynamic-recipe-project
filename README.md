# Dynamic Recipes

A colorful, photo-led food magazine built from Andres Macias’s original recipe coursework. Explore crockpot chili, chicken with broccoli and a fried chicken sandwich; adjust ingredient quantities, follow collapsible steps and print a clean kitchen copy.

[Open the free live demo](https://grimsyntaxcloud.github.io/Dynamic-recipe-project/)

## What it does

- Three original recipes and their existing photographs, with working index, about and nested recipe URLs.
- Original, half and double portions update ingredients and serving counts from the original quantities. The sandwich’s flour and chicken quantities inside directions also stay in sync.
- Accessible buttons, keyboard-operated recipe disclosures, a live portion announcement and visible focus states.
- Responsive magazine layouts in cobalt, tomato and butter yellow, with small hover effects and rotating decorative accents. Motion can be paused and respects reduced-motion preferences.
- Print styling opens collapsed ingredients and steps for printing, then restores their previous state. The selected portion size is included.

The recipes and preparation times are retained from the coursework. Portion changes scale quantities, not cooking times; adjust cookware or cook in batches. This is a frontend demonstration, with no accounts, database, persistence, analytics or paid services.

## How it works

The five HTML pages share native CSS and a small JavaScript module. `js/portions.mjs` scales mixed numbers and fractions without compounding rounding errors between selections. `js/demo.js` connects those values to the controls, handles motion preferences and preserves disclosure state around printing. The pages use system fonts and local images, with no runtime package or CDN dependencies.

The redesign also fixes an original arithmetic bug: half of 1½ cups of sandwich flour now correctly displays ¾ cup instead of ⅔ cup. The pickle quantity now participates in portion scaling, and the full sandwich batch is cooked in batches rather than leaving a fixed remaining-piece count in the directions.

## Preview and validate

Use Python 3 for the static build and server. No package installation is needed:

```sh
python3 scripts/build.py
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. The build packages only static public assets and checks local page links, fragments, images, scripts and CSS resources. All links are relative so the site also works under the GitHub Pages repository path.

Run the regression checks with Node.js 22 or later:

```sh
node --test test/*.mjs
```

The tests cover fractional portions, original/half/double servings, every recipe’s quantity reset, invalid scaling and preserving closed sections around printing. Manual browser checks cover desktop, narrow screens, keyboard controls, loaded images and motion pause.

## Deployment and security

Pull requests and pushes to `master` run the build and regression tests. Successful publishing on `master` uses the existing GitHub Actions Pages workflow. Repository Settings → Pages uses **GitHub Actions** as its source. Publishing can also be triggered manually from **Publish GitHub Pages**.

This public repository uses free GitHub Pages. It needs no Azure subscription, database allocation, credentials or payment method. The site does not load Bootstrap, jQuery, Google Fonts, remote scripts or tracking code. Dependabot monitors GitHub Actions; there is no application dependency manifest to audit.

## Project history

This is a refreshed version of Andres’s original Dynamic Recipes coursework, not the separate Fold & Fork restaurant-ordering project. The original recipe credits and photographs remain. Andres directed the visual design and collaborated with AI on implementation, accessibility improvements and testing.
