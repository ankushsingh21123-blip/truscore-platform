'use client';

import React, { useEffect, useState } from 'react';
import ScoringGauge from '@/components/ScoringGauge';
import { motion } from 'framer-motion';
import { UnicornBg } from '@/components/BusinessModel';

interface TelemetryData {
  score: number;
  status: string;
  liabilityExposure: string;
  apiLayerExposure: string;
  uiLayerExposure: string;
  apiLayerPercentage: number;
  uiLayerPercentage: number;
  timeline: { time: string; event: string }[];
  matrix: { tier: string; domain: string; vulnerabilities: string; score: number }[];
}

export default function Dashboard() {
  const [data, setData] = useState<TelemetryData | null>(null);

  useEffect(() => {
    fetch('/api/telemetry')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(console.error);
  }, []);

  if (!data) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000', color: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid #1a1a1a', borderTop: '3px solid #fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#000', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Background grain & 3D scene */}
      <div className="grain-overlay" />
      <UnicornBg projectId="AjA7XKof5CTH0MDB0bvF" opacity={0.25} />
      
      {/* Sidebar */}
      <aside style={{ 
        width: '280px', 
        backgroundColor: '#050505', 
        borderRight: '1px solid #141414',
        backdropFilter: 'blur(16px)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '3rem' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: '#0f0f0f',
            border: '1px solid #1f1f1f',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: '0.7rem', color: '#fff' }}>TS</span>
          </div>
          <span style={{ fontFamily: 'var(--font-logo)', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.03em', color: '#fff' }}>
            TRUSCOR
          </span>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {['Overview', 'Audits', 'Registry', 'Telemetry', 'Settings'].map((item, i) => (
            <div key={item} style={{ 
              padding: '0.85rem 1rem', 
              borderRadius: '8px', 
              backgroundColor: i === 0 ? '#141414' : 'transparent', 
              color: i === 0 ? '#fff' : '#808080',
              fontWeight: i === 0 ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { if (i !== 0) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = '#0a0a0a'; } }}
            onMouseLeave={e => { if (i !== 0) { e.currentTarget.style.color = '#808080'; e.currentTarget.style.backgroundColor = 'transparent'; } }}>
               {item}
            </div>
          ))}
        </nav>
        
        <div style={{ 
          marginTop: 'auto', padding: '1.25rem', 
          border: '1px solid #1a1a1a', 
          background: '#050505',
          borderRadius: '12px', fontSize: '0.8rem' 
        }}>
           <div style={{ color: '#808080', marginBottom: '0.5rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', textTransform: 'uppercase' }}>Active Probe</div>
           <div style={{ fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', animation: 'pulse-dot 2s infinite' }} />
             Jarvis-v2.4
           </div>
           <div style={{ height: '2px', backgroundColor: '#1a1a1a', width: '100%', marginTop: '0.75rem', borderRadius: '1px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '80%', backgroundColor: '#fff', borderRadius: '1px' }} />
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '3rem 4rem', zIndex: 10, overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <div>
             <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '0.5rem' }}>Risk Overview</h1>
             <p style={{ color: '#808080', fontSize: '0.9rem', fontFamily: 'JetBrains Mono, monospace' }}>Yuga AI Audit Results · Updated 2m ago</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <button style={{ 
               padding: '0.75rem 1.5rem', borderRadius: '8px', 
               border: '1px solid #262626', 
               background: '#0d0d0d', 
               color: '#fff', fontWeight: 600, fontSize: '0.85rem',
               cursor: 'pointer', transition: 'all 0.2s ease'
             }}
             onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a1a1a'; }}
             onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0d0d0d'; }}>
               Export PDF
             </button>
             <button style={{ 
               padding: '0.75rem 1.5rem', borderRadius: '8px', 
               border: 'none', background: '#fff', 
               color: '#000', fontWeight: 700, fontSize: '0.85rem',
               cursor: 'pointer', transition: 'all 0.2s ease'
             }}
             onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#e0e0e0'; }}
             onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#fff'; }}>
               Relaunch Audit
             </button>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
           {/* Card 1: Gauge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ 
              padding: '2rem', borderRadius: '16px', border: '1px solid #141414',
              background: '#050505', backdropFilter: 'blur(12px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}>
             <ScoringGauge score={data.score} size={200} />
             <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#666666', letterSpacing: '0.1em', fontFamily: 'JetBrains Mono, monospace' }}>Status</div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.25rem', marginTop: '0.25rem' }}>{data.status}</div>
             </div>
          </motion.div>
          
           {/* Card 2: Exposure */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ 
              padding: '2rem', borderRadius: '16px', border: '1px solid #141414',
              background: '#050505', backdropFilter: 'blur(12px)',
              display: 'flex', flexDirection: 'column'
            }}>
             <h3 style={{ fontSize: '1.1rem', color: '#999999', fontWeight: 600, marginBottom: '0.5rem' }}>Liability Exposure</h3>
             <div style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', marginBottom: '0.5rem' }}>{data.liabilityExposure}</div>
             <p style={{ fontSize: '0.85rem', color: '#666666', lineHeight: 1.5 }}>Quantified financial risk based on Tier 1-3 vulnerabilities.</p>
             
             <div style={{ marginTop: 'auto' }}>
                <div style={{ marginTop: '1.5rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: '#b3b3b3' }}>
                      <span>API Layer</span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{data.apiLayerExposure}</span>
                   </div>
                   <div style={{ height: '4px', backgroundColor: '#141414', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${data.apiLayerPercentage}%` }} transition={{ duration: 1, delay: 0.5 }}
                        style={{ height: '100%', backgroundColor: '#666666', borderRadius: '2px' }} />
                   </div>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: '#b3b3b3' }}>
                      <span>UI/DOM Layer</span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{data.uiLayerExposure}</span>
                   </div>
                   <div style={{ height: '4px', backgroundColor: '#141414', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${data.uiLayerPercentage}%` }} transition={{ duration: 1, delay: 0.6 }}
                        style={{ height: '100%', backgroundColor: '#fff', borderRadius: '2px' }} />
                   </div>
                </div>
             </div>
          </motion.div>

           {/* Card 3: Timeline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              padding: '2rem', borderRadius: '16px', border: '1px solid #141414',
              background: '#050505', backdropFilter: 'blur(12px)',
              display: 'flex', flexDirection: 'column'
            }}>
             <h3 style={{ fontSize: '1.1rem', color: '#999999', fontWeight: 600, marginBottom: '1.5rem' }}>Audit Timeline</h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                {data.timeline.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
                     <div style={{ color: '#666666', fontFamily: 'JetBrains Mono, monospace', flexShrink: 0 }}>{item.time}</div>
                     <div style={{ color: '#d9d9d9', lineHeight: 1.4 }}>{item.event}</div>
                  </div>
                ))}
             </div>
             <button style={{ 
               marginTop: '2rem', width: '100%', padding: '0.85rem', 
               background: 'transparent', border: '1px solid #262626', 
               borderRadius: '8px', fontSize: '0.85rem', color: '#fff', fontWeight: 600,
               cursor: 'pointer', transition: 'all 0.2s'
             }}
             onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0d0d0d'; }}
             onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
               View Full Logs
             </button>
          </motion.div>
        </div>

        {/* Detailed Matrix Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ 
            padding: '2.5rem', borderRadius: '16px', border: '1px solid #141414',
            background: '#050505', backdropFilter: 'blur(12px)'
          }}>
           <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem' }}>Detailed Audit Matrix</h3>
           <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                 <tr style={{ borderBottom: '1px solid #1a1a1a' }}>
                    <th style={{ padding: '0 0 1rem 0', color: '#666666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Tier</th>
                    <th style={{ padding: '0 0 1rem 0', color: '#666666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Domain</th>
                    <th style={{ padding: '0 0 1rem 0', color: '#666666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Vulnerabilities</th>
                    <th style={{ padding: '0 0 1rem 0', color: '#666666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Score</th>
                 </tr>
              </thead>               <tbody>
                 {data.matrix.map((row, i) => (
                   <tr key={i} style={{ borderBottom: i < data.matrix.length - 1 ? '1px solid #0d0d0d' : 'none' }}>
                      <td style={{ padding: i < data.matrix.length - 1 ? '1.5rem 0' : '1.5rem 0 0.5rem 0', fontWeight: 600, fontSize: '0.9rem' }}>{row.tier}</td>
                      <td style={{ padding: i < data.matrix.length - 1 ? '1.5rem 0' : '1.5rem 0 0.5rem 0', color: '#b3b3b3', fontSize: '0.9rem' }}>{row.domain}</td>
                      <td style={{ padding: i < data.matrix.length - 1 ? '1.5rem 0' : '1.5rem 0 0.5rem 0', color: '#b3b3b3', fontSize: '0.9rem' }}>{row.vulnerabilities}</td>
                      <td style={{ padding: i < data.matrix.length - 1 ? '1.5rem 0' : '1.5rem 0 0.5rem 0', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600, color: row.score > 800 ? '#fff' : '#808080' }}>{row.score}</td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </motion.div>
      </main>
    </div>
  );
}
