import { FileText, Eye, MousePointer, Target, TrendingUp, TrendingDown, AlertTriangle, BarChart3, Sparkles, Settings, HelpCircle } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '1000px',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)',
      padding: '0.5rem',
      position: 'relative'
    }}>
      <style jsx>{`
        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
          .sidebar {
            display: none !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .table-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
          .table-grid .action-col {
            display: none !important;
          }
          .stat-card {
            padding: 0.75rem !important;
          }
          .stat-value {
            font-size: 1.25rem !important;
          }
          .card-section {
            padding: 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .table-grid {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
      {/* Window Controls */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
        {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
          <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
        ))}
      </div>

      {/* Dashboard Content with Sidebar */}
      <div className="dashboard-grid" style={{
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: 0,
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        fontFamily: 'Inter, sans-serif',
        minHeight: '650px'
      }}>
        {/* Sidebar */}
        <div className="sidebar" style={{
          background: 'var(--bg-secondary)',
          borderRight: '1px solid var(--border-light)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            padding: '0.875rem',
            marginBottom: '1.25rem',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.8)',
            border: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--primary-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--primary-700)',
              flexShrink: 0
            }}>
              JD
            </div>
            <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>John Doe</div>
              <div style={{ fontSize: '0.6875rem', color: 'var(--text-tertiary)' }}>support@seoscribes.com</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: 'auto' }}>
            {[
              { label: 'Dashboard', icon: BarChart3, active: true },
              { label: 'Content Gaps', icon: Target, active: false },
              { label: 'Decay Alerts', icon: AlertTriangle, active: false },
              { label: 'AI Generate', icon: Sparkles, active: false }
            ].map((item) => (
              <div key={item.label} style={{
                padding: '0.625rem 0.875rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: item.active ? 600 : 500,
                color: item.active ? 'var(--primary-700)' : 'var(--text-secondary)',
                background: item.active ? 'white' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                boxShadow: item.active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s'
              }}>
                <item.icon size={16} strokeWidth={item.active ? 2.5 : 2} />
                {item.label}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
            {[
              { label: 'Settings', icon: Settings },
              { label: 'Help', icon: HelpCircle },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
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
        <div style={{ background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column' }}>
          {/* Stats Grid */}
          <div className="stats-grid" style={{
            padding: '1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            background: 'var(--bg-secondary)'
          }}>
            {[
              { icon: FileText, value: '24', label: 'Total Posts', subtitle: '12 drafts · 12 published', badge: '12 published', badgeColor: 'var(--success-light)', badgeText: '#059669' },
              { icon: Eye, value: '127K', label: 'Impressions', subtitle: 'From all connected sites (last 28 days)', badge: '+23.4%', badgeColor: 'var(--success-light)', badgeText: '#059669', trend: true },
              { icon: MousePointer, value: '3.2K', label: 'Clicks', subtitle: 'From all connected sites (last 28 days)', badge: '+18.2%', badgeColor: 'var(--success-light)', badgeText: '#059669', trend: true },
              { icon: Target, value: '15', label: 'Content Gaps', subtitle: 'Keywords needing optimization', badge: '8 high priority', badgeColor: 'var(--warning-light)', badgeText: '#b45309' },
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{
                background: 'white',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--primary-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-600)'
                  }}>
                    <stat.icon size={14} />
                  </div>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '999px',
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
                <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '4px', letterSpacing: '-0.01em', color: 'var(--text-primary)' }} className="stat-value">{stat.value}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{stat.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', marginTop: '8px', lineHeight: 1.4 }}>{stat.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Content Opportunities */}
          <div className="card-section" style={{ padding: '0 1.5rem 0.75rem 1.5rem', background: 'var(--bg-secondary)' }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.06)',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '2px' }}>Content Opportunities</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>High-impression keywords needing optimization</p>
                </div>
              </div>
              <div style={{ borderRadius: '8px', border: '1px solid var(--border-light)', overflow: 'hidden' }}>
                <div className="table-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'var(--bg-secondary)', padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em', textAlign: 'left' }}>KEYWORD</div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>IMPRESSIONS</div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>POSITION</div>
                  <div className="action-col" style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>PRIORITY</div>
                </div>
                {[
                  { keyword: 'best seo tools 2026', impressions: '12.5K', position: '8.2', priority: 'High' },
                  { keyword: 'content optimization guide', impressions: '8.3K', position: '12.1', priority: 'High' },
                  { keyword: 'ai content writing', impressions: '6.1K', position: '15.3', priority: 'Medium' },
                ].map((row, i) => (
                  <div key={i} className="table-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '0.75rem', borderBottom: i === 2 ? 'none' : '1px solid var(--border-light)', alignItems: 'center', background: 'white' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 500, textAlign: 'left' }}>{row.keyword}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{row.impressions}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{row.position}</div>
                    <div className="action-col">
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '999px',
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        color: row.priority === 'High' ? 'var(--warning-700)' : 'var(--text-secondary)',
                        background: row.priority === 'High' ? 'var(--warning-light)' : 'var(--bg-secondary)'
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
          <div className="card-section" style={{ padding: '0 1.5rem 1.5rem 1.5rem', background: 'var(--bg-secondary)' }}>
            <div style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid rgba(0,0,0,0.06)',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '2px' }}>Traffic Decay Alerts</h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pages losing rankings and traffic</p>
                </div>
              </div>
              <div style={{ borderRadius: '8px', border: '1px solid var(--border-light)', overflow: 'hidden' }}>
                <div className="table-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'var(--bg-secondary)', padding: '0.5rem 0.75rem', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em', textAlign: 'left' }}>PAGE</div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>TRAFFIC DROP</div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>SEVERITY</div>
                  <div className="action-col" style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>ACTION</div>
                </div>
                {[
                  { page: '/blog/seo-guide-2026', drop: '-42%', severity: 'Critical' },
                  { page: '/features/content-optimization', drop: '-28%', severity: 'High' },
                ].map((row, i) => (
                  <div key={i} className="table-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '0.75rem', borderBottom: i === 1 ? 'none' : '1px solid var(--border-light)', alignItems: 'center', background: 'white' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 500, textAlign: 'left' }}>{row.page}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--error)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <TrendingDown size={11} />
                      {row.drop}
                    </div>
                    <div>
                      <span style={{
                        padding: '2px 8px',
                        borderRadius: '999px',
                        fontSize: '0.6875rem',
                        fontWeight: 500,
                        color: row.severity === 'Critical' ? 'var(--error)' : 'var(--warning-700)',
                        background: row.severity === 'Critical' ? 'var(--error-light)' : 'var(--warning-light)'
                      }}>
                        {row.severity}
                      </span>
                    </div>
                    <div className="action-col">
                      <button style={{
                        fontSize: '0.75rem',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'var(--primary-600)',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 600,
                        boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)'
                      }}>Fix Now</button>
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