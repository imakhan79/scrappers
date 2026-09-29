import type { CSSProperties } from 'react'
import { BRAND, reasons } from '../content'
import { SectionHeading } from './SectionHeading'

export function Why() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-24 text-fg-inverse sm:py-32" aria-labelledby="why-title">
      <div className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="container-x relative">
        <SectionHeading
          id="why-title"
          index="02"
          eyebrow={`Why pick ${BRAND}`}
          title="One partner. Your goals. Always on."
          lede="Most tech projects stall between vendors. We remove the gaps by owning the whole journey with you."
          inverse
        />

        <ol className="mt-14 grid gap-px border-y border-ink-line bg-ink-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <li
                key={r.title}
                data-reveal
                style={{ '--i': i } as CSSProperties}
                className="group relative bg-ink px-1 py-10 sm:px-8"
              >
                <span
                  className="absolute top-0 left-0 h-0.5 w-0 bg-signal transition-[width] duration-500 ease-out-expo group-hover:w-full"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <Icon className="size-7 text-signal" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-mono text-sm text-fg-inverse-muted tabular-nums">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl leading-tight font-semibold">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-inverse-muted">{r.body}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
