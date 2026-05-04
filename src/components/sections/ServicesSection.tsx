const ITEMS = [
  {
    title: 'توثيق جوي سينمائي',
    text: 'تغطية احترافية للمناسبات مع التزام بمعايير الجودة والسلامة.',
  },
  {
    title: 'امتثال وترخيص',
    text: 'مسار واضح للتصاريح والجهات المختصة لتقليل العبء على الشريك.',
  },
  {
    title: 'تنسيق تشغيلي',
    text: 'ربط مباشر بين القاعة والطيّار وجدولة الطلبات من لوحة واحدة.',
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="shell">
        <p className="section-kicker">خدماتنا</p>
        <h2 id="services-title" className="section-title">
          حلول تشغيلية للقاعات والمنسّقين
        </h2>
        <ul className="services-grid">
          {ITEMS.map((item) => (
            <li key={item.title} className="services-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
