import { ArrowUpRight } from 'lucide-react'
import { BRAND, nav, services } from '../content'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="bg-ink text-fg-inverse">
      <div className="container-x border-t border-ink-line py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs leading-relaxed text-fg-inverse-muted">
              One point of contact for all your tech needs — built to scale, supported 24/7.
            </p>
            <a href="#contact" className="btn-signal mt-8 group">
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-fg-inverse-muted">Company</h2>
            <ul className="mt-5 space-y-1">
              {[...nav, { href: '#contact', label: 'Contact' }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-10 items-center text-fg-inverse/90 hover:text-signal">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-fg-inverse-muted">Services</h2>
            <ul className="mt-5 space-y-1">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#service-${s.id}`} className="inline-flex min-h-10 items-center text-fg-inverse/90 hover:text-signal">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-line pt-8 text-sm text-fg-inverse-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <a href="#top" className="hover:text-fg-inverse">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Oversized wordmark as a sign-off */}
      <div className="overflow-hidden" aria-hidden="true">
        <p className="container-x -mb-[0.2em] font-display text-[clamp(4.5rem,19vw,17rem)] leading-none font-bold tracking-[-0.05em] text-ink-2 select-none">
          {BRAND}
        </p>
      </div>
    </footer>
  )
}
