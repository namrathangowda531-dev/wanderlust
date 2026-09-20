'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { TripCard } from '@/components/sections/trip-card';
import { supabase, type Trip } from '@/lib/supabase';
import { Compass, Loader2, Plus, Heart } from 'lucide-react';

export default function TripsPage() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTrips() {
      try {
        const { data, error } = await supabase
          .from('trips')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setTrips((data as Trip[]) || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load trips');
      } finally {
        setLoading(false);
      }
    }
    fetchTrips();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <Heart className="h-3.5 w-3.5 text-primary" />
              Saved Trips
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              My Trips
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Your saved itineraries, ready for your next adventure.
            </p>
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">Loading your trips...</p>
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          ) : trips.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function EmptyState() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center md:p-20">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-20" />
      <div className="relative">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <Compass className="h-8 w-8 text-primary" />
        </div>
        <h2 className="font-display text-2xl font-bold">No saved trips yet</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Plan a trip and save it to see it here. Your itineraries will be ready
          whenever you need them.
        </p>
        <Link
          href="/#planner"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105"
        >
          <Plus className="h-4 w-4" />
          Plan your first trip
        </Link>
      </div>
    </div>
  );
}
