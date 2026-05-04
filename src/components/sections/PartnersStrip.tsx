const PLACEHOLDERS = [
  { id: 'p1', label: 'شريك (قريباً)' },
  { id: 'p2', label: 'شريك (قريباً)' },
  { id: 'p3', label: 'شريك (قريباً)' },
  { id: 'p4', label: 'شريك (قريباً)' },
] as const

export function PartnersStrip() {
  return (
    <section id="partners" className="section partners" data-reveal aria-labelledby="partners-title">
      <div className="shell">
        <p className="section-kicker section-kicker-en">PARTNERS</p>
        <h2 id="partners-title" className="section-title">
          شركاء النجاح
        </h2>
        <p className="section-lead partners-intro">
          يُعرض هنا شعار الشركاء عند اعتماد الشراكات رسمياً؛ الحالي نماذج للتصميم
          فقط.
        </p>
        <ul className="partners-row">
          {PLACEHOLDERS.map(({ id, label }) => (
            <li key={id} className="partner-badge">
              <span className="partner-dot" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
