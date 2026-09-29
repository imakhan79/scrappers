import { services } from '../content'
import { SectionHeading } from './SectionHeading'

// Bento rhythm on large screens: wide, narrow / three narrow / narrow, wide
const WIDE = new Set([0, 6])

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32" aria-labelledby="services-title">
      <div className="container-x">
        <SectionHeading
          id="services-title"
          index="01"
          eyebrow="What we offer"
          title="Every layer of your technology, under one roof."
          lede="Pick one service or combine them. Either way you get one team that owns the outcome."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <li
                key={s.id}
                id={`service-${s.id}`}
                className={`pixel-corner group relative flex flex-col rounded-lg border border-paper-line bg-white p-7 shadow-card transition-[border-color,box-shadow] duration-300 hover:border-fg/20 hover:shadow-lift hover:[--pc:var(--color-brand)] target:border-brand-deep target:ring-2 target:ring-brand/30 sm:p-8 ${WIDE.has(i) ? 'lg:col-span-2' : ''} ${
                  i === services.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-sm bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                    <Icon className="size-[1.35rem]" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm text-fg-muted tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-8 text-h3">{s.title}</h3>
                <p className={`mt-3 leading-relaxed text-fg-muted ${WIDE.has(i) ? 'max-w-xl' : ''}`}>{s.body}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7" aria-label="Includes">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-xs border border-paper-line bg-paper px-2.5 py-1 font-mono text-[0.72rem] text-fg-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
