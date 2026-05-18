'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UnicornBg } from './BusinessModel';

const features = [
  {
    num: '01', tag: 'S.O.V.A/Jarvis Tech (40%)',
    title: 'Jarvis Offensive Probing',
    desc: 'Jarvis AI orchestrates 2,000+ adversarial probes — jailbreaks, prompt injections, and data leakage vectors. Our core technical moat.',
    terminal: [
      { tag: 'EXEC', text: 'Deploying S.O.V.A corpus v4.2...',    color: '#aaa' },
      { tag: 'SCAN', text: 'SYSTEM prompt exfiltration: ANALYSED',  color: '#888' },
      { tag: 'DONE', text: '1,847 probes complete · 3 CVEs found',  color: '#ccc' },
    ],
  },
  {
    num: '02', tag: 'Actuarial Finance (60%)',
    title: 'Actuarial Risk Quantification',
    desc: 'Every technical failure is priced using Modified Expected Loss (MEL) — the exact methodology used in corporate insurance business plans.',
    terminal: [
      { tag: 'CALC', text: 'Computing EL = P(failure) × Impact...', color: '#aaa' },
      { tag: 'INFO', text: 'Actuarial weighting: EU AI Act §52',   color: '#888' },
      { tag: 'DONE', text: 'Annualized Exposure: $2.4M USD',        color: '#ccc' },
    ],
  },
  {
    num: '03', tag: 'Finance Business Plan (60%)',
    title: 'Insurance-Ready Audit Reports',
    desc: 'Assess AI systems for underwriters and M&A. We deliver financial impact reports with concrete penalty assessments and PML calculations.',
    terminal: [
      { tag: 'INIT', text: 'M&A actuarial scan: acme-ai.com/v2',      color: '#aaa' },
      { tag: 'CALC', text: 'PML calculation: $18.6M at 99th pctile', color: '#888' },
      { tag: 'DONE', text: 'Financial report generated — 47 pages',     color: '#ccc' },
    ],
  },
  {
    num: '04', tag: 'Urgent Necessity',
    title: 'SRS Financial Certificate',
    desc: 'Receive your Semantic Risk Score (300–850). This is a mandatory, insurer-grade certificate needed to secure AI liability coverage.',
    terminal: [
      { tag: 'SIGN', text: 'SRS Score: 782 / 850 · Grade A',        color: '#ccc' },
      { tag: 'INFO', text: 'Certificate timestamped & hash-locked',  color: '#aaa' },
      { tag: 'LIVE', text: 'GET /v1/score/badge → 200 OK',          color: '#ddd' },
    ],
  },
];

function TerminalCard({ step }: { step: typeof features[0] }) {
  return (
    <div style={{
      borderRadius: '14px', overflow: 'hidden',
      border: '1px solid #141414',
    }}>
      {/* titlebar */}
      <div style={{
        background: '#111', borderBottom: '1px solid #0f0f0f',
        padding: '0.7rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.45rem',
      }}>
        {['#555','#444','#333'].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
        ))}
        <span style={{
          marginLeft: '0.5rem', fontFamily: 'JetBrains Mono,monospace',
          fontSize: '0.66rem', color: '#383838', letterSpacing: '0.08em',
        }}>
          truscor · {step.tag}
        </span>
      </div>
      {/* body */}
      <div style={{ background: '#070707', padding: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        {step.terminal.map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'JetBrains Mono,monospace', fontSize: '0.72rem' }}>
            <span style={{ color: '#333333', minWidth: '26px', fontSize: '0.6rem' }}>0{i}</span>
            <span style={{ color: l.color, minWidth: '36px', fontWeight: 700, fontSize: '0.62rem' }}>{l.tag}</span>
            <span style={{ color: '#737373' }}>{l.text}</span>
          </div>
        ))}
        <div style={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: '0.62rem', color: '#2e2e2e' }}>›</span>
          <div style={{
            display: 'inline-block', width: '7px', height: '13px',
            background: '#737373',
            animation: 'blink-cursor 1.1s step-end infinite', borderRadius: '1px',
          }} />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="section" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
      <UnicornBg projectId="2Zn2nuelv1pvbJQ64EZX" opacity={0.36} />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">Audit Engine</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.05, marginBottom: '1.25rem',
          }}>
            From endpoint to{' '}
            <span className="text-gradient-silver">certificate in 24h</span>
          </h2>
          <p style={{ color: '#616161', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65, fontSize: '0.975rem' }}>
            60% of TRUSCOR's value is in Actuarial/Insurance finance modeling. 40% is our S.O.V.A/Jarvis offensive testing tech moat. Together, they form an urgent necessity for AI deployment.
          </p>
        </div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Step list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.005 }}
                style={{
                  padding: '1.4rem 1.5rem', borderRadius: '14px', cursor: 'pointer',
                  border: `1px solid ${active === i ? '#242424' : '#0d0d0d'}`,
                  background: active === i ? '#0a0a0a' : '#030303',
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    fontFamily: 'JetBrains Mono,monospace', fontSize: '0.95rem', fontWeight: 700,
                    color: active === i ? '#fff' : '#2e2e2e', transition: 'color 0.3s', flexShrink: 0,
                  }}>{f.num}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: active === i ? '#fff' : '#737373', transition: 'color 0.3s', marginBottom: '0.35rem' }}>
                      {f.title}
                    </h3>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        style={{ fontSize: '0.845rem', color: '#616161', lineHeight: 1.65 }}>
                        {f.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal panel — sticky */}
          <div style={{ position: 'sticky', top: '8rem' }}>
            <motion.div key={active} initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              <TerminalCard step={features[active]} />
              {/* SRS gauge on step 4 */}
              {active === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    marginTop: '1rem', padding: '1.4rem', borderRadius: '14px',
                    border: '1px solid #1a1a1a',
                    background: '#080808',
                    display: 'flex', alignItems: 'center', gap: '1.5rem',
                  }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '-0.04em' }}>782</div>
                    <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#4d4d4d' }}>SRS Score</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ height: '5px', borderRadius: '3px', background: '#121212', overflow: 'hidden', marginBottom: '0.5rem' }}>
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: '92%' }}
                        transition={{ delay: 0.5, duration: 1.2, ease: [0.16,1,0.3,1] }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #fff, #888)', borderRadius: '3px' }} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#595959' }}>
                      Grade <strong style={{ color: '#fff' }}>A</strong> · Insurance-ready · SOC 2 aligned
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:900px){.features-grid{grid-template-columns:1fr!important; gap:2.5rem!important;}}`}</style>
    </section>
  );
}
