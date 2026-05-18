'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageLoader from '@/components/PageLoader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutBusiness from '@/components/AboutBusiness';
import BusinessModel from '@/components/BusinessModel';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Integrations from '@/components/Integrations';
import ComparisonSlider from '@/components/ComparisonSlider';
import Moats from '@/components/Moats';
import Founders from '@/components/Founders';
import { UnicornBg } from '@/components/BusinessModel';

/* ── Audit CTA form ─────────────────────────────────────────────── */
function AuditCTA() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [endpoint, setEndpoint] = useState('');

  const handleNext = async () => {
    if (step === 3) {
      setLoading(true);
      try {
        await fetch('/api/audit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, endpoint }),
        });
      } catch (err) {
        console.error('Audit initiation failed:', err);
      } finally {
        setLoading(false);
        setStep(4);
      }
    } else {
      setStep(s => s + 1);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '1rem 1.25rem',
    background: '#0a0a0a',
    border: '1px solid #1a1a1a',
    borderRadius: '12px', color: '#fff',
    fontSize: '0.9rem', outline: 'none',
    fontFamily: 'var(--font-heading)',
    marginBottom: '2rem',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ maxWidth: '520px', margin: '0 auto', width: '100%' }}>
      {/* Progress bars */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '3rem' }}>
        {[1,2,3,4].map(s => (
          <div key={s} style={{
            flex: 1, height: '1px', borderRadius: '1px',
            background: step >= s ? '#a6a6a6' : '#141414',
            transition: 'background 0.4s',
          }} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="s1" initial={{ opacity:0,y:20, filter: 'blur(8px)' }} animate={{ opacity:1,y:0, filter: 'blur(0px)' }} exit={{ opacity:0,y:-20, filter: 'blur(8px)' }} transition={{ duration:0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span style={{ display:'inline-block', marginBottom:'1.5rem', fontFamily:'JetBrains Mono,monospace', fontSize:'0.68rem', color:'#4d4d4d', letterSpacing:'0.16em', textTransform:'uppercase' }}>Step 01 / 03</span>
            <h3 style={{ fontSize:'1.5rem', fontWeight:800, marginBottom:'0.75rem', letterSpacing:'-0.04em' }}>Connect AI Endpoint</h3>
            <p style={{ color:'#666666', marginBottom:'1.75rem', lineHeight:1.65, fontSize:'0.9rem' }}>
              Point TRUSCOR at any REST, GraphQL, or WebSocket AI agent. Jarvis handles target identification autonomously.
            </p>
            <input type="text" placeholder="https://api.your-agent.ai/v1"
              value={endpoint} onChange={e => setEndpoint(e.target.value)} style={inputStyle}
              onFocus={e => e.target.style.borderColor='#4d4d4d'}
              onBlur={e => e.target.style.borderColor='#1a1a1a'} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="s2" initial={{ opacity:0,y:20, filter: 'blur(8px)' }} animate={{ opacity:1,y:0, filter: 'blur(0px)' }} exit={{ opacity:0,y:-20, filter: 'blur(8px)' }} transition={{ duration:0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span style={{ display:'inline-block', marginBottom:'1.5rem', fontFamily:'JetBrains Mono,monospace', fontSize:'0.68rem', color:'#4d4d4d', letterSpacing:'0.16em', textTransform:'uppercase' }}>Step 02 / 03</span>
            <h3 style={{ fontSize:'1.5rem', fontWeight:800, marginBottom:'0.75rem', letterSpacing:'-0.04em' }}>Select Audit Scope</h3>
            <p style={{ color:'#666666', marginBottom:'1.75rem', lineHeight:1.65, fontSize:'0.9rem' }}>Choose probe tiers to activate. Expand scope after reviewing initial results.</p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem' }}>
              {['Tier 1–2: Offensive Probe (jailbreaks, injection, data leakage)','Tier 3–4: Actuarial MEL (financial risk, regulatory mapping)','Tier 5: Full Red-Team + Board Report'].map((opt,i) => (
                <label key={i} style={{ display:'flex', gap:'1rem', alignItems:'center', padding:'1rem 1.25rem', borderRadius:'12px', border: '1px solid #141414', background: '#050505', cursor:'pointer', transition:'all 0.2s' }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='#333333';(e.currentTarget as HTMLElement).style.background='#0a0a0a';}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='#141414';(e.currentTarget as HTMLElement).style.background='#050505';}}>
                  <input type="checkbox" defaultChecked={i===0} style={{ accentColor:'#fff', width:'14px', height:'14px' }} />
                  <span style={{ fontSize:'0.855rem', color:'#808080' }}>{opt}</span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div key="s3" initial={{ opacity:0,y:20, filter: 'blur(8px)' }} animate={{ opacity:1,y:0, filter: 'blur(0px)' }} exit={{ opacity:0,y:-20, filter: 'blur(8px)' }} transition={{ duration:0.8, ease: [0.16, 1, 0.3, 1] }}>
            <span style={{ display:'inline-block', marginBottom:'1.5rem', fontFamily:'JetBrains Mono,monospace', fontSize:'0.68rem', color:'#4d4d4d', letterSpacing:'0.16em', textTransform:'uppercase' }}>Step 03 / 03</span>
            <h3 style={{ fontSize:'1.5rem', fontWeight:800, marginBottom:'0.75rem', letterSpacing:'-0.04em' }}>Confirm &amp; Deploy</h3>
            <p style={{ color:'#666666', marginBottom:'1.75rem', lineHeight:1.65, fontSize:'0.9rem' }}>
              Jarvis swarms attack your endpoint systematically. Your SRS certificate arrives within 24h.
            </p>
            <input type="email" placeholder="you@company.com"
              value={email} onChange={e => setEmail(e.target.value)} style={inputStyle}
              onFocus={e => e.target.style.borderColor='#4d4d4d'}
              onBlur={e => e.target.style.borderColor='#1a1a1a'} />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div key="s4" initial={{ opacity:0,scale:0.95, filter: 'blur(8px)' }} animate={{ opacity:1,scale:1, filter: 'blur(0px)' }} transition={{ duration:1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign:'center', padding:'2.5rem 0' }}>
            <motion.div
              initial={{ scale:0 }} animate={{ scale:1 }}
              transition={{ delay:0.2, type:'spring', stiffness:200, damping:15 }}
              style={{ width:'60px', height:'60px', borderRadius:'50%', background: '#121212', border: '1px solid #333333', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 2rem auto', fontSize:'1.4rem' }}>
              ✓
            </motion.div>
            <h3 style={{ fontSize:'1.5rem', fontWeight:800, marginBottom:'1rem', letterSpacing:'-0.04em' }}>Audit Initiated</h3>
            <p style={{ color:'#666666', lineHeight:1.65, fontSize:'0.9rem', maxWidth:'380px', margin:'0 auto' }}>
              Jarvis swarms are live. The Agentic Trust Score™ is being calculated.
              Your SRS certificate arrives within <strong style={{ color: '#b3b3b3' }}>24 hours</strong>.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {step < 4 && (
        <button onClick={handleNext} disabled={loading}
          style={{
            width:'100%', padding:'1rem 1.5rem', borderRadius:'10px',
            background:'#fff', color:'#000', border:'none',
            fontSize:'0.88rem', fontWeight:700, cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem',
            transition:'all 0.22s ease', marginTop:'0.5rem',
          }}
          onMouseEnter={e => { if(!loading)(e.currentTarget as HTMLElement).style.background='#e0e0e0'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='#fff'; }}>
          {loading
            ? <><span style={{ width:'15px', height:'15px', border:'2px solid rgba(0,0,0,0.2)', borderTop:'2px solid #000', borderRadius:'50%', display:'inline-block', animation:'spin 0.8s linear infinite' }} /> Launching Jarvis Swarms...</>
            : step === 3 ? 'Start Autonomous Audit →' : 'Continue →'}
        </button>
      )}
    </div>
  );
}

/* ── Enterprise section (scene 6) ───────────────────────────────── */
function EnterpriseSection() {
  return (
    <section className="section" style={{ position:'relative', overflow:'hidden', background:'#000' }}>
      <UnicornBg projectId="nXBjM0TaUE3LhajoODqU" opacity={0.38} />
      <div className="section-blend-top" />
      <div className="section-blend-bottom" />
      <div className="container" style={{ position:'relative', zIndex:5 }}>
        <div className="ent-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
          <motion.div initial={{ opacity:0,x:-40, filter: 'blur(8px)' }} whileInView={{ opacity:1,x:0, filter: 'blur(0px)' }} viewport={{ once:true, margin: "-100px" }} transition={{ duration:1.2, ease:[0.16,1,0.3,1] }}>
            <div className="section-label">Enterprise</div>
            <h2 style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:800, letterSpacing:'-0.045em', lineHeight:1.08, marginBottom:'1.5rem' }}>
              Built for the scale of<br /><span className="text-gradient-silver">institutional AI.</span>
            </h2>
            <p style={{ color: '#616161', lineHeight:1.7, fontSize:'0.95rem', marginBottom:'2.5rem' }}>
              From Fortune 500 CI/CD pipelines to insurer due-diligence portals — TRUSCOR Jarvis integrates where your AI runs, silently and continuously.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {['SOC 2 Type II compliant audit infrastructure','GDPR & EU AI Act regulatory mapping built-in','Single-tenant deployment for regulated industries','Board-ready PDF with insurer sign-off templates'].map((item,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.75rem', fontSize:'0.88rem', color:'#808080' }}>
                  <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:'#737373', flexShrink:0 }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0,x:40, filter: 'blur(8px)' }} whileInView={{ opacity:1,x:0, filter: 'blur(0px)' }} viewport={{ once:true, margin: "-100px" }} transition={{ duration:1.2, delay:0.15, ease:[0.16,1,0.3,1] }}
            style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}>
            {[{ val:'99.98%', label:'Uptime SLA' },{ val:'<2s', label:'Badge API Latency' },{ val:'ISO 42001', label:'AI Mgmt Standard' },{ val:'NIST', label:'RMF Aligned' }].map((s,i) => (
              <div key={i} style={{
                padding:'1.5rem', borderRadius:'14px', border: '1px solid #121212',
                background: '#060606', textAlign:'center',
                transition:'all 0.3s ease',
                animation:`float-y ${4+i*0.5}s ease-in-out infinite`,
                animationDelay:`${i*0.6}s`,
              }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor='#2e2e2e';(e.currentTarget as HTMLElement).style.background='#0d0d0d';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='#121212';(e.currentTarget as HTMLElement).style.background='#060606';}}>
                <div style={{ fontSize:'1.75rem', fontWeight:800, color:'#fff', fontFamily:'JetBrains Mono,monospace', letterSpacing:'-0.04em', marginBottom:'0.4rem' }}>{s.val}</div>
                <div style={{ fontSize:'0.65rem', color:'#4d4d4d', textTransform:'uppercase', letterSpacing:'0.1em' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.ent-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}

/* ── Footer + CTA (scene 8) ─────────────────────────────────────── */
function Footer() {
  return (
    <footer id="contact" style={{ position:'relative', overflow:'hidden', borderTop:'1px solid #0d0d0d', background:'#000', padding:'9rem 0 4rem' }}>
      <UnicornBg projectId="iOR67xVOpu1yNrJRyvc1" opacity={0.30} />
      <div className="section-blend-top" />
      <div className="container" style={{ position:'relative', zIndex:5 }}>
        <div style={{ textAlign:'center', marginBottom:'7rem' }}>
          <motion.div initial={{ opacity:0, y:30, filter: 'blur(8px)' }} whileInView={{ opacity:1, y:0, filter: 'blur(0px)' }} viewport={{ once:true, margin: "-100px" }} transition={{ duration:1.2, ease:[0.16,1,0.3,1] }}>
            <span style={{ display:'inline-block', marginBottom:'2rem', fontFamily:'JetBrains Mono,monospace', fontSize:'0.68rem', color:'#404040', letterSpacing:'0.18em', textTransform:'uppercase', padding:'0.3rem 1rem', borderRadius:'9999px', border: '1px solid #141414' }}>
              Get Certified
            </span>
            <h2 style={{ fontSize:'clamp(2.5rem,5vw,4.5rem)', fontWeight:800, letterSpacing:'-0.05em', lineHeight:1.05, marginBottom:'1.5rem' }}>
              Your AI needs a{' '}<span className="text-gradient-silver">trust score</span>.
            </h2>
            <p style={{ color: '#595959', fontSize:'1rem', maxWidth:'460px', margin:'0 auto 5rem auto', lineHeight:1.65 }}>
              Get certified before your regulators demand it. The SRS standard is being adopted now — be first.
            </p>
          </motion.div>
          <AuditCTA />
        </div>

        {/* Bottom bar */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:'3rem', borderTop:'1px solid #0d0d0d', flexWrap:'wrap', gap:'1.5rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.65rem' }}>
            <span style={{ fontWeight:700, fontSize:'0.88rem', letterSpacing:'-0.02em', color: '#737373' }}>TRUSCOR</span>
          </div>
          <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.7rem', color:'#383838' }}>
            © 2026 TRUSCOR · All rights reserved.
          </div>
          <a
            href="https://github.com/ankushsingh21123-blip"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily:'JetBrains Mono,monospace', fontSize:'0.66rem', color:'rgba(255,255,255,0.36)' }}
          >
            UI/UX made by ankushsingh · contact details
          </a>
          <div style={{ display:'flex', gap:'2rem' }}>
            {['Privacy','Terms','Contact'].map(l => (
              <a key={l} href="#"
                style={{ fontSize:'0.78rem', color:'#404040', transition:'color 0.2s' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#b3b3b3')}
                onMouseLeave={e=>(e.currentTarget.style.color='#404040')}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </footer>
  );
}

/* ── Root Page ───────────────────────────────────────────────────── */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    // Scroll snapping removed for smoother natural scrolling
  }, []);

  return (
    <>
      {/* Film grain overlay */}
      <div className="grain-overlay" />

      {/* Loader */}
      <AnimatePresence>
        {!loaded && <PageLoader onComplete={handleLoaded} />}
      </AnimatePresence>

      {/* Main site */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{ backgroundColor: '#000' }}>

        <Header />

        {/* Scene 1 — Hero */}
        <Hero />
        <div className="section-divider" />

        {/* Scene 1b — About Our Business */}
        <AboutBusiness />
        <div className="section-divider" />

        {/* Scene 2 — Business Model / About */}
        <BusinessModel />
        <div className="section-divider" />

        {/* Scene 3 — Features / Audit Engine */}
        <Features />
        <div className="section-divider" />

        {/* Scene 5 — How It Works / Metrics */}
        <HowItWorks />
        <div className="section-divider" />

        {/* Scene 4 — Integrations */}
        <Integrations />
        <div className="section-divider" />

        {/* Comparison — semantic dark section */}
        <ComparisonSlider />
        <div className="section-divider" />

        {/* Moats / Technology */}
        <Moats />
        <div className="section-divider" />

        {/* Scene 6 — Enterprise */}
        <EnterpriseSection />
        <div className="section-divider" />

        {/* Scene 7 — Founders */}
        <Founders />
        <div className="section-divider" />

        {/* Scene 8 — Footer / CTA */}
        <Footer />

        <div style={{
          position: 'fixed',
          bottom: '10px',
          right: '14px',
          zIndex: 10000,
          pointerEvents: 'none',
          fontFamily: 'JetBrains Mono,monospace',
          fontSize: '0.58rem',
          color: '#2e2e2e',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
        }}>
          Frontend UI/UX made by ankushsingh
        </div>
      </motion.main>
    </>
  );
}
