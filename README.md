# Khoai Store website

Static HTML, CSS, and JavaScript storefront for creative tools and games. Deploy from the repository root with GitHub Pages.

## Pages

- `index.html`: app collection and upcoming concepts.
- `apps/ar-drawing.html`: AR Drawing product details, interactive lesson preview, topic filters, and collection illustration.
- `apps/mini-chess-puzzle.html`: Mini Chess Puzzle.
- `support.html`: contact and FAQ.
- `privacy.html`: directory of app-specific policies.
- `privacy-policy.html`: existing policy URL retained for compatibility.

Shared styling is in `store.css`; app filtering is in `store.js`. Drawing-specific interactions are in `drawing-studio.js`. App assets are in `assets/`, with lesson and template examples in `assets/studio/`. The site keeps the original Khoai Store logo.

Lesson steps, topic filters and collection tabs run locally in the browser. Collection content is illustrative and does not upload or store personal drawings. Draw Music is an unreleased concept without a download CTA.

## Before changing privacy content

Read `docs/privacy-review.md`. Compare each app policy against its live configuration and Google Play Data safety declaration. Design review does not validate the existing game policy's SDK claims.

## GitHub Pages

Publish branch `main`, folder `/ (root)`. Keep relative URLs so root and project sites both work. Use `privacy.html` for the policy directory and preserve `privacy-policy.html` for existing links.
