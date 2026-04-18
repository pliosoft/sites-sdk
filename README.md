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

Prop types are exported from the package root:

```ts
import type { NavLink, LayoutProps, ContactFormProps } from '@pliosoft/sites-sdk';
```

## Portability

Every customer repo in the pliosoft org uses this package through normal npm. If your repo is transferred to your own ownership, nothing changes — the package stays public and MIT-licensed. You keep consuming it, or fork it, or swap it out. That's the point.

## License

MIT — see [LICENSE](./LICENSE).
