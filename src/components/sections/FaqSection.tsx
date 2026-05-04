const ITEMS = [
  {
    q: 'هل التصوير الجوّي مرخّص عبر درونيا؟',
    a: 'نعمل ضمن إطار يوفّر مساراً واضحاً للموافقات والجهات المختصة، مع ربط الطيّارين والقاعات بمتطلبات السلامة والامتثال المعتمدة.',
  },
  {
    q: 'كيف تُدار العلاقة بين القاعة والطيّار؟',
    a: 'تُنسَّق الطلبات والتوقيت عبر المنصّة لتقليل الازدواجية في التواصل، مع نقاط تسليم واضحة يوم الفعالية.',
  },
  {
    q: 'هل يمكن ربط الأرقام الظاهرة في الصفحة ببيانات حقيقية؟',
    a: 'نعم — الحالي للعرض التوضيحي، ويمكن استبداله لاحقاً ببيانات مباشرة من أنظمتكم أو من لوحة تحكم المنصّة.',
  },
  {
    q: 'ما الذي تحتاجه القاعة للبدء؟',
    a: 'يُفضّل التواصل عبر نموذج «بوابة القاعات» لتحديد نطاق الخدمة والتكامل التشغيلي المناسب لفريقكم.',
  },
] as const

export function FaqSection() {
  return (
    <section id="faq" className="section faq" data-reveal aria-labelledby="faq-title">
      <div className="shell">
        <p className="section-kicker section-kicker-en">FAQ</p>
        <h2 id="faq-title" className="section-title">
          الأسئلة الشائعة
        </h2>
        <p className="section-lead">
          إجابات مختصرة؛ للتفاصيل التعاقدية يُرجى التواصل مع فريق درونيا.
        </p>
        <div className="faq-list">
          {ITEMS.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary className="faq-summary">{q}</summary>
              <p className="faq-answer">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
