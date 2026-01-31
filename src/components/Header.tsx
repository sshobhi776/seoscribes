'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com/';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header style={{
                position: 'fixed',
                top: scrolled ? '1rem' : '0',
                left: scrolled ? '1rem' : '0',
                right: scrolled ? '1rem' : '0',
                background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                border: scrolled ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid transparent',
                borderRadius: scrolled ? '20px' : '0',
                boxShadow: scrolled ? '0 10px 40px -10px rgba(0,0,0,0.15)' : 'none',
                zIndex: 1000,
                height: scrolled ? '60px' : '72px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                animation: 'slideDownHeader 0.5s ease-out forwards'
            }}>
                <div className="container header-container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: scrolled ? '1140px' : '1200px',
                    margin: '0 auto',
                    width: '100%',
                    padding: '0 1.5rem',
                    transition: 'all 0.4s ease'
                }}>
                    <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src="/images/seoscribeslogo.webp"
                            alt="SEOScribes"
                            style={{
                                height: scrolled ? '30px' : '34px',
                                width: 'auto',
                                transition: 'all 0.4s ease'
                            }}
                        />
                    </Link>

                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        background: scrolled ? 'rgba(0,0,0,0.02)' : 'transparent',
                        padding: '0.375rem',
                        borderRadius: '14px',
                        transition: 'all 0.3s ease'
                    }} className="desktop-nav">
                        {['Features', 'How It Works', 'Comparison', 'FAQ', 'Pricing'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="nav-link"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    textDecoration: 'none',
                                    padding: '0.5rem 1rem'
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <a href={APP_URL} className="btn-shimmer desktop-cta" style={{
                            background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                            color: 'white',
                            padding: '0.625rem 1.5rem',
                            borderRadius: '12px',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            boxShadow: '0 8px 20px -4px rgba(79, 70, 229, 0.35)',
                            fontFamily: 'Inter, sans-serif',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            transition: 'all 0.4s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            Get Started Free
                            <ArrowRight size={16} />
                        </a>

                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                display: 'none',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '42px',
                                height: '42px',
                                borderRadius: '12px',
                                border: '1px solid rgba(0,0,0,0.08)',
                                background: scrolled ? 'white' : 'transparent',
                                cursor: 'pointer',
                                color: 'var(--text-primary)',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 12px)',
                        left: scrolled ? '0' : '1rem',
                        right: scrolled ? '0' : '1rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: '24px',
                        border: '1px solid rgba(0,0,0,0.06)',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1.25rem',
                        gap: '0.25rem',
                        animation: 'slideDownHeader 0.3s ease-out'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {['Features', 'How It Works', 'Comparison', 'FAQ', 'Pricing'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="mobile-link"
                                    style={{
                                        padding: '0.875rem 1.25rem',
                                        fontSize: '1rem',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        textDecoration: 'none',
                                        background: 'transparent',
                                        borderRadius: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {item}
                                    <ArrowRight size={18} style={{ opacity: 0.3 }} />
                                </Link>
                            ))}
                        </div>

                        <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                            <a href={APP_URL} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '1rem',
                                background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                                color: 'white',
                                borderRadius: '16px',
                                fontSize: '0.9375rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                boxShadow: '0 10px 20px -4px rgba(79, 70, 229, 0.35)'
                            }}>
                                <Sparkles size={16} />
                                Get Started Free
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
