import React from 'react';

/** One entry in the stats strip below the hero (bold label + muted caption). */
export function StatItem({ label, caption }) {
  return (
    <div style={{ flex: 1, minWidth: 140, textAlign: 'center' }}>
      <b style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--color-brand-deep)' }}>{label}</b>
      <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{caption}</span>
    </div>
  );
}
