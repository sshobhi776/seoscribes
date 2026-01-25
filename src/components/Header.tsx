'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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
                background: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
                border: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
                borderRadius: scrolled ? '20px' : '0',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
                zIndex: 1000,
                height: scrolled ? '56px' : '64px',
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
                                height: scrolled ? '28px' : '32px',
                                width: 'auto',
                                transition: 'all 0.4s ease'
                            }}
                        />
                    </Link>

                    <nav style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: scrolled ? 'rgba(0,0,0,0.03)' : 'transparent',
                        padding: '0.375rem',
                        borderRadius: '12px',
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
                            background: 'var(--primary-600)',
                            color: 'white',
                            padding: scrolled ? '0.5rem 1.25rem' : '0.5rem 1.25rem',
                            borderRadius: '12px',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            boxShadow: '0 8px 16px -4px rgba(79, 70, 229, 0.3)',
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
                                width: '40px',
                                height: '40px',
                                borderRadius: '10px',
                                border: '1px solid rgba(0,0,0,0.05)',
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
                        top: 'calc(100% + 8px)',
                        left: scrolled ? '0' : '1.5rem',
                        right: scrolled ? '0' : '1.5rem',
                        background: 'white',
                        borderRadius: '20px',
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem',
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
                                        padding: '0.75rem 1rem',
                                        fontSize: '1rem',
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        color: 'var(--text-primary)',
                                        textDecoration: 'none',
                                        background: 'transparent',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    {item}
                                    <ArrowRight size={16} style={{ opacity: 0.3 }} />
                                </Link>
                            ))}
                        </div>

                        <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                            <a href={APP_URL} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.875rem',
                                background: 'var(--primary-600)',
                                color: 'white',
                                borderRadius: '14px',
                                fontSize: '0.9375rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                boxShadow: '0 8px 16px -4px rgba(79, 70, 229, 0.3)'
                            }}>
                                Get Started Free
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
