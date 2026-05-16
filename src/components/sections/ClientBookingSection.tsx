const STEPS = [
  {
    id: 'choose',
    num: '01',
    title: 'اختر مناسبتك',
    text: 'حدّد نوع التغطية: عرس، فعالية، مؤتمر، أو حفلة.',
  },
  {
    id: 'match',
    num: '02',
    title: 'نحن نختار لك الأفضل',
    text: 'نرشّح لك طيّارين مرخّصين بناءً على متطلباتك ومكان المناسبة.',
  },
  {
    id: 'deliver',
    num: '03',
    title: 'استلم المحتوى الجاهز',
    text: 'فيديو وصور احترافية خلال 5 أيام من انتهاء التصوير.',
  },
] as const

export function ClientBookingSection() {
  return (
    <section
      id="book"
      className="section client-booking"
      data-reveal
      aria-labelledby="book-title"
    >
      <div className="shell client-booking-shell">
        <header className="client-booking-intro">
          <h2 id="book-title" className="client-booking-title">
            كيف نعمل
          </h2>
          <p className="section-lead client-booking-lead">
            احجز خدمة التصوير الجوّي بثقة — للزوار والعملاء
          </p>
        </header>

        <ol className="client-steps" role="list">
          {STEPS.map((step) => (
            <li key={step.id} className="client-step-card">
              <span className="client-step-card__num">{step.num}</span>
              <h3 className="client-step-card__title">{step.title}</h3>
              <p className="client-step-card__text">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="client-booking-cta">
          <a className="btn btn-primary btn-lg" href="#register-client">
            احجز جلسة استشارية مجانية
          </a>
        </div>
      </div>
    </section>
  )
}
