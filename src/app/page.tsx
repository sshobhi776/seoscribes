'use client';

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
  Check
} from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com/';

export default function LandingPage() {

  return (
    <div className="page-wrapper" style={{ fontFamily: 'Inter, sans-serif', background: 'var(--bg-secondary)' }}>
      <style jsx>{`
        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, var(--primary-100) 1px, transparent 1px),
            linear-gradient(to bottom, var(--primary-100) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at 50% 0%, black 10%, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 50% 0%, black 10%, transparent 80%);
          opacity: 0.5;
          pointer-events: none;
          z-index: 0;
        }
        .hero-glow-effect {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
          z-index: 1;
          pointer-events: none;
          animation: pulse-glow 8s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
        }
        @media (max-width: 1024px) {
          .how-it-works-step > div {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
          }
          .how-it-works-step > div > div:last-child {
            height: 350px !important;
          }
        }
        @media (max-width: 768px) {
          .stats-row {
            gap: 0.75rem !important;
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            padding: 0 1rem 1rem !important;
            margin: 0 -1.5rem !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .stats-row::-webkit-scrollbar {
            display: none;
          }
          .stat-item {
            flex: 0 0 auto !important;
            padding: 0.6rem 0.75rem !important;
            gap: 0.6rem !important;
            border-radius: 12px !important;
          }
          .stat-icon-wrapper {
            width: 32px !important;
            height: 32px !important;
            border-radius: 8px !important;
          }
          .stat-icon-wrapper :global(svg) {
            width: 16px !important;
            height: 16px !important;
          }
          .stat-value {
            font-size: 1.15rem !important;
          }
          .stat-label {
            font-size: 0.65rem !important;
          }
        }
        .faq-item[open] summary span {
          transform: rotate(45deg);
        }
        summary::-webkit-details-marker {
          display: none;
        }
        .how-it-works-step {
          transition: none;
        }
        .how-it-works-step:hover {
          transform: none;
          box-shadow: 0 4px 6px rgba(0,0,0,0.02) !important;
        }
        .points-box {
          transition: none;
        }
        .how-it-works-step:hover .points-box {
          border-color: var(--border-light) !important;
          box-shadow: none;
        }
        .step-illustration {
          transition: none;
        }
        .how-it-works-step:hover .step-illustration {
          transform: none;
        }
        .cta-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 90%);
          -webkit-mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 90%);
          opacity: 0.5;
          pointer-events: none;
          z-index: 0;
        }
        .cta-glow-effect {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
          z-index: 1;
          pointer-events: none;
          animation: pulse-glow-cta 6s ease-in-out infinite;
        }
        @keyframes pulse-glow-cta {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>

      <Header />

      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '6rem 0 4rem',
        overflow: 'hidden',
        background: 'var(--bg-secondary)'
      }}>
        {/* Grid pattern background */}
        <div className="hero-grid-pattern" />

        {/* Glow effect overlay */}
        <div className="hero-glow-effect" />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 0.875rem',
            borderRadius: '999px',
            background: 'white',
            border: '1px solid var(--primary-100)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            marginBottom: '1.5rem',
            fontFamily: 'Inter, sans-serif'
          }}>
            <Sparkles size={14} className="text-primary-600" />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              New: AI-Powered Content Decay Detection & Recovery
            </span>
            <ChevronRight size={14} style={{ color: 'var(--gray-400)' }} />
          </div>

          <h1 style={{
            fontSize: '3.5rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            maxWidth: '900px',
            background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Rank and Grow Your Content <br />
            <span style={{
              background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-600) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>Across Search & AI Engines</span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            fontFamily: 'Inter, sans-serif',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            lineHeight: 1.6
          }}>
            Dominate search rankings and gain visibility in ChatGPT, Perplexity, and Google SGE.
            Scale your content growth with an AI-driven platform built on actual performance data — wherever your customers search.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={APP_URL} className="btn btn-primary" style={{
              padding: '0 2rem',
              fontSize: '1.0625rem',
              height: '54px',
              borderRadius: '12px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.3)',
              border: 'none'
            }}>
              Start Free Trial <ArrowRight size={20} />
            </a>
            <a href="#how-it-works" className="btn" style={{
              background: 'white',
              border: '1px solid var(--border-color)',
              padding: '0 2rem',
              fontSize: '1.0625rem',
              height: '54px',
              borderRadius: '12px',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              textDecoration: 'none'
            }}>
              How It Works <ChevronRight size={20} />
            </a>
          </div>

          {/* Stats Row */}
          <div className="stats-row" style={{
            display: 'flex',
            gap: '2.5rem',
            marginBottom: '5rem',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            fontFamily: 'Inter, sans-serif'
          }}>
            {[
              { value: '127%', label: 'Avg Traffic Increase', icon: TrendingUp, color: '#10B981' },
              { value: '3.2x', label: 'Faster Content Creation', icon: Zap, color: '#6366F1' },
              { value: '89%', label: 'Ranking Recovery Rate', icon: ShieldCheck, color: '#F59E0B' }
            ].map((stat, i) => (
              <div key={i} className="stat-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: 'white',
                padding: '1.25rem 2rem',
                borderRadius: '20px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)'
              }}>
                <div className="stat-icon-wrapper" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: `${stat.color}10`,
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <stat.icon size={20} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div className="stat-value" style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.02em'
                  }}>
                    {stat.value}
                  </div>
                  <div className="stat-label" style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap'
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <DashboardPreview />
        </div>
      </section>

      {/* TRUST SECTION
      <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--border-light)', background: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
            TRUSTED BY GROWTH TEAMS AT
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.4, flexWrap: 'wrap', alignItems: 'center' }}>
            {['Acme Corp', 'GlobalBank', 'TechStars', 'NextGen', 'Stark Ind'].map(brand => (
              <span key={brand} style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif', color: 'var(--gray-900)', letterSpacing: '-0.02em' }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* THE PROBLEM SECTION */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)'
            }}>
              Your Traffic is Bleeding. Here's Why.
            </h2>
            <p style={{
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Google's algorithm updates, AI answer engines, and content decay are silently killing your rankings.
              Generic SEO tools just report the damage and require manual analysis—SEOScribes fixes it using your real performance data.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: TrendingDown,
                color: 'var(--error)',
                bg: 'var(--error-light)',
                title: 'Silent Traffic Decay',
                desc: 'Your top-performing pages are losing 5-10% traffic every month. By the time you notice in your monthly report, you have already lost thousands of visitors and revenue.'
              },
              {
                icon: Brain,
                color: 'var(--warning-600)',
                bg: 'var(--warning-light)',
                title: 'Invisible in AI Answers',
                desc: '40% of searches now get AI-generated answers from ChatGPT, Perplexity, and Google SGE. If your content is not cited, you are invisible to millions of potential customers.'
              },
              {
                icon: Layers,
                color: 'var(--primary-600)',
                bg: 'var(--primary-50)',
                title: 'Fragmented Workflow',
                desc: 'You are juggling 5+ tools: GSC for data, Ahrefs for keywords, ChatGPT for writing, Grammarly for editing, WordPress for publishing. Every handoff loses context and wastes time.'
              }
            ].map((card, i) => (
              <div key={i} style={{
                padding: '2.5rem',
                borderRadius: '24px',
                background: 'white',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -1px rgba(0,0,0,0.01)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: card.bg,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <card.icon size={24} />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  marginBottom: '0.75rem'
                }}>
                  {card.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6
                }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - DETAILED */}
      <section id="how-it-works" style={{ padding: '6rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>How It Works</span>
            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }}>
              Automate Your Growth in 3 Steps
            </h2>
            <p style={{
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              SEOScribes uses real performance data to automatically manage and scale your SEO,
              turning manual analysis into automated growth.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              {
                step: '01',
                icon: Search,
                title: 'Eliminate Guesswork with Real Data',
                desc: 'Stop relying on manual analysis or generic "best practices." SEOScribes plugs directly into your Google Search Console to pinpoint exactly what drives your growth. We use actual performance data to identify high-impact opportunities and optimize your strategy with surgical precision.',
                points: [
                  'Data over Guesswork: Use actual GSC performance metrics for every decision',
                  'Content Gaps: Identify keywords with high impressions but low click-through rates',
                  'Decay Alerts: Spot pages losing traffic month-over-month before they crash',
                  'Striking Distance: Promote keywords ranking #11-20 to the first page automatically',
                  'Strategic Intelligence: Real-time insights that turn data into immediate growth'
                ]
              },
              {
                step: '02',
                icon: Brain,
                title: 'Outrank Competitors Automatically',
                desc: 'Generate new content by simply entering a keyword. SEOScribes performs real-time search result analysis to understand exactly what it takes to outrank the top 10 competitors. We give you everything you need — from the content itself to ready-to-use schema and FAQs for maximum visibility in LLM tools like ChatGPT and Perplexity.',
                points: [
                  'Real-time Competitor Analysis: Deep SERP scan to reverse-engineer winning rankings',
                  'LLM Tool Visibility: Auto-generated Google Schema and FAQs for Answer Engines',
                  'Outranking Strategy: Content structure designed specifically to beat current leaders',
                  'Automated E-E-A-T: Research-backed content with citations and author signals',
                  'Ready-to-use Assets: Instant publishing with all meta-data and schema included'
                ]
              },
              {
                step: '03',
                icon: Zap,
                title: 'Refresh & Scale with Automation',
                desc: 'SEO is never static. SEOScribes continuously monitors your site and allows you to refresh your old content completely with a single click. Maintain your peak performance and scale your rankings across your entire content portfolio without the manual grind.',
                points: [
                  'Complete Content Refresh: Full updates for old articles using fresh data',
                  'Continuous Performance Monitoring: GSC-integrated tracking 24/7',
                  'Automatic Ranking Recovery: Immediate fixes for declining pages',
                  'Portfolio Scaling: Manage 100+ pages as easily as you manage one',
                  'Zero-Guesswork Growth: Scale what works based on proven performance'
                ]
              }
            ].map((step, i) => (
              <div key={i} className="how-it-works-step" style={{
                background: 'var(--bg-secondary)',
                borderRadius: '20px',
                padding: '3rem',
                border: '1px solid var(--border-light)',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 400px',
                  gap: '3rem',
                  alignItems: 'center',
                  direction: i % 2 === 1 ? 'rtl' : 'ltr'
                }}>
                  {/* Content Container */}
                  <div style={{ direction: 'ltr' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(79, 70, 229, 0.25), inset 0 0 10px rgba(255,255,255,0.2)',
                        fontSize: '1.125rem',
                        fontWeight: 800,
                        fontFamily: 'Inter, sans-serif',
                        flexShrink: 0,
                        border: '2px solid rgba(255,255,255,0.1)'
                      }}>
                        {step.step}
                      </div>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: 'white',
                        color: 'var(--primary-600)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid var(--primary-100)',
                        flexShrink: 0,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}>
                        <step.icon size={32} />
                      </div>
                    </div>

                    <h3 style={{
                      fontSize: '1.75rem',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)'
                    }}>
                      {step.title}
                    </h3>

                    <p style={{
                      fontSize: '1.0625rem',
                      fontFamily: 'Inter, sans-serif',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '2rem'
                    }}>
                      {step.desc}
                    </p>

                    <div className="points-box" style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '1.75rem',
                      border: '1px solid var(--border-light)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100px',
                        height: '100px',
                        background: 'radial-gradient(circle at 100% 0%, var(--primary-50) 0%, transparent 70%)',
                        opacity: 0.5
                      }} />
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        margin: 0
                      }}>
                        {step.points.map((point, j) => (
                          <li key={j} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.75rem',
                            fontSize: '0.9375rem',
                            fontFamily: 'Inter, sans-serif',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6
                          }}>
                            <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                            <span>
                              {point.includes(':') ? (
                                <>
                                  <strong style={{ color: 'var(--primary-700)', fontWeight: 600 }}>{point.split(':')[0]}:</strong>
                                  {point.split(':').slice(1).join(':')}
                                </>
                              ) : point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right SVG Image */}
                  <div className="step-illustration" style={{
                    background: 'linear-gradient(135deg, #fdfdff 0%, #f0f2ff 100%)',
                    borderRadius: '24px',
                    height: '500px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.01)',
                    direction: 'ltr'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      width: '80%',
                      height: '80%',
                      background: 'radial-gradient(circle at center, var(--primary-100) 0%, transparent 70%)',
                      opacity: 0.2,
                      filter: 'blur(40px)',
                      zIndex: 0
                    }} />
                    {i === 0 && (
                      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Data Flow Background */}
                        <path d="M 50 200 L 100 180 L 150 220 L 200 190 L 250 210 L 300 170 L 350 200" stroke="#E0E7FF" strokeWidth="2" fill="none" opacity="0.5" />

                        {/* Real-time Data nodes */}
                        <circle cx="100" cy="180" r="4" fill="#6366F1" />
                        <circle cx="200" cy="190" r="4" fill="#6366F1" />
                        <circle cx="300" cy="170" r="4" fill="#6366F1" />

                        {/* Analysis Hub */}
                        <rect x="120" y="100" width="160" height="200" rx="20" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <rect x="140" y="130" width="120" height="12" rx="6" fill="#F1F5F9" />
                        <rect x="140" y="150" width="100" height="12" rx="6" fill="#F1F5F9" />

                        {/* Scanner Beam */}
                        <rect x="120" y="180" width="160" height="40" fill="url(#beamGradient)" opacity="0.3" />
                        <defs>
                          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                            <stop offset="50%" stopColor="#4F46E5" stopOpacity="1" />
                            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* GSC & Intelligence Tags */}
                        <g transform="translate(60, 120)">
                          <rect width="50" height="50" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                          <text x="25" y="32" textAnchor="middle" fill="#4F46E5" fontSize="18" fontWeight="bold">G</text>
                        </g>
                        <g transform="translate(290, 230)">
                          <rect width="50" height="50" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                          <circle cx="25" cy="25" r="10" stroke="#4F46E5" strokeWidth="2" />
                          <path d="M 25 15 L 25 35 M 15 25 L 35 25" stroke="#4F46E5" strokeWidth="2" />
                        </g>

                        {/* Identified opportunities */}
                        <circle cx="150" cy="240" r="8" fill="#10B981" />
                        <circle cx="200" cy="260" r="8" fill="#F59E0B" />
                        <circle cx="250" cy="245" r="8" fill="#6366F1" />
                      </svg>
                    )}

                    {i === 1 && (
                      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Automation Grid */}
                        <rect x="60" y="60" width="280" height="280" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                        <line x1="60" y1="130" x2="340" y2="130" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="60" y1="200" x2="340" y2="200" stroke="#F1F5F9" strokeWidth="1" />
                        <line x1="60" y1="270" x2="340" y2="270" stroke="#F1F5F9" strokeWidth="1" />

                        {/* AI Content Engine */}
                        <rect x="100" y="100" width="200" height="200" rx="12" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <rect x="120" y="125" width="160" height="10" rx="5" fill="#4F46E5" opacity="0.1" />
                        <rect x="120" y="145" width="140" height="10" rx="5" fill="#4F46E5" opacity="0.1" />
                        <rect x="120" y="165" width="150" height="10" rx="5" fill="#4F46E5" opacity="0.1" />

                        {/* Content Blocks being generated */}
                        <rect x="130" y="210" width="50" height="60" rx="4" fill="#4F46E5" opacity="0.2" />
                        <rect x="190" y="210" width="50" height="40" rx="4" fill="#4F46E5" opacity="0.5" />
                        <rect x="250" y="210" width="30" height="50" rx="4" fill="#4F46E5" />

                        {/* Sparkle Icons for AI */}
                        <path d="M 330 100 L 332 110 L 342 112 L 332 114 L 330 124 L 328 114 L 318 112 L 328 110 Z" fill="#4F46E5" />
                        <path d="M 70 300 L 72 310 L 82 312 L 72 314 L 70 324 L 68 314 L 58 312 L 68 310 Z" fill="#4F46E5" />

                        {/* Success Indicators */}
                        <circle cx="340" cy="200" r="15" fill="#10B981" />
                        <path d="M 335 200 L 338 203 L 345 196" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    )}

                    {i === 2 && (
                      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Scaling Chart */}
                        <path d="M 60 300 Q 150 280 200 150 T 340 60" stroke="#4F46E5" strokeWidth="4" fill="none" strokeLinecap="round" />
                        <path d="M 60 300 Q 150 280 200 150 T 340 60 L 340 340 L 60 340 Z" fill="url(#scaleGradient)" />
                        <defs>
                          <linearGradient id="scaleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                          </linearGradient>
                        </defs>

                        {/* Automated nodes along the path */}
                        <circle cx="100" cy="285" r="6" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <circle cx="180" cy="210" r="6" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <circle cx="260" cy="115" r="6" fill="white" stroke="#4F46E5" strokeWidth="2" />

                        {/* Floating Metric Cards */}
                        <rect x="80" y="100" width="100" height="60" rx="12" fill="white" stroke="#F1F5F9" strokeWidth="1" />
                        <text x="130" y="130" textAnchor="middle" fill="#4F46E5" fontSize="20" fontWeight="bold">+127%</text>
                        <text x="130" y="150" textAnchor="middle" fill="#64748B" fontSize="10">Avg Growth</text>

                        <rect x="220" y="230" width="100" height="60" rx="12" fill="white" stroke="#F1F5F9" strokeWidth="1" />
                        <text x="270" y="260" textAnchor="middle" fill="#10B981" fontSize="20" fontWeight="bold">0%</text>
                        <text x="270" y="280" textAnchor="middle" fill="#64748B" fontSize="10">Decay Rate</text>

                        {/* Monitoring Radar */}
                        <circle cx="340" cy="60" r="30" stroke="#4F46E5" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                        <circle cx="340" cy="60" r="15" stroke="#4F46E5" strokeWidth="1" opacity="0.5" />
                        <circle cx="340" cy="60" r="4" fill="#4F46E5" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE FEATURES - EXPANDED */}
      <section id="features" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Core Features</span>
            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }}>
              Everything You Need to Dominate Search
            </h2>
            <p style={{
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              From Google rankings to AI answer engines, SEOScribes covers every aspect of modern SEO.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            maxWidth: '100%'
          }}>
            {[
              {
                icon: Search,
                title: 'GSC Intelligence',
                desc: 'Connect your Google Search Console and market intelligence tools to automatically analyze search data and discover opportunities. Everything syncs in one unified platform — no more juggling multiple tabs.',
                features: ['Automatic data sync', 'Search query analysis', '12-month historical data']
              },
              {
                icon: Target,
                title: 'Content Gap Detection',
                desc: 'Automatically find keywords where you have high impressions but low clicks — the easiest wins for quick traffic gains.',
                features: ['High-impression keyword analysis', 'Click-through rate optimization', 'Quick-win prioritization']
              },
              {
                icon: TrendingDown,
                title: 'Traffic Decay Alerts',
                desc: 'Get notified within 48 hours when any page starts losing rankings. Auto-refresh content with updated data and insights.',
                features: ['Real-time rank monitoring', 'Automatic decay detection', 'One-click content refresh']
              },
              {
                icon: Brain,
                title: 'Competitor Intelligence',
                desc: 'Outperform your competitors by learning from their strengths. SEOScribes detects what works for them — their best content structure, winning keywords, and ranking strategies — and helps you adapt those insights to your site in seconds.',
                features: ['Top 10 SERP analysis', 'Topic extraction', 'Content gap identification']
              },
              {
                icon: Layout,
                title: 'Ready-to-use LLM Schema',
                desc: 'Get automatically generated schema markup and FAQs to maximize your content visibility in AI answer engines like ChatGPT, Perplexity, and Google SGE.',
                features: ['Automated JSON-LD Schema', 'LLM-optimized FAQ blocks', 'Answer engine citation signals']
              },
              {
                icon: MessageSquare,
                title: 'Real-time Competitor Intel',
                desc: 'Generate new content that outranks the current top 10 by reverse-engineering their winning content structures and keyword strategies in real-time.',
                features: ['SERP pattern recognition', 'Gap analysis vs leaders', 'Winning intent detection']
              },
              {
                icon: ShieldCheck,
                title: 'E-E-A-T Optimization',
                desc: 'Build trust signals with automatic author bios, citation management, and fact-checking for Google quality guidelines.',
                features: ['Author bio generation', 'Citation management', 'Fact-checking AI']
              },
              {
                icon: BarChart2,
                title: 'Performance Monitoring',
                desc: 'Track your search performance with data from Google Search Console. Monitor position changes, clicks, and impressions.',
                features: ['GSC position tracking', 'Traffic change alerts', 'Performance analytics']
              }
            ].map((feat, i) => (
              <div key={i} className='card' style={{
                padding: '2.5rem',
                background: 'white',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                cursor: 'default',
                fontFamily: 'Inter, sans-serif'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--primary-50)',
                  color: 'var(--primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <feat.icon size={24} />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)'
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
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {feat.features.map((item, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <Check size={14} style={{ color: 'var(--primary-600)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="comparison" style={{ padding: '6rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }}>
              Scale Your SEO with Real Performance Data
            </h2>
            <p style={{
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Generic tools and manual analysis can't keep up with modern search. SEOScribes automates your growth using data that matters.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: 'var(--text-tertiary)',
                textAlign: 'center'
              }}>
                Generic SEO Tools
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Identifies problems without solutions',
                  'Static spreadsheet data exports',
                  'Strategy based on generic guesswork',
                  'Slow, manual content creation',
                  'Reactive traffic loss monitoring',
                  'No schema for LLM/Answer Engines',
                  'Limited to keyword tracking only',
                  'High management overhead per site'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1.25rem',
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}>
                    <AlertTriangle size={20} style={{ color: 'var(--error)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: 'var(--primary-600)',
                textAlign: 'center'
              }}>
                SEOScribes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Identifies and fixes in 1-click',
                  'Real-time automated dashboards',
                  'Strategy based on actual GSC data',
                  'Instant AI-powered content generation',
                  'Proactive rank decay protection',
                  'Ready-to-use LLM & FAQ schema',
                  'Real-time SERP competitor analysis',
                  'Automated scaling for entire portfolio'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1.25rem',
                    background: 'var(--primary-50)',
                    borderRadius: '16px',
                    border: '1px solid var(--primary-100)',
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 1px 2px rgba(79, 70, 229, 0.05)'
                  }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--primary-600)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }}>
              Perfect For Every SEO Challenge
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: TrendingDown,
                title: 'Recover Lost Traffic',
                scenario: 'Your blog post that used to get 5,000 visits/month is now down to 2,000.',
                solution: 'SEOScribes detects the decay, analyzes what changed in the SERP, and auto-refreshes your content with updated data, new insights, and improved structure. Traffic recovers within 2-4 weeks.'
              },
              {
                icon: Target,
                title: 'Capture Quick Wins',
                scenario: 'You have 50 keywords with 10,000+ impressions but only 2% CTR.',
                solution: 'SEOScribes identifies these content gaps and generates optimized articles targeting those exact queries. You start ranking within days instead of months.'
              },
              {
                icon: MessageSquare,
                title: 'Get Cited in AI Answers',
                scenario: 'ChatGPT and Perplexity are answering your target queries, but never citing your content.',
                solution: 'SEOScribes reformats your content with clear citations, structured data, and authoritative signals that AI engines prefer. Your brand becomes the go-to source.'
              }
            ].map((useCase, i) => (
              <div key={i} style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                fontFamily: 'Inter, sans-serif'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--primary-50)',
                  color: 'var(--primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <useCase.icon size={24} />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-primary)'
                }}>
                  {useCase.title}
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.5rem'
                  }}>
                    The Problem:
                  </p>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {useCase.scenario}
                  </p>
                </div>
                <div>
                  <p style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--primary-600)',
                    marginBottom: '0.5rem'
                  }}>
                    The Solution:
                  </p>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {useCase.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '0.75rem',
              letterSpacing: '-0.03em'
            }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{
              fontSize: '1rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)'
            }}>
              Start free, scale as you grow. No credit card required.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            maxWidth: '1100px',
            margin: '0 auto',
            fontFamily: 'Inter, sans-serif'
          }}>
            {[
              {
                name: 'Explorer',
                price: 'Free',
                period: 'forever',
                features: [
                  '1 Website',
                  'Basic GSC Analytics',
                  'Content Gap Detection',
                  'Traffic Decay Alerts',
                  'Community Support'
                ],
                cta: 'Start Free',
                link: APP_URL,
                highlight: false,
                badge: null
              },
              {
                name: 'Optimizer',
                price: '$29',
                period: '/month',
                features: [
                  '3 Websites',
                  '15 AI Articles/month',
                  '50 Content Fixes/month',
                  'Competitor Analysis',
                  'AI Answer Optimization',
                  'Email Support'
                ],
                cta: 'Start Free Trial',
                link: APP_URL,
                highlight: false,
                badge: null
              },
              {
                name: 'Accelerator',
                price: '$79',
                period: '/month',
                features: [
                  '10 Websites',
                  '50 AI Articles/month',
                  '200 Content Fixes/month',
                  'Advanced Reporting',
                  'Performance Monitoring',
                  'Priority Support'
                ],
                cta: 'Start Free Trial',
                link: APP_URL,
                highlight: true,
                badge: 'Most Popular'
              },
              {
                name: 'Dominator',
                price: '$149',
                period: '/month',
                features: [
                  '30 Websites',
                  '120 AI Articles/month',
                  '500 Content Fixes/month',
                  'API Access',
                  'White-label Reports',
                  'Custom Branding',
                  'Dedicated Support'
                ],
                cta: 'Contact Sales',
                link: APP_URL,
                highlight: false,
                badge: null
              }
            ].map((plan, i) => (
              <div key={i} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.75rem',
                border: plan.highlight ? '2px solid var(--primary-500)' : '1px solid var(--border-light)',
                position: 'relative',
                boxShadow: plan.highlight ? '0 8px 24px -8px rgba(79, 70, 229, 0.25)' : '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default'
              }}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                    color: 'white',
                    padding: '3px 10px',
                    borderRadius: '99px',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(79, 70, 229, 0.3)'
                  }}>
                    {plan.badge}
                  </div>
                )}
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  {plan.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {plan.price === 'Free' ? (
                    <>
                      <span style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>Free</span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{plan.period}</span>
                    </>
                  ) : (
                    <>
                      <span style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>{plan.price}</span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{plan.period}</span>
                    </>
                  )}
                </div>
                <div style={{ height: '1px', background: 'var(--border-light)', marginBottom: '1.25rem' }} />
                <ul style={{
                  listStyle: 'none',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem'
                }}>
                  {plan.features.map((f, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)'
                    }}>
                      <Check size={15} style={{ color: 'var(--primary-600)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={plan.link} className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`} style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  padding: '0.625rem 1rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '0.8125rem',
            fontFamily: 'Inter, sans-serif',
            color: 'var(--text-tertiary)'
          }}>
            All paid plans include a 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" style={{ padding: '6rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge badge-primary" style={{ marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>FAQ</span>
            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }}>
              Common Questions About SEOScribes
            </h2>
            <p style={{
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Everything you need to know about our AI-powered SEO platform and how it helps you grow.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              {
                q: 'What is SEOScribes?',
                a: 'SEOScribes is an AI-driven SEO automation and content growth platform designed to manage and scale a website’s SEO using real performance data rather than manual analysis or generic tools.'
              },
              {
                q: 'How does SEOScribes help with AEO and GEO?',
                a: 'SEOScribes optimizes your content for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) by using structured data, clear semantic hierarchies, and authoritative source signals. This increases your chances of being cited by AI models like ChatGPT, Perplexity, and Google Search Generative Experience (SGE).'
              },
              {
                q: 'Is it safe to use AI-generated content for SEO?',
                a: 'Yes, when used correctly. SEOScribes focuses on high-quality, research-backed content that follows Google’s E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines. Our AI acts as a researcher and writer that uses your actual GSC data to ensure relevance and accuracy.'
              },
              {
                q: 'Does SEOScribes replace my current SEO tools?',
                a: 'SEOScribes complements tools like Ahrefs or Semrush by taking the "analysis" and turning it into "action." While traditional tools tell you what is wrong, SEOScribes automatically detects the problem and generates the content needed to fix it.'
              },
              {
                q: 'How long does it take to see results?',
                a: 'Most users see improvements in ranking recovery within 2-4 weeks of updating declining content. For new content, indexing and initial ranking typically occur within 7-14 days depending on your site’s existing authority.'
              },
              {
                q: 'Which CMS platforms do you support?',
                a: 'We currently support direct publishing to WordPress, with more integrations like Shopify, Ghost, and Webflow coming soon. You can also export your content in Markdown or HTML for any other platform.'
              }
            ].map((faq, i) => (
              <details key={i} style={{
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                padding: '1.5rem',
                cursor: 'pointer'
              }} className="faq-item">
                <summary style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  fontFamily: 'Inter, sans-serif',
                  color: 'var(--text-primary)',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {faq.q}
                  <span style={{ fontSize: '1.25rem', color: 'var(--primary-600)' }}>+</span>
                </summary>
                <p style={{
                  marginTop: '1rem',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        position: 'relative',
        padding: '6rem 0',
        background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))',
        color: 'white',
        overflow: 'hidden'
      }}>
        {/* Grid and Glow effects */}
        <div className="cta-grid-pattern" />
        <div className="cta-glow-effect" />
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
            color: 'white'
          }}>
            Stop Losing Traffic. Start Ranking.
          </h2>
          <p style={{
            fontSize: '1.25rem',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '2.5rem',
            opacity: 0.9,
            lineHeight: 1.6
          }}>
            Join 500+ content teams using SEOScribes to automate their SEO growth,
            scale their rankings, and dominate search results using real performance data.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={APP_URL} className="btn" style={{
              padding: '0 2.5rem',
              fontSize: '1.125rem',
              height: '60px',
              borderRadius: '14px',
              background: 'white',
              color: 'var(--primary-600)',
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)'
            }}>
              Start Your Free Trial <ArrowRight size={22} />
            </a>
          </div>
          <p style={{
            marginTop: '1.5rem',
            fontSize: '0.875rem',
            fontFamily: 'Inter, sans-serif',
            opacity: 0.8
          }}>
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
