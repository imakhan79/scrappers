import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { BRAND, industries, services } from '../content'

// Tower heights (% of skyline) — the tallest (index 3) carries the signal colour.
const HEIGHTS = [58, 44, 74, 100, 66, 86, 52]
const SIGNATURE = 3

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-fg-inverse" aria-labelledby="hero-title">
      <div className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]" />
      <div
        className="pointer-events-none absolute top-24 right-[-12%] size-[40rem] rounded-full bg-signal/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-end gap-14 pt-16 pb-0 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-28">
        <div className="pb-4 lg:pb-24">
          <p className="eyebrow flex items-center gap-3 text-signal">
            <span className="h-px w-8 bg-signal" aria-hidden="true" />
            Software development partner
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-bold"
          >
            Software, built <span className="text-signal">to scale.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-inverse-muted sm:text-xl">
            {BRAND} is your single tech partner — from a first MVP to enterprise platforms, data, AI and the cloud
            that keeps it all running.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-signal group">
              Start a project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href="#services" className="btn-ghost-inverse">
              Explore services
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 border-t border-ink-line pt-6">
            {[
              [String(services.length).padStart(2, '0'), 'Services'],
              [String(industries.length).padStart(2, '0'), 'Industries'],
              ['24/7', 'Support'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-bold tabular-nums sm:text-4xl">{value}</dd>
                <dd aria-hidden="true" className="mt-1 font-mono text-[0.7rem] tracking-[0.14em] text-fg-inverse-muted uppercase">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Skyline />
      </div>
    </section>
  )
}

function Skyline() {
  return (
    <div className="relative">
      <p className="eyebrow mb-4 hidden text-fg-inverse-muted sm:block">
        What we build <span className="text-signal">/</span> select a tower
      </p>
      <ul className="flex h-[300px] items-end gap-1.5 sm:h-[400px] sm:gap-2.5 lg:h-[460px]" aria-label="Our services">
        {services.map((s, i) => {
          const signature = i === SIGNATURE
          return (
            <li key={s.id} className="flex h-full flex-1 flex-col justify-end">
              <a
                href={`#service-${s.id}`}
                aria-label={s.title}
                style={{ height: `${HEIGHTS[i]}%`, '--i': i } as CSSProperties}
                className={`tower group relative block w-full rounded-t-[3px] transition-colors duration-300 focus-visible:outline-offset-4 ${
                  signature ? '[--t:var(--color-signal)]' : '[--t:#1b2233] hover:[--t:#2a3350]'
                }`}
              >
                {/* Tower body with a window grid */}
                <span
                  className="absolute inset-0 rounded-t-[3px] transition-[background-color] duration-300"
                  style={{
                    backgroundColor: 'var(--t)',
                    backgroundImage: `repeating-linear-gradient(to right, var(--t) 0 7px, transparent 7px 15px),
                      repeating-linear-gradient(to bottom, ${signature ? 'rgb(11 14 20 / .28)' : 'rgb(244 241 234 / .10)'} 0 5px, var(--t) 5px 14px)`,
                    backgroundPosition: '4px 12px',
                  }}
                  aria-hidden="true"
                />
                {signature && (
                  <span className="absolute -top-10 left-1/2 h-10 w-0.5 -translate-x-1/2 bg-signal" aria-hidden="true">
                    <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 animate-pulse rounded-full bg-signal" />
                  </span>
                )}
                <span className="absolute inset-x-0 top-0 h-0.5 bg-signal opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
              </a>
            </li>
          )
        })}
      </ul>
      {/* Ground line with labels */}
      <div className="border-t border-fg-inverse-muted/40">
        <ol className="hidden gap-2.5 pt-3 pb-8 sm:flex" aria-hidden="true">
          {services.map((s, i) => (
            <li key={s.id} className="flex-1 font-mono text-[0.68rem] leading-tight text-fg-inverse-muted">
              <span className="block text-signal">{String(i + 1).padStart(2, '0')}</span>
              {s.short}
            </li>
          ))}
        </ol>
        <div className="h-8 sm:hidden" />
      </div>
    </div>
  )
}
