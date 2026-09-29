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
        <p className={`eyebrow flex items-center gap-3 ${inverse ? 'text-brand' : 'text-brand-deep'}`}>
          <span className="tabular-nums">{index}</span>
          <span className="pixel-glyph" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 id={id} className="mt-5 text-h2">
          {title}
        </h2>
      </div>
      {lede && (
        <p className={`text-lede ${inverse ? 'text-fg-inverse-muted' : 'text-fg-muted'} lg:justify-self-end`}>
          {lede}
        </p>
      )}
    </div>
  )
}
