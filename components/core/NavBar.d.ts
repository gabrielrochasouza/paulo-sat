export interface NavBarLink {
  label: string;
  href: string;
}
export interface NavBarProps {
  links?: NavBarLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * @startingPoint section="Components" subtitle="Sticky nav with wordmark + CTA" viewport="700x70"
 */
