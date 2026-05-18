'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const nav = [
  { label: 'Platform',     href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Founders',     href: '#founders' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const targets = nav.map(n => document.querySelector(n.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    targets.forEach(t => t && observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9000,
          padding: scrolled ? '0.9rem 0' : '1.3rem 0',
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid #0f0f0f' : '1px solid transparent',
          transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
        }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'var(--font-logo)', fontWeight: 700, fontSize: '1rem',
              letterSpacing: '-0.03em', color: '#fff',
            }}>
              TRUSCOR
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            {nav.map(item => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a key={item.label} href={item.href}
                  style={{
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#fff' : '#808080',
                    background: isActive ? '#121212' : 'transparent',
                    transition: 'all 0.22s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = '#fff';
                      (e.currentTarget as HTMLElement).style.background = '#0a0a0a';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.color = '#808080';
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                    }
                  }}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* GitHub */}
            <a
              href="https://github.com/Gautam-R-Patil/TRUSCOR-ui"
              target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '9px',
                border: '1px solid #1a1a1a',
                background: '#080808',
                color: '#737373',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.borderColor = '#4d4d4d'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#737373'; (e.currentTarget as HTMLElement).style.borderColor = '#1a1a1a'; }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.6rem 1.35rem', borderRadius: '9999px',
              background: '#fff', color: '#000',
              fontSize: '0.82rem', fontWeight: 700, letterSpacing: '-0.01em',
              transition: 'all 0.22s ease',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e0e0e0'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#fff'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
              Get Graded →
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(m => !m)}
              style={{
                display: 'none', flexDirection: 'column', gap: '4px',
                padding: '0.5rem', borderRadius: '8px',
                border: '1px solid #1a1a1a',
                background: '#080808',
                cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
                width: '38px', height: '38px',
              }}
              id="mobile-menu-btn"
              aria-label="Toggle menu">
              {menuOpen
                ? <span style={{ color: '#999999', fontSize: '1rem', lineHeight: 1 }}>✕</span>
                : <>
                    <div style={{ width: '16px', height: '1px', background: '#808080' }} />
                    <div style={{ width: '16px', height: '1px', background: '#808080' }} />
                    <div style={{ width: '10px', height: '1px', background: '#808080', alignSelf: 'flex-start' }} />
                  </>
              }
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: '70px', left: '1rem', right: '1rem',
              zIndex: 8999, borderRadius: '16px', overflow: 'hidden',
              background: 'rgba(6,6,6,0.96)', backdropFilter: 'blur(24px)',
              border: '1px solid #1a1a1a',
              padding: '1rem',
            }}>
            {nav.map(item => (
              <a key={item.label} href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '0.85rem 1rem', borderRadius: '10px',
                  fontSize: '0.9rem', color: '#999999',
                  transition: 'all 0.2s', textDecoration: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.background = '#0d0d0d'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#999999'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                {item.label}
              </a>
            ))}
            <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #0f0f0f' }}>
              <a href="#contact" onClick={() => setMenuOpen(false)} style={{
                display: 'block', textAlign: 'center', padding: '0.85rem',
                borderRadius: '10px', background: '#fff', color: '#000',
                fontSize: '0.875rem', fontWeight: 700,
              }}>
                Get Graded →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          header nav { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
