import Link from 'next/link';
import { ArrowLeft, Target, Users, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | SEOScribes",
  description: "Learn more about SEOScribes and our mission to automate SEO content creation and ranking recovery.",
};

export default function AboutPage() {
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
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)'
          }}>
            About SEOScribes
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            We're building the future of SEO—Where AI doesn't just assist, it automates.
            SEOScribes helps content teams recover lost traffic, maintain rankings, and dominate search results.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'Eliminate the manual work in SEO and give content teams superpowers through intelligent automation.'
              },
              {
                icon: Users,
                title: 'Our Vision',
                desc: 'A world where every website can compete in search, regardless of team size or budget.'
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Transparency, innovation, and putting our customers first in everything we build.'
              }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'var(--primary-50)',
                  color: 'var(--primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  <item.icon size={28} />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}>
            Our Story
          </h2>
          <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p>
              SEOScribes was born from frustration. As content marketers ourselves, we watched our carefully crafted articles
              lose rankings overnight. By the time we noticed in our monthly reports, thousands of visitors were already gone.
            </p>
            <p>
              We tried every SEO tool on the market. They all told us what was wrong, but none of them fixed it.
              We were stuck juggling five different platforms, copying data between spreadsheets, and manually updating content.
            </p>
            <p>
              So we built SEOScribes—The SEO platform we wished existed. One that doesn't just report problems
              but automatically detects them, generates solutions, and helps you maintain your rankings.
            </p>
            <p>
              Today, SEOScribes helps over 500+ content teams automate their SEO workflow, recover lost traffic,
              and stay ahead of algorithm updates. We're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <Users size={48} style={{ color: 'var(--primary-600)', margin: '0 auto 1rem' }} />
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Built by SEO Practitioners
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}>
            Our team has managed SEO for companies ranging from startups to Fortune 500s.
            We've felt your pain and we're building the solution we always wanted.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Join Us on This Journey
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            lineHeight: 1.6
          }}>
            Start automating your SEO workflow today with SEOScribes.
          </p>
          <Link href="/register" className="btn btn-primary" style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            fontFamily: 'Inter, sans-serif'
          }}>
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}