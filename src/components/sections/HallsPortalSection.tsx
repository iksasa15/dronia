const BENEFITS = [
  {
    num: '01',
    title: 'تصاريح مرتّبة',
    text: 'نمشي معاك مسار الموافقات عشان ما يتعطّل عرضك على «باقي الإجراءات».',
  },
  {
    num: '02',
    title: 'دخل زيادة بدون تعب معدات',
    text: 'تضيف خدمة التصوير الجوّي لباقتك وتستفيد مادياً — بدون ما تشتري معدات ولا تظبط طاقم تصوير جوّي كامل.',
  },
  {
    num: '03',
    title: 'دعم تشغيلي ويا فريقك',
    text: 'ننسّق مباشرة مع منسّق الفعالية عندك عشان يوم الزفاف أو الحفل يمشي على مهله.',
  },
] as const

export function HallsPortalSection() {
  return (
    <section id="halls" className="section halls" aria-labelledby="halls-title">
      <div className="shell halls-layout">
        <div className="halls-copy">
          <p className="section-kicker section-kicker-en">HALLS PORTAL</p>
          <h2 id="halls-title" className="section-title">
            بوابة شركاء القاعات
          </h2>
          <p className="halls-lead">
            حاب تضيف «تصوير من فوق» لباقاتك؟ درونيا تمشّيها معاك من غير ما تزيد
            ضغط التشغيل على فريقك — نرتّب الطيّار والتصاريح والتنسيق.
          </p>
          <ul className="benefits-list">
            {BENEFITS.map((b) => (
              <li key={b.num} className="benefit-row">
                <span className="benefit-num">{b.num}</span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form
          className="lead-form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
          aria-labelledby="halls-form-title"
        >
          <p id="halls-form-title" className="sr-only">
            طلب تفعيل بوابة القاعة
          </p>
          <label className="field">
            <span>اسم القاعة</span>
            <input name="hall" type="text" autoComplete="organization" />
          </label>
          <label className="field">
            <span>اسم المسؤول</span>
            <input name="contact" type="text" autoComplete="name" />
          </label>
          <label className="field">
            <span>رقم الجوال</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="field">
            <span>البريد</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label className="field">
            <span>تقريباً كم مناسبة بالشهر؟</span>
            <select name="volume" defaultValue="">
              <option value="" disabled>
                اختَر…
              </option>
              <option>١ إلى ٥</option>
              <option>٦ إلى ١٥</option>
              <option>أكثر من ١٥</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            أرسل طلب التفعيل
          </button>
        </form>
      </div>
    </section>
  )
}
