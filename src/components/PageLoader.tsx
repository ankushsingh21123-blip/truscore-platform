'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  onComplete?: () => void;
}

export default function PageLoader({ onComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Fast ramp to 90, then jump to 100 after brief pause
    const intervals: ReturnType<typeof setTimeout>[] = [];

    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 18 + 4;
      if (p >= 92) { p = 92; clearInterval(tick); }
      setProgress(Math.min(p, 92));
    }, 110);

    const finish = setTimeout(() => {
      setProgress(100);
    }, 1600);

    const exit = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onComplete?.(), 650);
    }, 2200);

    intervals.push(finish, exit);
    return () => { clearInterval(tick); intervals.forEach(clearTimeout); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#000',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '2.5rem',
          }}>
          {/* Blueprint exact loader — depth-scroll text effect */}
          <div style={{
            ['--main-size' as string]: '4em',
            ['--text-color' as string]: '#ffffff',
            ['--shine-color' as string]: '#ffffff40',
            ['--shadow-color' as string]: '#aaaaaa',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            overflow: 'hidden', userSelect: 'none', position: 'relative',
            fontSize: '4em', fontWeight: 900, textTransform: 'uppercase' as const,
            color: '#ffffff', width: '7.3em', height: '1em',
            filter: 'drop-shadow(0 0 0.05em #ffffff40)',
          }}>
            {/* 9 clipped text spans — depth perspective */}
            {([
              { clip: '0% 0%, 11.11% 0%, 11.11% 100%, 0% 100%',   fs: 1/20, ml: '-2.1em', op: 0.6, gFrom: 4,  gTo: 7,  shadow: false },
              { clip: '11.11% 0%, 22.22% 0%, 22.22% 100%, 11.11% 100%', fs: 1/16, ml: '-0.98em', op: 0.7, gFrom: 9, gTo: 13, shadow: false },
              { clip: '22.22% 0%, 33.33% 0%, 33.33% 100%, 22.22% 100%', fs: 1/13, ml: '-0.33em', op: 0.8, gFrom: 15, gTo: 18, shadow: false },
              { clip: '33.33% 0%, 44.44% 0%, 44.44% 100%, 33.33% 100%', fs: 1/11, ml: '-0.05em', op: 0.9, gFrom: 20, gTo: 23, shadow: false },
              { clip: '44.44% 0%, 55.55% 0%, 55.55% 100%, 44.44% 100%', fs: 1/10, ml: '0em',    op: 1,   gFrom: null, gTo: null, shadow: false },
              { clip: '55.55% 0%, 66.66% 0%, 66.66% 100%, 55.55% 100%', fs: 1/11, ml: '0.05em', op: 0.9, gFrom: 29, gTo: 32, shadow: true },
              { clip: '66.66% 0%, 77.77% 0%, 77.77% 100%, 66.66% 100%', fs: 1/13, ml: '0.33em', op: 0.8, gFrom: 34, gTo: 37, shadow: true },
              { clip: '77.77% 0%, 88.88% 0%, 88.88% 100%, 77.77% 100%', fs: 1/16, ml: '0.98em', op: 0.7, gFrom: 39, gTo: 42, shadow: true },
              { clip: '88.88% 0%, 100% 0%, 100% 100%, 88.88% 100%',     fs: 1/20, ml: '2.1em',  op: 0.6, gFrom: 45, gTo: 48, shadow: true },
            ] as Array<{ clip:string; fs:number; ml:string; op:number; gFrom:number|null; gTo:number|null; shadow:boolean }>).map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden',
                position: 'absolute',
                clipPath: `polygon(${s.clip})`,
                fontSize: `calc(4em / ${1/s.fs < 1 ? 1 : Math.round(1/s.fs)})`,
                marginLeft: s.ml, opacity: s.op,
              }}>
                <span style={{
                  ...(s.gFrom !== null ? {
                    background: s.shadow
                      ? `linear-gradient(to right, #aaaaaa ${s.gFrom}%, #ffffff ${s.gTo}%)`
                      : `linear-gradient(to right, #ffffff ${s.gFrom}%, #aaaaaa ${s.gTo}%)`,
                    backgroundSize: '200% auto', WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  } : {}),
                  animation: 'ts-scroll 2s cubic-bezier(0.1,0.6,0.9,0.4) infinite, ts-shadow 2s cubic-bezier(0.1,0.6,0.9,0.4) infinite',
                }}>
                  Loading
                </span>
              </div>
            ))}

            {/* Shimmer line */}
            <div style={{
              position: 'absolute', display: 'flex', alignItems: 'center',
              justifyContent: 'center', overflow: 'hidden',
              height: '0.04em', width: '2em', marginTop: '0.9em', borderRadius: '0.04em',
              bottom: '-0.9em',
            }}>
              <div style={{ position:'absolute', width:'100%', height:'100%', background:'#ffffff', opacity:0.25, borderRadius:'0.04em' }} />
              <div style={{
                position:'absolute', width:'100%', height:'100%',
                background:'#ffffff', borderRadius:'0.04em',
                transform:'translateX(-90%)',
                animation:'ts-wobble 2s cubic-bezier(0.5,0.8,0.5,0.2) infinite',
              }} />
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ width: '200px', position: 'relative', marginTop: '1rem' }}>
            <div style={{
              width: '100%', height: '1px',
              background: '#141414', borderRadius: '1px',
            }}>
              <motion.div
                style={{ height: '100%', background: '#999999', borderRadius: '1px' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.15 }}
              />
            </div>
            <div style={{
              marginTop: '0.75rem', textAlign: 'center',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.62rem', color: '#404040',
              letterSpacing: '0.12em',
            }}>
              {Math.round(progress)}%
            </div>
          </div>

          <style>{`
            @keyframes ts-scroll  { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
            @keyframes ts-shadow  { 0%{background-position:-98% 0} 100%{background-position:102% 0} }
            @keyframes ts-wobble  { 0%{transform:translateX(-90%)} 50%{transform:translateX(90%)} 100%{transform:translateX(-90%)} }
          `}</style>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
