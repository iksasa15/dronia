const PLACEHOLDERS = ['قريباً: شريك ١', 'قريباً: شريك ٢', 'قريباً: شريك ٣', 'قريباً: شريك ٤'] as const

export function PartnersStrip() {
  return (
    <section id="partners" className="section partners" aria-labelledby="partners-title">
      <div className="shell">
        <p className="section-kicker section-kicker-en">PARTNERS</p>
        <h2 id="partners-title" className="section-title">
          شركاء نفتخر إننا مشينا وياهم
        </h2>
        <p className="section-lead partners-intro">
          هنا نعرض الشعارات لما تتثبت الشراكات — الحين نماذج placeholder للتصميم.
        </p>
        <ul className="partners-row">
          {PLACEHOLDERS.map((name) => (
            <li key={name} className="partner-badge">
              <span className="partner-dot" aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
