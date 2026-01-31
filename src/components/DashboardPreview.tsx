'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  BarChart3,
  Search,
  Sparkles,
  FileText,
  Globe,
  History,
  MessageSquare,
  User,
  HelpCircle,
  ChevronDown,
  Plus,
  Send,
  BarChart,
  TrendingDown,
  Target,
  Lightbulb,
  Wrench,
  Menu,
  X
} from 'lucide-react';

export default function DashboardPreview() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="dashboard-preview-container" style={{
      width: '100%',
      maxWidth: '100%',
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.04)',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Window Controls */}
      <div style={{
        display: 'flex',
        gap: '8px',
        padding: '1rem 1rem 0.5rem 1.25rem',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        borderBottom: '1px solid #e2e8f0'
      }}>
        {[
          { color: '#ff5f57', shadow: 'rgba(255, 95, 87, 0.3)' },
          { color: '#febc2e', shadow: 'rgba(254, 188, 46, 0.3)' },
          { color: '#28c840', shadow: 'rgba(40, 200, 64, 0.3)' }
        ].map((dot, i) => (
          <div key={i} style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: dot.color,
            boxShadow: `0 0 8px ${dot.shadow}`
          }} />
        ))}
      </div>

      {/* Main Dashboard Layout - Responsive */}
      <div className="dashboard-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 240px) 1fr',
        minHeight: '650px',
        background: '#f8fafc'
      }}>
        {/* Left Sidebar - Hidden on mobile */}
        <div className="sidebar" style={{
          background: 'white',
          borderRight: '1px solid #e2e8f0',
          padding: '1.5rem 0.75rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0 0.75rem 1.5rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #f1f5f9'
          }}>
            <img
              src="/images/seoscribeslogo.webp"
              alt="SEOScribes"
              style={{
                height: '32px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Menu Sections */}
          <div style={{ flex: 1, overflow: 'auto' }}>
            {/* Menu Label */}
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0 0.75rem',
              marginBottom: '0.5rem',
              textAlign: 'left'
            }}>
              Menu
            </div>

            {/* Menu Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {[
                { icon: LayoutDashboard, label: 'Dashboard', active: false },
                { icon: BarChart3, label: 'GSC Insights', active: false },
                { icon: Search, label: 'SERP Analysis', active: false },
                { icon: Sparkles, label: 'AI Generate', active: false },
                { icon: FileText, label: 'Content Editor', active: false },
                { icon: FileText, label: 'Content', active: false },
                { icon: Globe, label: 'Websites', active: false },
                { icon: History, label: 'History', active: false },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.625rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <item.icon size={18} strokeWidth={1.5} />
                  {item.label}
                </div>
              ))}
            </div>

            {/* SEO Chat - Active */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.625rem 0.75rem',
              borderRadius: '8px',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#4f46e5',
              background: '#eef2ff',
              cursor: 'pointer',
              marginBottom: '1.5rem',
              marginLeft: '0'
            }}>
              <MessageSquare size={18} strokeWidth={2} />
              <span style={{ marginLeft: '0' }}>SEO Chat</span>
            </div>

            {/* Support Label */}
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0 0.75rem',
              marginBottom: '0.5rem',
              textAlign: 'left'
            }}>
              Support
            </div>

            {/* Support Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {[
                { icon: User, label: 'Profile' },
                { icon: HelpCircle, label: 'Support' },
              ].map((item) => (
                <div key={item.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.625rem 0.75rem',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#64748b',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  <item.icon size={18} strokeWidth={1.5} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* User Profile */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.875rem',
            marginTop: 'auto',
            borderTop: '1px solid #f1f5f9',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>
              EJ
            </div>
            <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1e293b', textAlign: 'left' }}>Evan Johnson</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>evan@seoscribes.com</div>
            </div>
            <ChevronDown size={16} color="#94a3b8" />
          </div>
        </div>

        {/* Main Content - SEO Chat - Full width */}
        <div className="main-content" style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#f8fafc',
          position: 'relative',
          minWidth: 0
        }}>
          {/* Chat Header - Responsive */}
          <div className="chat-header" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            background: 'white',
            borderBottom: '1px solid #e2e8f0',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            {/* Left - Title */}
            <div className="chat-title-section" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <MessageSquare size={20} />
              </div>
              <div style={{ textAlign: 'left', flex: 1 }}>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', textAlign: 'left' }}>SEO Chat</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'left' }}>Chat with your website & Competitor data</div>
              </div>
              {/* Hamburger Menu - Visible on mobile, inline with SEO Chat */}
              <div className="mobile-menu-btn" style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#f1f5f9',
                cursor: 'pointer'
              }}>
                <Menu size={18} color="#64748b" />
              </div>
            </div>

            {/* Right - Actions */}
            <div className="chat-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              {/* Website Selector */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.875rem',
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#1e293b',
                cursor: 'pointer'
              }}>
                <span style={{ color: '#ef4444' }}>♥</span>
                seoscribes.com
                <ChevronDown size={16} color="#64748b" />
              </div>

              {/* New Chat Button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.875rem',
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#64748b',
                cursor: 'pointer'
              }}>
                <Plus size={16} />
                New Chat
              </div>
            </div>
          </div>

          {/* Chat Content - Responsive padding */}
          <div className="chat-content" style={{
            flex: 1,
            padding: '1.5rem',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            minHeight: 0
          }}>
            {/* SEO Assistant Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.75rem',
              background: '#eef2ff',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#4f46e5',
              width: 'fit-content'
            }}>
              <Sparkles size={14} />
              SEO Assistant
            </div>

            {/* Welcome Message Card */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              maxWidth: '100%',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e293b',
                marginBottom: '0.75rem',
                textAlign: 'left'
              }}>
                Hello 👋 Evan Johnson, Welcome to SEO Chat!
              </div>

              <p style={{
                fontSize: '0.9375rem',
                color: '#64748b',
                lineHeight: 1.6,
                marginBottom: '1rem',
                textAlign: 'left'
              }}>
                I'm your AI-powered SEO assistant. I can help you analyze your Google Search Console data and provide actionable insights.
              </p>

              <div style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#1e293b',
                marginBottom: '0.75rem',
                textAlign: 'left'
              }}>
                Here's what I can do:
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {[
                  { icon: BarChart, text: 'Analyze your top performing keywords and pages' },
                  { icon: TrendingDown, text: 'Identify ranking drops and traffic declines' },
                  { icon: Target, text: 'Perform competitor analysis for specific keywords' },
                  { icon: Lightbulb, text: 'Find content gaps and optimization opportunities' },
                  { icon: Wrench, text: 'Provide technical SEO recommendations' }
                ].map((item, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    fontSize: '0.9375rem',
                    color: '#475569',
                    textAlign: 'left'
                  }}>
                    <span style={{ fontSize: '1rem' }}>{item.icon === BarChart ? '📊' : item.icon === TrendingDown ? '📉' : item.icon === Target ? '🎯' : item.icon === Lightbulb ? '💡' : '🛠️'}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <p style={{
                fontSize: '0.9375rem',
                color: '#1e293b',
                fontWeight: 500,
                marginTop: '1rem',
                textAlign: 'left'
              }}>
                Just type your question below or try one of the suggested queries!
              </p>
            </div>

            {/* Suggested Queries - Elegant Pills */}
            <div style={{ marginTop: '0.5rem' }}>
              {/* Query Chips - All in one flow */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {[
                  'What are my top performing keywords?',
                  'Show me pages with ranking drops',
                  'Analyze my competitors',
                  'Which keywords have impressions but low clicks?',
                  'What content gaps should I focus on?',
                  'Show me pages with low CTR'
                ].map((query, i) => (
                  <div key={i} style={{
                    padding: '0.625rem 1rem',
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    color: '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
                  }}>
                    {query}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input Area - Responsive */}
          <div className="chat-input-area" style={{
            padding: '1rem 1.5rem 1.5rem',
            background: 'white',
            borderTop: '1px solid #e2e8f0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1rem',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <input
                type="text"
                placeholder="Ask about your GSC data..."
                readOnly
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  color: '#64748b',
                  fontSize: '0.9375rem',
                  outline: 'none'
                }}
              />
              <button style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: '#cbd5e1',
                border: 'none',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <Send size={18} />
              </button>
            </div>

            {/* Footer Note */}
            <div style={{
              textAlign: 'center',
              fontSize: '0.75rem',
              color: '#94a3b8',
              marginTop: '0.75rem'
            }}>
              AI-powered insights based on your GSC data. Results may vary.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
