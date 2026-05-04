const ITEMS = [
  {
    title: 'تصوير جوّي احترافي',
    text: 'لقطات علوية عالية الجودة للمناسبات، مع الالتزام بمعايير السلامة والجودة.',
  },
  {
    title: 'التصاريح والامتثال',
    text: 'مسار واضح للموافقات والجهات المختصة، بما يخفّف العبء عن الشركاء.',
  },
  {
    title: 'تنسيق تشغيلي',
    text: 'جدولة وتواصل منظّم بين القاعة والطيّار لضمان سير الفعالية بسلاسة.',
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="section services" aria-labelledby="services-title">
      <div className="shell">
        <p className="section-kicker">خدماتنا</p>
        <h2 id="services-title" className="section-title">
          ما الذي تقدّمه درونيا للقاعات والمنسّقين؟
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
