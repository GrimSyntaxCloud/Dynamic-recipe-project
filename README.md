# Dynamic Recipes

An early coursework site with three recipes: crockpot chili, chicken with broccoli, and a fried chicken sandwich. Each recipe has original, half, and double portion controls plus printing. The existing photographs and recipe content are retained.

The refreshed static demo replaces placeholder navigation with real recipe links, removes unfinished recipe cards and visitor tracking, repairs print/portion controls, and includes a local Bootstrap CSS file with its MIT license. No jQuery, tracking cookies, accounts, database, or paid APIs are required. Fictional review text is labeled.

## Preview and validate

Use Python 3 (no package installation):

```sh
python3 scripts/build.py
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. The build packages only static public assets and checks local page links, fragments, images, scripts, and CSS resources. Relative paths work beneath a GitHub Pages repository URL.

## GitHub Pages

Pull requests and pushes to `master` run validation. Publishing is available manually and on pushes to `master`:

1. In repository **Settings → Pages**, select **GitHub Actions** as the source.
2. In **Actions → Publish GitHub Pages**, run the workflow on `master`.
3. Use the deployment URL returned by GitHub after it succeeds; then update the repository homepage and portfolio.

This public repository can use free GitHub Pages. No Azure subscription, database allocation, or payment method is needed. Changes to `master` publish after validation. Live demo: https://grimsyntaxcloud.github.io/Dynamic-recipe-project/
