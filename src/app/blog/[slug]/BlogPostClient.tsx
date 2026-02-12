'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogPostContentProps {
    blogPost: {
        title: string;
        excerpt: string;
        category: string;
        date: string;
        readTime: string;
        author: string;
        content: string;
    };
    relatedPosts: Array<{
        slug: string;
        title: string;
        excerpt: string;
        category: string;
        readTime: string;
    }>;
    tocItems: Array<{
        id: string;
        title: string;
    }>;
}

export default function BlogPostContent({ blogPost, relatedPosts, tocItems }: BlogPostContentProps) {
    const [activeSection, setActiveSection] = useState('introduction');

    useEffect(() => {
        const handleScroll = () => {
            const sections = tocItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(tocItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [tocItems]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };

    return (
        <div className="page-wrapper">
            <Header />

            {/* Main Content with Sidebar */}
            <section style={{
                paddingTop: '140px',
                paddingBottom: '60px',
                background: 'white'
            }}>
                <div className="container" style={{ maxWidth: '1200px', padding: '0 1rem' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) 280px',
                        gap: '2rem',
                        alignItems: 'start'
                    }} className="blog-post-layout">
                        {/* Article Header and Content */}
                        <div style={{ minWidth: 0, overflow: 'hidden' }}>
                            {/* Article Header */}
                            <div style={{ marginBottom: '3rem' }}>
                                <Link href="/blog" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--primary-600)',
                                    textDecoration: 'none',
                                    fontSize: '0.9375rem',
                                    fontWeight: 600,
                                    marginBottom: '2rem'
                                }}>
                                    <ArrowLeft size={18} />
                                    Back to Blog
                                </Link>

                                {/* Featured Image with Title */}
                                <div style={{
                                    width: '100%',
                                    height: 'clamp(200px, 40vw, 320px)',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    borderRadius: 'clamp(12px, 2vw, 16px)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 'clamp(1.5rem, 5vw, 3rem)',
                                    marginBottom: 'clamp(2rem, 5vw, 3rem)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {/* Decorative Elements */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-50%',
                                        right: '-10%',
                                        width: '600px',
                                        height: '600px',
                                        background: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '50%',
                                        filter: 'blur(60px)'
                                    }} />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-30%',
                                        left: '-5%',
                                        width: '400px',
                                        height: '400px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '50%',
                                        filter: 'blur(50px)'
                                    }} />

                                    {/* Title */}
                                    <h2 style={{
                                        fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                                        fontWeight: 800,
                                        color: 'white',
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                        letterSpacing: '-0.02em',
                                        position: 'relative',
                                        zIndex: 1,
                                        textShadow: '0 2px 20px rgba(0, 0, 0, 0.2)',
                                        maxWidth: '900px'
                                    }}>
                                        {blogPost.title}
                                    </h2>
                                </div>

                                <h1 style={{
                                    fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
                                    fontWeight: 800,
                                    color: 'var(--text-primary)',
                                    marginBottom: '1rem',
                                    lineHeight: 1.15,
                                    letterSpacing: '-0.02em'
                                }}>
                                    {blogPost.title}
                                </h1>

                                {/* Meta Info */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                                    marginBottom: '2rem',
                                    fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
                                    color: 'var(--text-secondary)'
                                }}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.25rem 0.75rem',
                                        background: 'var(--primary-100)',
                                        color: 'var(--primary-700)',
                                        fontSize: 'clamp(0.75rem, 2vw, 0.8125rem)',
                                        fontWeight: 600,
                                        borderRadius: '6px'
                                    }}>
                                        {blogPost.category}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <User size={16} />
                                        <span style={{ whiteSpace: 'nowrap' }}>{blogPost.author}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} />
                                        <span style={{ whiteSpace: 'nowrap' }}>
                                            {new Date(blogPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} />
                                        {blogPost.readTime}
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <article
                                style={{
                                    fontSize: '1.0625rem',
                                    lineHeight: 1.8,
                                    color: 'var(--text-secondary)'
                                }}
                                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                                className="blog-content"
                            />
                        </div>

                        {/* Table of Contents Sidebar */}
                        <aside className="toc-sidebar" style={{
                            position: 'sticky',
                            top: '100px'
                        }}>
                            <div style={{
                                background: 'var(--bg-secondary)',
                                borderRadius: '12px',
                                padding: 'clamp(1rem, 3vw, 1.5rem)'
                            }}>
                                <h3 style={{
                                    fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)',
                                    fontWeight: 700,
                                    color: 'var(--text-primary)',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    Table of Contents
                                </h3>
                                <nav>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {tocItems.map((item) => (
                                            <li key={item.id} style={{ marginBottom: '0.5rem' }}>
                                                <button
                                                    onClick={() => scrollToSection(item.id)}
                                                    style={{
                                                        width: '100%',
                                                        textAlign: 'left',
                                                        padding: 'clamp(0.375rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 0.75rem)',
                                                        fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)',
                                                        fontWeight: activeSection === item.id ? 600 : 500,
                                                        color: activeSection === item.id ? 'var(--primary-600)' : 'var(--text-secondary)',
                                                        background: activeSection === item.id ? 'white' : 'transparent',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.2s ease',
                                                        borderLeft: activeSection === item.id ? '3px solid var(--primary-600)' : '3px solid transparent'
                                                    }}
                                                >
                                                    {item.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section style={{
                    padding: '80px 0',
                    background: 'var(--bg-secondary)'
                }}>
                    <div className="container" style={{ maxWidth: '1200px' }}>
                        <h2 style={{
                            fontSize: '2rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '2.5rem',
                            textAlign: 'center'
                        }}>
                            Related Articles
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2rem'
                        }}>
                            {relatedPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="related-post-card"
                                >
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.25rem 0.75rem',
                                        background: 'var(--primary-100)',
                                        color: 'var(--primary-700)',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        borderRadius: '6px',
                                        marginBottom: '1rem'
                                    }}>
                                        {post.category}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.125rem',
                                        fontWeight: 700,
                                        color: 'var(--text-primary)',
                                        marginBottom: '0.75rem',
                                        lineHeight: 1.4
                                    }}>
                                        {post.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '0.9375rem',
                                        color: 'var(--text-tertiary)',
                                        lineHeight: 1.5,
                                        marginBottom: '1rem',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {post.excerpt}
                                    </p>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingTop: '1rem',
                                        borderTop: '1px solid var(--border-light)'
                                    }}>
                                        <span style={{
                                            fontSize: '0.8125rem',
                                            color: 'var(--text-tertiary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.375rem'
                                        }}>
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                        <ArrowRight size={18} style={{ color: 'var(--primary-600)' }} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />

            <style jsx global>{`
        .related-post-card {
          text-decoration: none;
          color: inherit;
          background: white;
          border-radius: 12px;
          padding: 1.75rem;
          transition: transform 0.2s ease;
        }

        .related-post-card:hover {
          transform: translateY(-4px);
        }

        .blog-content {
          max-width: 100%;
          overflow-x: hidden;
        }

        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-600);
          margin-top: 3rem;
          margin-bottom: 1.25rem;
          line-height: 1.3;
          scroll-margin-top: 100px;
          word-wrap: break-word;
        }

        .blog-content h3 {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .blog-content p {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          word-wrap: break-word;
        }

        .blog-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          list-style-type: disc;
        }

        .blog-content li {
          margin-bottom: 0.75rem;
          color: var(--text-secondary);
          display: list-item;
          word-wrap: break-word;
        }

        .blog-content strong {
          font-weight: 600;
          color: var(--text-primary);
        }

        .blog-content em {
          font-style: italic;
        }

        .blog-content blockquote {
          font-style: italic;
          padding: 1rem 1.5rem;
          border-left: 4px solid var(--primary-200);
          background: var(--bg-secondary);
          margin: 1.5rem 0;
          color: var(--text-secondary);
          border-radius: 0 8px 8px 0;
          word-wrap: break-word;
        }

        .blog-content a {
          color: var(--primary-600);
          text-decoration: none;
          font-weight: 500;
          word-wrap: break-word;
        }

        .blog-content a:hover {
          text-decoration: underline;
        }

        .blog-content table {
          width: 100%;
          max-width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          color: var(--text-secondary);
          font-size: 0.9375rem;
          display: block;
          overflow-x: auto;
        }

        .blog-content table th {
          padding: 0.75rem;
          text-align: left;
          border: 1px solid var(--border-color);
          background: var(--bg-secondary);
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
        }

        .blog-content table td {
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          word-wrap: break-word;
        }

        .blog-content table tr:nth-child(even) {
          background: var(--bg-secondary);
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 968px) {
          .blog-post-layout {
            grid-template-columns: 1fr !important;
          }

          .toc-sidebar {
            position: static !important;
            order: -1;
          }

          .blog-content table {
            font-size: 0.8125rem;
          }

          .blog-content table th,
          .blog-content table td {
            padding: 0.5rem;
          }
        }
      `}</style>
        </div>
    );
}
