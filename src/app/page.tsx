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

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.seoscribes.com';

export default function LandingPage() {

  return (
    <div className="page-wrapper" style={{ fontFamily: 'Inter, sans-serif', background: 'var(--bg-secondary)' }}>
      <style jsx>{`
        @media (max-width: 1024px) {
          .how-it-works-step > div {
            grid-template-columns: 1fr !important;
          }
          .how-it-works-step > div > div:last-child {
            height: 350px !important;
          }
        }
        @media (max-width: 768px) {
          .stats-row {
            gap: 1.5rem !important;
          }
          .stat-item {
            flex: 0 1 auto;
          }
          .stat-value {
            font-size: 1.5rem !important;
          }
          .stat-label {
            font-size: 0.75rem !important;
          }
        }
        .faq-item[open] summary span {
          transform: rotate(45deg);
        }
        summary::-webkit-details-marker {
          display: none;
        }
      `}</style>

      <Header />

      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '6rem 0 4rem',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)'
      }}>
        <div className="container" style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
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
            AI-Powered SEO Content <br />
            <span style={{ color: 'var(--primary-600)', WebkitTextFillColor: 'var(--primary-600)' }}>That Performs</span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            fontFamily: 'Inter, sans-serif',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            lineHeight: 1.6
          }}>
            Transform your SEO workflow with AI-driven content creation, GSC integration, and seamless publishing.
            From search intent to published posts—automatically.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`${APP_URL}/register`} className="btn btn-primary" style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              height: '50px',
              borderRadius: '10px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Start Free Trial <ArrowRight size={18} />
            </a>
            <button className="btn" style={{
              background: 'white',
              border: '1px solid var(--border-color)',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              height: '50px',
              borderRadius: '10px',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              <Play size={18} /> Watch Demo
            </button>
          </div>

          {/* Stats Row */}
          <div className="stats-row" style={{
            display: 'flex',
            gap: '3rem',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontFamily: 'Inter, sans-serif'
          }}>
            {[
              { value: '127%', label: 'Avg Traffic Increase' },
              { value: '3.2x', label: 'Faster Content Creation' },
              { value: '89%', label: 'Ranking Recovery Rate' }
            ].map((stat, i) => (
              <div key={i} className="stat-item" style={{ textAlign: 'center' }}>
                <div className="stat-value" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-600)', marginBottom: '0.25rem' }}>
                  {stat.value}
                </div>
                <div className="stat-label" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard Preview */}
          <DashboardPreview />
        </div>
      </section>

      {/* TRUST SECTION */}
      <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--border-light)', background: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)', marginBottom: '1.5rem', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>
            TRUSTED BY GROWTH TEAMS AT
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.6, filter: 'grayscale(100%)', flexWrap: 'wrap' }}>
            {['Acme Corp', 'GlobalBank', 'TechStars', 'NextGen', 'Stark Ind'].map(brand => (
              <span key={brand} style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Inter, sans-serif', color: 'var(--text-secondary)' }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

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
              Most SEO tools just report the damage — they don't fix it.
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
                padding: '2rem',
                borderRadius: '16px',
                background: 'white',
                border: '1px solid var(--border-light)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
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
              From Data to Rankings in 3 Steps
            </h2>
            <p style={{
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              SEOScribes connects directly to your Google Search Console, analyzes your data,
              and automatically creates content that ranks — all without leaving the platform.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              {
                step: '01',
                icon: Search,
                title: 'Discover Growth Opportunities',
                desc: 'SEOScribes plugs directly into your Google Search Console and market intelligence tools to pinpoint exactly what drives your growth and what holds you back. No more switching between 10 tabs — everything you need is in one place, clear and actionable.',
                points: [
                  'Content Gaps: Keywords with high impressions but low clicks (quick wins)',
                  'Decay Alerts: Pages losing traffic month-over-month (urgent fixes)',
                  'Striking Distance: Keywords ranking #11-20 (easy to push to page 1)',
                  'AI Answer Opportunities: Queries triggering AI overviews where you are not cited',
                  'Competitor Insights: Discover what works for your competitors — their winning keywords, content structure, and strategies — in seconds'
                ]
              },
              {
                step: '02',
                icon: Brain,
                title: 'Generate Optimized Content',
                desc: 'Stop digging through complex dashboards alone. SEOScribes analyzes your data in depth and explains exactly why things happen. Why is this keyword dropping? Why isn\'t this page converting? You get clear answers with actionable fixes.',
                points: [
                  'Analyzes top 10 Google results for your target keyword',
                  'Extracts semantic topics, headings, and user intent patterns from competitors',
                  'Generates content optimized for both Google rankings AND AI citations',
                  'Includes internal linking suggestions, meta tags, and schema markup',
                  'Fact-checks claims and adds citations for E-E-A-T signals',
                  'Detects competitor strategies: their best content angles, winning keywords, and what makes them rank'
                ]
              },
              {
                step: '03',
                icon: Zap,
                title: 'Track & Recover Rankings',
                desc: 'SEOScribes continuously monitors your content performance and alerts you to issues within 48 hours. Get real-time insights and one-click fixes to keep your rankings strong and recover lost traffic automatically.',
                points: [
                  'Real-time performance tracking from Google Search Console',
                  'Position tracking for all your target keywords',
                  'Automatic decay detection: Get alerted within 48 hours of traffic drops',
                  'One-click content refresh: Update declining pages with fresh data and insights',
                  'Performance analytics: Track clicks, impressions, and position changes over time'
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
                  alignItems: 'center'
                }}>
                  {/* Left Content */}
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(79, 70, 229, 0.25)',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        fontFamily: 'Inter, sans-serif',
                        flexShrink: 0
                      }}>
                        {step.step}
                      </div>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'white',
                        color: 'var(--primary-600)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid var(--primary-100)',
                        flexShrink: 0
                      }}>
                        <step.icon size={24} />
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

                    <div style={{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      border: '1px solid var(--border-light)'
                    }}>
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
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right SVG Image */}
                  <div style={{
                    background: 'linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%)',
                    borderRadius: '16px',
                    height: '500px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {i === 0 && (
                      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Background circles */}
                        <circle cx="200" cy="200" r="150" fill="#E0E7FF" opacity="0.3" />
                        <circle cx="200" cy="200" r="100" fill="#C7D2FE" opacity="0.4" />

                        {/* Central dashboard */}
                        <rect x="100" y="120" width="200" height="160" rx="12" fill="white" stroke="#4F46E5" strokeWidth="2" />

                        {/* Dashboard header */}
                        <rect x="110" y="130" width="60" height="8" rx="4" fill="#4F46E5" />
                        <circle cx="280" cy="134" r="4" fill="#10B981" />

                        {/* Data rows */}
                        <rect x="110" y="155" width="180" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="110" y="170" width="150" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="110" y="185" width="170" height="6" rx="3" fill="#E5E7EB" />

                        {/* Chart bars */}
                        <rect x="120" y="220" width="20" height="40" rx="4" fill="#4F46E5" opacity="0.6" />
                        <rect x="150" y="200" width="20" height="60" rx="4" fill="#4F46E5" opacity="0.8" />
                        <rect x="180" y="210" width="20" height="50" rx="4" fill="#4F46E5" opacity="0.7" />
                        <rect x="210" y="190" width="20" height="70" rx="4" fill="#4F46E5" />
                        <rect x="240" y="205" width="20" height="55" rx="4" fill="#4F46E5" opacity="0.75" />

                        {/* Connection lines */}
                        <path d="M 50 100 Q 100 80 150 100" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                        <path d="M 350 100 Q 300 80 250 100" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />

                        {/* Icons */}
                        <circle cx="50" cy="100" r="20" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <text x="50" y="107" textAnchor="middle" fill="#4F46E5" fontSize="16" fontWeight="bold">G</text>

                        <circle cx="350" cy="100" r="20" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <rect x="342" y="92" width="16" height="16" rx="2" fill="#4F46E5" />

                        {/* Insight badges */}
                        <rect x="80" y="300" width="80" height="24" rx="12" fill="#10B981" opacity="0.2" />
                        <text x="120" y="316" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="600">Quick Wins</text>

                        <rect x="170" y="300" width="80" height="24" rx="12" fill="#F59E0B" opacity="0.2" />
                        <text x="210" y="316" textAnchor="middle" fill="#D97706" fontSize="11" fontWeight="600">Decay Alert</text>

                        <rect x="260" y="300" width="70" height="24" rx="12" fill="#6366F1" opacity="0.2" />
                        <text x="295" y="316" textAnchor="middle" fill="#4F46E5" fontSize="11" fontWeight="600">Gaps</text>
                      </svg>
                    )}

                    {i === 1 && (
                      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Background */}
                        <circle cx="200" cy="200" r="140" fill="#E0E7FF" opacity="0.3" />

                        {/* Main content editor */}
                        <rect x="80" y="80" width="240" height="240" rx="12" fill="white" stroke="#4F46E5" strokeWidth="2" />

                        {/* Editor toolbar */}
                        <rect x="80" y="80" width="240" height="35" rx="12" fill="#4F46E5" opacity="0.1" />
                        <rect x="95" y="92" width="30" height="12" rx="4" fill="#4F46E5" opacity="0.4" />
                        <rect x="135" y="92" width="30" height="12" rx="4" fill="#4F46E5" opacity="0.4" />
                        <rect x="175" y="92" width="30" height="12" rx="4" fill="#4F46E5" opacity="0.4" />

                        {/* Content lines with highlights */}
                        <rect x="95" y="135" width="210" height="8" rx="4" fill="#4F46E5" opacity="0.8" />
                        <rect x="95" y="155" width="190" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="95" y="170" width="200" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="95" y="185" width="180" height="6" rx="3" fill="#E5E7EB" />

                        {/* Highlighted keyword */}
                        <rect x="140" y="168" width="45" height="10" rx="3" fill="#FEF3C7" opacity="0.8" />

                        <rect x="95" y="205" width="195" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="95" y="220" width="185" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="95" y="235" width="200" height="6" rx="3" fill="#E5E7EB" />

                        {/* Another highlighted section */}
                        <rect x="160" y="233" width="55" height="10" rx="3" fill="#FEF3C7" opacity="0.8" />

                        <rect x="95" y="255" width="190" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="95" y="270" width="175" height="6" rx="3" fill="#E5E7EB" />
                        <rect x="95" y="285" width="195" height="6" rx="3" fill="#E5E7EB" />

                        {/* AI sparkle icon */}
                        <circle cx="50" cy="200" r="30" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <path d="M 50 185 L 52 195 L 62 197 L 52 199 L 50 209 L 48 199 L 38 197 L 48 195 Z" fill="#4F46E5" />
                        <path d="M 60 188 L 61 193 L 66 194 L 61 195 L 60 200 L 59 195 L 54 194 L 59 193 Z" fill="#4F46E5" opacity="0.6" />
                        <path d="M 40 188 L 41 193 L 46 194 L 41 195 L 40 200 L 39 195 L 34 194 L 39 193 Z" fill="#4F46E5" opacity="0.6" />

                        {/* SEO score badge */}
                        <circle cx="350" cy="200" r="30" fill="white" stroke="#10B981" strokeWidth="2" />
                        <text x="350" y="200" textAnchor="middle" fill="#10B981" fontSize="20" fontWeight="bold" dy="7">92</text>
                        <text x="350" y="220" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="600">SEO Score</text>

                        {/* Optimization suggestions */}
                        <rect x="100" y="340" width="90" height="35" rx="8" fill="white" stroke="#4F46E5" strokeWidth="1.5" />
                        <circle cx="115" cy="357" r="5" fill="#4F46E5" />
                        <rect x="125" y="350" width="55" height="4" rx="2" fill="#4F46E5" opacity="0.3" />
                        <rect x="125" y="360" width="45" height="3" rx="1.5" fill="#E5E7EB" />

                        <rect x="210" y="340" width="90" height="35" rx="8" fill="white" stroke="#10B981" strokeWidth="1.5" />
                        <circle cx="225" cy="357" r="5" fill="#10B981" />
                        <rect x="235" y="350" width="55" height="4" rx="2" fill="#10B981" opacity="0.3" />
                        <rect x="235" y="360" width="45" height="3" rx="1.5" fill="#E5E7EB" />

                        {/* Competitor data indicators */}
                        <rect x="50" y="50" width="60" height="20" rx="6" fill="white" stroke="#6B7280" strokeWidth="1" opacity="0.7" />
                        <text x="80" y="63" textAnchor="middle" fill="#6B7280" fontSize="9" fontWeight="600">Top 10</text>

                        <rect x="290" y="50" width="60" height="20" rx="6" fill="white" stroke="#6B7280" strokeWidth="1" opacity="0.7" />
                        <text x="320" y="63" textAnchor="middle" fill="#6B7280" fontSize="9" fontWeight="600">SERP</text>

                        {/* Connection lines */}
                        <path d="M 80 70 L 100 80" stroke="#4F46E5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                        <path d="M 320 70 L 300 80" stroke="#4F46E5" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                      </svg>
                    )}

                    {i === 2 && (
                      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Background */}
                        <circle cx="200" cy="200" r="150" fill="#E0E7FF" opacity="0.2" />

                        {/* Monitor/Dashboard */}
                        <rect x="80" y="100" width="240" height="180" rx="12" fill="white" stroke="#4F46E5" strokeWidth="2" />

                        {/* Screen header */}
                        <rect x="80" y="100" width="240" height="30" rx="12" fill="#4F46E5" opacity="0.1" />
                        <circle cx="95" cy="115" r="4" fill="#EF4444" />
                        <circle cx="107" cy="115" r="4" fill="#F59E0B" />
                        <circle cx="119" cy="115" r="4" fill="#10B981" />

                        {/* Performance graph */}
                        <path d="M 100 200 L 130 180 L 160 190 L 190 160 L 220 170 L 250 140 L 280 150"
                          stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <path d="M 100 200 L 130 180 L 160 190 L 190 160 L 220 170 L 250 140 L 280 150 L 280 260 L 100 260 Z"
                          fill="#10B981" opacity="0.1" />

                        {/* Data points */}
                        <circle cx="130" cy="180" r="5" fill="#10B981" stroke="white" strokeWidth="2" />
                        <circle cx="190" cy="160" r="5" fill="#10B981" stroke="white" strokeWidth="2" />
                        <circle cx="250" cy="140" r="5" fill="#10B981" stroke="white" strokeWidth="2" />

                        {/* Axis lines */}
                        <line x1="100" y1="260" x2="290" y2="260" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="100" y1="140" x2="100" y2="260" stroke="#E5E7EB" strokeWidth="1" />

                        {/* Alert badge */}
                        <circle cx="320" cy="120" r="20" fill="#EF4444" />
                        <text x="320" y="127" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">!</text>

                        {/* Notification cards */}
                        <rect x="100" y="300" width="90" height="50" rx="8" fill="white" stroke="#10B981" strokeWidth="2" />
                        <circle cx="115" cy="315" r="6" fill="#10B981" />
                        <rect x="128" y="310" width="50" height="4" rx="2" fill="#10B981" opacity="0.3" />
                        <rect x="128" y="320" width="40" height="3" rx="1.5" fill="#E5E7EB" />
                        <rect x="110" y="332" width="70" height="10" rx="5" fill="#10B981" opacity="0.2" />
                        <text x="145" y="340" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="600">Recovered</text>

                        <rect x="210" y="300" width="90" height="50" rx="8" fill="white" stroke="#F59E0B" strokeWidth="2" />
                        <circle cx="225" cy="315" r="6" fill="#F59E0B" />
                        <rect x="238" y="310" width="50" height="4" rx="2" fill="#F59E0B" opacity="0.3" />
                        <rect x="238" y="320" width="40" height="3" rx="1.5" fill="#E5E7EB" />
                        <rect x="220" y="332" width="70" height="10" rx="5" fill="#F59E0B" opacity="0.2" />
                        <text x="255" y="340" textAnchor="middle" fill="#D97706" fontSize="8" fontWeight="600">Monitoring</text>

                        {/* Refresh icon */}
                        <circle cx="50" cy="200" r="25" fill="white" stroke="#4F46E5" strokeWidth="2" />
                        <path d="M 45 195 Q 50 185 55 195" stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <path d="M 55 205 Q 50 215 45 205" stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <polygon points="58,193 62,197 58,201" fill="#4F46E5" />
                        <polygon points="42,207 38,203 42,199" fill="#4F46E5" />
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
                title: 'AI Content Editor',
                desc: 'Write and optimize content in a distraction-free editor with real-time SEO scoring and suggestions.',
                features: ['Semantic keyword optimization', 'Internal linking suggestions', 'Readability analysis']
              },
              {
                icon: MessageSquare,
                title: 'AI Answer Optimization',
                desc: 'Optimize your content to get cited in ChatGPT, Perplexity, Google SGE, and other AI answer engines.',
                features: ['AI citation tracking', 'Answer-optimized formatting', 'Source credibility signals']
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
                padding: '2rem',
                background: 'white',
                transition: 'transform 0.2s, box-shadow 0.2s',
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
      <section style={{ padding: '6rem 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.75rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              marginBottom: '1rem',
              letterSpacing: '-0.03em'
            }}>
              Why SEOScribes Beats Traditional SEO Tools
            </h2>
            <p style={{
              fontSize: '1.125rem',
              fontFamily: 'Inter, sans-serif',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Most SEO platforms just show you data. SEOScribes takes action.
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
                Traditional SEO Tools
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Show you what is wrong',
                  'Export data to spreadsheets',
                  'Manual content creation',
                  'Separate tools for everything',
                  'Monthly rank updates',
                  'No AI answer tracking',
                  'React to problems after damage is done'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'var(--bg-secondary)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                    fontFamily: 'Inter, sans-serif'
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
                  'Fixes issues in 1-click',
                  'All data in one platform',
                  'AI-powered content generation',
                  'Complete workflow in one tool',
                  'Real-time rank monitoring',
                  'AI answer engine optimization',
                  'Prevent problems before they happen'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'var(--primary-50)',
                    borderRadius: '8px',
                    border: '1px solid var(--primary-100)',
                    fontFamily: 'Inter, sans-serif'
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
                link: `${APP_URL}/register`,
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
                link: `${APP_URL}/register`,
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
                link: `${APP_URL}/register`,
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
                link: `${APP_URL}/register`,
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
                a: 'SEOScribes is an AI-native SEO platform designed to automate content creation and ranking recovery. It connects directly to your Google Search Console to detect traffic drops and generate optimized content that ranks on both traditional search engines and AI answer engines.'
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
        padding: '6rem 0',
        background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))',
        color: 'white'
      }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
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
            Join 500+ content teams using SEOScribes to automate their SEO workflow,
            recover lost rankings, and dominate Google search results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`${APP_URL}/register`} className="btn" style={{
              padding: '0.875rem 2rem',
              fontSize: '1.125rem',
              height: '56px',
              borderRadius: '10px',
              background: 'white',
              color: 'var(--primary-600)',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              Start Your Free Trial <ArrowRight size={20} />
            </a>
            <button className="btn" style={{
              padding: '0.875rem 2rem',
              fontSize: '1.125rem',
              height: '56px',
              borderRadius: '10px',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              fontWeight: 600,
              fontFamily: 'Inter, sans-serif'
            }}>
              Schedule Demo
            </button>
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
