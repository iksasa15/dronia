const BENEFITS = [
  {
    id: 'requests',
    title: 'طلبات ثابتة',
    text: 'احصل على طلبات منتظمة بدون عناء البحث عن العملاء. نجيب لك الفرص — وأنت تركّز على الإبداع.',
  },
  {
    id: 'payment',
    title: 'دفع مضمون',
    text: 'دفع آمن خلال 48 ساعة من التسليم. لا مماطلة ولا قروشة — أنت تحلّق ونحن نضمن حقك.',
  },
  {
    id: 'community',
    title: 'سرب محترف',
    text: 'أول مجتمع طيّارين في السعودية — دعم وتنسيق يخلّيك تركّز على الطيران والإخراج.',
  },
] as const

export function PilotsFleetSection() {
  return (
    <section
      id="pilots"
      className="section pilots pilots--flagship"
      data-reveal
      aria-labelledby="pilots-title"
    >
      <div className="shell pilots-shell">
        <header className="pilots-intro">
          <p className="section-kicker section-kicker-en">JOIN THE FLEET</p>
          <h2 id="pilots-title" className="pilots-title">
            هل أنت طيار درون مرخّص؟
          </h2>
          <p className="pilots-subtitle">
            انضم لسرب درونيا — أول مجتمع للطيّارين المحترفين في السعودية
          </p>
        </header>

        <ul className="pilots-benefits-grid" role="list">
          {BENEFITS.map((b) => (
            <li key={b.id} className="pilots-benefit-card">
              <h3 className="pilots-benefit-card__title">{b.title}</h3>
              <p className="pilots-benefit-card__text">{b.text}</p>
            </li>
          ))}
        </ul>

        <div className="pilots-cta-block">
          <a className="btn btn-primary btn-lg" href="#register-pilot">
            سجّل الآن — انضم لسرب درونيا
          </a>
          <p className="pilots-social-proof">
            هدفنا: +50 كابتن في الأسبوع الأول | الانضمام مجاناً 100%
          </p>
        </div>

      </div>
    </section>
  )
}
