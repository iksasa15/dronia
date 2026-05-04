const ROWS = [
  {
    title: 'الامتثال والتصاريح',
    dronia: 'مسار موحّد للموافقات والتنسيق مع الجهات المختصة.',
    alt: 'اعتماد كامل على الطيّار أو القاعة دون إطار تشغيلي واضح.',
  },
  {
    title: 'تجربة القاعة والعميل',
    dronia: 'ربط منظّم بين الباقات والتنفيذ يوم الفعالية.',
    alt: 'تفاوت كبير في الجودة والتوقيت بين مزوّدين مختلفين.',
  },
  {
    title: 'قيمة مضافة للشركاء',
    dronia: 'عائد إضافي مع تخفيف العبء التشغيلي والإداري.',
    alt: 'شراء معدات أو توظيف طاقم داخلي دون ضمان جودة موحّدة.',
  },
] as const

export function WhyDroniaSection() {
  return (
    <section
      id="why-dronia"
      className="section why-dronia"
      data-reveal
      aria-labelledby="why-dronia-title"
    >
      <div className="shell">
        <p className="section-kicker section-kicker-en">WHY DRONIA</p>
        <h2 id="why-dronia-title" className="section-title">
          لماذا درونيا مقارنةً بالبدائل؟
        </h2>
        <p className="section-lead">
          مقارنة موجزة توضّح موقع المنصّة بين احتياج القاعات والمنسّقين من جهة،
          والمسارات التقليدية من جهة أخرى.
        </p>
        <div className="why-grid">
          <div className="why-grid__head" aria-hidden="true">
            <span />
            <span className="why-col why-col--brand">درونيا</span>
            <span className="why-col why-col--muted">بدائل شائعة</span>
          </div>
          {ROWS.map((row) => (
            <article key={row.title} className="why-row">
              <h3 className="why-row__title">{row.title}</h3>
              <p className="why-cell why-cell--brand">{row.dronia}</p>
              <p className="why-cell why-cell--muted">{row.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
