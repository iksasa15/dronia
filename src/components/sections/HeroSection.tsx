export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner shell">
        <p className="hero-kicker">شراكات رقمية للأفراح والمناسبات</p>
        <p className="hero-brand" aria-hidden="true">
          DRONIA
        </p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-line">ارتقِ بمنشأتك</span>{' '}
          <span className="hero-title-line hero-title-accent">مع درونيا</span>
        </h1>
        <p className="lead hero-lead">
          المنصة المعتمدة لربط قاعات الأفراح ومنظمي الفعاليات بأسطول طيّاري درون
          نخبة. تغطية سينمائية موثوقة ومرخّصة بالكامل.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#halls">
            فعّل بوابة القاعات
          </a>
          <a className="btn btn-ghost" href="#gallery">
            شاهد أعمالنا
          </a>
        </div>
        <a className="hero-more" href="#about">
          اكتشف المزيد
          <span className="hero-more-chevron" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  )
}
