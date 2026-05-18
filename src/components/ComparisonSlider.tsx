'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UnicornBg } from './BusinessModel';

const before = [
  'No structured risk framework',
  'Manual ad-hoc red-teaming',
  'Qualitative security reports',
  'No insurance coverage pathway',
  'Unknown regulatory liability',
  'No quantified board exposure',
];

const after = [
  'Semantic Risk Score (300–850)',
  '2,000+ autonomous probe suite',
  'Actuarial-grade MEL report',
  'Insurer-ready SRS certificate',
  'EU AI Act & RBI mapped',
  'Dollar-quantified board brief',
];

export default function ComparisonSlider() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <UnicornBg projectId="nZgOGpWhFjAWlj17CPxx" opacity={0.32} />
      <div className="section-blend-top" />
      <div className="section-blend-bottom" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Before vs After</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.08, marginBottom: '1rem' }}>
            Replace ambiguity with<br />
            <span className="text-gradient-silver">a definitive score.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '3.5rem', alignItems: 'start', maxWidth: '860px', margin: '0 auto' }}>
          {/* Before */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem',
              padding: '0.75rem 1.25rem', borderRadius: '10px',
              background: '#060606', border: '1px solid #0f0f0f',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#404040' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#595959', fontFamily: 'JetBrains Mono,monospace' }}>Before TRUSCOR</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.0, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.8rem',
                    padding: '0.875rem 1.1rem', borderRadius: '10px',
                    border: `1px solid ${hovered === i ? '#1a1a1a' : '#0a0a0a'}`,
                    background: hovered === i ? '#050505' : 'transparent',
                    transition: 'all 0.25s',
                    cursor: 'default',
                  }}>
                  {/* X icon — grey, no red */}
                  <div style={{
                    width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                    background: '#0d0d0d', border: '1px solid #1a1a1a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', color: '#4d4d4d',
                  }}>✗</div>
                  <span style={{ fontSize: '0.845rem', color: '#4d4d4d', lineHeight: 1.4 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', background: '#0f0f0f', alignSelf: 'stretch', margin: '0 auto' }} />

          {/* After */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem',
              padding: '0.75rem 1.25rem', borderRadius: '10px',
              background: '#080808', border: '1px solid #1a1a1a',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #808080' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#999999', fontFamily: 'JetBrains Mono,monospace' }}>After TRUSCOR</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {after.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.0, delay: i * 0.08 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.8rem',
                    padding: '0.875rem 1.1rem', borderRadius: '10px',
                    border: `1px solid ${hovered === i ? '#2e2e2e' : '#121212'}`,
                    background: hovered === i ? '#0d0d0d' : '#050505',
                    transition: 'all 0.25s',
                    cursor: 'default',
                  }}>
                  {/* Check icon — white, no green */}
                  <div style={{
                    width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                    background: '#1a1a1a', border: '1px solid #404040',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6rem', color: '#fff',
                  }}>✓</div>
                  <span style={{ fontSize: '0.845rem', color: '#b3b3b3', lineHeight: 1.4 }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
