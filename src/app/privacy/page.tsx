import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--bg-secondary)', minHeight: '100vh' }}>
            {/* Header */}
            <header style={{
                background: 'white',
                borderBottom: '1px solid var(--border-light)',
                padding: '1rem 0'
            }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <Link href="/" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: '0.9375rem',
                        fontWeight: 500
                    }} className="nav-link">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section style={{ padding: '4rem 0 2rem', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <Shield size={48} style={{ color: 'var(--primary-600)', margin: '0 auto 1.5rem' }} />
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
                        Last updated: January 5, 2025
                    </p>
                </div>
            </section>

            {/* Content */}
            <section style={{ padding: '2rem 0 4rem', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Introduction
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                OptiFlow Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains
                                how we collect, use, disclose, and safeguard your information when you use our SEO platform and services.
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
                                Google Search Console Data
                            </h3>
                            <p style={{ marginBottom: '1rem' }}>
                                When you connect your Google Search Console, we access and store search performance data including
                                queries, impressions, clicks, and positions. This data is used solely to provide our SEO analysis services.
                            </p>

                            <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                                Usage Data
                            </h3>
                            <p style={{ marginBottom: '1rem' }}>
                                We automatically collect information about how you interact with our platform, including pages visited,
                                features used, and time spent on the platform.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                How We Use Your Information
                            </h2>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Provide and maintain our SEO analysis and content generation services</li>
                                <li style={{ marginBottom: '0.5rem' }}>Analyze your search performance and identify optimization opportunities</li>
                                <li style={{ marginBottom: '0.5rem' }}>Send you service updates, security alerts, and support messages</li>
                                <li style={{ marginBottom: '0.5rem' }}>Improve and develop new features for our platform</li>
                                <li style={{ marginBottom: '0.5rem' }}>Comply with legal obligations and enforce our terms</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Data Security
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We implement industry-standard security measures to protect your data, including encryption at rest and
                                in transit, secure authentication, and regular security audits. However, no method of transmission over
                                the internet is 100% secure.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Data Sharing
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We do not sell your personal information. We may share your data with:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Service providers who help us operate our platform (e.g., hosting, analytics)</li>
                                <li style={{ marginBottom: '0.5rem' }}>Law enforcement when required by law</li>
                                <li style={{ marginBottom: '0.5rem' }}>Other parties with your explicit consent</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Your Rights
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                You have the right to:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Access and download your data</li>
                                <li style={{ marginBottom: '0.5rem' }}>Correct inaccurate information</li>
                                <li style={{ marginBottom: '0.5rem' }}>Delete your account and associated data</li>
                                <li style={{ marginBottom: '0.5rem' }}>Opt-out of marketing communications</li>
                                <li style={{ marginBottom: '0.5rem' }}>Revoke Google Search Console access at any time</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Cookies and Tracking
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We use cookies and similar technologies to maintain your session, remember your preferences, and analyze
                                platform usage. You can control cookies through your browser settings.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Data Retention
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We retain your data for as long as your account is active or as needed to provide services. When you
                                delete your account, we will delete your personal information within 30 days, except where required by law.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Changes to This Policy
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We may update this Privacy Policy from time to time. We will notify you of significant changes via email
                                or through the platform. Your continued use of OptiFlow after changes constitutes acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                Contact Us
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                If you have questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>
                                Email: <a href="mailto:privacy@optiflow.com" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>privacy@optiflow.com</a>
                            </p>
                            <p>
                                Address: OptiFlow Inc., 123 SEO Street, San Francisco, CA 94104
                            </p>
                        </section>

                    </div>
                </div>
            </section>
        </div>
    );
}