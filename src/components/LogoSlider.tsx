'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos1 = [
  'Goldman Sachs', 'Swiss Re', 'Zurich Insurance', 'Munich Re',
  'BlackRock', 'J.P. Morgan', 'Deloitte AI', 'Allianz',
];
const logos2 = [
  'HDFC Bank', 'AWS Bedrock', 'Accenture AI', 'KPMG Risk',
  'Aon Digital', 'Willis Towers', 'SBI Ventures', 'PwC AI Lab',
];

function LogoItem({ name }: { name: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
      padding: '0.5rem 1.25rem', borderRadius: '9999px',
      border: '1px solid #121212',
      background: '#060606',
      whiteSpace: 'nowrap',
      cursor: 'default',
      transition: 'all 0.25s ease',
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = '#2e2e2e';
        (e.currentTarget as HTMLElement).style.background = '#0f0f0f';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = '#121212';
        (e.currentTarget as HTMLElement).style.background = '#060606';
      }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4d4d4d' }} />
      <span style={{
        fontSize: '0.78rem', fontWeight: 600,
        color: '#737373',
        letterSpacing: '-0.01em', fontFamily: 'var(--font-heading)',
      }}>{name}</span>
    </div>
  );
}

function Track({ logos, reverse = false }: { logos: string[]; reverse?: boolean }) {
  const doubled = [...logos, ...logos];
  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      {/* Fade masks */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: 0, width: '120px', zIndex: 2,
        background: 'linear-gradient(to right, #000, transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, bottom: 0, right: 0, width: '120px', zIndex: 2,
        background: 'linear-gradient(to left, #000, transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex', gap: '0.75rem',
        width: 'max-content',
        animation: reverse ? 'marquee-scroll-reverse 52s linear infinite' : 'marquee-scroll 44s linear infinite',
      }}>
        {doubled.map((name, i) => <LogoItem key={i} name={name} />)}
      </div>
    </div>
  );
}

export default function LogoSlider() {
  return (
    <div style={{
      paddingBottom: '5rem',
      display: 'flex', flexDirection: 'column', gap: '0.75rem',
      overflow: 'hidden',
    }}>
      <Track logos={logos1} />
      <Track logos={logos2} reverse />
    </div>
  );
}
