import React from 'react';

const cardStyle = {
  display: 'flex', flexDirection: 'column', gap: '0.5rem',
  padding: '1.25rem 1.25rem 1rem',
  borderRadius: '12px',
  border: '1px solid var(--ifm-color-emphasis-200)',
  background: 'var(--ifm-background-surface-color)',
  textDecoration: 'none',
  color: 'inherit',
  transition: 'box-shadow 0.15s, transform 0.15s',
};

export default function CardGrid({ cards }) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'1rem', marginTop:'1.5rem'}}>
      {cards.map(c => (
        <a
          key={c.href}
          href={c.href}
          style={cardStyle}
          onMouseEnter={e => { e.currentTarget.style.boxShadow='0 4px 16px rgba(0,0,0,0.12)'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='none'; }}
        >
          {c.icon && <span style={{fontSize:'2rem', lineHeight:1}}>{c.icon}</span>}
          <strong style={{color:'var(--ifm-color-primary)', fontSize:'1rem'}}>{c.title}</strong>
          {c.desc && <span style={{fontSize:'0.85rem', color:'var(--ifm-color-emphasis-700)', lineHeight:1.4}}>{c.desc}</span>}
        </a>
      ))}
    </div>
  );
}
