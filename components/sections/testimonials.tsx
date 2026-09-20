'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Lumina replaced three tools and a full-time analyst. Our team makes decisions in hours what used to take weeks.',
    name: 'Sarah Chen',
    role: 'VP of Growth',
    company: 'Acme Corp',
    initials: 'SC',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    quote:
      'The AI forecasts are scary accurate. We hit our Q3 revenue target within 2% of what Lumina predicted.',
    name: 'Marcus Rodriguez',
    role: 'Head of Finance',
    company: 'Globex',
    initials: 'MR',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    quote:
      'I have used every analytics tool on the market. Lumina is the first one my whole team actually enjoys opening.',
    name: 'Priya Patel',
    role: 'Chief Data Officer',
    company: 'Stark Industries',
    initials: 'PP',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    quote:
      'Setup took 15 minutes. We connected Stripe and Salesforce and had dashboards running before lunch.',
    name: 'James Wilson',
    role: 'COO',
    company: 'Wayne Enterprises',
    initials: 'JW',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    quote:
      'The real-time alerts caught a billing anomaly that saved us $40k in the first month alone.',
    name: 'Elena Volkov',
    role: 'VP of Operations',
    company: 'Umbrella',
    initials: 'EV',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    quote:
      'Our investors love the dashboards. We share a link before every board meeting and skip the slide deck entirely.',
    name: 'David Kim',
    role: 'Founder & CEO',
    company: 'Cyberdyne',
    initials: 'DK',
    gradient: 'from-cyan-500 to-sky-500',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Loved by data-driven teams{' '}
            <span className="gradient-text">everywhere</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Join 150,000+ teams who trust Lumina to power their most important
            decisions.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Quote icon */}
              <div className="mb-4 flex items-center justify-between">
                <Quote className="h-8 w-8 text-primary/20" />
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
