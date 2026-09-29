import type { CSSProperties } from 'react'
import { industries } from '../content'
import { SectionHeading } from './SectionHeading'

export function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32" aria-labelledby="industries-title">
      <div className="container-x">
        <SectionHeading
          id="industries-title"
          index="03"
          eyebrow="Industries we serve"
          title="Domain know‑how across nine industries."
          lede="We bring patterns that already work in your sector, so you spend less time explaining and more time shipping."
        />

        <ul className="mt-14 grid grid-cols-1 border-t border-l border-paper-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            return (
              <li
                key={ind.name}
                data-reveal
                style={{ '--i': i % 3 } as CSSProperties}
                className="group relative flex items-center gap-5 border-r border-b border-paper-line px-6 py-7 transition-colors duration-300 hover:bg-white/70 sm:px-8 sm:py-9"
              >
                <Icon
                  className="size-7 shrink-0 text-signal-deep"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="font-display text-xl font-semibold sm:text-2xl">{ind.name}</span>
                <span
                  className="ml-auto font-mono text-xs text-fg-muted tabular-nums"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
