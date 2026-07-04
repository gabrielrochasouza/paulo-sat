import React, { useState } from 'react';

/** Single expand/collapse row for FAQ-style lists. Only one open at a time when used in a list. */
export function AccordionItem({ question, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--color-surface)',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
          padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'var(--font-display)', fontSize: 15.5, fontWeight: 600, color: 'var(--color-text)',
        }}
      >
        {question}
        <span style={{
          fontSize: 20, color: 'var(--yellow-700)', flexShrink: 0, marginLeft: 14,
          transition: 'transform .2s ease', transform: open ? 'rotate(45deg)' : 'none',
        }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 400 : 0, overflow: 'hidden', transition: 'max-height .25s ease' }}>
        <p style={{ padding: '0 20px 18px', fontSize: 14.5, color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
          {children}
        </p>
      </div>
    </div>
  );
}
