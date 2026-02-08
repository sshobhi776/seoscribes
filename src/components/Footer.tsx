'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Mail, ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com/';

export default function Footer() {
    return (
        <>
            <footer style={{
                background: 'linear-gradient(180deg, var(--gray-900) 0%, #0a0f1a 100%)',
                padding: '6rem 0 2.5rem',
                fontFamily: 'Inter, sans-serif',
                color: 'white',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background decoration */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)'
                }} />

                <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
                    <div className="footer-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1.3fr 0.9fr 0.9fr 1.1fr',
                        gap: '3rem',
                        marginBottom: '4rem'
                    }}>
                        {/* Brand Column */}
                        <div className="footer-brand-col">
                            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                                <Image
                                    src="/images/seoscribeslogolight.png"
                                    alt="SEOScribes"
                                    width={160}
                                    height={40}
                                    style={{
                                        height: '40px',
                                        width: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Link>
                            <p style={{
                                fontSize: '1rem',
                                color: 'rgba(255, 255, 255, 0.55)',
                                lineHeight: 1.7,
                                marginBottom: '2rem',
                                maxWidth: '320px'
                            }}>
                                The AI-native SEO platform for performance teams.
                                Automate content recovery, gap analysis, and
                                AI engine optimization with ease.
                            </p>

                        </div>

                        {/* Product Column */}
                        <div>
                            <h4 style={{
                                fontSize: '0.8125rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: 'rgba(255, 255, 255, 0.4)'
                            }}>
                                Product
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                {[
                                    { label: 'Blog', href: '/blog' },
                                    { label: 'Pricing', href: '#pricing' },
                                    { label: 'Features', href: '#features' },
                                    { label: 'How it Works', href: '#how-it-works' },

                                ].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="footer-link"
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            textDecoration: 'none',
                                            fontSize: '0.9375rem',
                                            fontWeight: 500,
                                            transition: 'all 0.3s ease',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div>
                            <h4 style={{
                                fontSize: '0.8125rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: 'rgba(255, 255, 255, 0.4)'
                            }}>
                                Support
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                {[
                                    { label: 'FAQs', href: '#faq' },
                                    { label: 'Contact Us', href: '/contact' },
                                    { label: 'Privacy Policy', href: '/privacy' },
                                    { label: 'Terms of Service', href: '/terms' }
                                ].map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="footer-link"
                                        style={{
                                            color: 'rgba(255, 255, 255, 0.6)',
                                            textDecoration: 'none',
                                            fontSize: '0.9375rem',
                                            fontWeight: 500,
                                            transition: 'all 0.3s ease',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'translateX(4px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Status Column */}
                        <div>
                            <h4 style={{
                                fontSize: '0.8125rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: 'rgba(255, 255, 255, 0.4)'
                            }}>
                                Platform Status
                            </h4>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: '#10B981',
                                        boxShadow: '0 0 12px #10B981',
                                        animation: 'pulse 2s infinite'
                                    }} />
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>All Systems Operational</span>
                                </div>
                                <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.45)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                    Join 5,000+ SEO experts getting our weekly automation insights.
                                </p>
                                <a href={APP_URL} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.625rem 1rem',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    borderRadius: '10px',
                                    color: 'white',
                                    fontSize: '0.8125rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'var(--primary-600)';
                                        e.currentTarget.style.borderColor = 'var(--primary-600)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <Zap size={14} />
                                    Start Free Trial
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        paddingTop: '2rem',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1.5rem'
                    }}>
                        <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.35)' }}>
                            © 2026 SEOScribes. All rights reserved.
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            {[
                                { label: 'SOC2 Compliant', icon: CheckCircle2 },
                                { label: 'GDPR Ready', icon: CheckCircle2 }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.8125rem',
                                    color: 'rgba(255, 255, 255, 0.4)'
                                }}>
                                    <item.icon size={14} style={{ color: '#10B981' }} />
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.5; }
                    }
                `}</style>
            </footer>
        </>
    );
}
