const ITEMS = [
  {
    title: 'تصوير جوّي يفتح النفس',
    text: 'لقطات علوية للمناسبة تليق بالعرض والسوشال، مع اهتمام بالسلامة والتفاصيل.',
  },
  {
    title: 'ترتيب التصاريح والامتثال',
    text: 'ما نخليك تدور على الجهات لوحدك؛ نمشّي مسار التصاريح بشكل واضح مع الشريك.',
  },
  {
    title: 'تنسيق بين القاعة والطيّار',
    text: 'جدولة وتواصل منظّم — عشان يوم الفعالية يمشي سهل على الطاقم والعميل.',
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="shell">
        <p className="section-kicker">خدماتنا</p>
        <h2 id="services-title" className="section-title">
          وش نقدّم للقاعات والمنسّقين؟
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
