import React from 'react';

/**
 * Primary call-to-action button. Yellow fill is reserved for the single most
 * important action on a screen (e.g. "Chamar no WhatsApp"); ghost variant is
 * for secondary actions on dark/colored backgrounds.
 */
export function Button({ variant = 'primary', size = 'md', icon, children, href, onClick }) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
    transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
    whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { padding: '10px 18px', fontSize: 14.5 },
    md: { padding: '15px 26px', fontSize: 15.5 },
  };
  const variants = {
    primary: {
      background: 'var(--color-accent)',
      color: 'var(--color-accent-on)',
      boxShadow: 'var(--shadow-cta)',
    },
    secondary: {
      background: 'var(--color-brand)',
      color: '#fff',
    },
    ghost: {
      background: 'rgba(255,255,255,0.12)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.4)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-brand-strong)',
      border: '1.5px solid var(--color-brand)',
    },
  };
  const style = { ...base, ...sizes[size], ...variants[variant] };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} style={style} target={href ? '_blank' : undefined} rel={href ? 'noopener' : undefined}>
      {children}
      {icon}
    </Tag>
  );
}
