# Review instructions

This repo is `@pliosoft/sites-sdk` — a public, MIT-licensed Astro component library consumed via npm by customer sites. It ships no runtime of its own (Astro is a peer dep). Customer sites may be transferred out of the pliosoft org and keep using this package, so the public surface is a real contract.

## What Important (🔴) means here

Reserve Important for findings that would break consumers or ship a real defect:

- Breaking changes to the public surface without a version bump: the `exports` map in `package.json`, exported types from `src/index.ts`, component prop shapes, and documented CSS custom properties in `src/tokens.css` (customers override these).
- SSR-unsafe code: accessing `window`, `document`, `localStorage`, or other browser globals at module scope or during component render. Astro renders components server-side by default.
- Accessibility regressions in shipped components: missing or incorrect `aria-*`, landmark roles, labels on form controls, focus management, or keyboard operability.
- XSS / injection: unescaped interpolation into HTML, unsafe `set:html`, or prop values flowing into attributes like `href`/`src` without validation.
- Adding a runtime dependency. This package must stay peer-only; new entries under `dependencies` in `package.json` are Important. `devDependencies` and `peerDependencies` are fine.
- Changes to `files`, `exports`, `sideEffects`, `publishConfig`, or `engines` in `package.json` that would break install, tree-shaking, or provenance.

Style, naming, refactoring, and internal-only cleanup are Nit at most.

## Cap the nits

Report at most five Nits per review. If you found more, say "plus N similar items" in the summary instead of posting them inline. If everything you found is a Nit, lead the summary with "No blocking issues."

After the first review on a PR, suppress new nits and post Important findings only.

## Do not report

- Anything Biome or `tsc` already enforces: formatting, lint rules configured in `biome.json`, type errors. CI runs `npm run check && npm run typecheck`.
- Generated output under `dist/`, anything in `node_modules/`, and `package-lock.json`.
- Missing tests. This package has no test suite yet; don't flag its absence on every PR.
- README or doc polish unless the change actually makes the docs wrong.

## Always check

- New or changed component props are reflected in the exported types from `src/index.ts` and in the README component table.
- New CSS custom properties follow the naming and layering used in `src/tokens.css`; removed or renamed tokens are called out as a breaking change.
- Any JS that runs in the browser is scoped to a `<script>` block in a component, not module-level in a `.ts` file that would execute during SSR.
- Build script changes in `scripts/build.mjs` keep the `exports` map in sync with what's actually emitted to `dist/`.

## Verification bar

Behavior claims need a `file:line` citation in the source, not an inference from naming. If you're uncertain whether code runs server-side or client-side in Astro, say so rather than asserting.

## Summary shape

Open the review body with a one-line tally such as `2 important, 3 nits`. Lead with "No blocking issues" when there are no Important findings.
