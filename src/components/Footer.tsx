'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com/';

export default function Footer() {
    return (
        <>

            <footer style={{
                background: 'var(--gray-900)',
                padding: '6rem 0 3rem',
                fontFamily: 'Inter, sans-serif',
                color: 'white',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="footer-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1.2fr',
                        gap: '2rem',
                        marginBottom: '5rem'
                    }}>
                        {/* Brand Column */}
                        <div className="footer-brand-col">
                            <Link href="/" style={{ display: 'inline-block', marginBottom: '2rem' }}>
                                <img
                                    src="/images/seoscribeslogo.webp"
                                    alt="SEOScribes"
                                    style={{ height: '38px', width: 'auto', filter: 'brightness(10)' }}
                                />
                            </Link>
                            <p style={{
                                fontSize: '1rem',
                                color: 'rgba(255, 255, 255, 0.6)',
                                lineHeight: 1.7,
                                marginBottom: '2.5rem',
                                maxWidth: '340px'
                            }}>
                                The AI-native SEO platform for performance teams.
                                Automate content recovery, gap analysis, and
                                AI engine optimization with ease.
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <a href="#" className="social-icon"><Twitter size={18} /></a>
                                <a href="#" className="social-icon"><Linkedin size={18} /></a>
                                <a href="#" className="social-icon"><Github size={18} /></a>
                                <a href="mailto:hello@seoscribes.com" className="social-icon"><Mail size={18} /></a>
                            </div>
                        </div>

                        {/* Product Column */}
                        <div>
                            <h4 style={{
                                fontSize: '0.8125rem',
                                fontWeight: 800,
                                marginBottom: '1.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'white'
                            }}>
                                Product
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="#features" className="footer-link">Features</a>
                                <a href="#how-it-works" className="footer-link">How it Works</a>
                                <a href="#pricing" className="footer-link">Pricing</a>
                                <a href="#comparison" className="footer-link">The Difference</a>
                                <a href={APP_URL} className="footer-link">Live Demo</a>
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div>
                            <h4 style={{
                                fontSize: '0.8125rem',
                                fontWeight: 800,
                                marginBottom: '1.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'white'
                            }}>
                                Support
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="#faq" className="footer-link">Help Center</a>
                                <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                                <Link href="/terms" className="footer-link">Terms of Service</Link>
                                <Link href="/contact" className="footer-link">Contact Sales</Link>
                                <a href="https://blog.seoscribes.com" className="footer-link">SEO Blog</a>
                            </div>
                        </div>

                        {/* Newsletter/Status Column */}
                        <div>
                            <h4 style={{
                                fontSize: '0.8125rem',
                                fontWeight: 800,
                                marginBottom: '1.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'white'
                            }}>
                                Platform Status
                            </h4>
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '1.5rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.05)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>All Systems Operational</span>
                                </div>
                                <p style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                                    Join 5,000+ SEO experts getting our weekly automation insights.
                                </p>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        style={{
                                            width: '100%',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '10px',
                                            color: 'white',
                                            fontSize: '0.875rem',
                                            fontFamily: 'Inter, sans-serif'
                                        }}
                                    />
                                    <button style={{
                                        position: 'absolute',
                                        right: '4px',
                                        top: '4px',
                                        bottom: '4px',
                                        background: 'var(--primary-600)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        width: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        cursor: 'pointer'
                                    }}>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        paddingTop: '2.5rem',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.4)' }}>
                            © 2026 SEOScribes. All rights reserved. Built for the era of AI Search.
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.4)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle2 size={14} style={{ color: '#10B981' }} />
                                SOC2 Compliant
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle2 size={14} style={{ color: '#10B981' }} />
                                GDPR Ready
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
