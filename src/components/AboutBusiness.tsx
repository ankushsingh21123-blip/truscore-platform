'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UnicornBg } from './BusinessModel';

const pillars = [
  {
    num: '01',
    tag: 'Finance & Actuarial · 60%',
    title: 'Actuarial MEL Risk Modeling',
    body: 'We price AI risk using Modified Expected Loss — the same actuarial standard that underwrites property & casualty insurance. Every TRUSCOR rating converts AI uncertainty into a concrete dollar figure that CFOs, boards, and insurers can act on.',
  },
  {
    num: '02',
    tag: 'Insurance · 60%',
    title: 'AI Liability Insurance Layer',
    body: 'TRUSCOR functions as the critical data layer enabling the $40B AI insurance market. Our SRS certificate is the prerequisite for obtaining AI liability coverage — without a rating, your AI is uninsurable.',
  },
  {
    num: '03',
    tag: 'S.O.V.A/Jarvis · 40%',
    title: 'Offensive Testing Tech Moat',
    body: 'Our proprietary Semantic Offensive Vulnerability Analysis (S.O.V.A) engine runs 2,000+ autonomous adversarial probes per session — jailbreaks, prompt injection, data exfiltration, and manipulation chains — with zero human intervention.',
  },
  {
    num: '04',
    tag: 'M&A & Compliance · 60%',
    title: 'Board-Grade Due Diligence',
    body: 'During acquisitions, acquirers need quantified AI risk exposure. TRUSCOR delivers a 47-page board-ready report with insurer sign-off templates, EU AI Act mapping, and a concrete financial exposure number that drives deal valuation.',
  },
];

const stats = [
  { val: '$400B', desc: 'Enterprise AI deployment market' },
  { val: '60%', desc: 'Actuarial, Insurance & Finance' },
  { val: '40%', desc: 'S.O.V.A / Jarvis tech moat' },
  { val: '24h', desc: 'Endpoint to SRS certificate' },
];

export default function AboutBusiness() {
  return (
    <section
      id="about"
      className="section"
      style={{ position: 'relative', overflow: 'hidden', background: '#000' }}
    >
      <UnicornBg projectId="tCFpJRQqwvXMOXAEdRdq" opacity={0.36} />

      <div className="section-blend-top" />
      <div className="section-blend-bottom" />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
              padding: '0.3rem 1rem', borderRadius: '9999px',
              border: '1px solid #1a1a1a', background: '#080808',
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.68rem',
              color: '#4d4d4d', letterSpacing: '0.16em', textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', display: 'inline-block', boxShadow: '0 0 6px #aaa' }} />
            About Our Business
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1.03,
              color: '#f5f5f5', maxWidth: '860px', margin: '0 auto',
            }}
          >
            The urgent necessity of{' '}
            <span className="text-gradient-silver">AI financial rating.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center', color: '#666666', maxWidth: '620px',
            margin: '0 auto 5rem auto', lineHeight: 1.75, fontSize: '1rem',
          }}
        >
          TRUSCOR is the world&apos;s first AI risk quantification platform — the FICO Score equivalent for enterprise AI.
          We convert AI uncertainty into a deterministic, actuarial-grade financial rating that boards, insurers, and regulators can act on.
          <strong style={{ color: '#b3b3b3', fontWeight: 600 }}>
            {' '}60% Actuarial & Insurance finance modeling. 40% S.O.V.A/Jarvis offensive testing technology.
          </strong>
        </motion.p>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: '#0f0f0f',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #141414',
            marginBottom: '5rem',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '2rem 1.5rem',
                background: '#070707',
                textAlign: 'center',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0e0e0e'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#070707'; }}
            >
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 800, color: '#fff',
                  letterSpacing: '-0.04em', marginBottom: '0.4rem',
                }}
              >
                {s.val}
              </div>
              <div style={{ fontSize: '0.72rem', color: '#4d4d4d', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.4 }}>
                {s.desc}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pillar cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}
          className="about-grid"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid #141414',
                background: '#070707',
                transition: 'all 0.32s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#262626';
                (e.currentTarget as HTMLElement).style.background = '#0d0d0d';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#141414';
                (e.currentTarget as HTMLElement).style.background = '#070707';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.88rem',
                    fontWeight: 700, color: '#2e2e2e',
                  }}
                >
                  {p.num}
                </span>
                <span
                  style={{
                    fontSize: '0.62rem', fontFamily: 'JetBrains Mono, monospace',
                    padding: '0.2rem 0.65rem', borderRadius: '9999px',
                    border: '1px solid #1a1a1a', color: '#595959',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <h3
                style={{
                  fontSize: '1.05rem', fontWeight: 700,
                  letterSpacing: '-0.025em', marginBottom: '0.75rem',
                  color: '#e8e8e8', lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: '0.845rem', color: '#616161', lineHeight: 1.7 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '4rem',
            padding: '2.5rem 3rem',
            borderRadius: '18px',
            border: '1px solid #171717',
            background: '#060606',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontWeight: 700, letterSpacing: '-0.03em',
                marginBottom: '0.5rem', color: '#e8e8e8',
              }}
            >
              Ready to get your AI rated?
            </div>
            <div style={{ fontSize: '0.875rem', color: '#525252', maxWidth: '420px', lineHeight: 1.6 }}>
              From endpoint to board-ready SRS certificate in 24 hours. No SDK. No integration required.
            </div>
          </div>
          <a
            href="#contact"
            className="btn-primary"
            style={{ flexShrink: 0 }}
          >
            Get Certified →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:900px){
          .about-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
