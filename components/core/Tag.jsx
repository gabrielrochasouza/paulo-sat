import React from 'react';

/** Small pill label — used for solution tags, filters, and status chips. */
export function Tag({ children, tone = 'default' }) {
  const tones = {
    default: { background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff' },
    light: { background: 'var(--color-surface-tint)', border: '1px solid var(--color-border)', color: 'var(--color-brand-strong)' },
    accent: { background: 'var(--yellow-300)', border: '1px solid var(--yellow-500)', color: 'var(--yellow-on)' },
  };
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13.5,
      ...tones[tone],
    }}>{children}</span>
  );
}
