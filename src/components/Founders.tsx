'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UnicornBg } from './BusinessModel';
import Image from 'next/image';

const founders = [
  {
    name: 'Ankush Singh Rajput',
    title: 'Founder & CEO, Hy Cloud',
    role: 'Concept · IP architecture · Commercial vision',
    metric1: { val: 'Scaler', label: 'School of Tech' },
    metric2: { val: 'BITS', label: 'Pilani' },
    about: '',
    contact: 'ankushsingh21123@gmail.com',
    github: 'https://github.com/ankushsingh21123-blip',
    image: '/founder2.png',
  },
];

const milestones = [
  { year: '2023', event: 'SCORAI incorporated — AI Act mandate identified' },
  { year: '2024', event: 'Jarvis probe engine v1 — 500+ adversarial tests' },
  { year: '2025', event: 'First SRS certificate issued — Grade A, insurer validated' },
  { year: '2026', event: 'Series A readiness — $400B market entry' },
];

export default function Founders() {
  return (
    <section id="founders" className="section" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
      <UnicornBg projectId="wfS84OduQfdlQR41YE3g" opacity={0.38} />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Leadership</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.08, marginBottom: '1.25rem' }}>
            Built by practitioners,<br />
            <span className="text-gradient-silver">not theorists.</span>
          </h2>
          <p style={{ color: '#616161', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65, fontSize: '0.95rem' }}>
            SCORAI was founded to solve the AI risk quantification problem from first principles.
          </p>
        </motion.div>

        {/* Founder cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '4rem', maxWidth: '520px', margin: '0 auto 4rem auto' }}>
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: i * 0.15, ease: [0.16,1,0.3,1] }}
              style={{
                padding: '1.3rem',
                borderRadius: '16px',
                border: '1px solid #1a1a1a',
                background: '#080808',
              }}>
              <div className="responsive-flex-row" style={{ gap: '1.25rem', alignItems: 'start' }}>
                <div style={{ position: 'relative', height: 145, width: 120, borderRadius: 14, overflow: 'hidden', border: '1px solid #262626', flexShrink: 0 }}>
                  <Image src={f.image} alt={f.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.2rem' }}>{f.name}</h3>
                  <div style={{ fontSize: '0.75rem', color: '#8f8f8f', marginBottom: '0.25rem' }}>{f.title}</div>
                  <div style={{ fontSize: '0.69rem', color: '#525252', fontFamily: 'JetBrains Mono,monospace', marginBottom: '0.7rem' }}>{f.role}</div>
                  <p style={{ fontSize: '0.78rem', color: '#8f8f8f', lineHeight: 1.55, marginBottom: '0.75rem' }}>
                    {f.about}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
                    {[f.metric1, f.metric2].map((m, j) => (
                      <div key={j}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono,monospace' }}>{m.val}</div>
                        <div style={{ fontSize: '0.58rem', color: '#525252', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <a href={`mailto:${f.contact}`} style={{ fontSize: '0.68rem', padding: '0.4rem 0.75rem', borderRadius: '999px', border: '1px solid #2e2e2e', color: '#a6a6a6' }}>
                      {f.contact}
                    </a>
                    <a href={f.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.68rem', padding: '0.4rem 0.75rem', borderRadius: '999px', border: '1px solid #2e2e2e', color: '#a6a6a6' }}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestones timeline */}
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '2rem', textAlign: 'center' }}>Company Timeline</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.0, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', paddingBottom: i < milestones.length - 1 ? '2rem' : 0 }}>
                {/* Timeline line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', flexShrink: 0 }} />
                  {i < milestones.length - 1 && (
                    <div style={{ width: '1px', flex: 1, background: '#141414', minHeight: '2rem' }} />
                  )}
                </div>
                <div style={{ paddingTop: '0' }}>
                  <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.68rem', color: '#474747', marginBottom: '0.25rem', letterSpacing: '0.08em' }}>{m.year}</div>
                  <div style={{ fontSize: '0.88rem', color: '#a6a6a6', lineHeight: 1.5 }}>{m.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){#founders .container > div:nth-child(2){grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
