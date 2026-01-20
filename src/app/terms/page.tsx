import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: "Terms of Service | SEOScribes",
    description: "Read the SEOScribes terms of service to understand the rules and guidelines for using our platform.",
};

export default function TermsPage() {
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
                        <FileText size={32} />
                    </div>
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
                                1. Acceptance of Terms
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                By accessing or using SEOScribes (the "Service"), you agree to be bound by these Terms of Service.
                                If you do not agree to these terms, please do not use the Service.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                2. Description of Service
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                SEOScribes is an AI-powered SEO platform that provides search performance analysis, content optimization
                                recommendations, and automated content generation tools. Our platform helps users detect ranking drops,
                                recover lost traffic, and optimize content for both traditional search engines and AI answer engines (AEO/GEO).
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                3. Integrations and Permissions
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                To provide its full functionality, SEOScribes requires integration with and specific permissions from your third-party platforms.
                                This includes, but is not limited to:
                            </p>
                            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Google Search Console:</strong> To pull performance data, queries, and ranking information.</li>
                                <li style={{ marginBottom: '1rem' }}><strong>GA4 (Google Analytics 4):</strong> To analyze traffic trends and user engagement.</li>
                                <li style={{ marginBottom: '1rem' }}><strong>CMS Access (e.g., WordPress):</strong> To facilitate direct publishing and content updates from the platform.</li>
                            </ul>
                            <p>
                                You are responsible for ensuring you have the necessary rights to grant these permissions.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                4. Content Ownership
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong>You retain full ownership</strong> of all published content created via the SEOScribes platform.
                                While SEOScribes provides the tools and AI-driven insights to generate content, we do not claim any ownership rights
                                to the intellectual property of the final articles or optimizations you publish.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                5. No Guaranteed Results
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                SEOScribes provides data-driven recommendations and high-quality AI tools, but <strong>SEO improvements or traffic gains are not guaranteed</strong>.
                                Search engine rankings and traffic depend on numerous factors beyond our control, including competition, changing search engine algorithms,
                                industry volatility, and the quality of your execution of the provided recommendations.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                6. Subscription and Refund Policy
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                SEOScribes offers both free and paid plans. Paid subscriptions automatically renew unless cancelled.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                <strong>Refund Policy:</strong> Payments for SEOScribes subscriptions are generally non-refundable.
                                Limited exceptions may be considered at our sole discretion, such as in cases of documented technical failures
                                that prevent the use of the Service.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                7. Intellectual Property (Service)
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                SEOScribes and its original features and functionality (excluding user-generated content) are owned by SEOScribes Inc.
                                and are protected by international copyright and trademark laws.
                            </p>
                        </section>

                        <section style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                8. Limitation of Liability
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SEOSCRIBES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                                SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE SERVICE, INCLUDING ANY LOSS OF TRAFFIC OR RANKINGS.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                9. Contact Information
                            </h2>
                            <p style={{ marginBottom: '1rem' }}>
                                For questions about these Terms, please reach out to:
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

