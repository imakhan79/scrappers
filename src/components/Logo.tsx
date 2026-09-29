import { BRAND } from '../content'

/**
 * PLACEHOLDER wordmark — replace with the official Scraperrs logo file when supplied.
 * Keep the accessible name ("Scraperrs") when swapping in the real asset.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 24 24" className="size-7 shrink-0" aria-hidden="true">
        <rect x="2" y="11" width="5" height="11" rx="0.5" fill="currentColor" opacity="0.55" />
        <rect x="9.5" y="2" width="5" height="20" rx="0.5" fill="var(--color-signal)" />
        <rect x="17" y="7" width="5" height="15" rx="0.5" fill="currentColor" opacity="0.8" />
      </svg>
      <span className="font-display text-[1.35rem] leading-none font-bold tracking-tight">{BRAND}</span>
    </span>
  )
}
