'use client';

import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
}

interface BlogClientProps {
    blogPosts: BlogPost[];
}

export default function BlogClient({ blogPosts }: BlogClientProps) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
        }}>
            {/* Main Content - Blog Posts */}
            <div className="blog-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 'clamp(1rem, 3vw, 1.5rem)'
            }}>
                {blogPosts.map((post) => (
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="blog-card"
                >
                    {/* Featured Image with Title */}
                    <div className="blog-card-image">
                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '-30%',
                            right: '-10%',
                            width: '300px',
                            height: '300px',
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '50%',
                            filter: 'blur(40px)'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-20%',
                            left: '-5%',
                            width: '200px',
                            height: '200px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '50%',
                            filter: 'blur(30px)'
                        }} />

                        {/* Title */}
                        <h3 style={{
                            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                            fontWeight: 800,
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: 1.2,
                            letterSpacing: '-0.01em',
                            position: 'relative',
                            zIndex: 1,
                            textShadow: '0 2px 15px rgba(0, 0, 0, 0.2)',
                            padding: '0 1rem',
                            maxWidth: '100%'
                        }}>
                            {post.title}
                        </h3>
                    </div>

                    <div style={{ padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
                        {/* Category Badge */}
                        <div style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            background: 'var(--primary-100)',
                            color: 'var(--primary-700)',
                            fontSize: 'clamp(0.7rem, 2vw, 0.75rem)',
                            fontWeight: 600,
                            borderRadius: '6px',
                            marginBottom: '1rem'
                        }}>
                            {post.category}
                        </div>

                        <h3 style={{
                            fontSize: 'clamp(1.125rem, 3vw, 1.25rem)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '0.75rem',
                            lineHeight: 1.3
                        }}>
                            {post.title}
                        </h3>

                        <p style={{
                            fontSize: 'clamp(0.875rem, 2vw, 0.9375rem)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            marginBottom: '1.25rem'
                        }}>
                            {post.excerpt}
                        </p>

                        {/* Meta Info */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: 'clamp(0.5rem, 2vw, 1rem)',
                            fontSize: 'clamp(0.75rem, 2vw, 0.8125rem)',
                            color: 'var(--text-tertiary)',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--border-light)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                <Calendar size={14} />
                                <span style={{ whiteSpace: 'nowrap' }}>
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                <Clock size={14} />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>

            {/* Sidebar - Desktop Only */}
            <aside className="blog-sidebar" style={{
                display: 'none'
            }}>
                {/* Categories */}
                <div style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem'
                }}>
                    <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                    }}>
                        Categories
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <Link href="/blog?category=seo-tools" style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.9375rem',
                                transition: 'color 0.2s'
                            }}>
                                SEO Tools
                            </Link>
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <Link href="/blog?category=content-strategy" style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.9375rem',
                                transition: 'color 0.2s'
                            }}>
                                Content Strategy
                            </Link>
                        </li>
                        <li style={{ marginBottom: '0.5rem' }}>
                            <Link href="/blog?category=ai-seo" style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.9375rem',
                                transition: 'color 0.2s'
                            }}>
                                AI & SEO
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Recent Posts */}
                <div style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    padding: '1.5rem'
                }}>
                    <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                    }}>
                        Recent Posts
                    </h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        {blogPosts.slice(0, 3).map((post) => (
                            <li key={post.slug} style={{ marginBottom: '1rem' }}>
                                <Link href={`/blog/${post.slug}`} style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    lineHeight: 1.4,
                                    display: 'block',
                                    transition: 'color 0.2s'
                                }}>
                                    {post.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            <style jsx>{`
                .blog-card {
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                    background: var(--bg-secondary);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .blog-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 24px -8px rgba(0,0,0,0.1);
                }
                .blog-card-image {
                    width: 100%;
                    height: clamp(180px, 30vw, 240px);
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                }
                
                @media (max-width: 640px) {
                    .blog-card {
                        border-radius: 12px;
                    }
                }

                /* Desktop Layout with Sidebar */
                @media (min-width: 1024px) {
                    div:has(> .blog-grid) {
                        grid-template-columns: 1fr 300px;
                    }
                    .blog-sidebar {
                        display: block !important;
                        position: sticky;
                        top: 100px;
                        height: fit-content;
                    }
                }
            `}</style>
        </div>
    );
}
