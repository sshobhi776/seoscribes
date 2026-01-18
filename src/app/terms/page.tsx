import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage() {
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
                    <FileText size={48} style={{ color: 'var(--primary-600)', margin: '0 auto 1.5rem' }} />
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        letterSpacing: '-0.03em',
                        color: 'var(--text-primary)'
                    }}>
                        Terms of Service
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
                                1. Acceptance of Terms
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                By accessing or using OptiFlow (the "Service"), you agree to be bound by these Terms of Service.
                                If you do not agree to these terms, please do not use the Service.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                2. Description of Service
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                OptiFlow is an AI-powered SEO platform that provides search performance analysis, content optimization
                                recommendations, and automated content generation tools. The Service integrates with Google Search Console
                                and other third-party services to deliver its functionality.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                3. Account Registration
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                To use the Service, you must:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Provide accurate and complete registration information</li>
                                <li style={{ marginBottom: '0.5rem' }}>Maintain the security of your account credentials</li>
                                <li style={{ marginBottom: '0.5rem' }}>Be at least 18 years old or have parental consent</li>
                                <li style={{ marginBottom: '0.5rem' }}>Not share your account with others</li>
                                <li style={{ marginBottom: '0.5rem' }}>Notify us immediately of any unauthorized access</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                4. Subscription and Payment
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                OptiFlow offers both free and paid subscription plans. Paid subscriptions:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Are billed monthly or annually in advance</li>
                                <li style={{ marginBottom: '0.5rem' }}>Automatically renew unless cancelled</li>
                                <li style={{ marginBottom: '0.5rem' }}>Are non-refundable except as required by law</li>
                                <li style={{ marginBottom: '0.5rem' }}>May be subject to price changes with 30 days notice</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                5. Acceptable Use
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                You agree not to:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Use the Service for any illegal purpose</li>
                                <li style={{ marginBottom: '0.5rem' }}>Attempt to gain unauthorized access to our systems</li>
                                <li style={{ marginBottom: '0.5rem' }}>Interfere with or disrupt the Service</li>
                                <li style={{ marginBottom: '0.5rem' }}>Scrape, copy, or reverse engineer the Service</li>
                                <li style={{ marginBottom: '0.5rem' }}>Use the Service to generate spam or malicious content</li>
                                <li style={{ marginBottom: '0.5rem' }}>Resell or redistribute the Service without permission</li>
                            </ul>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                6. Intellectual Property
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                OptiFlow and its original content, features, and functionality are owned by OptiFlow Inc. and are
                                protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Content generated by our AI tools is provided to you for your use. You retain ownership of content
                                you create using the Service, but grant us a license to use it to improve our services.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                7. Third-Party Services
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                OptiFlow integrates with third-party services like Google Search Console. Your use of these services
                                is subject to their respective terms and conditions. We are not responsible for third-party services.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                8. Disclaimers and Limitations
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Specific SEO results or ranking improvements</li>
                                <li style={{ marginBottom: '0.5rem' }}>Uninterrupted or error-free service</li>
                                <li style={{ marginBottom: '0.5rem' }}>Accuracy of AI-generated content</li>
                                <li style={{ marginBottom: '0.5rem' }}>Compatibility with all systems or browsers</li>
                            </ul>
                            <p style={{ marginBottom: '1rem' }}>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPTIFLOW SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
                                SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                9. Termination
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms.
                                You may cancel your subscription at any time through your account settings.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                10. Changes to Terms
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                We reserve the right to modify these Terms at any time. We will notify you of significant changes via
                                email or through the Service. Continued use after changes constitutes acceptance of the new Terms.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                11. Governing Law
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                These Terms shall be governed by the laws of the State of California, United States, without regard to
                                its conflict of law provisions.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                12. Contact Information
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                For questions about these Terms, please contact us at:
                            </p>
                            <p style={{ marginBottom: '0.5rem' }}>
                                Email: <a href="mailto:legal@optiflow.com" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>legal@optiflow.com</a>
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
