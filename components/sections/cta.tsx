'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-emerald-600 px-8 py-16 text-center md:px-16 md:py-24">
          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

          {/* Floating shapes */}
          <div className="pointer-events-none absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-float" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float animation-delay-2000" />

          <div className="relative">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              14-day free trial
            </div>

            <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight text-white text-balance md:text-6xl">
              Ready to see your data in a new light?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80 text-pretty">
              Join 150,000+ teams using Lumina to make smarter, faster decisions.
              Get started in minutes — no credit card required.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-primary shadow-lg transition-all hover:scale-105 sm:w-auto"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/20 sm:w-auto"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
