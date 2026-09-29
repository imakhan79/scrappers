import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../content'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 text-fg-inverse transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? 'bg-ink/90 shadow-[0_1px_0_var(--color-ink-line)] backdrop-blur-md' : 'bg-ink'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="container-x flex h-16 items-center justify-between sm:h-18">
        <a href="#top" className="-m-2 rounded-md p-2" aria-label="Scraperrs — back to top">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm px-4 py-2 text-sm font-medium text-fg-inverse-muted transition-colors hover:text-fg-inverse"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-brand hidden min-h-10 px-5 text-sm sm:inline-flex">
            Start a project
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-12 cursor-pointer items-center justify-center rounded-md hover:bg-ink-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-ink-line lg:hidden"
      >
        <ul className="container-x flex flex-col py-3">
          {[...nav, { href: '#contact', label: 'Contact' }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-ink-line/60 font-display text-xl font-semibold last:border-0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-x pb-5 sm:hidden">
          <a href="#contact" onClick={() => setOpen(false)} className="btn-brand w-full">
            Start a project
          </a>
        </div>
      </nav>
    </header>
  )
}
