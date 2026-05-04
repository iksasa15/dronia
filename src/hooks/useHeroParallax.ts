import { type RefObject, useEffect } from 'react'

/**
 * Subtle vertical shift on the hero background layer while the hero is in view.
 * Disabled when the user prefers reduced motion.
 */
export function useHeroParallax(bgRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = bgRef.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) return

    let raf = 0

    const tick = () => {
      const hero = el.closest('.hero')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const visible = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height * 0.35)))
      const y = (visible - 0.5) * 28
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.04)`
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }

    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      el.style.transform = ''
    }
  }, [bgRef])
}
