import React from 'react';

/** Rounded icon container with tinted background — precedes benefit card titles. */
export function IconBadge({ children, size = 44 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: 12,
      background: 'var(--color-surface-tint)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {children}
    </div>
  );
}
