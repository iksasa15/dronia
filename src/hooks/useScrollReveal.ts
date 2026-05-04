import { useEffect } from 'react'

/** Reveal sections marked with [data-reveal] when they enter the viewport. */
export function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) {
      nodes.forEach((n) => n.setAttribute('data-reveal-visible', ''))
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.target instanceof HTMLElement) {
            e.target.setAttribute('data-reveal-visible', '')
            obs.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 }
    )

    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])
}
