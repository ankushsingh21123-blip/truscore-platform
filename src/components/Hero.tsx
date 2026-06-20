'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import LogoSlider from './LogoSlider';

/* ── Live telemetry feed data ──────────────────────────────────── */
const metrics = [
  { label: 'Actuarial MEL model synced with insurer policy matrix', tag: 'finance-core', time: '2m ago', dot: '#d8d8d8' },
  { label: 'S.O.V.A/Jarvis stress battery now at 2,047 autonomous probes', tag: 'tech-probe', time: '14m ago', dot: '#9a9a9a' },
  { label: 'Board urgency index raised after AI liability drift detection', tag: 'urgent', time: '1h ago', dot: '#6e6e6e' },
];

const UnicornScene = dynamic(() => import('unicornstudio-react'), { ssr: false });

/* ── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="snap-section"
      style={{
        position: 'relative', backgroundColor: '#000',
        overflow: 'hidden', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* ── Unicorn Studio Background ── */}
      <div className="unicorn-bg-wrapper" style={{ zIndex: 1 }}>
        <div style={{ opacity: 0.42 }}>
          <UnicornScene
            projectId="Fu6MgW09QQhu3Qd5ulBF"
            width="100%" height="100%"
            scale={1} dpi={1.5}
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.12/dist/unicornStudio.umd.js"
          />
        </div>
        <div className="unicorn-bg-mask" />
      </div>

      {/* ── Dot-grid overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* ── Grain texture ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.038'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat', opacity: 0.55,
      }} />

      {/* ── Vignette ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 100% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.85) 100%)',
      }} />

      {/* ── Top fade ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '180px', zIndex: 4, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, transparent 100%)',
      }} />

      {/* ── Bottom fade ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px', zIndex: 4, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, transparent 100%)',
      }} />

      {/* ── Hero content ── */}
      <div
        className="container"
        style={{
          position: 'relative', zIndex: 10, flex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingTop: '10rem', paddingBottom: '5rem',
        }}
      >
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.55rem',
            padding: '0.35rem 1.1rem', borderRadius: '9999px',
            border: '1px solid #242424', background: '#080808',
            fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#888888', fontFamily: 'var(--font-mono)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px rgba(255,255,255,0.9)', display: 'inline-block' }} />
            AI Rating Urgency Platform · 2026
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '1.75rem' }}
        >
          <h1 className="hero-title" style={{
            fontSize: 'clamp(3.2rem, 8vw, 7rem)',
            fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 0.95,
            color: '#f5f5f5', margin: '0 auto', maxWidth: '1000px',
          }}>
            The Urgent Necessity of
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #555555 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              AI Financial Rating.
            </span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          style={{
            textAlign: 'center',
            fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)',
            color: '#666666', maxWidth: '580px',
            margin: '0 auto 3.5rem auto',
            lineHeight: 1.7, fontWeight: 400,
          }}
        >
          Unassessed AI is an existential liability. SCOR AI converts AI uncertainty into a mandatory, board-level financial rating.{' '}
          <strong style={{ color: '#b0b0b0', fontWeight: 600 }}>
            60% Actuarial &amp; Insurance modeling, 40% deep S.O.V.A/Jarvis testing tech.
          </strong>
        </motion.p>

        {/* CTA buttons */}
          <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', marginBottom: '6rem' }}
        >
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2.2rem', borderRadius: '9999px',
              background: '#fff', color: '#000',
              fontSize: '0.88rem', fontWeight: 700, letterSpacing: '-0.01em',
              textDecoration: 'none',
              transition: 'all 0.22s ease',
              boxShadow: '0 0 30px rgba(255,255,255,0.12)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8e8e8'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(255,255,255,0.12)'; }}
          >
            Get a Grade →
          </a>
          <a
            href="#platform"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2.2rem', borderRadius: '9999px',
              border: '1px solid #2e2e2e', background: 'rgba(255,255,255,0.03)',
              fontSize: '0.88rem', fontWeight: 500, color: '#999999',
              textDecoration: 'none',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#555555'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2e2e2e'; (e.currentTarget as HTMLElement).style.color = '#999999'; }}
          >
            Learn More
          </a>
        </motion.div>

        {/* Live telemetry terminal */}
        <motion.div
          initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}
        >
          <div style={{
            borderRadius: '16px', overflow: 'hidden',
            border: '1px solid #181818',
            background: '#070707',
            boxShadow: '0 0 0 1px #0a0a0a, 0 40px 80px rgba(0,0,0,0.7)',
          }}>
            {/* Terminal titlebar */}
            <div style={{
              padding: '0.85rem 1.25rem',
              borderBottom: '1px solid #0e0e0e',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: '#040404',
            }}>
              <div style={{ display: 'flex', gap: '0.45rem' }}>
                {['#f0f0f0', '#919191', '#4f4f4f'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: '0.68rem', fontFamily: 'JetBrains Mono,monospace', color: '#383838', letterSpacing: '0.12em' }}>
                scorai-finance-rating-v3.0 · LIVE
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', animation: 'pulse-dot 2s ease-in-out infinite' }} />
                <span style={{ fontSize: '0.68rem', color: '#555555', fontFamily: 'JetBrains Mono,monospace' }}>SCANNING</span>
              </div>
            </div>

            {/* Terminal body */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85 + i * 0.15 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '0.65rem 0.9rem', borderRadius: '10px',
                    background: '#050505', border: '1px solid #0d0d0d',
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '2px', background: m.dot, flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: '0.78rem', fontFamily: 'JetBrains Mono,monospace', color: '#737373' }}>{m.label}</span>
                  <span style={{ fontSize: '0.66rem', fontFamily: 'JetBrains Mono,monospace', padding: '0.18rem 0.55rem', borderRadius: '4px', background: '#0f0f0f', color: '#555555', fontWeight: 600 }}>{m.tag}</span>
                  <span style={{ fontSize: '0.66rem', color: '#383838', fontFamily: 'JetBrains Mono,monospace', flexShrink: 0 }}>{m.time}</span>
                </motion.div>
              ))}

              {/* Stats row */}
              <div style={{ marginTop: '0.4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.75rem' }}>
                {[
                  { val: '60%', label: 'Finance & Actuary' },
                  { val: '40%', label: 'S.O.V.A/Jarvis Tech' },
                  { val: 'Critical', label: 'Urgency Level' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    style={{
                      padding: '0.9rem', borderRadius: '10px',
                      background: '#060606', border: '1px solid #0d0d0d',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e8e8e8', fontFamily: 'JetBrains Mono,monospace', letterSpacing: '-0.04em' }}>{s.val}</div>
                    <div style={{ fontSize: '0.62rem', color: '#444444', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Logo slider */}
      <div style={{ position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.72rem', color: '#2e2e2e', textTransform: 'uppercase', letterSpacing: '0.16em' }}>
            Trusted by teams shipping AI in production
          </span>
        </div>
        <LogoSlider />
      </div>
    </section>
  );
}
