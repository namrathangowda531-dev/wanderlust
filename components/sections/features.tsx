'use client';

import {
  Brain,
  Wallet,
  Calendar,
  Utensils,
  MapPin,
  Heart,
  Sparkles,
  RefreshCw,
  Globe,
  Church,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-powered planning',
    description: 'Generates personalized itineraries based on your destination, duration, and preferences in seconds.',
    color: 'text-primary',
    bg: 'from-primary/10 to-orange-500/10',
  },
  {
    icon: Wallet,
    title: 'Dual currency pricing',
    description: 'See all costs in Indian Rupees and local currency — dollars, yen, dirham, baht, and more.',
    color: 'text-teal-600',
    bg: 'from-teal-500/10 to-emerald-500/10',
  },
  {
    icon: Globe,
    title: 'India & world destinations',
    description: 'From Jaipur to Japan, Goa to Geneva — 35+ destinations with local landmarks and restaurants.',
    color: 'text-accent',
    bg: 'from-amber-500/10 to-orange-500/10',
  },
  {
    icon: Utensils,
    title: 'Smart food recommendations',
    description: 'Suggests restaurants and cafes based on your destination and travel style for every meal.',
    color: 'text-rose-600',
    bg: 'from-rose-500/10 to-red-500/10',
  },
  {
    icon: MapPin,
    title: 'Places & activities',
    description: 'Recommends landmarks, temples, museums, parks, and experiences tailored to your interests.',
    color: 'text-indigo-600',
    bg: 'from-indigo-500/10 to-violet-500/10',
  },
  {
    icon: Church,
    title: 'Spiritual & heritage trips',
    description: 'Special itineraries for Varanasi, Rishikesh, Tirupati, Shirdi, Amritsar and more sacred sites.',
    color: 'text-amber-700',
    bg: 'from-amber-600/10 to-yellow-500/10',
  },
  {
    icon: Heart,
    title: 'Save & manage trips',
    description: 'Save your favorite itineraries and access them later instead of planning from scratch.',
    color: 'text-cyan-600',
    bg: 'from-cyan-500/10 to-sky-500/10',
  },
  {
    icon: RefreshCw,
    title: 'Regenerate & customize',
    description: 'Don\u2019t like the plan? Change your preferences and generate a completely different itinerary.',
    color: 'text-emerald-600',
    bg: 'from-emerald-500/10 to-teal-500/10',
  },
];

export function Features() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Features
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Everything you need to{' '}
            <span className="gradient-text">plan the perfect trip</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-pretty">
            From the ghats of Varanasi to the beaches of Bali, Wanderlust turns
            travel planning from hours of research into seconds of delight.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-transform group-hover:scale-110">
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
