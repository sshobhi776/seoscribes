import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | SEOScribes",
  description: "Get in touch with the SEOScribes team for support, sales, or general inquiries.",
};

export default function ContactPage() {
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
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)'
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Have questions about SEOScribes? We're here to help. Choose the best way to reach us.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: Mail,
                title: 'Email Support',
                desc: 'Get help from our support team',
                contact: 'support@seoscribes.com',
                action: 'Send Email',
                link: 'mailto:support@seoscribes.com'
              }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
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
                  marginBottom: '1.5rem'
                }}>
                  <item.icon size={28} />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1rem',
                  lineHeight: 1.6
                }}>
                  {item.desc}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--primary-600)',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {item.contact}
                </p>
                <a href={item.link} className="btn btn-secondary" style={{
                  fontFamily: 'Inter, sans-serif',
                  width: '100%',
                  justifyContent: 'center'
                }}>
                  {item.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '4rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: 'var(--text-primary)',
            textAlign: 'center'
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: 'What is your response time?',
                a: 'We typically respond to all inquiries within 24 hours on business days. Priority support customers receive responses within 4 hours.'
              },
              {
                q: 'Do you offer phone support?',
                a: 'Phone support is available for Dominator plan customers. All other plans include email and chat support.'
              },
              {
                q: 'Can I schedule a demo?',
                a: 'Yes! Contact our team at support@seoscribes.com to schedule a personalized demo of SEOScribes.'
              },
              {
                q: 'Where is your company located?',
                a: 'SEOScribes is a remote-first company with team members across the United States and Europe.'
              }
            ].map((faq, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border-light)'
              }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)'
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}