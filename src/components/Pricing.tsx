'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Actuary Core',
    sub: 'Early adopter deal',
    price: '$4,999',
    period: '/audit',
    badge: null,
    desc: 'Finance-first AI rating built for startups seeking insurer confidence, audit defensibility, and credible capital conversations.',
    features: [
      '2,000 Jarvis probe battery',
      'Tier 1–4 audit coverage',
      'SRS certificate issued',
      '30-page board-ready PDF',
      'API badge (live)',
      'Email support',
    ],
  },
  {
    name: 'Insurance Growth',
    sub: 'Most popular',
    price: '$24,999',
    period: '/audit',
    badge: 'POPULAR',
    desc: 'Institutional package blending actuarial loss modeling and underwriter workflows for enterprise scale and M&A readiness.',
    features: [
      'Everything in Founders',
      'PML + MEL financial model',
      'Regulatory clause mapping',
      'M&A due diligence report',
      'Quarterly drift re-cert',
      'Dedicated audit director',
      'Insurer liaison support',
    ],
  },
  {
    name: 'Institutional Rating Grid',
    sub: 'Regulators & insurers',
    price: 'Custom',
    period: 'pricing',
    badge: null,
    desc: 'Board and regulator grade platform with white-label finance analytics, insurer APIs, and single-tenant compliance deployment.',
    features: [
      'Everything in Enterprise',
      'White-label report suite',
      'Regulatory API access',
      'SOC 2 evidence package',
      'ISO 42001 alignment',
      'Custom probe corpus',
      'On-site option available',
    ],
  },
];

export default function Pricing() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section id="pricing" className="section" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(200,200,255,0.04) 0%, transparent 55%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Pricing</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.08, marginBottom: '1rem' }}>
            Transparent value,<br />
            <span className="text-gradient-silver">institutional grade.</span>
          </h2>
          <p style={{ color: '#616161', maxWidth: '440px', margin: '0 auto', lineHeight: 1.65, fontSize: '0.9rem' }}>
            One audit unlocks insurance coverage — typically returning 8–14× the fee in premium savings.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'start', maxWidth: '1000px', margin: '0 auto' }}>
          {plans.map((plan, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:28 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.7, delay:i*0.12, ease:[0.16,1,0.3,1] }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                borderRadius: '20px', padding: '2.25rem',
                border: `1px solid ${i===1 ? '#383838' : '#121212'}`,
                background: i===1 ? '#0d0d0d' : '#050505',
                backdropFilter: 'blur(20px)',
                boxShadow: hov===i ? '0 24px 48px rgba(0,0,0,0.6), 0 0 0 1px #1a1a1a' : 'none',
                transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                transform: hov===i ? 'translateY(-4px)' : 'translateY(0)',
                position: 'relative',
              }}>

              {plan.badge && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)',
                  background: '#fff', color: '#000',
                  fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em',
                  padding: '0.25rem 0.85rem', borderRadius: '0 0 8px 8px',
                }}>{plan.badge}</div>
              )}

              <div style={{ marginBottom: '0.35rem', fontSize: '0.7rem', fontFamily: 'JetBrains Mono,monospace', color: '#4d4d4d', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{plan.sub}</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>{plan.name}</div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '2.75rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '-0.05em', lineHeight: 1 }}>{plan.price}</span>
                <span style={{ fontSize: '0.78rem', color: '#595959' }}>{plan.period}</span>
              </div>

              <p style={{ fontSize: '0.82rem', color: '#616161', lineHeight: 1.6, marginBottom: '2rem' }}>{plan.desc}</p>

              <div style={{ width: '100%', height: '1px', background: '#0f0f0f', marginBottom: '1.5rem' }} />

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {plan.features.map((feat, j) => (
                  <li key={j} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', fontSize: '0.835rem', color: '#8c8c8c' }}>
                    <span style={{ color: '#fff', flexShrink: 0, fontSize: '0.75rem', marginTop: '2px' }}>✓</span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                style={{
                  display: 'block', textAlign: 'center', width: '100%',
                  padding: '0.9rem',
                  borderRadius: '10px',
                  background: i === 1 ? '#fff' : '#121212',
                  color: i === 1 ? '#000' : '#a6a6a6',
                  fontSize: '0.85rem', fontWeight: 700,
                  border: `1px solid ${i===1 ? '#fff' : '#1a1a1a'}`,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  if (i !== 1) {
                    (e.currentTarget as HTMLElement).style.background = '#242424';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                  }
                }}
                onMouseLeave={e => {
                  if (i !== 1) {
                    (e.currentTarget as HTMLElement).style.background = '#121212';
                    (e.currentTarget as HTMLElement).style.color = '#a6a6a6';
                  }
                }}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Certified'}
              </a>
            </motion.div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.78rem', color: '#383838', fontFamily: 'JetBrains Mono,monospace' }}>
          All plans include ISO 42001 mapping. SRS certificate is insurer-validated and board-ready.
        </p>
      </div>
    </section>
  );
}
