'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: '01',
    tag: 'Connect',
    title: 'Submit AI Endpoint',
    body: 'Point SCOR AI at any REST, GraphQL, or WebSocket AI agent. No SDK. No code changes. Jarvis identifies system prompt structure, tool schemas, and attack surface autonomously.',
    code: [
      '$ scorai init --target https://api.your-ai.com/v1',
      '→ Scanning endpoint architecture...',
      '→ System prompt detected: 1,204 tokens',
      '→ Tool schemas: 14 registered',
      '→ Attack surface mapped ✓',
    ],
  },
  {
    id: '02',
    tag: 'Probe',
    title: 'Jarvis Swarm Attack',
    body: 'Jarvis deploys 2,000+ adversarial probes across 5 tiers — jailbreaks, injection chains, semantic drift tests, context drops, and regulatory edge cases. Fully parallelized.',
    code: [
      '→ Tier 1: Jailbreak corpus v4.2 — 400 probes',
      '→ Tier 2: Prompt injection (OWASP LLM01)  ',
      '→ Tier 3: Data exfiltration vectors        ',
      '→ Tier 4: Multi-turn manipulation chains  ',
      '→ Tier 5: Regulatory adversarials (EU AI Act)',
      '∎ 2,047 probes complete · 3 critical CVEs',
    ],
  },
  {
    id: '03',
    tag: 'Score',
    title: 'MEL Quantification',
    body: 'Every failure is mapped to Modified Expected Loss — the actuarial standard. Risk stops being qualitative and becomes a concrete dollar figure for the CFO and underwriter.',
    code: [
      '→ Computing P(failure) × Impact matrix...',
      '→ Regulatory weighting: EU AI Act §52 / RBI',
      '→ Annualized Exposure (MEL): $2.4M USD     ',
      '→ PML at 99th percentile:   $18.6M USD     ',
      '→ SRS Score computed:        782 / 850     ',
      '∎ Grade: A  ·  Insurance-ready             ',
    ],
  },
  {
    id: '04',
    tag: 'Certify',
    title: 'SRS Certificate Issued',
    body: 'Within 24 hours, receive your Semantic Risk Score, insurer-validated PDF certificate, and a live badge API endpoint embeddable in your product or pitch deck.',
    code: [
      '→ Generating certificate hash...',
      '→ Issuing SRS-2026-A-00847',
      '→ PDF report: 47 pages · board-ready',
      '→ Badge API: GET /v1/score/badge → 200',
      '→ Validity: 90 days · auto-renewal available',
      '∎ Certificate delivered ✓',
    ],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  // Auto-cycle
  useEffect(() => {
    const id = setInterval(() => {
      setActive(a => (a + 1) % steps.length);
      setTick(t => t + 1);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const step = steps[active];

  return (
    <section id="how-it-works" className="section" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="section-label">How It Works</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Endpoint to certificate<br />
            <span className="text-gradient-silver">in four deterministic steps.</span>
          </h2>
          <p style={{ color: '#616161', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65, fontSize: '0.95rem' }}>
            No consultants. No integration. Jarvis attacks autonomously and SCOR AI issues the definitive SRS grade.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }} className="how-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '5rem', alignItems: 'start' }}>
          {/* Left — step list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {steps.map((s, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                all: 'unset', cursor: 'pointer', width: '100%',
              }}>
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  style={{
                    padding: '1.4rem 1.5rem', borderRadius: '14px',
                    border: `1px solid ${active === i ? '#292929' : '#0d0d0d'}`,
                    background: active === i ? '#0a0a0a' : '#030303',
                    transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                    display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                    textAlign: 'left',
                  }}>
                  {/* Number */}
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', fontWeight: 700,
                    color: active === i ? '#ffffff' : '#2e2e2e',
                    transition: 'color 0.3s', flexShrink: 0, paddingTop: '1px',
                  }}>{s.id}</div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                      <span style={{
                        fontSize: '0.6rem', fontFamily: 'JetBrains Mono, monospace',
                        padding: '0.15rem 0.5rem', borderRadius: '4px',
                        background: active === i ? '#1a1a1a' : '#0a0a0a',
                        color: active === i ? '#b3b3b3' : '#404040',
                        textTransform: 'uppercase', letterSpacing: '0.1em',
                        transition: 'all 0.3s',
                      }}>{s.tag}</span>
                    </div>
                    <h3 style={{
                      fontSize: '0.95rem', fontWeight: 700,
                      color: active === i ? '#ffffff' : '#737373',
                      transition: 'color 0.3s', lineHeight: 1.3,
                    }}>{s.title}</h3>

                    <AnimatePresence>
                      {active === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: '0.6rem' }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          style={{ fontSize: '0.835rem', color: '#616161', lineHeight: 1.65, overflow: 'hidden' }}>
                          {s.body}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Active progress dot */}
                  <div style={{
                    width: 7, height: 7, borderRadius: '50%', flexShrink: 0, marginTop: '6px',
                    background: active === i ? '#fff' : '#1f1f1f',
                    boxShadow: active === i ? '0 0 10px #666666' : 'none',
                    transition: 'all 0.3s',
                  }} />
                </motion.div>
              </button>
            ))}

            {/* Progress bar — auto-cycle indicator */}
            <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1rem', paddingLeft: '0.5rem' }}>
              {steps.map((_, i) => (
                <div key={i} style={{ flex: 1, height: '1px', borderRadius: '1px', overflow: 'hidden', background: '#121212' }}>
                  {active === i && (
                    <motion.div
                      key={tick}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4.5, ease: 'linear' }}
                      style={{ height: '100%', background: '#8c8c8c' }}
                    />
                  )}
                  {active > i && (
                    <div style={{ width: '100%', height: '100%', background: '#4d4d4d' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Terminal output */}
          <div style={{ position: 'sticky', top: '8rem' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>

                {/* Terminal shell */}
                <div style={{
                  borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid #171717',
                  boxShadow: '0 32px 64px rgba(0,0,0,0.7)',
                }}>
                  {/* Titlebar */}
                  <div style={{
                    background: '#111', borderBottom: '1px solid #0f0f0f',
                    padding: '0.8rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.45rem',
                  }}>
                    {[['#555'], ['#444'], ['#333']].map(([c], i) => (
                      <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                    ))}
                    <span style={{
                      marginLeft: '0.5rem', fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem', color: '#383838', letterSpacing: '0.1em',
                    }}>
                      jarvis@scorai ~ {step.tag.toLowerCase()}
                    </span>
                    <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', animation: 'pulse-dot 2s ease infinite' }} />
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem', color: '#474747', letterSpacing: '0.1em' }}>LIVE</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ background: '#060606', padding: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', minHeight: '220px' }}>
                    {step.code.map((line, i) => (
                      <motion.div
                        key={`${active}-${i}`}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.12, duration: 0.3 }}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.74rem',
                          lineHeight: 1.7, letterSpacing: '0.01em',
                          color: line.startsWith('∎')
                            ? '#d9d9d9'
                            : line.startsWith('$')
                            ? '#a6a6a6'
                            : '#6b6b6b',
                          fontWeight: line.startsWith('∎') ? 700 : 400,
                        }}>
                        {line}
                      </motion.div>
                    ))}
                    {/* Terminal ready indicator — static */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', color: '#2a2a2a' }}>›</span>
                    </div>
                  </div>
                </div>

                {/* SRS Score card — only on step 3/4 */}
                {(active >= 2) && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    style={{
                      marginTop: '1rem', padding: '1.25rem 1.5rem', borderRadius: '14px',
                      border: '1px solid #1a1a1a',
                      background: '#080808',
                      display: 'flex', alignItems: 'center', gap: '1.75rem',
                    }}>
                    <div style={{ textAlign: 'center', flexShrink: 0 }}>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.05em', lineHeight: 1 }}>
                        {active === 2 ? '782' : '782'}
                      </div>
                      <div style={{ fontSize: '0.6rem', color: '#474747', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>SRS</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ height: '4px', borderRadius: '2px', background: '#121212', overflow: 'hidden', marginBottom: '0.6rem' }}>
                        <motion.div
                          initial={{ width: 0 }} animate={{ width: '92%' }}
                          transition={{ delay: 0.8, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                          style={{ height: '100%', background: 'linear-gradient(90deg, #fff 0%, #888 100%)', borderRadius: '2px' }}
                        />
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#616161' }}>
                        Grade <strong style={{ color: '#fff' }}>A</strong> · {active === 3 ? 'Certificate issued' : 'Insurance-ready'} · MEL: <strong style={{ color: '#b3b3b3' }}>$2.4M</strong>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:900px){
          .how-grid{grid-template-columns:1fr!important; gap:2.5rem!important;}
          .how-grid>div:last-child{display:none!important;}
        }
      `}</style>
    </section>
  );
}
