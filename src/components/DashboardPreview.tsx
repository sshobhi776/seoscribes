import { FileText, Eye, MousePointer, Target, TrendingUp, TrendingDown, AlertTriangle, BarChart3, Sparkles, Settings, HelpCircle, ChevronRight } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '1000px',
      background: 'white',
      borderRadius: '24px',
      boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0,0,0,0.05)',
      padding: '0.625rem',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Window Controls */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem', paddingLeft: '0.75rem', paddingTop: '0.5rem' }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
          <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
        ))}
      </div>

      {/* Dashboard Content with Sidebar */}
      <div className="dashboard-grid" style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        gap: 0,
        background: '#fcfdfe',
        borderRadius: '16px',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
        minHeight: '650px',
        border: '1px solid rgba(0,0,0,0.03)'
      }}>
        {/* Sidebar */}
        <div className="sidebar" style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
          borderRight: '1px solid var(--border-light)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            padding: '0.875rem',
            marginBottom: '1.25rem',
            borderRadius: '12px',
            background: 'white',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 4px 12px -2px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'white',
              flexShrink: 0,
              boxShadow: '0 4px 10px -2px rgba(79, 70, 229, 0.4)'
            }}>
              JD
            </div>
            <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>John Doe</div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)', opacity: 0.8 }}>Pro Plan</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: 'auto' }}>
            {[
              { label: 'Dashboard', icon: BarChart3, active: true },
              { label: 'Content Gaps', icon: Target, active: false },
              { label: 'Decay Alerts', icon: AlertTriangle, active: false },
              { label: 'AI Generate', icon: Sparkles, active: false }
            ].map((item) => (
              <div key={item.label} className={`sidebar-item ${item.active ? 'active' : ''}`} style={{
                padding: '0.625rem 0.875rem',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: item.active ? 600 : 500,
                color: item.active ? 'var(--primary-700)' : 'var(--text-secondary)',
                background: item.active ? 'white' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                boxShadow: item.active ? '0 4px 12px -2px rgba(0,0,0,0.06)' : 'none',
                border: item.active ? '1px solid rgba(0,0,0,0.03)' : '1px solid transparent',
              }}>
                <item.icon size={16} strokeWidth={item.active ? 2.5 : 2} />
                <span style={{ flex: 1 }}>{item.label}</span>
                {item.active && <ChevronRight size={12} opacity={0.5} />}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            {[
              { label: 'Settings', icon: Settings },
              { label: 'Help Center', icon: HelpCircle },
            ].map((item) => (
              <div key={item.label} className="sidebar-item" style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--text-tertiary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                cursor: 'pointer'
              }}>
                <item.icon size={14} />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ background: '#f8fafc', display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* Subtle background decoration */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.03), transparent)',
            pointerEvents: 'none'
          }} />

          {/* Stats Grid */}
          <div className="stats-grid" style={{
            padding: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}>
            {[
              { icon: FileText, value: '24', label: 'Total Posts', subtitle: '12 drafts · 12 published', badge: '12 published', badgeColor: '#ecfdf5', badgeText: '#059669', color: '#10b981' },
              { icon: Eye, value: '127K', label: 'Impressions', subtitle: 'Last 28 days', badge: '+23.4%', badgeColor: '#ecfdf5', badgeText: '#059669', trend: true, color: '#6366f1' },
              { icon: MousePointer, value: '3.2K', label: 'Clicks', subtitle: 'Last 28 days', badge: '+18.2%', badgeColor: '#ecfdf5', badgeText: '#059669', trend: true, color: '#8b5cf6' },
              { icon: Target, value: '15', label: 'Content Gaps', subtitle: 'Awaiting Action', badge: 'High Priority', badgeColor: '#fffbeb', badgeText: '#b45309', color: '#f59e0b' },
            ].map((stat, i) => (
              <div key={i} className="stat-card-preview" style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: '0 2px 8px -1px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: `${stat.color}10`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color
                  }}>
                    <stat.icon size={16} />
                  </div>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    background: stat.badgeColor,
                    color: stat.badgeText,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {stat.trend && <TrendingUp size={11} />}
                    {stat.badge}
                  </span>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }} className="stat-value">{stat.value}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{stat.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: 1.4 }}>{stat.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Content Opportunities */}
          <div className="card-section" style={{ padding: '0 1.5rem 0.75rem 1.5rem' }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.05)',
              padding: '1.5rem',
              boxShadow: '0 8px 24px -10px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '2px', letterSpacing: '-0.01em' }}>Content Opportunities</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>High-impact keywords with untapped potential</p>
                </div>
                <button style={{ background: 'transparent', border: 'none', color: 'var(--primary-600)', fontSize: '0.8125rem', fontWeight: 600, cursor: 'pointer' }}>View All</button>
              </div>
              <div style={{ borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div className="table-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  background: '#f8fafc',
                  padding: '0.75rem 1rem',
                  borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                  {['Keyword', 'Impressions', 'Avg. Position', 'Priority'].map((head) => (
                    <div key={head} style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left' }}>{head}</div>
                  ))}
                </div>
                {[
                  { keyword: 'best seo tools 2026', impressions: '12,482', position: '8.2', priority: 'High', color: '#ef4444' },
                  { keyword: 'content optimization guide', impressions: '8,291', position: '12.1', priority: 'High', color: '#ef4444' },
                  { keyword: 'ai content writing tips', impressions: '6,102', position: '15.3', priority: 'Medium', color: '#f59e0b' },
                ].map((row, i) => (
                  <div key={i} className="table-row-preview table-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    padding: '0.875rem 1rem',
                    borderBottom: i === 2 ? 'none' : '1px solid rgba(0,0,0,0.03)',
                    alignItems: 'center',
                    background: 'white'
                  }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', textAlign: 'left' }}>{row.keyword}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{row.impressions}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{row.position}</div>
                    <div className="action-col">
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: row.color,
                        background: `${row.color}10`,
                        border: `1px solid ${row.color}20`
                      }}>
                        {row.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decay Alerts */}
          <div className="card-section" style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.05)',
              padding: '1.5rem',
              boxShadow: '0 8px 24px -10px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '2px', letterSpacing: '-0.01em' }}>Traffic Decay Alerts</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Identifying and fixing performance drops</p>
                </div>
              </div>
              <div style={{ borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div className="table-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  background: '#f8fafc',
                  padding: '0.75rem 1rem',
                  borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}>
                  {['Page Path', 'Traffic Drop', 'Severity', 'Action'].map((head) => (head === 'Severity' || head === 'Action') ? (
                    <div key={head} style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left' }}>{head}</div>
                  ) : head === 'Traffic Drop' ? (
                    <div key={head} style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left' }}>DROP</div>
                  ) : (
                    <div key={head} style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left' }}>PAGE</div>
                  ))}
                </div>
                {[
                  { page: '/blog/seo-guide...', drop: '-42%', severity: 'Critical', color: '#ef4444' },
                  { page: '/features/opt...', drop: '-28%', severity: 'High', color: '#f97316' },
                ].map((row, i) => (
                  <div key={i} className="table-row-preview table-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    padding: '0.875rem 1rem',
                    borderBottom: i === 1 ? 'none' : '1px solid rgba(0,0,0,0.03)',
                    alignItems: 'center',
                    background: 'white'
                  }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', textAlign: 'left' }}>{row.page}</div>
                    <div style={{ fontSize: '0.8125rem', color: '#ef4444', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <TrendingDown size={14} />
                      {row.drop}
                    </div>
                    <div>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '6px',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        color: row.color,
                        background: `${row.color}10`,
                      }}>
                        {row.severity}
                      </span>
                    </div>
                    <div className="action-col">
                      <button className="fix-btn-preview" style={{
                        fontSize: '0.75rem',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(79, 70, 229, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        Fix <Sparkles size={11} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}