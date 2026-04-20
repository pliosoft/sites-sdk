export interface NavLink {
  label: string;
  href: string;
  current?: boolean;
}

export interface LayoutProps {
  title: string;
  description?: string;
  lang?: string;
  favicon?: string;
  ogImage?: string;
  themeColor?: string;
}

export interface NavProps {
  brand: string;
  brandHref?: string;
  links: NavLink[];
}

export interface FooterProps {
  brand: string;
  email?: string;
  url?: string;
  location?: string;
  year?: number | string;
  tagline?: string;
}

export interface ContactFormProps {
  endpoint: string;
  method?: 'POST' | 'GET';
  successMessage?: string;
  errorMessage?: string;
  submitLabel?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
}

export interface PoweredByProps {
  href?: string;
  label?: string;
}

/**
 * Props for the PreviewBanner component.
 *
 * The banner reads its content from build-time env vars
 * (PLIOSOFT_PREVIEW, PLIOSOFT_PREVIEW_PR, PLIOSOFT_PREVIEW_BRANCH,
 *  PLIOSOFT_PREVIEW_SHA, PLIOSOFT_PREVIEW_JWT, PLIOSOFT_PREVIEW_API)
 * set by the Pliosoft sites-app build pipeline. There are currently no
 * runtime props — this interface is reserved for future overrides.
 */
export type PreviewBannerProps = Record<string, never>;
