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
