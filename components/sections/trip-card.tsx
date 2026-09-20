'use client';

import Link from 'next/link';
import { MapPin, Calendar, Wallet, Clock, ArrowRight } from 'lucide-react';
import type { Trip } from '@/lib/supabase';
import { formatPriceINR } from '@/lib/trip-generator';

export function TripCard({ trip }: { trip: Trip }) {
  const date = new Date(trip.created_at).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const gradientColors = [
    'from-primary to-accent',
    'from-teal-500 to-emerald-500',
    'from-accent to-rose-500',
    'from-indigo-500 to-cyan-500',
    'from-rose-500 to-orange-500',
  ];
  const gradient = gradientColors[trip.destination.length % gradientColors.length];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Cover */}
      <div className={`relative h-32 bg-india-gradient`}>
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-white/90">
              <MapPin className="h-3.5 w-3.5" />
              {trip.destination}
            </div>
          </div>
          <span className="rounded-lg bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
            {trip.days} {trip.days === 1 ? 'day' : 'days'}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Wallet className="h-3 w-3" />
            {formatPriceINR(trip.estimated_total_cost ?? 0)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {trip.summary}
        </p>

        {/* Preferences */}
        {trip.preferences && trip.preferences.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {trip.preferences.slice(0, 4).map((pref) => (
              <span
                key={pref}
                className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium capitalize text-muted-foreground"
              >
                {pref}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs font-medium capitalize text-muted-foreground">
            {trip.travel_style}
          </span>
          <Link
            href={`/trips/${trip.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
