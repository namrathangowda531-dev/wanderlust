'use client';

import { useState } from 'react';
import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Footer } from '@/components/sections/footer';
import { PlannerForm, type GeneratedTrip } from '@/components/sections/planner-form';
import { ItineraryView } from '@/components/sections/itinerary-view';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const [trip, setTrip] = useState<GeneratedTrip | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Planner section */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <PlannerForm onGenerated={setTrip} />
        </div>
      </section>

      {/* Generated itinerary */}
      {trip && (
        <section className="relative py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="font-display text-2xl font-bold">Your Itinerary</h2>
            </div>
            <ItineraryView trip={trip} />
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              How it works
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Three steps to your{' '}
              <span className="gradient-text">perfect trip</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                num: '01',
                title: 'Choose your destination',
                description: 'Pick from 20+ Indian cities or 15+ international destinations. From Jaipur to Japan, we\u2019ve got you covered.',
              },
              {
                num: '02',
                title: 'Set your preferences',
                description: 'Tell us your budget in rupees, trip duration, and what you love \u2014 adventure, food, culture, spiritual, relaxation, and more.',
              },
              {
                num: '03',
                title: 'Get your itinerary',
                description: 'AI generates a complete day-by-day plan with places, restaurants, activities, and costs in \u20b9 and local currency. Save it for later.',
              },
            ].map((step) => (
              <div key={step.num} className="relative rounded-2xl border border-border bg-card p-8 shadow-card">
                <span className="font-display text-6xl font-bold text-primary/10">{step.num}</span>
                <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="#planner"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105"
            >
              Start planning now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </main>
  );
}
