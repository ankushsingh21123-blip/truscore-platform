import React from 'react';

const tiers = [
  {
    id: '1-2',
    name: 'Offense',
    description: 'Offensive Engine & Agentic Contagion',
    items: ['Jailbreaks', 'PII exfiltration', 'XSS', 'Swarm privilege escalation'],
    color: 'var(--tier-1)'
  },
  {
    id: '3',
    name: 'Math',
    description: 'Ecosystem Audits & Discovery',
    items: ['Financial burn rates', 'Regulatory stress tests', 'Shadow AI mapping'],
    color: 'var(--tier-3)'
  },
  {
    id: '4',
    name: 'Governance',
    description: 'Boardroom Compliance',
    items: ['Insurable SRS grade', 'PML Calculation', 'M&A scanner', 'Legal Safe Harbor'],
    color: 'var(--tier-4)'
  },
  {
    id: '5',
    name: 'Defense',
    description: 'Runtime Immune System',
    items: ['One-click remediation escrow', 'Runtime immune system', 'Honeypot routing'],
    color: 'var(--tier-5)'
  }
];

export default function AuditMatrix() {
  return (
    <section id="product" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Jarvis: 5-Tier Actuarial Audit Matrix</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Our systematic approach to quantifying AI risk across the entire stack.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {tiers.map((tier) => (
            <div key={tier.id} className="premium-card" style={{ borderTop: `4px solid ${tier.color}` }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  color: tier.color, 
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>Tier {tier.id}</span>
                <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{tier.name}</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {tier.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {tier.items.map((item, idx) => (
                  <li key={idx} style={{ 
                    fontSize: '0.85rem', 
                    padding: '0.5rem 0', 
                    borderTop: '1px solid #f5f5f4',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: tier.color }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
