'use client';

import React, { useEffect, useState } from 'react';

interface ScoringGaugeProps {
  score: number;
  size?: number;
}

export default function ScoringGauge({ score, size = 200 }: ScoringGaugeProps) {
  const [offset, setOffset] = useState(0);
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    const progress = (score / 1000) * circumference;
    setOffset(circumference - progress);
  }, [score, circumference]);

  // Color logic based on score
  const getColor = (s: number) => {
    if (s < 400) return '#ef4444'; // Danger
    if (s < 700) return '#f59e0b'; // Warning
    return '#10b981'; // Success
  };

  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e7e5e4"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(score)}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease-out, stroke 1s' }}
        />
      </svg>
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <div style={{ 
          fontSize: `${size * 0.2}px`, 
          fontWeight: 700, 
          fontFamily: 'var(--font-playfair)',
          color: 'var(--text-primary)'
        }}>
          {score}
        </div>
        <div style={{ 
          fontSize: `${size * 0.05}px`, 
          fontWeight: 600, 
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          SRS Grade
        </div>
      </div>
    </div>
  );
}
