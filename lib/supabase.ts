import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false },
});

export type CurrencyInfo = {
  code: string;
  symbol: string;
  name: string;
  rateFromINR: number;
};

export type Trip = {
  id: string;
  destination: string;
  budget: number;
  days: number;
  preferences: string[];
  travel_style: string;
  itinerary: Itinerary;
  summary: string;
  estimated_total_cost: number;
  cover_image: string;
  created_at: string;
  updated_at: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  theme: string;
  items: ItineraryItem[];
  daily_cost: number;
};

export type ItineraryItem = {
  time: string;
  name: string;
  type: 'place' | 'restaurant' | 'cafe' | 'activity' | 'hotel' | 'travel';
  description: string;
  cost: number;
  cost_inr: number;
  local_currency: string;
  local_cost: number;
  duration: string;
  location: string;
};

export type Itinerary = ItineraryDay[];
