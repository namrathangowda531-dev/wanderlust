'use client';

import { useState } from 'react';
import {
  MapPin,
  Calendar,
  Sparkles,
  Loader2,
  Compass,
  Mountain,
  Trees,
  UtensilsCrossed,
  ShoppingBag,
  Landmark,
  Sofa,
  Users,
  Church,
  Wallet,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  generateTrip,
  popularDestinations,
  indianDestinations,
  foreignDestinations,
  formatPriceINR,
  type TripPreferences,
  type TravelStyle,
  type TripInput,
} from '@/lib/trip-generator';
import type { Itinerary } from '@/lib/supabase';

const allPreferences: { value: TripPreferences; label: string; icon: typeof Mountain }[] = [
  { value: 'adventure', label: 'Adventure', icon: Mountain },
  { value: 'nature', label: 'Nature', icon: Trees },
  { value: 'food', label: 'Food', icon: UtensilsCrossed },
  { value: 'shopping', label: 'Shopping', icon: ShoppingBag },
  { value: 'culture', label: 'Culture', icon: Landmark },
  { value: 'relaxation', label: 'Relaxation', icon: Sofa },
  { value: 'spiritual', label: 'Spiritual', icon: Church },
  { value: 'family', label: 'Family', icon: Users },
];

const travelStyles: { value: TravelStyle; label: string; description: string }[] = [
  { value: 'budget', label: 'Budget', description: 'Save on costs' },
  { value: 'balanced', label: 'Balanced', description: 'Best value' },
  { value: 'luxury', label: 'Luxury', description: 'Premium experience' },
];

export type GeneratedTrip = {
  itinerary: Itinerary;
  summary: string;
  estimatedTotalCost: number;
  input: TripInput;
};

export function PlannerForm({
  onGenerated,
}: {
  onGenerated: (trip: GeneratedTrip) => void;
}) {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState(50000);
  const [days, setDays] = useState(5);
  const [preferences, setPreferences] = useState<TripPreferences[]>(['culture', 'food']);
  const [travelStyle, setTravelStyle] = useState<TravelStyle>('balanced');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeTab, setActiveTab] = useState<'india' | 'world'>('india');

  const togglePreference = (pref: TripPreferences) => {
    setPreferences((prev) =>
      prev.includes(pref)
        ? prev.filter((p) => p !== pref)
        : [...prev, pref]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));

    const input: TripInput = {
      destination: destination.trim(),
      budget,
      days,
      preferences,
      travelStyle,
    };

    const result = generateTrip(input);
    onGenerated({ ...result, input });
    setLoading(false);
  };

  const currentList = activeTab === 'india' ? indianDestinations : foreignDestinations;
  const filteredDestinations = currentList.filter((d) =>
    d.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <div id="planner" className="relative scroll-mt-24">
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-teal-500/10 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-hover">
        {/* Header */}
        <div className="border-b border-border bg-gradient-to-r from-primary/5 via-accent/5 to-teal-500/5 px-6 py-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-glow">
              <Sparkles className="h-4.5 w-4.5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold">Plan Your Trip</h2>
              <p className="text-sm text-muted-foreground">
                Tell us where you want to go — AI handles the rest
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Destination */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-sm font-semibold">
              <MapPin className="h-4 w-4 text-primary" />
              Destination
            </label>

            {/* India / World tabs */}
            <div className="mb-2 inline-flex rounded-lg border border-border bg-secondary p-1">
              <button
                type="button"
                onClick={() => { setActiveTab('india'); setShowSuggestions(true); }}
                className={cn(
                  'rounded-md px-4 py-1.5 text-sm font-medium transition-all',
                  activeTab === 'india'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                India
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab('world'); setShowSuggestions(true); }}
                className={cn(
                  'rounded-md px-4 py-1.5 text-sm font-medium transition-all',
                  activeTab === 'world'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                International
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder={activeTab === 'india' ? 'e.g. Jaipur, Goa, Kerala...' : 'e.g. Dubai, Singapore, Paris...'}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
              {showSuggestions && filteredDestinations.length > 0 && (
                <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-xl border border-border bg-card shadow-card-hover scrollbar-hide">
                  {filteredDestinations.slice(0, 8).map((dest) => (
                    <button
                      key={dest}
                      type="button"
                      onClick={() => {
                        setDestination(dest);
                        setShowSuggestions(false);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary"
                    >
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                      {dest}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {currentList.slice(0, 6).map((dest) => (
                <button
                  key={dest}
                  type="button"
                  onClick={() => setDestination(dest)}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                >
                  {dest.split(',')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Budget & Days */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-sm font-semibold">
                <Wallet className="h-4 w-4 text-emerald-600" />
                Budget: <span className="text-primary">{formatPriceINR(budget)}</span>
              </label>
              <input
                type="range"
                min="5000"
                max="300000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatPriceINR(5000)}</span>
                <span>{formatPriceINR(300000)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-1.5 text-sm font-semibold">
                <Calendar className="h-4 w-4 text-accent" />
                Duration: <span className="text-primary">{days} {days === 1 ? 'day' : 'days'}</span>
              </label>
              <input
                type="range"
                min="1"
                max="14"
                step="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 day</span>
                <span>14 days</span>
              </div>
            </div>
          </div>

          {/* Travel Style */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Travel Style</label>
            <div className="grid grid-cols-3 gap-2.5">
              {travelStyles.map((style) => (
                <button
                  key={style.value}
                  type="button"
                  onClick={() => setTravelStyle(style.value)}
                  className={cn(
                    'rounded-xl border p-3 text-center transition-all',
                    travelStyle === style.value
                      ? 'border-primary bg-primary/5 shadow-glow'
                      : 'border-border bg-background hover:border-primary/30'
                  )}
                >
                  <div className="text-sm font-semibold">{style.label}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{style.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Preferences</label>
            <p className="text-xs text-muted-foreground">Select what interests you most</p>
            <div className="flex flex-wrap gap-2">
              {allPreferences.map((pref) => {
                const active = preferences.includes(pref.value);
                return (
                  <button
                    key={pref.value}
                    type="button"
                    onClick={() => togglePreference(pref.value)}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all',
                      active
                        ? 'border-primary bg-primary text-primary-foreground shadow-glow'
                        : 'border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground'
                    )}
                  >
                    <pref.icon className="h-3.5 w-3.5" />
                    {pref.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !destination.trim()}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Generating your itinerary...
              </>
            ) : (
              <>
                <Compass className="h-5 w-5 transition-transform group-hover:rotate-180" />
                Generate My Trip
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
