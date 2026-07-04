export interface ButtonProps {
  /** Visual style. primary = yellow fill (single most important action per screen). */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md';
  /** Optional trailing icon node (arrow, WhatsApp glyph, etc). */
  icon?: React.ReactNode;
  children: React.ReactNode;
  /** If present, renders as <a target="_blank">; otherwise a <button>. */
  href?: string;
  onClick?: () => void;
}

/**
 * @startingPoint section="Components" subtitle="Pill CTA button — primary/secondary/ghost/outline" viewport="320x80"
 */
