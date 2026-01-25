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
  Globe
} from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com/';

export default function LandingPage() {
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="page-wrapper" style={{ fontFamily: 'Inter, sans-serif', background: 'var(--bg-secondary)' }}>

      <Header />

      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '12rem 0 6rem',
        overflow: 'hidden',
        background: 'var(--bg-secondary)'
      }}>
        {/* Grid pattern background */}
        <div className="hero-grid-pattern" />

        {/* Glow effect overlay */}
        <div className="hero-glow-effect" />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="hero-badge hero-entrance">
            <Sparkles size={14} className="text-primary-600" />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              New: AI-Powered Content Decay Detection & Recovery
            </span>
            <ChevronRight size={14} style={{ color: 'var(--gray-400)' }} />
          </div>

          <h1 className="hero-h1 hero-entrance delay-1">
            <span className="hero-h1-part1" style={{
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-600) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Rank and Grow Your Content{' '}</span>
            <br className="desktop-break" />
            <span className="hero-h1-part2" style={{
              background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--primary-600) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>Across AI & Search Engines</span>
          </h1>

          <p className="hero-p hero-entrance delay-2">
            Dominate search rankings and gain visibility in ChatGPT, Perplexity, and Google SGE.
            Scale your content growth with an AI-driven platform built on actual performance data — wherever your customers search.
          </p>

          <div className="hero-buttons hero-entrance delay-3" style={{ display: 'flex', gap: '1.25rem', marginBottom: '5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={APP_URL} className="btn btn-primary btn-shimmer" style={{
              padding: '0 2.5rem',
              fontSize: '1.125rem',
              height: '56px',
              borderRadius: '14px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              boxShadow: '0 20px 40px -10px rgba(79, 70, 229, 0.4)',
              border: 'none',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}>
              Get Started Free <ArrowRight size={20} />
            </a>
            <a href="#how-it-works" className="btn" style={{
              background: 'white',
              border: '1px solid var(--border-color)',
              padding: '0 2rem',
              fontSize: '1.125rem',
              height: '56px',
              borderRadius: '14px',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}>
              How It Works <ChevronRight size={20} />
            </a>
          </div>

          {/* Stats Row */}
          <div className="stats-row hero-entrance delay-4" style={{
            display: 'flex',
            gap: '2rem',
            marginBottom: '6rem',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            fontFamily: 'Inter, sans-serif'
          }}>
            {[
              { value: '127%', label: 'Avg Traffic Increase', icon: TrendingUp, color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' },
              { value: '3.2x', label: 'Faster Content Creation', icon: Zap, color: '#6366F1', bg: 'rgba(99, 102, 241, 0.1)' },
              { value: '89%', label: 'Ranking Recovery Rate', icon: ShieldCheck, color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' }
            ].map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon-box" style={{
                  background: stat.bg,
                  color: stat.color,
                }}>
                  <stat.icon size={22} />
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
          <div className="hero-entrance delay-4" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '100%',
              background: 'var(--primary-200)',
              filter: 'blur(100px)',
              opacity: 0.15,
              zIndex: -1
            }} />
            <DashboardPreview />
          </div>
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
      <section style={{
        padding: '8rem 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Glow */}
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="hero-entrance delay-1">
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem', padding: '0.5rem 1rem' }}>The Challenge</span>
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              Your Traffic is Bleeding.<br className="desktop-break" /> Here's Why.
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto'
            }}>
              Google's algorithm updates, AI answer engines, and content decay are silently killing your rankings.
              Generic SEO tools just report the damage—SEOScribes fixes it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
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
                desc: 'You are juggling 5+ tools: GSC for data, Ahrefs for keywords, ChatGPT for writing, Grammarly for editing. Every handoff loses context and wastes time.'
              }
            ].map((card, i) => (
              <div key={i} className={`problem-card hero-entrance delay-${i + 2}`}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: card.bg,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  boxShadow: `0 8px 16px ${card.color}15`,
                  position: 'relative',
                  zIndex: 2
                }}>
                  <card.icon size={26} strokeWidth={2.5} />
                </div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: '1.0625rem',
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7
                  }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - DETAILED */}
      <section id="how-it-works" style={{ padding: '8rem 0', background: 'white', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="hero-entrance delay-1">
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem', padding: '0.5rem 1rem' }}>How It Works</span>
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              Automate Your Growth in 3 Steps
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              SEOScribes uses real performance data to automatically manage and scale your SEO,
              turning manual analysis into automated growth.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
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
                  'Strategic Intelligence: Real-time insights that turn data into immediate growth'
                ]
              },
              {
                step: '02',
                icon: Brain,
                title: 'Outrank Competitors Automatically',
                desc: 'Generate new content by simply entering a keyword. SEOScribes performs real-time search result analysis to understand exactly what it takes to outrank the top 10 competitors. We give you everything you need — from content to schema for visibility in tools like ChatGPT.',
                points: [
                  'Real-time Competitor Analysis: Deep SERP scan to reverse-engineer winners',
                  'LLM Tool Visibility: Auto-generated Schema and FAQs for Answer Engines',
                  'Outranking Strategy: Content structure designed specifically to beat current leaders',
                  'Ready-to-use Assets: Instant publishing with all meta-data and schema included'
                ]
              },
              {
                step: '03',
                icon: Zap,
                title: 'Refresh & Scale with Automation',
                desc: 'SEO is never static. SEOScribes continuously monitors your site and allows you to refresh your old content completely with a single click. Maintain your peak performance and scale your rankings across your entire content portfolio.',
                points: [
                  'Complete Content Refresh: Full updates for old articles using fresh data',
                  'Continuous Performance Monitoring: GSC-integrated tracking 24/7',
                  'Automatic Ranking Recovery: Immediate fixes for declining pages',
                  'Zero-Guesswork Growth: Scale what works based on proven performance'
                ]
              }
            ].map((step, i) => (
              <div key={i} className={`how-it-works-step hero-entrance delay-${i + 2}`}>
                <div className="step-direction-container" style={{
                  direction: i % 2 === 1 ? 'rtl' : 'ltr'
                }}>
                  {/* Content Container */}
                  <div className="step-content-wrapper" style={{ direction: 'ltr' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                      marginBottom: '2rem'
                    }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(79, 70, 229, 0.2)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        fontFamily: 'Inter, sans-serif',
                        flexShrink: 0
                      }}>
                        {step.step}
                      </div>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '16px',
                        background: 'white',
                        color: 'var(--primary-600)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--primary-100)',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                      }}>
                        <step.icon size={30} strokeWidth={2.5} />
                      </div>
                    </div>

                    <h3 style={{
                      fontSize: '2rem',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 800,
                      marginBottom: '1.25rem',
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      lineHeight: 1.2
                    }}>
                      {step.title}
                    </h3>

                    <p style={{
                      fontSize: '1.125rem',
                      fontFamily: 'Inter, sans-serif',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      marginBottom: '2.5rem'
                    }}>
                      {step.desc}
                    </p>

                    <div className="points-box" style={{
                      background: 'white',
                      borderRadius: '24px',
                      padding: '2rem',
                      border: '1px solid var(--border-light)',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                    }}>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem',
                        margin: 0
                      }}>
                        {step.points.map((point, j) => (
                          <li key={j} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            fontSize: '1rem',
                            fontFamily: 'Inter, sans-serif',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.5
                          }}>
                            <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '2px' }} />
                            <span>
                              {point.includes(':') ? (
                                <>
                                  <strong style={{ color: 'var(--gray-900)', fontWeight: 600 }}>{point.split(':')[0]}:</strong>
                                  {point.split(':').slice(1).join(':')}
                                </>
                              ) : point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Illustration Container */}
                  <div className="step-illustration-wrapper" style={{ direction: 'ltr' }}>
                    <div className="step-illustration" style={{
                      background: 'linear-gradient(135deg, #fdfdff 0%, #f4f6ff 100%)',
                      borderRadius: '32px',
                      height: '480px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '3rem',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid var(--border-light)',
                      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.01)'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '80%',
                        height: '80%',
                        background: 'radial-gradient(circle at center, var(--primary-200) 0%, transparent 70%)',
                        opacity: 0.15,
                        filter: 'blur(50px)',
                        zIndex: 0
                      }} />
                      {/* STEP 1: DATA CONNECTIVITY */}
                      {i === 0 && (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
                          {/* Background Grid */}
                          <g opacity="0.1">
                            {Array.from({ length: 11 }).map((_, idx) => (
                              <Fragment key={idx}>
                                <line x1={0} y1={idx * 40} x2={400} y2={idx * 40} stroke="#4F46E5" strokeWidth="1" />
                                <line x1={idx * 40} y1={0} x2={idx * 40} y2={400} stroke="#4F46E5" strokeWidth="1" />
                              </Fragment>
                            ))}
                          </g>

                          {/* Data Clusters */}
                          <circle cx="80" cy="120" r="40" fill="url(#grad1)" opacity="0.1" />
                          <circle cx="320" cy="280" r="50" fill="url(#grad1)" opacity="0.1" />

                          {/* Central Processing Hub */}
                          <rect x="130" y="110" width="140" height="180" rx="24" fill="white" stroke="#4F46E5" strokeWidth="2" style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }} />
                          <rect x="150" y="140" width="100" height="8" rx="4" fill="#F1F5F9" />
                          <rect x="150" y="160" width="80" height="8" rx="4" fill="#F1F5F9" />
                          <rect x="150" y="180" width="90" height="8" rx="4" fill="#F1F5F9" />

                          {/* Scanning Bar */}
                          <rect x="130" y="210" width="140" height="40" fill="url(#scanGrad)" opacity="0.4">
                            <animate attributeName="y" values="120;250;120" dur="4s" repeatCount="indefinite" />
                          </rect>

                          {/* Connection Lines */}
                          <path d="M 80 120 Q 110 120 130 150" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4">
                            <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
                          </path>
                          <path d="M 320 280 Q 290 280 270 250" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4" />

                          {/* Source Tags */}
                          <g transform="translate(55, 95)">
                            <rect width="50" height="50" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                            <text x="25" y="32" textAnchor="middle" fill="#4F46E5" fontSize="18" fontWeight="bold">G</text>
                            <circle cx="42" cy="8" r="6" fill="#10B981" />
                          </g>

                          {/* Results Bubbles */}
                          <circle cx="160" cy="240" r="10" fill="#10B981" opacity="0.8">
                            <animate attributeName="r" values="8;11;8" dur="3s" repeatCount="indefinite" />
                          </circle>
                          <circle cx="210" cy="255" r="12" fill="#6366F1" opacity="0.8">
                            <animate attributeName="r" values="10;13;10" dur="4s" repeatCount="indefinite" />
                          </circle>

                          <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4F46E5" />
                              <stop offset="100%" stopColor="#818CF8" />
                            </linearGradient>
                            <linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
                              <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      )}

                      {/* STEP 2: COMPETITIVE ANALYSIS & AI ENGINE */}
                      {i === 1 && (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
                          {/* Comparative Layers */}
                          <rect x="80" y="240" width="240" height="80" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1" />
                          <rect x="100" y="260" width="200" height="40" rx="8" fill="#F1F5F9" />

                          {/* Top Ranking Piece */}
                          <g transform="translate(120, 100)">
                            <rect width="160" height="120" rx="20" fill="white" stroke="#4F46E5" strokeWidth="2" style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }} />
                            <path d="M 20 40 L 140 40" stroke="#F1F5F9" strokeWidth="4" strokeLinecap="round" />
                            <path d="M 20 60 L 110 60" stroke="#F1F5F9" strokeWidth="4" strokeLinecap="round" />
                            <path d="M 20 80 L 130 80" stroke="#F1F5F9" strokeWidth="4" strokeLinecap="round" />

                            {/* AI Sparkles */}
                            <path d="M 130 20 L 132 25 L 137 26 L 132 27 L 130 32 L 128 27 L 123 26 L 128 25 Z" fill="#6366F1">
                              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                            </path>
                          </g>

                          {/* Competitive Connectors */}
                          <circle cx="200" cy="230" r="25" fill="white" stroke="#4F46E5" strokeWidth="1" />
                          <path d="M 200 215 V 245 M 185 230 H 215" stroke="#4F46E5" strokeWidth="2" />

                          {/* Recognition Badge */}
                          <g transform="translate(290, 80)">
                            <circle cx="25" cy="25" r="25" fill="#10B981" />
                            <path d="M 17 25 L 23 31 L 34 20" stroke="white" strokeWidth="3" fill="none" />
                          </g>

                          {/* Floating Labels */}
                          <rect x="50" y="150" width="60" height="24" rx="12" fill="#EEF2FF" />
                          <text x="80" y="166" textAnchor="middle" fill="#4F46E5" fontSize="10" fontWeight="bold">TOP 1</text>
                        </svg>
                      )}

                      {/* STEP 3: REFRESH & SCALE */}
                      {i === 2 && (
                        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'relative', zIndex: 1 }}>
                          {/* Infinite Graph */}
                          <path d="M 50 320 Q 150 300 200 150 T 350 50" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 6">
                            <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
                          </path>

                          {/* Multi-Screen / Portfolio Representation */}
                          <rect x="100" y="180" width="80" height="100" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" opacity="0.6" />
                          <rect x="140" y="160" width="80" height="100" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" opacity="0.8" />
                          <rect x="180" y="140" width="100" height="130" rx="12" fill="white" stroke="#4F46E5" strokeWidth="2" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.05))' }} />

                          {/* Refresh Icon */}
                          <g transform="translate(260, 130)">
                            <circle cx="20" cy="20" r="20" fill="#4F46E5" />
                            <path d="M 20 12 A 8 8 0 1 1 14 14.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                            <path d="M 14 10 V 15 H 19" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                          </g>

                          {/* Scale Indicators */}
                          <g transform="translate(300, 250)">
                            <rect width="70" height="40" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                            <text x="35" y="28" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">+320%</text>
                          </g>

                          {/* Radar Scan (Continuous monitoring) */}
                          <circle cx="340" cy="340" r="40" stroke="#4F46E5" strokeWidth="1" strokeDasharray="4 4" opacity="0.2">
                            <animate attributeName="r" values="30;50;30" dur="4s" repeatCount="indefinite" />
                          </circle>
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED TO DOMINATE SEARCH */}
      <section id="features" style={{
        padding: '8rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background decoration */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="hero-entrance delay-1">
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem', padding: '0.5rem 1rem' }}>Core Features</span>
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              Everything You Need to Dominate Search
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              From Google rankings to AI answer engines, SEOScribes covers every aspect of modern SEO growth.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: Search,
                title: 'GSC Intelligence',
                desc: 'Connect your Google Search Console to automatically analyze search data and discover opportunities. Everything syncs in one unified platform.',
                features: ['Automatic data sync', 'Search query analysis', 'Historical data insights']
              },
              {
                icon: Target,
                title: 'Content Gap Detection',
                desc: 'Automatically find keywords where you have high impressions but low clicks — the easiest wins for quick traffic gains.',
                features: ['Impression vs Click analysis', 'CTR optimization tips', 'Priority scoring']
              },
              {
                icon: TrendingDown,
                title: 'Traffic Decay Alerts',
                desc: 'Get notified within 48 hours when any page starts losing rankings. Auto-refresh content with updated data and insights.',
                features: ['Real-time rank monitoring', 'Decay detection engine', 'One-click refresh']
              },
              {
                icon: Brain,
                title: 'Competitor Intelligence',
                desc: 'Outperform your competitors by learning from their strengths. Detect what works for them and adapt those insights in seconds.',
                features: ['SERP structure analysis', 'Topic extraction', 'Keyword gap identification']
              },
              {
                icon: Layout,
                title: 'AI answer Engines (GEO)',
                desc: 'Maximize visibility in ChatGPT, Perplexity, and Google SGE with automatically generated schema markup and LLM-optimized FAQ blocks.',
                features: ['JSON-LD Schema automation', 'LLM-optimized FAQs', 'GEO signal optimization']
              },
              {
                icon: MessageSquare,
                title: 'Intent-First Content',
                desc: 'Generate new content that matches search intent perfectly by reverse-engineering the winning content structures of top leaders.',
                features: ['Intent pattern recognition', 'Content structure planning', 'Topic authority building']
              },
              {
                icon: ShieldCheck,
                title: 'E-E-A-T Optimization',
                desc: 'Build trust signals automatically with author bio generation, citation management, and research-backed fact checking.',
                features: ['Author signal management', 'Citation auto-generator', 'Fact-checking AI']
              },
              {
                icon: BarChart2,
                title: 'Performance Lifecycle',
                desc: 'Monitor the entire lifecycle of your content from draft to publishing, and through every ranking shift with unified analytics.',
                features: ['Full lifecycle tracking', 'Traffic change alerts', 'ROI performance metrics']
              },
              {
                icon: Globe,
                title: 'Automated CMS Publishing',
                desc: 'Push your optimized content directly to your site. We integrate seamlessly with WordPress, Webflow, and more for a zero-click workflow.',
                features: ['One-click WP publishing', 'Headless CMS support', 'Instant live updates']
              }
            ].map((feat, i) => (
              <div key={i} className={`feature-card hero-entrance delay-${(i % 4) + 2}`}>
                <div className="feature-icon-box">
                  <feat.icon size={22} strokeWidth={2.5} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
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
                    marginBottom: '1.5rem'
                  }}>
                    {feat.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {feat.features.map((item, j) => (
                      <li key={j} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
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

      {/* BENEFITS SECTION / COMPARISON */}
      <section id="comparison" style={{
        padding: '8rem 0',
        background: 'white',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="hero-entrance delay-1">
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem', padding: '0.5rem 1rem' }}>The Difference</span>
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              Scale Your SEO with Real Performance Data
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Generic tools and manual analysis can't keep up with modern search. SEOScribes automates your growth using data that matters.
            </p>
          </div>

          <div className="comparison-grid">
            {/* Generic Tools */}
            <div className="comparison-card hero-entrance delay-2" style={{
              background: '#f8fafc',
              border: '1px solid var(--border-light)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-tertiary)',
                  border: '1px solid var(--border-light)'
                }}>
                  <AlertTriangle size={20} />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  Generic SEO Tools
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
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
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: '14px',
                    border: '1px solid rgba(0,0,0,0.03)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-tertiary)', opacity: 0.3 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* SEOScribes */}
            <div className="comparison-card hero-entrance delay-3" style={{
              background: 'linear-gradient(180deg, #f5f3ff 0%, #ede9fe 100%)',
              border: '1px solid var(--primary-100)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Highlight badge */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                right: '-2rem',
                background: 'var(--primary-600)',
                color: 'white',
                padding: '0.5rem 3rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                transform: 'rotate(45deg)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                zIndex: 2
              }}>
                RECOMMENDED
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'var(--primary-600)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 8px 16px rgba(79, 70, 229, 0.2)'
                }}>
                  <Sparkles size={20} />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 800,
                  color: 'var(--primary-700)',
                  letterSpacing: '-0.01em'
                }}>
                  SEOScribes
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', position: 'relative', zIndex: 1 }}>
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
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: 'white',
                    borderRadius: '14px',
                    border: '1px solid var(--primary-100)',
                    color: 'var(--primary-700)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.04)'
                  }}>
                    <CheckCircle2 size={18} style={{ color: 'var(--primary-600)' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" style={{
        padding: '8rem 0',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '30%',
          height: '50%',
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="hero-entrance delay-1">
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem', padding: '0.5rem 1rem' }}>Scenarios</span>
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              Perfect For Every SEO Challenge
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Whether you are battling ranking decay or looking to scale what works, SEOScribes provides the automation you need.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
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
                scenario: 'LLMs like ChatGPT are answering queries with your data but never citing your brand as the source.',
                solution: 'SEOScribes structures your content with authoritative signals and GEO schema that ensure your brand is cited as the source in AI results.'
              }
            ].map((useCase, i) => (
              <div key={i} className={`use-case-card hero-entrance delay-${i + 2}`}>
                <div className="use-case-icon-box">
                  <useCase.icon size={26} strokeWidth={2.5} />
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  marginBottom: '1.25rem',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em'
                }}>
                  {useCase.title}
                </h3>

                <div style={{
                  background: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(0,0,0,0.03)',
                  flex: 1
                }}>
                  <p style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--text-tertiary)',
                    marginBottom: '0.75rem',
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
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid var(--primary-100)'
                }}>
                  <p style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--primary-600)',
                    marginBottom: '0.75rem',
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

      {/* PRICING */}
      <section id="pricing" style={{
        padding: '8rem 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="hero-entrance delay-1">
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem', padding: '0.5rem 1rem' }}>Pricing</span>
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              Simple, Transparent Pricing
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Start free, scale as you grow. <span style={{ color: 'var(--success)', fontWeight: 700 }}>Special Offer:</span> Optimizer plan is currently free for a limited time!
            </p>
          </div>

          <div className="pricing-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
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
                  '1 Website context',
                  'Basic GSC Insights',
                  'Content Gap Detection',
                  'Traffic Decay Alerts',
                  'Community Support'
                ],
                cta: 'Start Free',
                link: APP_URL,
                highlight: false
              },
              {
                name: 'Optimizer',
                price: 'Free',
                period: 'Limited Time',
                desc: 'Perfect for growing blogs. Usually $29/mo, now free for early adopters.',
                features: [
                  '3 Websites context',
                  '15 AI Articles/month',
                  '50 Content Fixes/month',
                  'Competitor Analysis',
                  'AI Answer Optimization',
                  'Email Support'
                ],
                cta: 'Claim Free Access',
                link: APP_URL,
                highlight: false,
                offer: true
              },
              {
                name: 'Accelerator',
                price: '$79',
                period: '/month',
                desc: 'Built for content agencies and power users.',
                features: [
                  '10 Websites',
                  '50 AI Articles/month',
                  '200 Content Fixes/month',
                  'Advanced Reporting',
                  'Performance Lifecycle',
                  'Priority Support'
                ],
                cta: 'Popular Choice',
                link: APP_URL,
                highlight: true,
                badge: 'Most Popular'
              },
              {
                name: 'Dominator',
                price: '$149',
                period: '/month',
                desc: 'For high-scale portfolios and enterprises.',
                features: [
                  '30 Websites',
                  '120 AI Articles/month',
                  'Unlimited Fixes',
                  'API Access (Beta)',
                  'White-label Reports',
                  'Dedicated Support'
                ],
                cta: 'Get Started',
                link: APP_URL,
                highlight: false
              }
            ].map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.highlight ? 'highlight' : ''} hero-entrance delay-${i + 2}`}>
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'var(--primary-600)',
                    color: 'white',
                    padding: '0.375rem 0.875rem',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: plan.highlight ? 'var(--primary-700)' : 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {plan.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.75rem' }}>
                    <span style={{
                      fontSize: '3rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em'
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500
                    }}>
                      {plan.period}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    minHeight: '3rem'
                  }}>
                    {plan.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '2.5rem',
                  flex: 1
                }}>
                  {plan.features.map((feature, j) => (
                    <div key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 500
                    }}>
                      <CheckCircle2 size={18} style={{
                        color: plan.highlight ? 'var(--primary-600)' : 'var(--success)',
                        flexShrink: 0
                      }} />
                      {feature}
                    </div>
                  ))}
                </div>
                <a href={plan.link} className={`btn ${plan.highlight ? 'btn-primary' : (plan.offer ? 'btn-success' : 'btn-outline')}`} style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  padding: '0.875rem 1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  background: plan.highlight ? 'var(--primary-600)' : (plan.offer ? 'var(--success)' : 'var(--gray-50)'),
                  color: (plan.highlight || plan.offer) ? 'white' : 'var(--text-primary)',
                  border: (plan.highlight || plan.offer) ? 'none' : '1px solid var(--border-color)',
                  boxShadow: (plan.highlight || plan.offer) ? '0 10px 20px -5px rgba(0,0,0,0.1)' : 'none'
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
            fontSize: '0.8125rem',
            fontFamily: 'Inter, sans-serif',
            color: 'var(--text-tertiary)'
          }}>
            Free forever • No credit card required • Cancel anytime
          </p>
        </div>
      </section >

      {/* FAQ SECTION */}
      <section id="faq" style={{
        padding: '8rem 0',
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Background Decoration */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.02) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="hero-entrance delay-1">
            <span className="badge badge-primary" style={{ marginBottom: '1.25rem', padding: '0.5rem 1rem' }}>Support</span>
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(180deg, var(--gray-900) 0%, var(--gray-700) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.1
            }}>
              Common Questions
            </h2>
            <p style={{
              fontSize: '1.25rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Everything you need to know about our AI-powered SEO platform and how it helps you grow.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
                a: 'Yes, when used correctly. SEOScribes focuses on high-quality, research-backed content that follows Google’s E-E-A-T guidelines. Our AI acts as a researcher and writer that uses your actual GSC data to ensure relevance and accuracy.'
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
              <details key={i} className="faq-card hero-entrance" style={{ animationDelay: `${0.1 * (i + 2)}s` }}>
                <summary className="faq-summary">
                  {faq.q}
                  <div className="faq-icon">
                    <Check size={14} strokeWidth={3} />
                  </div>
                </summary>
                <div className="faq-content" style={{
                  padding: '0 2rem 1.5rem 2rem',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - COMPACT */}
      <section id="cta" style={{
        position: 'relative',
        padding: '6rem 0',
        background: 'var(--gray-900)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Deep mesh gradient background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.12) 0%, transparent 50%)',
          zIndex: 1
        }} />

        {/* Animated grid pattern */}
        <div className="cta-grid-pattern" style={{ opacity: 0.2, zIndex: 2 }} />
        <div className="cta-glow-effect" style={{ zIndex: 2 }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', textAlign: 'center' }}>
          <div className="hero-entrance">
            <h2 style={{
              fontSize: '3.25rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.04em',
              color: 'white',
              lineHeight: 1.1
            }}>
              Stop Losing Traffic. <span style={{
                background: 'linear-gradient(90deg, #818CF8 0%, #C084FC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Start Ranking.</span>
            </h2>
            <p style={{
              fontSize: '1.1875rem',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '2.5rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              maxWidth: '680px',
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
              <a href={APP_URL} className="btn btn-shimmer" style={{
                padding: '0 3rem',
                fontSize: '1.125rem',
                height: '58px',
                borderRadius: '14px',
                background: 'white',
                color: 'var(--primary-600)',
                fontWeight: 800,
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                border: 'none',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}>
                Get Started Free <ArrowRight size={20} />
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                opacity: 0.5,
                fontSize: '0.8125rem',
                color: 'white',
                fontWeight: 500
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <CheckCircle2 size={14} /> Free Forever
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <CheckCircle2 size={14} /> No Card Required
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to top, var(--gray-900), transparent)',
          zIndex: 3
        }} />
      </section>

      <Footer />
    </div >
  );
}
