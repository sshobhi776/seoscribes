'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com';

export default function Footer() {
    return (
        <>
            <style jsx>{`
        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }
        
        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .footer-brand {
            grid-column: 1 / -1;
            margin-bottom: 1rem;
          }
        }
      `}</style>

            <footer style={{
                background: 'white',
                borderTop: '1px solid var(--border-light)',
                padding: '4rem 0 2rem',
                fontFamily: 'Inter, sans-serif'
            }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="footer-main">
                        <div className="footer-brand">
                            <div className="logo" style={{ marginBottom: '1rem' }}>
                                <img
                                    src="/images/seoscribeslogo.webp"
                                    alt="SEOScribes"
                                    style={{ height: '32px', width: 'auto' }}
                                />
                            </div>
                            <p style={{
                                fontSize: '0.9375rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '380px',
                                lineHeight: 1.6,
                                marginBottom: '1.5rem'
                            }}>
                                The AI-native SEO platform that automatically detects ranking drops,
                                recovers lost traffic, and optimizes for Google and AI answer engines.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>Twitter</a>
                                <a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>LinkedIn</a>
                                <a href="#" className="nav-link" style={{ fontSize: '0.875rem' }}>GitHub</a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '0.875rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: 'var(--text-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Quick Links
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><a href={`${APP_URL}/login`} className="nav-link" style={{ fontSize: '0.9375rem' }}>Get Started</a></li>
                                <li><a href="#features" className="nav-link" style={{ fontSize: '0.9375rem' }}>Features</a></li>
                                <li><a href="#pricing" className="nav-link" style={{ fontSize: '0.9375rem' }}>Pricing</a></li>
                                <li><a href="#how-it-works" className="nav-link" style={{ fontSize: '0.9375rem' }}>How It Works</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 style={{
                                fontSize: '0.875rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: 'var(--text-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Resources
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><Link href="/about" className="nav-link" style={{ fontSize: '0.9375rem' }}>About</Link></li>
                                <li><Link href="/contact" className="nav-link" style={{ fontSize: '0.9375rem' }}>Contact</Link></li>
                                <li><Link href="/privacy" className="nav-link" style={{ fontSize: '0.9375rem' }}>Privacy</Link></li>
                                <li><Link href="/terms" className="nav-link" style={{ fontSize: '0.9375rem' }}>Terms</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        borderTop: '1px solid var(--border-light)',
                        paddingTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', textAlign: 'center' }}>
                            © 2026 SEOScribes. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}