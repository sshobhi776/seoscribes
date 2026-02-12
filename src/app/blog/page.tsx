import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'SEO Insights & Strategies | SEOScribes Blog',
    description: 'Expert insights on SEO, content optimization, and AI-powered strategies to grow your organic traffic. Learn how to recover lost traffic and optimize for AI answer engines.',
    openGraph: {
        title: 'SEO Insights & Strategies | SEOScribes Blog',
        description: 'Expert insights on SEO, content optimization, and AI-powered strategies to grow your organic traffic.',
        url: 'https://seoscribes.com/blog',
        siteName: 'SEOScribes',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SEO Insights & Strategies | SEOScribes Blog',
        description: 'Expert insights on SEO, content optimization, and AI-powered strategies to grow your organic traffic.',
    },
};

// Blog posts data
const blogPosts = [
    {
        slug: 'ahrefs-vs-long-tail-pro',
        title: 'Ahrefs vs Long Tail Pro: Best 2026 Alternatives',
        excerpt: 'Long Tail Pro is dead. You need a new tool. Ahrefs provides data. SEOScribes provides action. Compare your options and pick the right tool for 2026.',
        category: 'SEO Tools',
        date: '2026-02-08',
        readTime: '8 min read',
        author: 'Evan Johnson'
    },
    {
        slug: 'ahrefs-vs-kwfinder',
        title: 'Ahrefs vs KWFinder: A Practical, Data-Driven SEO Tool',
        excerpt: 'Choosing the right SEO tool can dramatically influence how efficiently you grow organic traffic, identify keyword opportunities, and compete in search results. Compare Ahrefs, KWFinder, and SEOScribes to find the best fit for your needs.',
        category: 'SEO Tools',
        date: '2026-02-08',
        readTime: '12 min read',
        author: 'Evan Johnson'
    }
];

export default function BlogPage() {
    return (
        <div className="page-wrapper">
            <Header />

            {/* Hero Section */}
            <section style={{
                paddingTop: '140px',
                paddingBottom: '60px',
                background: 'var(--bg-secondary)',
                position: 'relative'
            }}>
                <div className="container" style={{ maxWidth: '1200px', padding: '0 1rem' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            marginBottom: '1rem',
                            letterSpacing: '-0.02em'
                        }}>
                            SEO Insights & Strategies
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                            padding: '0 1rem'
                        }}>
                            Expert insights on SEO, content optimization, and AI-powered strategies to grow your organic traffic
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section style={{
                padding: '60px 1rem 100px',
                background: 'white'
            }}>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <BlogClient blogPosts={blogPosts} />
                </div>
            </section>

            <Footer />
        </div>
    );
}
