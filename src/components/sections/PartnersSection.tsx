import { PARTNERS } from '../../data/partners'

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="section partners"
      data-reveal
      aria-labelledby="partners-title"
    >
      <div className="shell partners-shell">
        <header className="partners-intro">
          <p className="section-kicker section-kicker-en">PARTNERS</p>
          <h2 id="partners-title" className="partners-title">
            شركاؤنا
          </h2>
          <p className="section-lead partners-lead">
            مدعومون من قبل أبرز الجهات في قطاع الدرونز السعودي
          </p>
        </header>

        <ul className="partners-grid" role="list">
          {PARTNERS.map((partner) => (
            <li key={partner.id} className="partner-card">
              <div className="partner-card__logo" aria-hidden={!partner.logoSrc}>
                {partner.logoSrc ? (
                  <img
                    src={partner.logoSrc}
                    alt={partner.logoAlt ?? partner.nameAr}
                    width={160}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="partner-card__img"
                  />
                ) : (
                  <span className="partner-card__monogram">{partner.monogram}</span>
                )}
              </div>
              <p className="partner-card__name">{partner.nameAr}</p>
              {partner.nameEn ? (
                <p className="partner-card__name-en">{partner.nameEn}</p>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="partners-cta">
          <a className="btn btn-ghost btn-lg" href="#register-partner">
            سجّل كشريك
          </a>
        </div>
      </div>
    </section>
  )
}
