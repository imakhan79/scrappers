import banner from '../assets/behind-scraperrs.webp'
import { BRAND } from '../content'

export function Behind() {
  return (
    <section className="pt-24 sm:pt-32" aria-labelledby="behind-title">
      <div className="container-x">
        <h2 id="behind-title" className="eyebrow flex items-center gap-3 font-mono text-brand-deep">
          <span className="pixel-glyph" aria-hidden="true" />
          Behind {BRAND}
        </h2>
        <figure className="mt-6 overflow-hidden rounded-lg border border-ink-line bg-ink shadow-lift">
          {/* Headline is part of the artwork: on narrow screens crop around it rather than shrink it. */}
          <img
            src={banner}
            width={1083}
            height={183}
            alt="Empowering growth with transformative AI and digital solutions"
            loading="lazy"
            decoding="async"
            className="block aspect-[500/183] w-full object-cover object-[48%_50%] sm:aspect-[1083/183]"
          />
        </figure>
      </div>
    </section>
  )
}
