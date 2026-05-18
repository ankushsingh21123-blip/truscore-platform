'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UnicornBg } from './BusinessModel';

const moats = [
  {
    size: '2-col', tag: 'S.O.V.A/Jarvis Tech (40%)',
    title: '2,000+ Autonomous Adversarial Probes',
    desc: 'The world\'s most comprehensive AI offensive tech moat. Jailbreaks, prompt injection, and data exfiltration—fully orchestrated by Jarvis to stress-test your AI beyond standard limits.',
    metric: '2,000+', metricLabel: 'Jarvis probes',
  },
  {
    size: '1-col', tag: 'Actuarial (60%)',
    title: 'Financial MEL Framework',
    desc: 'Modified Expected Loss—the precise actuarial methodology behind property & casualty insurance pricing. AI risk expressed in dollars.',
    metric: '$2.4M', metricLabel: 'avg exposure',
  },
  {
    size: '1-col', tag: 'Insurance (60%)',
    title: 'Insurer-Backed Rating',
    desc: 'The only standardized AI risk certificate endorsed by major underwriters. Analogous to a credit score for securing AI liability coverage.',
    metric: '850', metricLabel: 'max financial score',
  },
  {
    size: '1-col', tag: 'Urgency',
    title: 'Board-Level Necessity',
    desc: 'With impending EU AI Act and SEC mandates, unrated AI is an uninsurable liability. Getting rated is no longer optional.',
    metric: 'Critical', metricLabel: 'compliance status',
  },
  {
    size: '1-col', tag: 'Tech Moat (40%)',
    title: 'Semantic Drift Detection',
    desc: 'TRUSCOR\'s tech moat includes continuous subscription probing that detects behavioral drift across prompt updates or fine-tuning.',
    metric: '99.8%', metricLabel: 'drift detection',
  },
  {
    size: '2-col', tag: 'Finance Business Plan (60%)',
    title: 'The AI Insurance Data Layer',
    desc: 'Our ultimate business plan is becoming the universal data layer for AI insurance. We capture the actuarial data that enables the entire $40B AI insurance market to exist.',
    metric: '$40B', metricLabel: 'TAM unlocked',
  },
];

export default function Moats() {
  const singles = moats.filter(m => m.size !== '2-col');
  const doubles = moats.filter(m => m.size === '2-col');

  return (
    <section className="section" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>
      <UnicornBg projectId="33EHsNXBCJVnFXERvCi7" opacity={0.33} />
      <div className="section-blend-top" />
      <div className="section-blend-bottom" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Moats</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.08, marginBottom: '1.25rem' }}>
            Technology that cannot<br />
            <span className="text-gradient-silver">be replicated overnight.</span>
          </h2>
          <p style={{ color: '#616161', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65, fontSize: '0.95rem' }}>
            Each pillar of TRUSCOR represents years of IP in offensive AI research and actuarial financial modeling.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {/* Row 1 — wide + small */}
          <motion.div
            initial={{ opacity:0, y:30, filter: 'blur(8px)' }} whileInView={{ opacity:1, y:0, filter: 'blur(0px)' }}
            viewport={{ once:true, margin: "-50px" }} transition={{ duration:1.2, ease:[0.16,1,0.3,1] }}
            style={{ gridColumn: 'span 2' }}
            className="glass-panel glass-panel-hover">
            <MoatCard moat={moats[0]} />
          </motion.div>
          {[moats[1], moats[2]].map((m, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:30, filter: 'blur(8px)' }} whileInView={{ opacity:1, y:0, filter: 'blur(0px)' }}
              viewport={{ once:true, margin: "-50px" }} transition={{ duration:1.2, delay: (i+1)*0.15, ease:[0.16,1,0.3,1] }}
              className="glass-panel glass-panel-hover">
              <MoatCard moat={m} />
            </motion.div>
          ))}

          {/* Row 2 — 2 small + wide */}
          {[moats[3], moats[4]].map((m, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:30, filter: 'blur(8px)' }} whileInView={{ opacity:1, y:0, filter: 'blur(0px)' }}
              viewport={{ once:true, margin: "-50px" }} transition={{ duration:1.2, delay: i*0.15, ease:[0.16,1,0.3,1] }}
              className="glass-panel glass-panel-hover">
              <MoatCard moat={m} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity:0, y:30, filter: 'blur(8px)' }} whileInView={{ opacity:1, y:0, filter: 'blur(0px)' }}
            viewport={{ once:true, margin: "-50px" }} transition={{ duration:1.2, delay:0.25, ease:[0.16,1,0.3,1] }}
            style={{ gridColumn: 'span 2' }}
            className="glass-panel glass-panel-hover">
            <MoatCard moat={moats[5]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MoatCard({ moat }: { moat: typeof moats[0] }) {
  return (
    <div style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
        <span style={{
          fontSize: '0.62rem', fontFamily: 'JetBrains Mono,monospace',
          padding: '0.22rem 0.65rem', borderRadius: '9999px',
          border: '1px solid #1a1a1a',
          color: '#595959', letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>{moat.tag}</span>
      </div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.65rem', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{moat.title}</h3>
      <p style={{ fontSize: '0.82rem', color: '#616161', lineHeight: 1.65, flex: 1 }}>{moat.desc}</p>
      <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '1.5rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em' }}>{moat.metric}</span>
        <span style={{ fontSize: '0.7rem', color: '#474747', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{moat.metricLabel}</span>
      </div>
    </div>
  );
}
