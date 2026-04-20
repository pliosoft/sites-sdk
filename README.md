# @pliosoft/sites-sdk

Shared Astro components, layouts, and design tokens for sites hosted on [Pliosoft](https://www.pliosoft.com).

Customer sites on Pliosoft's hosted platform consume this package to get a consistent, accessible baseline — layout, navigation, forms, and a warm, editorial design system — while owning their own content. The package is MIT-licensed and public forever: if you transfer your site repo out of the pliosoft org, you can keep using this package with zero changes.

## Install

```sh
npm install @pliosoft/sites-sdk astro
```

`astro` is a peer dependency — the SDK ships no runtime of its own and works with any Astro 4 or 5 project.

## Usage

```astro
---
// src/pages/index.astro
import Layout from '@pliosoft/sites-sdk/components/Layout.astro';
import Nav from '@pliosoft/sites-sdk/components/Nav.astro';
import Footer from '@pliosoft/sites-sdk/components/Footer.astro';

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
---
<Layout title="Acme Clinic" description="Family medicine in Yellowknife.">
  <Nav slot="header" brand="Acme" links={links} />
  <main><h1>Welcome</h1></main>
  <Footer slot="footer" brand="Acme" email="hello@acme.com" location="Yellowknife, CA" />
</Layout>
```

## Re-theming

Tokens are plain CSS custom properties on `:root`. Override any subset in a stylesheet loaded after the SDK:

```css
/* src/styles/brand.css */
:root {
  --paper:     #0f1115;
  --ink:       rgba(255, 255, 255, 0.92);
  --ink-solid: #ffffff;
  --highlight: #46d4a1;
}
```

```astro
---
import Layout from '@pliosoft/sites-sdk/components/Layout.astro';
import '../styles/brand.css';
---
```

See [`src/tokens.css`](./src/tokens.css) for the full token list (color, typography, spacing, shadows, motion).

## Components

| Component | Subpath |
|---|---|
| `Layout` | `@pliosoft/sites-sdk/components/Layout.astro` |
| `Nav` | `@pliosoft/sites-sdk/components/Nav.astro` |
| `ContactForm` | `@pliosoft/sites-sdk/components/ContactForm.astro` |
| `Footer` | `@pliosoft/sites-sdk/components/Footer.astro` |
| `PoweredBy` | `@pliosoft/sites-sdk/components/PoweredBy.astro` |
| `PreviewBanner` | `@pliosoft/sites-sdk/components/PreviewBanner.astro` |

Prop types are exported from the package root:

```ts
import type { NavLink, LayoutProps, ContactFormProps } from '@pliosoft/sites-sdk';
```

## PreviewBanner — Pliosoft preview deploys

The Pliosoft platform builds a per-PR preview of every customer site at `<slug>-preview.pliosoft.co`. The `PreviewBanner` component renders Pliosoft's branded approval UI on those preview builds and renders **nothing** on production builds — it's safe to include unconditionally in your layout.

```astro
---
import PreviewBanner from '@pliosoft/sites-sdk/components/PreviewBanner.astro';
---
<body>
  <slot />
  <PreviewBanner />
</body>
```

The component reads its content (PR number, branch, sha, JWT) from build-time env vars set by Pliosoft's build pipeline. There are no runtime props. If you've ejected your site from the platform, the env vars are never set, and the component is a no-op.

## Portability

Every customer repo in the pliosoft org uses this package through normal npm. If your repo is transferred to your own ownership, nothing changes — the package stays public and MIT-licensed. You keep consuming it, or fork it, or swap it out. That's the point.

## Releasing

Publishing is automated via GitHub Actions and [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/) — no static `NPM_TOKEN` is stored anywhere. The `production` environment requires a tag matching `v*` and (if configured) a manual approval before publish.

```sh
npm version patch              # bumps package.json + creates git tag
git push origin main --follow-tags
```

The workflow at `.github/workflows/publish.yml` runs on the new tag, exchanges a GitHub OIDC token for a short-lived npm token, builds, and publishes with provenance attestation.

If you ever need to bootstrap trusted publishing for a brand-new package name, the very first publish has to happen manually with `npm publish` from a logged-in maintainer's machine — npm only exposes the Trusted Publisher settings page after a package exists.

## License

MIT — see [LICENSE](./LICENSE).
