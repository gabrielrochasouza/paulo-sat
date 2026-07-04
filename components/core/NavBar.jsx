import React from 'react';

/** Sticky top navigation bar with wordmark, links and a primary CTA. */
export function NavBar({ links = [], ctaLabel = 'Chamar no WhatsApp', ctaHref = '#' }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--color-brand-deep)',
        }}>
          <img src="../../assets/paulo-sat-mark.svg" width={30} height={30} alt="" />
          PAULO SAT
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 15, fontWeight: 500, color: 'var(--color-text-muted)' }}>
          {links.map((l) => <a key={l.label} href={l.href} style={{ textDecoration: 'none', color: 'inherit' }}>{l.label}</a>)}
        </div>
        <a href={ctaHref} target="_blank" rel="noopener" style={{
          background: 'var(--color-accent)', color: 'var(--color-accent-on)', padding: '10px 20px',
          borderRadius: 'var(--radius-pill)', fontWeight: 700, fontSize: 14.5, textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
        }}>{ctaLabel}</a>
      </div>
    </nav>
  );
}
