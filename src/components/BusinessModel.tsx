'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const UnicornScene = dynamic(() => import('unicornstudio-react'), { ssr: false });

/* ── Reusable Unicorn background wrapper ── */
export function UnicornBg({ projectId, opacity = 0.4 }: { projectId: string; opacity?: number }) {
  return (
    <div className="unicorn-bg-wrapper">
      <div style={{ opacity, position: 'absolute', inset: 0 }}>
        <UnicornScene
          projectId={projectId}
          width="100%" height="100%"
          scale={1} dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.12/dist/unicornStudio.umd.js"
        />
      </div>
      <div className="unicorn-bg-mask" />
    </div>
  );
}

/* ── Business model cards data ── */
const biz = [
  {
    title: 'Actuarial MEL Modeling (60%)',
    body: 'We quantify AI risk using Modified Expected Loss—the precise actuarial standard required by underwriters to issue AI liability insurance business plans.',
  },
  {
    title: 'Insurance Premium Layer (60%)',
    body: 'Every TRUSCOR rating serves as the foundational data layer for insurers. We convert technical vulnerabilities into concrete, insurable premiums.',
  },
  {
    title: 'M&A Due Diligence (60%)',
    body: 'During acquisitions, acquirers urgently need quantified AI risk exposure. TRUSCOR delivers a board-ready financial report that dictates deal valuation.',
  },
  {
    title: 'S.O.V.A Testing Tech (40%)',
    body: 'Our proprietary Semantic Offensive Vulnerability Analysis (S.O.V.A) engine runs continuous, adversarial probing against deployed AI endpoints.',
  },
  {
    title: 'Jarvis Autonomous Probes (40%)',
    body: 'Fully automated, zero-integration stress testing. Jarvis simulates 2,000+ data leakage and manipulation vectors without human intervention.',
  },
  {
    title: 'Continuous Tech Moat (40%)',
    body: 'AI models drift daily. Our SDK embeds deep inside CI/CD pipelines to detect behavioral drift, maintaining an always-current technical risk posture.',
  },
];

function FlatCard({ title, body, delay }: { title: string; body: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: '#070707',
        border: '1px solid #1a1a1a',
        borderRadius: '12px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'left'
      }}
    >
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f5f5f5', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#888888', lineHeight: 1.6 }}>
        {body}
      </p>
    </motion.div>
  );
}
export default function BusinessModel() {
  return (
    <section id="platform" className="section" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
      <UnicornBg projectId="IDDrSABfSnUWX3clRkX0" opacity={0.38} />
      <div className="section-blend-top" />
      <div className="section-blend-bottom" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }} 
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-80px" }} 
            transition={{ duration: 1.1, ease: [0.16,1,0.3,1] }}>
            <div className="section-label">Solutions</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Designed for<br />
              <span className="text-gradient-silver">underwriters and CFOs.</span>
            </h2>
            <p style={{ color: '#666666', lineHeight: 1.7, fontSize: '1rem', maxWidth: '420px' }}>
              TRUSCOR provides the definitive risk score for AI, enabling informed decisions and secure deployments.
              The FICO Score equivalent for the $400B enterprise AI deployment wave.
            </p>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: 'blur(8px)' }} 
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-80px" }} 
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16,1,0.3,1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              padding: '1rem 1.25rem',
              borderRadius: '12px',
              border: '1px solid #1a1a1a',
              background: '#080808',
            }}>
              <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.65rem', color: '#4d4d4d', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Rating Composition
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div style={{ borderRadius: '8px', background: '#3d3d3d', height: '8px' }} />
                <div style={{ borderRadius: '8px', background: '#1c1c1c', height: '8px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#707070' }}>
                <span>60% Finance / Actuarial / Insurance</span>
                <span>40% S.O.V.A/Jarvis Tech</span>
              </div>
            </div>
            {[
              { metric: '$400B', desc: 'Enterprise AI deployment market by 2027' },
              { metric: '2,000+', desc: 'Adversarial probes per audit session' },
              { metric: '24h', desc: 'From endpoint to SRS certificate' },
              { metric: '850', desc: 'Maximum Semantic Risk Score, insurer-grade' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1.5rem', alignItems: 'center',
                padding: '1.1rem 1.25rem', borderRadius: '12px',
                border: '1px solid #151515',
                background: '#050505',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#262626'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#151515'; }}>
                <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', flexShrink: 0, minWidth: '80px' }}>{s.metric}</div>
                <div style={{ fontSize: '0.82rem', color: '#616161', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Business model flat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {biz.map((card, i) => (
            <FlatCard key={i} title={card.title} body={card.body} delay={i * 0.08} />
          ))}
        </div>

        {/* Bottom scroll cue */}
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
