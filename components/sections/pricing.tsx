'use client';

import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started with analytics.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      'Up to 5 team members',
      '10 dashboards',
      '100K events / month',
      '20 integrations',
      '7-day data retention',
      'Email support',
    ],
    cta: 'Start free trial',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need more power and flexibility.',
    monthlyPrice: 99,
    yearlyPrice: 82,
    features: [
      'Up to 25 team members',
      'Unlimited dashboards',
      '5M events / month',
      '100+ integrations',
      '1-year data retention',
      'AI-powered forecasts',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with advanced needs.',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Unlimited team members',
      'Unlimited dashboards',
      'Custom event volume',
      'Custom integrations',
      'Unlimited data retention',
      'SSO & SAML',
      'Dedicated success manager',
      '99.9% uptime SLA',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Pricing
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Simple, transparent{' '}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                !yearly ? 'bg-primary text-primary-foreground shadow-glow' : 'text-muted-foreground'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all',
                yearly ? 'bg-primary text-primary-foreground shadow-glow' : 'text-muted-foreground'
              )}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-success/10 px-1.5 py-0.5 text-xs text-success">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border bg-card p-8 transition-all duration-300',
                plan.highlighted
                  ? 'border-primary shadow-glow lg:scale-105'
                  : 'border-border shadow-card hover:-translate-y-1 hover:shadow-card-hover'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most popular
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mt-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span className="font-display text-5xl font-bold tracking-tight">
                      ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="mb-2 text-sm text-muted-foreground">/mo</span>
                  </div>
                ) : (
                  <div className="font-display text-5xl font-bold tracking-tight">
                    Custom
                  </div>
                )}
                {plan.monthlyPrice !== null && yearly && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Billed annually
                  </p>
                )}
              </div>

              {/* CTA */}
              <a
                href="#"
                className={cn(
                  'mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all hover:scale-105',
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'border border-border bg-background hover:border-primary/40'
                )}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="mt-8 space-y-3.5 border-t border-border pt-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-success/10">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
