import { BRAND } from '../content'

/** The Scraperrs "S" mark, redrawn as vector from the official logo (7 blocks on a 53×75 grid). */
export const MARK_BLOCKS = [
  [11, 0, 30, 12],
  [29, 12, 12, 12],
  [0, 12, 11, 22],
  [0, 34, 53, 10],
  [41, 44, 12, 20],
  [6, 52, 11, 12],
  [6, 64, 35, 11],
] as const

export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 53 75" className={className} fill="currentColor" aria-hidden="true">
      {MARK_BLOCKS.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} />
      ))}
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="h-7 w-auto shrink-0 text-brand" />
      <span className="font-display text-[1.4rem] leading-none font-bold tracking-tight">{BRAND}</span>
    </span>
  )
}
