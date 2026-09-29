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
                className="pixel-corner group relative bg-ink px-1 py-10 [--pc:var(--color-ink-line)] hover:[--pc:var(--color-brand)] sm:px-8"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-7 text-brand" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-mono text-sm text-fg-inverse-muted tabular-nums">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-h3">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-inverse-muted">{r.body}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
