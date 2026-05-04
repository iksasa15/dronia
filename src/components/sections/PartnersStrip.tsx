const PLACEHOLDERS = ['شريك ١', 'شريك ٢', 'شريك ٣', 'شريك ٤'] as const

export function PartnersStrip() {
  return (
    <section id="partners" className="section partners" aria-labelledby="partners-title">
      <div className="shell">
        <p className="section-kicker section-kicker-en">PARTNERS</p>
        <h2 id="partners-title" className="section-title">
          شركاء النجاح
        </h2>
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
