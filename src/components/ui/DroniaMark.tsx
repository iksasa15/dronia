import { useId } from 'react'

type DroniaMarkProps = {
  className?: string
  size?: number
}

/** Small brand mark — drone frame + lens; decorative alongside wordmark. */
export function DroniaMark({ className, size = 36 }: DroniaMarkProps) {
  const gid = useId().replace(/:/g, '')
  const gradId = `dronia-mark-g-${gid}`

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="10"
        width="32"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <circle cx="12" cy="19" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="28" cy="19" r="3" fill="currentColor" opacity="0.35" />
      <rect
        x="15"
        y="14"
        width="10"
        height="10"
        rx="2"
        stroke={`url(#${gradId})`}
        strokeWidth="1.35"
      />
      <circle cx="20" cy="19" r="2.25" fill={`url(#${gradId})`} />
      <defs>
        <linearGradient id={gradId} x1="15" y1="14" x2="28" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-accent, #5eb1fa)" />
          <stop offset="1" stopColor="var(--color-cta-end, #f6a823)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
