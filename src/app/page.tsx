'use client';

import { useEffect, Fragment } from 'react';
import DashboardPreview from '@/components/DashboardPreview';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Sparkles,
  ArrowRight,
  Play,
  ChevronRight,
  Search,
  Layers,
  TrendingDown,
  TrendingUp,
  Target,
  Brain,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  BarChart2,
  Zap,
  ShieldCheck,
  Layout,
  Check,
  Globe,
  Rocket,
  RefreshCw,
  LineChart,
  Award
} from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com/';

export default function LandingPage() {
  useEffect(() => {
    if (!window.location.hash) {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="page-wrapper" style={{ fontFamily: 'Inter, sans-serif', background: 'var(--bg-secondary)' }}>
      <Header />

      {/* HERO SECTION - Redesigned with Glassmorphism */}
      <section style={{
        position: 'relative',
        padding: '10rem 0 6rem',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-secondary) 100%)'
      }}>
        {/* Animated background elements */}
        <div className="hero-grid-pattern" />
        <div className="hero-glow-effect" />

        {/* Floating decorative elements */}
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* Badge */}
          <div className="hero-badge hero-entrance" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.625rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderRadius: '999px',
            border: '1px solid rgba(99, 102, 241, 0.15)',
            boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)',
            marginBottom: '2rem'
          }}>
            <Sparkles size={16} style={{ color: 'var(--primary-600)' }} />
            <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              New: AI-Powered Content Decay Detection & Recovery
            </span>
            <ChevronRight size={14} style={{ color: 'var(--gray-400)' }} />
          </div>

          {/* Main Heading */}
          <h1 className="hero-h1 hero-entrance delay-1" style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '1.75rem',
            maxWidth: '900px'
          }}>
            <span style={{ color: 'var(--text-primary)' }}>Rank and Grow Your Content</span>
            <br />
            <span style={{
              background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 50%, var(--primary-500) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient-shift 5s ease infinite'
            }}>Across AI & Search Engines</span>
          </h1>

          {/* Subheading */}
          <p className="hero-p hero-entrance delay-2" style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '680px',
            lineHeight: 1.7,
            marginBottom: '2.5rem'
          }}>
            Dominate search rankings and gain visibility in ChatGPT, Perplexity, and Google SGE.
            Scale your content growth with an AI-driven platform built on actual performance data.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons hero-entrance delay-3" style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a href={APP_URL} className="btn-shimmer" style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 700,
              background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
              color: 'white',
              borderRadius: '14px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              boxShadow: '0 12px 32px -8px rgba(79, 70, 229, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              Get Started Free <ArrowRight size={20} />
            </a>
            <a href="#how-it-works" style={{
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'white',
              color: 'var(--text-primary)',
              borderRadius: '14px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              border: '1px solid var(--border-color)',
              boxShadow: '0 4px 12px -2px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}>
              How It Works <ChevronRight size={20} />
            </a>
          </div>

          {/* Stats Row */}
          <div className="stats-row hero-entrance delay-4" style={{
            display: 'flex',
            gap: '1.5rem',
            marginBottom: '5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {[
              { value: '127%', label: 'Avg Traffic Increase', icon: TrendingUp, color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' },
              { value: '3.2x', label: 'Faster Creation', icon: Zap, color: '#6366F1', bg: 'rgba(99, 102, 241, 0.1)' },
              { value: '89%', label: 'Ranking Recovery', icon: ShieldCheck, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' }
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{
                background: 'white',
                padding: '1.25rem 2rem',
                borderRadius: '20px',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                boxShadow: '0 4px 20px -8px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: stat.bg,
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <stat.icon size={22} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)'
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Preview - Full Width */}
          <div className="hero-entrance delay-4 dashboard-preview-wrapper" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', padding: '0 1rem' }}>
            <div style={{
              position: 'absolute',
              top: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              height: '100%',
              background: 'linear-gradient(180deg, var(--primary-200) 0%, transparent 100%)',
              filter: 'blur(80px)',
              opacity: 0.2,
              zIndex: -1
            }} />
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* SEO CHAT EXCLUSIVE FEATURE SECTION - Light Theme */}
      <section id="seo-chat" style={{
        padding: '4rem 0',
        background: 'linear-gradient(180deg, #ffffff 0%, var(--bg-secondary) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className="section-header hero-entrance" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              SEO Chat{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Your AI SEO Consultant</span>
            </h2>
            <p className="section-description" style={{ fontSize: '1.125rem' }}>
              Chat with your website and competitor data. Get instant insights powered by your actual Google Search Console data.
            </p>
          </div>

          {/* Feature points - Horizontal layout */}
          <div className="hero-entrance" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: MessageSquare, text: 'Ask natural language questions' },
              { icon: Target, text: 'Analyze competitor strategies' },
              { icon: Zap, text: 'Get instant recommendations' },
              { icon: BarChart2, text: 'Understand GSC metrics' }
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                fontWeight: 500
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--primary-50)',
                  color: 'var(--primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <item.icon size={16} />
                </div>
                {item.text}
              </div>
            ))}
          </div>

          {/* SEO Chat Capabilities Grid - Responsive */}
          <div className="hero-entrance delay-2" style={{ width: '100%' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem'
            }}>
              {[
                {
                  icon: MessageSquare,
                  title: 'Natural Language Queries',
                  desc: 'Ask questions in plain English about your SEO performance, rankings, and opportunities.',
                  color: 'var(--primary-500)',
                  bg: 'var(--primary-50)'
                },
                {
                  icon: Target,
                  title: 'Competitor Analysis',
                  desc: 'Get instant insights on competitor rankings, keywords they rank for, and content gaps.',
                  color: '#8b5cf6',
                  bg: '#f5f3ff'
                },
                {
                  icon: BarChart2,
                  title: 'GSC Data Insights',
                  desc: 'Your Google Search Console data explained in simple terms with actionable recommendations.',
                  color: '#10b981',
                  bg: '#ecfdf5'
                },
                {
                  icon: Zap,
                  title: 'Instant Recommendations',
                  desc: 'Receive data-driven suggestions to improve CTR, rankings, and content performance.',
                  color: '#f59e0b',
                  bg: '#fffbeb'
                }
              ].map((cap, i) => (
                <div key={i} style={{
                  background: 'white',
                  borderRadius: '20px',
                  border: '1px solid var(--border-color)',
                  padding: '1.75rem',
                  boxShadow: '0 4px 20px -8px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: cap.bg,
                    color: cap.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                    boxShadow: `0 8px 24px -8px ${cap.color}40`
                  }}>
                    <cap.icon size={26} strokeWidth={2} />
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}>
                    {cap.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Sample Queries Section */}
            <div style={{
              background: 'white',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              padding: '2rem',
              boxShadow: '0 4px 20px -8px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 4px 12px -2px rgba(245, 158, 11, 0.3)'
                }}>
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}>Sample Questions You Can Ask</h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-tertiary)'
                  }}>Get instant answers powered by your data</p>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  'What are the top ranking keywords for my competitors?',
                  'Which pages are losing traffic and why?',
                  'What content should I create next?',
                  'How can I improve my CTR for high-impression keywords?',
                  'Show me content gaps between me and my competitors',
                  'Which keywords have high impressions but low clicks?'
                ].map((question, i) => (
                  <div key={i} style={{
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.9375rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.2s ease'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'var(--primary-400)',
                      flexShrink: 0
                    }} />
                    {question}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION - Moved below SEO Chat */}
      <section id="how-it-works" style={{
        padding: '4rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          {/* Section Header - Centered like SEO Chat */}
          <div className="section-header hero-entrance" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              Your SEO Journey{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>in 4 Simple Steps</span>
            </h2>
            <p className="section-description" style={{ fontSize: '1.125rem' }}>
              From data connection to content optimization, our AI streamlines your entire SEO workflow.
            </p>
          </div>

          {/* Steps Grid - Responsive */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem'
          }}>
            {[
              {
                step: '01',
                icon: Search,
                title: 'Connect',
                desc: 'Link your Google Search Console for instant data analysis. Get real-time access to search queries, impressions, and click data.',
                features: ['One-click GSC integration', 'Real-time data sync', 'Historical performance tracking'],
                color: 'var(--primary-500)',
                bg: 'var(--primary-50)'
              },
              {
                step: '02',
                icon: Brain,
                title: 'Analyze',
                desc: 'AI extracts winning patterns from your competitors. Discover content gaps, keyword opportunities, and ranking factors that drive traffic.',
                features: ['Competitor SERP analysis', 'Keyword gap identification', 'Content opportunity scoring'],
                color: '#8b5cf6',
                bg: '#f5f3ff'
              },
              {
                step: '03',
                icon: MessageSquare,
                title: 'Chat & Plan',
                desc: 'Ask questions and get AI-powered SEO strategies. Chat naturally with your data to uncover insights and create actionable plans.',
                features: ['Natural language queries', 'AI-generated content briefs', 'Priority-based recommendations'],
                color: '#f59e0b',
                bg: '#fffbeb'
              },
              {
                step: '04',
                icon: RefreshCw,
                title: 'Optimize',
                desc: 'Auto-refresh content and publish to your CMS. Implement changes with one click and monitor performance improvements.',
                features: ['One-click content refresh', 'Direct CMS publishing', 'Performance monitoring'],
                color: '#10b981',
                bg: '#ecfdf5'
              }
            ].map((step, i) => (
              <div key={i} className="compact-step-card hero-entrance" style={{
                animationDelay: `${0.1 * (i + 1)}s`,
                background: 'white',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                padding: '1.75rem',
                boxShadow: '0 4px 20px -8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  position: 'relative'
                }}>
                  {/* Large faded step number background */}
                  <div style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    right: '-0.5rem',
                    fontSize: '5rem',
                    fontWeight: 800,
                    color: step.color,
                    opacity: 0.08,
                    lineHeight: 1,
                    zIndex: 0,
                    pointerEvents: 'none'
                  }}>
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                    color: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    boxShadow: `0 8px 24px -8px ${step.color}40`,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <step.icon size={22} strokeWidth={2} />
                  </div>

                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {step.desc}
                  </p>

                  {/* Feature List */}
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.375rem'
                  }}>
                    {step.features.map((feature, fi) => (
                      <li key={fi} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.8125rem',
                        color: '#64748b'
                      }}>
                        <span style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: step.color,
                          flexShrink: 0
                        }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES SECTION - Redesigned */}
      <section id="features" style={{
        padding: '5rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className="section-header hero-entrance">
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              Everything You Need{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>to Dominate Search</span>
            </h2>
            <p className="section-description">
              From Google rankings to AI answer engines, SEOScribes covers every aspect of modern SEO growth.
            </p>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                icon: Search,
                title: 'GSC Intelligence',
                desc: 'Connect your Google Search Console to automatically analyze search data and discover opportunities.',
                features: ['Automatic data sync', 'Search query analysis', 'Historical insights']
              },
              {
                icon: Target,
                title: 'Content Gap Detection',
                desc: 'Automatically find keywords where you have high impressions but low clicks — the easiest wins.',
                features: ['Impression vs Click analysis', 'CTR optimization', 'Priority scoring']
              },
              {
                icon: TrendingDown,
                title: 'Traffic Decay Alerts',
                desc: 'Get notified within 48 hours when any page starts losing rankings. Auto-refresh content.',
                features: ['Real-time monitoring', 'Decay detection', 'One-click refresh']
              },
              {
                icon: Brain,
                title: 'Competitor Intelligence',
                desc: 'Outperform competitors by learning from their strengths. Detect what works for them.',
                features: ['SERP analysis', 'Topic extraction', 'Keyword gap ID']
              },
              {
                icon: Layout,
                title: 'AI Answer Engines (GEO)',
                desc: 'Maximize visibility in ChatGPT, Perplexity, and Google SGE with optimized content.',
                features: ['Schema automation', 'LLM-optimized FAQs', 'GEO signals']
              },
              {
                icon: MessageSquare,
                title: 'Intent-First Content',
                desc: 'Generate content that matches search intent by reverse-engineering top performers.',
                features: ['Intent recognition', 'Structure planning', 'Authority building']
              },
              {
                icon: ShieldCheck,
                title: 'E-E-A-T Optimization',
                desc: 'Build trust signals with author bio generation, citation management, and fact checking.',
                features: ['Author signals', 'Citation generator', 'Fact-checking AI']
              },
              {
                icon: BarChart2,
                title: 'Performance Lifecycle',
                desc: 'Monitor content from draft to publishing through every ranking shift with unified analytics.',
                features: ['Lifecycle tracking', 'Traffic alerts', 'ROI metrics']
              },
              {
                icon: Globe,
                title: 'Automated Publishing',
                desc: 'Push optimized content directly to your site. Integrates with WordPress, Webflow, and more.',
                features: ['WP publishing', 'Headless CMS', 'Live updates']
              }
            ].map((feat, i) => (
              <div key={i} className="feature-card hero-entrance" style={{ animationDelay: `${0.05 * i}s` }}>
                <div className="feature-icon-box">
                  <feat.icon size={24} strokeWidth={2} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}>
                    {feat.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem'
                  }}>
                    {feat.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {feat.features.map((item, j) => (
                      <li key={j} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 500
                      }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'var(--success-light)',
                          color: 'var(--success)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Check size={10} strokeWidth={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION - Redesigned */}
      <section id="comparison" style={{
        padding: '5rem 0',
        background: 'white',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* Section Header */}
          <div className="section-header hero-entrance">
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              Scale Your SEO{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>with Real Performance Data</span>
            </h2>
            <p className="section-description">
              Generic tools and manual analysis can't keep up with modern search. SEOScribes automates your growth.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="comparison-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Generic Tools */}
            <div className="comparison-card hero-entrance delay-2" style={{
              background: '#f8fafc',
              border: '1px solid var(--border-light)',
              borderRadius: '28px',
              padding: '2.5rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-tertiary)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 2px 8px -2px rgba(0,0,0,0.05)'
                }}>
                  <AlertTriangle size={24} />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  Generic SEO Tools
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Identifies problems without solutions',
                  'Static spreadsheet data exports',
                  'Strategy based on generic guesswork',
                  'Slow, manual content creation',
                  'Reactive traffic loss monitoring',
                  'No schema for LLM/Answer Engines',
                  'Limited to keyword tracking only'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1rem',
                    background: 'rgba(255,255,255,0.6)',
                    borderRadius: '12px',
                    border: '1px solid rgba(0,0,0,0.03)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-tertiary)', opacity: 0.4 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* SEOScribes */}
            <div className="comparison-card hero-entrance delay-3" style={{
              background: 'linear-gradient(180deg, #f5f3ff 0%, #ede9fe 100%)',
              border: '2px solid var(--primary-200)',
              borderRadius: '28px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Recommended badge */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'var(--primary-600)',
                color: 'white',
                padding: '0.375rem 1rem',
                borderRadius: '99px',
                fontSize: '0.75rem',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)'
              }}>
                RECOMMENDED
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 8px 20px -4px rgba(79, 70, 229, 0.3)'
                }}>
                  <Sparkles size={24} />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-700)',
                  letterSpacing: '-0.01em'
                }}>
                  SEOScribes
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Identifies and fixes in 1-click',
                  'Real-time automated dashboards',
                  'Strategy based on actual GSC data',
                  'Instant AI-powered content generation',
                  'Proactive rank decay protection',
                  'Ready-to-use LLM & FAQ schema',
                  'Real-time SERP competitor analysis'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    padding: '0.875rem 1rem',
                    background: 'white',
                    borderRadius: '12px',
                    border: '1px solid var(--primary-100)',
                    color: 'var(--primary-700)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    boxShadow: '0 2px 8px -2px rgba(79, 70, 229, 0.05)'
                  }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--primary-600)', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section id="use-cases" style={{
        padding: '5rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          {/* Section Header */}
          <div className="section-header hero-entrance">
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              Perfect For{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Every SEO Challenge</span>
            </h2>
            <p className="section-description">
              Whether you're battling ranking decay or looking to scale what works, SEOScribes provides the automation you need.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: TrendingDown,
                title: 'Recover Lost Traffic',
                scenario: 'Your high-performing legacy content is slowly losing 10% traffic every month due to decay.',
                solution: 'SEOScribes detects the decay instantly, reverse-engineers the new SERP leaders, and auto-refreshes your content with surgical precision.'
              },
              {
                icon: Target,
                title: 'Capture Quick Wins',
                scenario: 'You have hundreds of keywords ranking on page 2 with high impressions but zero clicks.',
                solution: 'SEOScribes identifies these "striking distance" opportunities and optimizes your content to bridge the gap to the first page in days.'
              },
              {
                icon: MessageSquare,
                title: 'Dominate AI Answers',
                scenario: 'LLMs like ChatGPT are answering queries with your data but never citing your brand.',
                solution: 'SEOScribes structures your content with authoritative signals and GEO schema that ensure your brand is cited as the source in AI results.'
              }
            ].map((useCase, i) => (
              <div key={i} className="use-case-card hero-entrance" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                <div className="use-case-icon-box">
                  <useCase.icon size={28} strokeWidth={2} />
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {useCase.title}
                </h3>

                <div style={{
                  background: '#f8fafc',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  marginBottom: '1.25rem',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <p style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    The Problem
                  </p>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {useCase.scenario}
                  </p>
                </div>

                <div style={{
                  background: 'var(--primary-50)',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  border: '1px solid var(--primary-100)'
                }}>
                  <p style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--primary-600)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    The Solution
                  </p>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--primary-800)',
                    lineHeight: 1.6,
                    fontWeight: 500
                  }}>
                    {useCase.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Redesigned */}
      <section id="pricing" style={{
        padding: '5rem 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div className="section-header hero-entrance">
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              Simple,{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Transparent Pricing</span>
            </h2>
            <p className="section-description">
              Start free, scale as you grow. Choose the plan that fits your needs.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="pricing-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                name: 'Explorer',
                price: 'Free',
                period: 'forever',
                desc: 'Perfect for new sites starting their SEO journey.',
                features: [
                  '1 Website',
                  '1 SEO Chat message daily',
                  'Basic GSC Insights',
                  'Content Gap Detection',
                  'Traffic Decay Alerts',
                  'Community Support'
                ],
                cta: 'Start Free',
                link: APP_URL,
                highlight: false,
                offer: false
              },
              {
                name: 'Optimizer',
                price: '$29',
                period: '/month',
                desc: 'Perfect for growing blogs and small businesses.',
                features: [
                  '3 Websites',
                  '15 SEO Chat messages daily',
                  '15 AI Articles/month',
                  '50 Content Fixes/month',
                  'Competitor Analysis',
                  'AI Answer Optimization',
                  'Email Support'
                ],
                cta: 'Get Started',
                link: APP_URL,
                highlight: false,
                offer: false
              },
              {
                name: 'Accelerator',
                price: '$79',
                period: '/month',
                desc: 'Built for content agencies and power users.',
                features: [
                  '10 Websites',
                  '50 SEO Chat messages daily',
                  '50 AI Articles/month',
                  '200 Content Fixes/month',
                  'Advanced Reporting',
                  'Performance Lifecycle',
                  'Priority Support'
                ],
                cta: 'Popular Choice',
                link: APP_URL,
                highlight: true,
                badge: 'Most Popular',
                offer: false
              },
              {
                name: 'Dominator',
                price: '$149',
                period: '/month',
                desc: 'For high-scale portfolios and enterprises.',
                features: [
                  '30 Websites',
                  'Unlimited SEO Chat messages',
                  '120 AI Articles/month',
                  'Unlimited Fixes',
                  'API Access (Beta)',
                  'White-label Reports',
                  'Dedicated Support'
                ],
                cta: 'Get Started',
                link: APP_URL,
                highlight: false,
                offer: false
              }
            ].map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.highlight ? 'highlight' : ''} hero-entrance`} style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    background: 'var(--primary-600)',
                    color: 'white',
                    padding: '0.375rem 0.875rem',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.2)'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: plan.highlight ? 'var(--primary-700)' : 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {plan.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '2.75rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em'
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500
                    }}>
                      {plan.period}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    minHeight: '2.5rem'
                  }}>
                    {plan.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  marginBottom: '2rem',
                  flex: 1
                }}>
                  {plan.features.map((feature, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500
                    }}>
                      <CheckCircle2 size={16} style={{
                        color: plan.highlight ? 'var(--primary-600)' : 'var(--success)',
                        flexShrink: 0
                      }} />
                      {feature}
                    </div>
                  ))}
                </div>

                <a href={plan.link} style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.9375rem',
                  padding: '0.875rem 1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  background: plan.highlight ? 'linear-gradient(135deg, var(--primary-600), var(--primary-700))' : (plan.offer ? 'var(--success)' : 'var(--gray-50)'),
                  color: (plan.highlight || plan.offer) ? 'white' : 'var(--text-primary)',
                  border: (plan.highlight || plan.offer) ? 'none' : '1px solid var(--border-color)',
                  boxShadow: plan.highlight ? '0 10px 20px -5px rgba(79, 70, 229, 0.3)' : (plan.offer ? '0 10px 20px -5px rgba(16, 185, 129, 0.3)' : 'none')
                }}>
                  {plan.cta}
                  {plan.offer && <Zap size={16} fill="white" />}
                </a>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.875rem',
            color: 'var(--text-tertiary)'
          }}>
            Free forever • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* FAQ SECTION - Redesigned */}
      <section id="faq" style={{
        padding: '5rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Section Header */}
          <div className="section-header hero-entrance">
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
              Common{' '}
              <span style={{
                background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-700) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Questions</span>
            </h2>
            <p className="section-description">
              Everything you need to know about our AI-powered SEO platform and how it helps you grow.
            </p>
          </div>

          {/* FAQ Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              {
                q: 'What is SEOScribes?',
                a: 'SEOScribes is an AI-driven SEO automation and content growth platform designed to manage and scale a website\'s SEO using real performance data rather than manual analysis or generic tools.'
              },
              {
                q: 'How does SEOScribes help with AEO and GEO?',
                a: 'SEOScribes optimizes your content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) by using structured data, clear semantic hierarchies, and authoritative source signals. This increases your chances of being cited by AI models like ChatGPT, Perplexity, and Google Search Generative Experience (SGE).'
              },
              {
                q: 'Is it safe to use AI-generated content for SEO?',
                a: 'Yes, when used correctly. SEOScribes focuses on high-quality, research-backed content that follows Google\'s E-E-A-T guidelines. Our AI acts as a researcher and writer that uses your actual GSC data to ensure relevance and accuracy.'
              },
              {
                q: 'Does SEOScribes replace my current SEO tools?',
                a: 'SEOScribes complements tools like Ahrefs or Semrush by taking the "analysis" and turning it into "action." While traditional tools tell you what is wrong, SEOScribes automatically detects the problem and generates the content needed to fix it.'
              },
              {
                q: 'How long does it take to see results?',
                a: 'Most users see improvements in ranking recovery within 2-4 weeks of updating declining content. For new content, indexing and initial ranking typically occur within 7-14 days depending on your site\'s existing authority.'
              },
              {
                q: 'Which CMS platforms do you support?',
                a: 'We currently support direct publishing to WordPress, with more integrations like Shopify, Ghost, and Webflow coming soon. You can also export your content in Markdown or HTML for any other platform.'
              }
            ].map((faq, i) => (
              <details key={i} className="faq-card hero-entrance" style={{ animationDelay: `${0.05 * i}s` }}>
                <summary className="faq-summary">
                  {faq.q}
                  <div className="faq-icon">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </summary>
                <div className="faq-content" style={{
                  padding: '0 2rem 1.5rem 2rem',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - Redesigned */}
      <section id="cta" style={{
        position: 'relative',
        padding: '4rem 0',
        background: 'linear-gradient(180deg, var(--gray-900) 0%, #0a0f1a 100%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Background effects */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
          zIndex: 1
        }} />
        <div className="cta-grid-pattern" style={{ opacity: 0.15, zIndex: 2 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '900px', textAlign: 'center' }}>
          <div className="hero-entrance">
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
              color: 'white',
              lineHeight: 1.2
            }}>
              Stop Losing Traffic.{" "}
              <span style={{
                background: 'linear-gradient(90deg, #818CF8 0%, #C084FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Start Ranking.
              </span>
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: '2.5rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto 2.5rem auto'
            }}>
              Join 500+ SEO teams using SEOScribes to automate content growth and recover lost rankings with real GSC data.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem'
            }}>
              <a href={APP_URL} className="btn-shimmer" style={{
                padding: '1rem 2.5rem',
                fontSize: '1.0625rem',
                fontWeight: 700,
                background: 'white',
                color: 'var(--primary-600)',
                borderRadius: '14px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                Get Started Free <ArrowRight size={20} />
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 500
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <CheckCircle2 size={14} style={{ color: '#10B981' }} /> Free Forever
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <CheckCircle2 size={14} style={{ color: '#10B981' }} /> No Card Required
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
