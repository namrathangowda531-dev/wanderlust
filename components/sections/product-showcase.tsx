'use client';

import { Check, Zap, Code2, Database, GitBranch } from 'lucide-react';

export function ProductShowcase() {
  return (
    <section id="product" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Feature row 1 */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-primary" />
              Real-time analytics
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              See your business as it happens
            </h2>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">
              Lumina streams data in real time, so your dashboards always show
              the latest numbers. No refresh buttons, no stale reports.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Sub-second data latency across all metrics',
                'Customizable widgets with drag-and-drop builder',
                'Shareable dashboard links for stakeholders',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-success/10">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-emerald-400/20 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover">
              <div className="border-b border-border bg-secondary/50 px-5 py-3 text-sm font-semibold">
                Live Dashboard
              </div>
              <div className="p-5">
                {/* Live indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  <span className="text-xs font-medium text-success">Live</span>
                  <span className="text-xs text-muted-foreground">Updated 2s ago</span>
                </div>

                {/* Mini metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Revenue', value: '$48,290', trend: '+12.5%', bars: [40, 60, 45, 80, 65, 90] },
                    { label: 'Orders', value: '1,847', trend: '+8.2%', bars: [30, 50, 70, 55, 85, 75] },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-border bg-background p-4">
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                      <div className="mt-1 text-xl font-bold">{m.value}</div>
                      <div className="text-xs font-medium text-success">{m.trend}</div>
                      <div className="mt-3 flex h-12 items-end gap-1">
                        {m.bars.map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-primary"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="mt-3 rounded-xl border border-border bg-background p-4">
                  <div className="mb-3 text-xs font-medium text-muted-foreground">Live Activity</div>
                  <div className="space-y-2.5">
                    {[
                      { text: 'New order from Acme Corp', time: 'just now' },
                      { text: 'Payment received — $1,290', time: '12s ago' },
                      { text: 'New signup from referral', time: '34s ago' },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="text-xs">{a.text}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature row 2 — reversed */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          {/* Visual first on desktop */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-bl from-emerald-400/20 to-cyan-400/20 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-5 py-3">
                <Code2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Query Builder</span>
              </div>
              <div className="p-5 font-mono text-sm">
                <div className="rounded-lg bg-background p-4">
                  <div className="text-muted-foreground">
                    <span className="text-primary">SELECT</span> revenue, channel
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">FROM</span> transactions
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">WHERE</span> created_at {'>='}{' '}
                    <span className="text-emerald-500">'2025-01-01'</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">GROUP BY</span> channel
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded bg-success/10 px-1.5 py-0.5 text-success">200 OK</span>
                    <span>1.2ms</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  {[
                    { channel: 'Organic', revenue: '$21,450', pct: '45%' },
                    { channel: 'Referral', revenue: '$14,300', pct: '30%' },
                    { channel: 'Social', revenue: '$11,920', pct: '25%' },
                  ].map((r) => (
                    <div key={r.channel} className="flex items-center justify-between rounded-lg bg-background px-3 py-2">
                      <span className="text-xs">{r.channel}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold">{r.revenue}</span>
                        <span className="text-xs text-muted-foreground">{r.pct}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <Database className="h-3.5 w-3.5 text-emerald-500" />
              SQL or natural language
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Query your data without writing SQL
            </h2>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">
              Ask questions in plain English and Lumina translates them into
              optimized queries. Or drop into the SQL editor for full control.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Natural language to SQL with AI assistance',
                'Version-controlled query history and branching',
                'Schedule queries as recurring reports',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-success/10">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <GitBranch className="h-4 w-4 text-primary" />
              <span>Trusted by data teams at 150,000+ companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
