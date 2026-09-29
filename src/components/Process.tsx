import { process } from '../content'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section
      id="process"
      className="blueprint-light border-y border-paper-line bg-paper-2 py-24 sm:py-32"
      aria-labelledby="process-title"
    >
      <div className="container-x">
        <SectionHeading
          id="process-title"
          index="04"
          eyebrow="How we work"
          title="From first call to live — and beyond."
          lede="A clear, repeatable path that keeps you in the loop and your product moving."
        />

        <div className="relative mt-14 lg:mt-20">
          {/* Connecting rail on desktop */}
          <span className="absolute top-6 right-0 left-0 hidden h-px bg-paper-line lg:block" aria-hidden="true" />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.map((step, i) => {
            const Icon = step.icon
            return (
              <li key={step.title} className="relative">
                <span className="relative grid size-12 place-items-center rounded-sm border border-paper-line bg-white text-brand-deep shadow-card">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="mt-6 font-mono text-xs tracking-[0.14em] text-brand-deep uppercase">
                  Step {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-h3">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{step.body}</p>
              </li>
            )
          })}
          </ol>
        </div>
      </div>
    </section>
  )
}
