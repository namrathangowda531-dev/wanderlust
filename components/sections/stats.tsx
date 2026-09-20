'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2.4, suffix: 'B+', label: 'Data points processed daily' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA' },
  { value: 150, suffix: 'K+', label: 'Teams using Lumina' },
  { value: 4.9, suffix: '/5', label: 'Average customer rating' },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

export function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-card to-emerald-500/5 p-10 md:p-16">
          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} visible={visible} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  visible,
  index,
}: {
  stat: { value: number; suffix: string; label: string };
  visible: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 2000, visible);
  const displayValue = stat.value < 10 ? count.toFixed(1) : Math.round(count).toString();

  return (
    <div
      className="text-center"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
        <span className="gradient-text">{displayValue}</span>
        <span className="gradient-text">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
}
