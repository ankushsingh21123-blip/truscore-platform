import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TRUSCOR — AI Risk Quantification Platform',
  description:
    'TRUSCOR is the definitive risk scoring platform for enterprise AI. The FICO Score equivalent for AI — quantifying semantic risk into deterministic financial exposure for insurers, regulators, and CFOs.',
  keywords: [
    'AI risk quantification', 'AI audit', 'semantic risk score',
    'AI liability', 'Jarvis AI probe', 'AI insurance',
    'EU AI Act compliance', 'AI governance', 'TRUSCOR',
  ],
  authors: [{ name: 'TRUSCOR', url: 'https://truscor.org' }],
  creator: 'TRUSCOR',
  openGraph: {
    title: 'TRUSCOR — AI Risk Quantification Platform',
    description: 'The FICO Score for enterprise AI. Get your Semantic Risk Score in 24 hours.',
    url: 'https://truscor.org',
    siteName: 'TRUSCOR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRUSCOR — AI Risk Quantification Platform',
    description: 'The FICO Score for enterprise AI. Get your Semantic Risk Score in 24 hours.',
    creator: '@truscor',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preconnect for Unicorn Studio CDN */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://storage.unicorn.studio" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#000' }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
