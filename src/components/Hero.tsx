import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { BRAND, industries, services } from '../content'
import { MARK_BLOCKS } from './Logo'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-fg-inverse" aria-labelledby="hero-title">
      <div className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_72%_45%,black,transparent_75%)]" />
      <div
        className="pointer-events-none absolute top-24 right-[-12%] size-[40rem] rounded-full bg-brand/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-28 lg:pb-28">
        <div>
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="pixel-glyph" aria-hidden="true" />
            Software development partner
          </p>
          <h1 id="hero-title" className="mt-6 text-h1">
            Limitless possibilities, <span className="text-brand">engineered.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-inverse-muted sm:text-xl">
            {BRAND} is your single tech partner — from a first MVP to enterprise platforms, data, AI and the cloud
            that keeps it all running.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-brand group">
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

        <Emblem />
      </div>
    </section>
  )
}

/** The logo badge, rebuilt as a live emblem: the S assembles block by block inside a slowly turning ring. */
function Emblem() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-[32rem]" aria-hidden="true">
      {/* Concentric guides */}
      <div className="absolute inset-0 rounded-full border border-ink-line" />
      <div className="absolute inset-[14%] rounded-full border border-ink-line/70 bg-ink-2/60" />

      {/* Rotating ring text — name in white, tagline in teal, as on the badge. Length = 2πr so it closes seamlessly. */}
      <svg viewBox="0 0 400 400" className="emblem-ring absolute inset-0 size-full">
        <defs>
          <path id="ring-path" d="M200,200 m-172,0 a172,172 0 1,1 344,0 a172,172 0 1,1 -344,0" />
        </defs>
        <text className="font-display text-[21px] font-semibold uppercase">
          <textPath href="#ring-path" textLength="1080" lengthAdjust="spacing">
            <tspan className="fill-fg-inverse">{BRAND}</tspan>
            <tspan className="fill-brand">{'  •  Limitless possibilities  •  '}</tspan>
          </textPath>
        </text>
      </svg>

      {/* The S, block by block */}
      <svg viewBox="0 0 53 75" className="absolute top-1/2 left-1/2 h-[34%] w-auto -translate-x-1/2 -translate-y-1/2 overflow-visible">
        {MARK_BLOCKS.map(([x, y, w, h], i) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={w}
            height={h}
            className="block-in fill-brand"
            style={{ '--i': i } as CSSProperties}
          />
        ))}
      </svg>

      {/* Corner ticks, like a viewfinder */}
      {[
        'top-0 left-0 border-t border-l',
        'top-0 right-0 border-t border-r',
        'bottom-0 left-0 border-b border-l',
        'bottom-0 right-0 border-b border-r',
      ].map((pos) => (
        <span key={pos} className={`absolute size-5 border-brand/60 ${pos}`} />
      ))}
    </div>
  )
}
