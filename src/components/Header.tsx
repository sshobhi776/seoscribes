'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>

            <header style={{
                position: 'sticky',
                top: 0,
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(0,0,0,0.04)',
                zIndex: 1000,
                height: '64px'
            }}>
                <div className="container" style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1200px',
                    padding: '0 1rem'
                }}>
                    <Link href="/" className="logo" style={{ gap: '0.75rem' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)'
                        }}>
                            <Zap size={18} fill="currentColor" />
                        </div>
                        <span style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>OptiFlow</span>
                    </Link>

                    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                        {['Features', 'How It Works', 'Pricing'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="nav-link"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <a href={`${APP_URL}/login`} className="btn btn-primary" style={{
                            padding: '0.5rem 1.25rem',
                            borderRadius: '999px',
                            fontSize: '0.9375rem',
                            boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)',
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            Get Started
                        </a>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                display: 'none',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                color: 'var(--text-primary)'
                            }}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div style={{
                        position: 'fixed',
                        top: '64px',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 999,
                        animation: 'fadeIn 0.2s ease-out'
                    }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                borderBottomLeftRadius: '24px',
                                borderBottomRightRadius: '24px',
                                animation: 'slideDown 0.3s ease-out'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {['Features', 'How It Works', 'Pricing'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        padding: '1rem',
                                        fontSize: '1rem',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        color: 'var(--text-primary)',
                                        textDecoration: 'none',
                                        borderRadius: '12px',
                                        transition: 'all 0.2s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    {item}
                                    <span style={{ fontSize: '1.25rem', opacity: 0.3 }}>›</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}