import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: "Privacy Policy | SEOScribes",
    description: "Read the SEOScribes privacy policy to understand how we handle and protect your data.",
};

export default function PrivacyPage() {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--bg-secondary)', minHeight: '100vh' }}>
            <Header />

            {/* Hero Section */}
            <section style={{ padding: '6rem 0 2rem', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '64px',
                        height: '64px',
                        background: 'var(--primary-50)',
                        borderRadius: '16px',
                        marginBottom: '1.5rem',
                        color: 'var(--primary-600)'
                    }}>
                        <Shield size={32} />
                    </div>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        letterSpacing: '-0.03em',
                        color: 'var(--text-primary)'
                    }}>
                        Privacy Policy
                    </h1>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Last updated: January 20, 2026
                    </p>
                </div>
            </section>

            {/* Content */}
            <section style={{ padding: '2rem 0 6rem', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Introduction
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                SEOScribes Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                                how we collect, use, disclose, and safeguard your information when you use our SEO platform and services.
                                Our platform is designed to help you analyze search data from Google Search Console and GA4 to improve your rankings.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Information We Collect
                            </h2>

                            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                                Account Information
                            </h3>
                            <p style={{ marginBottom: '1rem' }}>
                                When you create an account, we collect your name, email address, company name, and password.
                            </p>

                            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                                Search Console & GA4 Data
                            </h3>
                            <p style={{ marginBottom: '1rem' }}>
                                To provide our core services, SEOScribes requests access to your Google Search Console (GSC) and GA4 data.
                                We pull and store search performance data including queries, impressions, clicks, positions, and traffic trends.
                                This data is used exclusively to identify ranking drops, content gaps, and optimization opportunities for your site.
                            </p>

                            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                                CMS Integration Data
                            </h3>
                            <p style={{ marginBottom: '1rem' }}>
                                If you connect your CMS (e.g., WordPress), we store the necessary credentials and URL endpoints to facilitate
                                automated publishing and content updates directly from the platform.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                How We Use Your Information
                            </h2>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Provide automated SEO analysis and content recovery suggestions</li>
                                <li style={{ marginBottom: '0.5rem' }}>Generate optimized content using real performance data</li>
                                <li style={{ marginBottom: '0.5rem' }}>Facilitate direct publishing to your connected CMS</li>
                                <li style={{ marginBottom: '0.5rem' }}>Improve our AI models and platform performance</li>
                                <li style={{ marginBottom: '0.5rem' }}>Maintain security and prevent unauthorized access</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Data Security
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We implement industry-standard security measures to protect your data, including encryption at rest and
                                in transit. We follow strict protocols when handling your GSC and GA4 OAuth tokens to ensure they are
                                only used for the purposes you have authorized.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Data Sharing
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We do not sell your personal information. Your integration data (GSC/GA4) is never shared with third parties
                                for their own use. We only share data with service providers necessary to operate our platform (e.g., cloud hosting).
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Your Rights and Controls
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                You have full control over your data. You can disconnect your Google Search Console, GA4, or CMS at any time
                                through the platform settings, which will immediately cease our access to those services.
                                You may also request a full deletion of your account and all associated data.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Contact Us
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                If you have questions about this Privacy Policy, please contact us at:
                                <br />
                                <strong>Email:</strong> support@seoscribes.com
                            </p>
                        </section>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
