export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner shell">
        <p className="hero-kicker">شراكة رقمية للأفراح والمناسبات داخل السعودية</p>
        <p className="hero-brand" aria-hidden="true">
          DRONIA
        </p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-line">طوّر شغل قاعتك أو تنظيمك</span>{' '}
          <span className="hero-title-line hero-title-accent">وخلّ درونيا معك</span>
        </h1>
        <p className="lead hero-lead">
          نربطك بطيّارين درون مرخّصين ومتمرّسين، وتطلع لك تغطية سينمائية للعرس أو
          الفعالية — بدون لفّ ودوران على التصاريح والتنسيق، إحنا نمشيها معاك خطوة
          بخطوة.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#halls">
            فعّل بوابة قاعتك
          </a>
          <a className="btn btn-ghost" href="#gallery">
            شوف نماذج التصوير
          </a>
        </div>
        <a className="hero-more" href="#about">
          طالع من نحن وش نسوي
          <span className="hero-more-chevron" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  )
}
