type OccasionSlideIconProps = {
  kind: 'wedding' | 'event' | 'conference' | 'party'
  className?: string
}

export function OccasionSlideIcon({ kind, className }: OccasionSlideIconProps) {
  const shared = {
    className,
    width: 40,
    height: 40,
    viewBox: '0 0 40 40',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true as const,
  }

  switch (kind) {
    case 'wedding':
      return (
        <svg {...shared}>
          <circle cx="14" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="26" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 28c2.5-4 6-6 10-6s7.5 2 10 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'event':
      return (
        <svg {...shared}>
          <rect x="8" y="10" width="24" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 8v6M26 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 16h24" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="24" r="3" fill="currentColor" opacity="0.35" />
        </svg>
      )
    case 'conference':
      return (
        <svg {...shared}>
          <rect x="6" y="12" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 30V18M20 30V14M28 30V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 8h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'party':
      return (
        <svg {...shared}>
          <path
            d="M20 8l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <circle cx="10" cy="30" r="2" fill="currentColor" opacity="0.5" />
          <circle cx="30" cy="28" r="1.5" fill="currentColor" opacity="0.4" />
        </svg>
      )
  }
}
