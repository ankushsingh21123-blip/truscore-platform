'use client';

import React, { useState } from 'react';

export default function AuditFlow() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (step === 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4);
      }, 3000);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e7e5e4' }}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        {[1, 2, 3, 4].map(s => (
          <div key={s} style={{ 
            flex: 1, 
            height: '4px', 
            backgroundColor: step >= s ? 'var(--accent-blue)' : '#f3f2ee',
            borderRadius: '2px',
            transition: 'background-color 0.3s'
          }}></div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Connect AI Endpoint</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Enter the public URL or API endpoint of your AI agent.</p>
          <input 
            type="text" 
            placeholder="https://api.your-ai-agent.com/v1" 
            style={{ width: '100%', padding: '1rem', border: '1px solid #e7e5e4', borderRadius: '4px', marginBottom: '2rem' }} 
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Select Audit Tiers</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Choose the depth of the actuarial audit.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
             <label style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', border: '1px solid #e7e5e4', borderRadius: '8px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked />
                <div>
                   <div style={{ fontWeight: 600 }}>Tier 1-2: Offensive Probe</div>
                   <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Jailbreaks & DOM injection tests</div>
                </div>
             </label>
             <label style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', border: '1px solid #e7e5e4', borderRadius: '8px', cursor: 'pointer' }}>
                <input type="checkbox" />
                <div>
                   <div style={{ fontWeight: 600 }}>Tier 3-4: Math & Governance</div>
                   <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>Financial risk & regulatory stress tests</div>
                </div>
             </label>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Ready to Launch Jarvis?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Jarvis will systematically bombard your endpoint and map the threat surface.</p>
        </div>
      )}

      {step === 4 && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', color: '#10b981', marginBottom: '1rem' }}>✓</div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Audit Initiated</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Your Agentic Trust Score is being calculated. You can view the real-time progress in your dashboard.</p>
          <a href="/dashboard" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Go to Dashboard</a>
        </div>
      )}

      {step < 4 && (
        <button 
          onClick={handleNext} 
          disabled={loading}
          className="btn-primary" 
          style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          {loading ? 'Launching Jarvis Swarms...' : step === 3 ? 'Start Audit' : 'Continue'}
        </button>
      )}
    </div>
  );
}
