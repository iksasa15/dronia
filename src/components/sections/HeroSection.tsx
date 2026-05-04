import { useRef } from 'react'
import { useHeroParallax } from '../../hooks/useHeroParallax'
import { TrustRibbon } from './TrustRibbon'

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null)
  useHeroParallax(bgRef)

  return (
    <section className="hero hero--stack" aria-labelledby="hero-title">
      <div className="hero-bg hero-bg--parallax" ref={bgRef} aria-hidden="true" />
      <div className="hero-inner shell">
        <p className="hero-kicker">شراكات رقمية للأفراح والمناسبات في المملكة العربية السعودية</p>
        <p className="hero-brand" aria-hidden="true">
          DRONIA
        </p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-line">ارتقِ بخدمات منشأتك</span>{' '}
          <span className="hero-title-line hero-title-accent">مع درونيا</span>
        </h1>
        <p className="lead hero-lead">
          نربط قاعات الأفراح ومنسّقي الفعاليات بطيّاري درون مرخّصين، ونوفّر تغطية
          جوّية احترافية مع الاهتمام بالتصاريح والتنسيق التشغيلي — خطوة بخطوة
          وبضوح في الإجراءات.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#halls">
            تفعيل بوابة القاعة
          </a>
          <a className="btn btn-ghost" href="#gallery">
            استعراض معرض الأعمال
          </a>
        </div>
        <a className="hero-more" href="#about">
          التعرّف على درونيا
          <span className="hero-more-chevron" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
      <TrustRibbon />
    </section>
  )
}
