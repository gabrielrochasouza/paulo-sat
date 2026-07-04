import React from 'react';

/** White surface card with hairline border; lifts on hover. Base unit for benefit/pain lists. */
export function Card({ children, padding = 26, hover = true }) {
  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding,
        transition: hover ? 'box-shadow .2s ease, transform .2s ease' : undefined,
      }}
      onMouseEnter={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        if (!hover) return;
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      {children}
    </div>
  );
}
