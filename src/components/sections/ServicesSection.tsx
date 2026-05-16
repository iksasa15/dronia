import { OccasionSlideIcon } from '../ui/OccasionSlideIcon'

const SLIDES = [
  {
    id: 'weddings',
    icon: 'wedding' as const,
    title: 'الأعراس',
    text: 'احفظ ذكريات يوم زفافك — لقطات جوّية من السماء تبقى معاك للأبد.',
  },
  {
    id: 'events',
    icon: 'event' as const,
    title: 'الفعاليات',
    text: 'وثّق فعالياتك الكبيرة بزاوية ما تتكرّر مرتين.',
  },
  {
    id: 'conferences',
    icon: 'conference' as const,
    title: 'المؤتمرات',
    text: 'عطّ مؤتمرك طابع احترافي — تغطية من فوق تليق فيه.',
  },
  {
    id: 'parties',
    icon: 'party' as const,
    title: 'الحفلات الخاصة',
    text: 'حوّل حفلتك لتجربة بصرية ما تشبه أي حفلة ثانية.',
  },
] as const

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section services occasion-slides-section"
      data-reveal
      aria-labelledby="services-title"
    >
      <div className="shell">
        <h2 id="services-title" className="section-title">
          لمن درونيا؟
        </h2>
        <ul className="occasion-slides" role="list">
          {SLIDES.map((slide) => (
            <li key={slide.id} className="occasion-slide">
              <div className="occasion-slide__icon" aria-hidden="true">
                <OccasionSlideIcon kind={slide.icon} className="occasion-slide__svg" />
              </div>
              <h3 className="occasion-slide__title">{slide.title}</h3>
              <p className="occasion-slide__text">{slide.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
