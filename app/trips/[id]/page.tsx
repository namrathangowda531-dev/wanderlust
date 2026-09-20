'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { supabase, type Trip, type Itinerary as ItineraryType } from '@/lib/supabase';
import {
  formatPriceINR,
  formatPriceLocal,
  getDestinationCurrency,
  isIndianDestination,
} from '@/lib/trip-generator';
import {
  ArrowLeft,
  Loader2,
  MapPin,
  Calendar,
  Wallet,
  Clock,
  Compass,
  Landmark,
  UtensilsCrossed,
  Coffee,
  Mountain,
  Hotel,
  Car,
  Trash2,
  TrendingUp,
  Check,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const itemTypeConfig = {
  place: { icon: Landmark, color: 'text-orange-600', bg: 'bg-orange-500/10', label: 'Place' },
  restaurant: { icon: UtensilsCrossed, color: 'text-rose-600', bg: 'bg-rose-500/10', label: 'Restaurant' },
  cafe: { icon: Coffee, color: 'text-amber-700', bg: 'bg-amber-500/10', label: 'Cafe' },
  activity: { icon: Mountain, color: 'text-teal-600', bg: 'bg-teal-500/10', label: 'Activity' },
  hotel: { icon: Hotel, color: 'text-indigo-600', bg: 'bg-indigo-500/10', label: 'Hotel' },
  travel: { icon: Car, color: 'text-cyan-600', bg: 'bg-cyan-500/10', label: 'Travel' },
};

export default function TripDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1]));

  useEffect(() => {
    async function fetchTrip() {
      try {
        const { data, error } = await supabase
          .from('trips')
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (error) throw error;
        if (!data) {
          setError('Trip not found');
          return;
        }
        setTrip(data as Trip);
        setExpandedDays(new Set([1]));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load trip');
      } finally {
        setLoading(false);
      }
    }
    fetchTrip();
  }, [id]);

  const handleDelete = async () => {
    if (!trip) return;
    setDeleting(true);
    try {
      const { error } = await supabase.from('trips').delete().eq('id', trip.id);
      if (error) throw error;
      router.push('/trips');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete trip');
      setDeleting(false);
    }
  };

  const toggleDay = (day: number) => {
    setExpandedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-4 text-sm text-muted-foreground">Loading your trip...</p>
        </div>
      </main>
    );
  }

  if (error || !trip) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-2xl px-6 pt-40">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">
            <p className="text-sm text-destructive">{error || 'Trip not found'}</p>
            <Link
              href="/trips"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to trips
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const itinerary = trip.itinerary as unknown as ItineraryType;
  const totalCost = trip.estimated_total_cost ?? 0;
  const withinBudget = totalCost <= trip.budget;
  const currencyCode = getDestinationCurrency(trip.destination);
  const isIndian = isIndianDestination(trip.destination);

  const formatItemCost = (item: ItineraryType[number]['items'][number]) => {
    if (item.cost_inr === 0) return 'Free';
    if (isIndian || item.local_currency === 'INR') return formatPriceINR(item.cost_inr);
    return `${formatPriceINR(item.cost_inr)} (${formatPriceLocal(item.cost_inr, item.local_currency)})`;
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          {/* Back link */}
          <Link
            href="/trips"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to trips
          </Link>

          {/* Trip header */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover">
            <div className="relative h-36 bg-india-gradient md:h-44">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-sm font-medium text-white/90">
                      <MapPin className="h-3.5 w-3.5" />
                      {trip.destination}
                    </div>
                    <h1 className="font-display text-2xl font-bold text-white md:text-3xl">
                      {trip.days}-Day {trip.travel_style.charAt(0).toUpperCase() + trip.travel_style.slice(1)} Trip
                    </h1>
                  </div>
                  <div className="hidden flex-col items-end gap-1 sm:flex">
                    <div className="rounded-lg bg-white/15 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
                      Est. {formatPriceINR(totalCost)}
                    </div>
                    <div className="text-xs text-white/70">
                      Budget: {formatPriceINR(trip.budget)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary bar */}
            <div className="flex flex-col gap-3 border-t border-border p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {trip.preferences && trip.preferences.length > 0 ? (
                  trip.preferences.map((pref) => (
                    <span
                      key={pref}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium capitalize text-muted-foreground"
                    >
                      {pref}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-muted-foreground">No specific preferences</span>
                )}
              </div>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-2.5 text-sm font-semibold text-destructive transition-all hover:scale-105 hover:bg-destructive/10 disabled:opacity-60"
              >
                {deleting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
                Delete Trip
              </button>
            </div>

            {/* Summary text */}
            {trip.summary && (
              <div className="border-t border-border bg-secondary/30 px-5 py-4">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{trip.summary}</p>
                </div>
              </div>
            )}
          </div>

          {/* Cost overview */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Total Cost', value: formatPriceINR(totalCost), sub: !isIndian ? formatPriceLocal(totalCost, currencyCode) : null, icon: Wallet, color: 'text-primary' },
              { label: 'Per Day', value: formatPriceINR(Math.round(totalCost / trip.days)), sub: !isIndian ? formatPriceLocal(Math.round(totalCost / trip.days), currencyCode) : null, icon: Calendar, color: 'text-accent' },
              { label: 'Budget', value: formatPriceINR(trip.budget), sub: null, icon: TrendingUp, color: 'text-teal-600' },
              {
                label: 'Status',
                value: withinBudget ? 'Within budget' : 'Over budget',
                sub: null,
                icon: withinBudget ? Check : TrendingUp,
                color: withinBudget ? 'text-success' : 'text-destructive',
              },
            ].map((stat, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <stat.icon className={`h-3.5 w-3.5 ${stat.color}`} />
                  {stat.label}
                </div>
                <div className={`mt-1 text-base font-bold ${stat.color} sm:text-lg`}>{stat.value}</div>
                {stat.sub && (
                  <div className="mt-0.5 text-xs font-medium text-muted-foreground">{stat.sub}</div>
                )}
              </div>
            ))}
          </div>

          {/* Day tabs */}
          <div className="mt-6 overflow-x-auto scrollbar-hide">
            <div className="flex min-w-max gap-2 pb-1">
              {itinerary.map((day) => (
                <button
                  key={day.day}
                  onClick={() => {
                    setExpandedDays(new Set([day.day]));
                  }}
                  className={cn(
                    'rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all',
                    expandedDays.has(day.day)
                      ? 'border-primary bg-primary text-primary-foreground shadow-glow'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground'
                  )}
                >
                  Day {day.day}
                </button>
              ))}
            </div>
          </div>

          {/* Day cards */}
          <div className="mt-5 space-y-4">
            {itinerary
              .filter((d) => expandedDays.has(d.day))
              .map((day) => (
                <DayDetailCard key={day.day} day={day} expanded={expandedDays.has(day.day)} onToggle={() => toggleDay(day.day)} formatItemCost={formatItemCost} />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function DayDetailCard({
  day,
  expanded,
  onToggle,
  formatItemCost,
}: {
  day: ItineraryType[number];
  expanded: boolean;
  onToggle: () => void;
  formatItemCost: (item: ItineraryType[number]['items'][number]) => string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-secondary/30"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-bold text-primary">
            {day.day}
          </div>
          <div>
            <div className="font-display text-base font-bold">Day {day.day}</div>
            <div className="text-sm text-muted-foreground">{day.theme}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <div className="text-xs text-muted-foreground">Daily cost</div>
            <div className="text-sm font-bold text-primary">{formatPriceINR(day.daily_cost)}</div>
          </div>
          <Compass className={cn('h-5 w-5 text-muted-foreground transition-transform', expanded && 'rotate-90')} />
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border">
          <div className="relative p-5">
            <div className="absolute left-[2.35rem] top-5 bottom-5 w-px bg-border" />
            <div className="space-y-5">
              {day.items.map((item, i) => {
                const config = itemTypeConfig[item.type];
                return (
                  <div key={i} className="relative flex gap-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-16 text-right text-xs font-semibold text-muted-foreground">
                        {item.time}
                      </div>
                      <div className={cn('flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-background', config.bg)}>
                        <config.icon className={cn('h-4 w-4', config.color)} />
                      </div>
                    </div>
                    <div className="flex-1 pb-1">
                      <div className="rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/20 hover:shadow-card">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', config.bg, config.color)}>
                            {config.label}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.duration}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {item.location}
                          </span>
                          {item.cost_inr > 0 && (
                            <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                              <Wallet className="h-3 w-3 text-primary" />
                              {formatItemCost(item)}
                            </span>
                          )}
                          {item.cost_inr === 0 && (
                            <span className="inline-flex items-center gap-1 font-semibold text-success">
                              Free
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-border bg-secondary/30 px-5 py-3">
            <span className="text-sm text-muted-foreground">Total for Day {day.day}</span>
            <span className="font-display text-base font-bold text-primary">{formatPriceINR(day.daily_cost)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
