'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UnicornBg } from './BusinessModel';

const integrations = [
  { name: 'OpenAI',       cat: 'LLM',        icon: '⬡', desc: 'GPT-4o, o1, fine-tuned models' },
  { name: 'Anthropic',    cat: 'LLM',        icon: '◈', desc: 'Claude 3.5 Sonnet & Opus' },
  { name: 'LangChain',    cat: 'Agent',      icon: '⛓', desc: 'LCEL pipelines & agents' },
  { name: 'AutoGen',      cat: 'Multi-agent',icon: '◉', desc: 'MS AutoGen agent meshes' },
  { name: 'Vertex AI',    cat: 'Cloud',      icon: '⬢', desc: 'Gemini Pro + PaLM 2' },
  { name: 'Bedrock',      cat: 'Cloud',      icon: '◆', desc: 'AWS AI services' },
  { name: 'Pinecone',     cat: 'Vector DB',  icon: '⌬', desc: 'RAG pipelines & retrievers' },
  { name: 'HuggingFace',  cat: 'Open-source',icon: '◇', desc: 'Custom fine-tuned models' },
  { name: 'REST / GraphQL', cat: 'Protocol', icon: '⟡', desc: 'Any HTTP AI endpoint' },
  { name: 'WebSocket',    cat: 'Streaming',  icon: '≋', desc: 'Real-time streaming agents' },
  { name: 'FastAPI',      cat: 'Framework',  icon: '▷', desc: 'Python AI backends' },
  { name: 'Supabase',     cat: 'Backend',    icon: '◐', desc: 'AI + DB combined stacks' },
];

export default function Integrations() {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section id="integrations" className="section" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
      <UnicornBg projectId="18CBccbb02aYYChpjQtO" opacity={0.34} />
      <div className="section-blend-top" />
      <div className="section-blend-bottom" />
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">Integrations</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Built for enterprise<br />
            <span className="text-gradient-silver">AI operating layers.</span>
          </h2>
          <p style={{ color: '#616161', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65, fontSize: '0.95rem' }}>
            API, agent mesh, UI layer, and runtime channels are audited in one deterministic pass with financial-grade output.
          </p>
        </motion.div>

        {/* Integration grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '0.85rem',
          marginBottom: '3rem',
        }}>
          {integrations.map((intg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              style={{
                padding: '1.25rem',
                borderRadius: '14px',
                border: `1px solid ${hov === i ? '#262626' : '#0f0f0f'}`,
                background: hov === i ? '#0d0d0d' : '#050505',
                transition: 'all 0.28s cubic-bezier(0.16,1,0.3,1)',
                transform: hov === i ? 'translateY(-2px)' : 'translateY(0)',
                cursor: 'default',
              }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.1rem', color: hov === i ? '#b3b3b3' : '#4d4d4d', transition: 'color 0.25s' }}>{intg.icon}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '-0.01em', color: hov === i ? '#fff' : '#a6a6a6', transition: 'color 0.25s' }}>{intg.name}</span>
              </div>
              <div style={{ fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace', color: '#383838', marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{intg.cat}</div>
              <div style={{ fontSize: '0.76rem', color: '#525252', lineHeight: 1.4 }}>{intg.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '2rem',
            padding: '2rem 2.5rem', borderRadius: '18px',
            border: '1px solid #171717',
            background: '#060606',
            backdropFilter: 'blur(20px)',
          }}>
          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
              Need custom integration?
            </div>
            <div style={{ fontSize: '0.85rem', color: '#666666', lineHeight: 1.5 }}>
              If it speaks HTTP, Jarvis can probe it. Submit your endpoint and we will configure custom coverage.
            </div>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Request Integration →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
