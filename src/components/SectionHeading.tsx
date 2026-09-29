type Props = {
  id: string
  index: string
  eyebrow: string
  title: string
  lede?: string
  inverse?: boolean
}

export function SectionHeading({ id, index, eyebrow, title, lede, inverse = false }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16" data-reveal>
      <div>
        <p className={`eyebrow flex items-center gap-3 ${inverse ? 'text-signal' : 'text-signal-deep'}`}>
          <span className="tabular-nums">{index}</span>
          <span className={`h-px w-8 ${inverse ? 'bg-signal' : 'bg-signal-deep'}`} aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="mt-5 text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.02] font-bold">
          {title}
        </h2>
      </div>
      {lede && (
        <p className={`max-w-md text-lg leading-relaxed ${inverse ? 'text-fg-inverse-muted' : 'text-fg-muted'} lg:justify-self-end`}>
          {lede}
        </p>
      )}
    </div>
  )
}
