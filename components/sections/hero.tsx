'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, MapPin, Calendar, Wallet } from 'lucide-react';
import { popularDestinations, indianDestinations, foreignDestinations } from '@/lib/trip-generator';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute right-1/4 top-20 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-teal-500/15 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium shadow-card backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">AI-powered trip planning in seconds</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-[5rem]">
            Your trip,
            <br />
            <span className="gradient-text">intelligently planned</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            From the Taj Mahal to the Swiss Alps — enter your destination, budget,
            and preferences. Get a complete day-by-day itinerary with places to
            visit, restaurants, activities, and estimated costs in rupees and
            local currency.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#planner"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-lg sm:w-auto"
            >
              Plan my trip
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/trips"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-all hover:scale-105 hover:border-primary/40 sm:w-auto"
            >
              View saved trips
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { icon: MapPin, label: '35+ destinations' },
              { icon: Calendar, label: 'Up to 14 days' },
              { icon: Wallet, label: 'Budget in \u20b9' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <stat.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular destinations - India */}
        <div className="mt-16">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-primary">
            Popular in India
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {indianDestinations.slice(0, 12).map((dest) => (
              <Link
                key={dest}
                href={`/#planner`}
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur transition-all hover:border-primary/40 hover:text-foreground hover:shadow-card"
              >
                {dest.split(',')[0]}
              </Link>
            ))}
          </div>
        </div>

        {/* Popular destinations - International */}
        <div className="mt-8">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-teal-600">
            International Destinations
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {foreignDestinations.map((dest) => (
              <Link
                key={dest}
                href={`/#planner`}
                className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur transition-all hover:border-teal-500/40 hover:text-foreground hover:shadow-card"
              >
                {dest.split(',')[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
