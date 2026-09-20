import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wanderlust — AI Travel Planner for India & the World',
  description:
    'Plan your perfect trip with AI. From Jaipur to Japan, Goa to Geneva — enter your destination, budget in rupees, and preferences. Get a complete day-by-day itinerary with places, restaurants, activities, and costs in INR and local currency.',
  openGraph: {
    title: 'Wanderlust — AI Travel Planner for India & the World',
    description: 'Your trip, intelligently planned. Prices in rupees and local currency.',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: 'https://bolt.new/static/og_default.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
