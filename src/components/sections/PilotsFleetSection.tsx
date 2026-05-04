const BENEFITS = [
  {
    num: '01',
    title: 'طلبات مجدولة',
    text: 'تقليل الجهد المبذول في البحث عن العملاء، مع طلبات منظّمة يوم الفعالية.',
  },
  {
    num: '02',
    title: 'وضوح قانوني وتأميني',
    text: 'مسار واضح للتصاريح والتأمين وفق السياسات المعتمدة.',
  },
  {
    num: '03',
    title: 'عائد يتناسب مع الخبرة',
    text: 'عوائد تتوافق مع مستوى الخبرة ونوع المعدات ونطاق الخدمة المقدّمة.',
  },
] as const

export function PilotsFleetSection() {
  return (
    <section id="pilots" className="section pilots" aria-labelledby="pilots-title">
      <div className="shell halls-layout pilots-layout">
        <div className="halls-copy">
          <p className="section-kicker section-kicker-en">ELITE FLEET</p>
          <h2 id="pilots-title" className="section-title">
            شبكة طيّاري النخبة
          </h2>
          <p className="halls-lead">
            إذا كنت تحمل ترخيصاً سارياً وترغب في طلبات أوضح ودعم تشغيلي، يمكنك
            الانضمام إلى شبكة درونيا مع التركيز على الجانب الفني للإخراج.
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
          aria-labelledby="pilots-form-title"
        >
          <p id="pilots-form-title" className="sr-only">
            نموذج طلب انضمام الطيّار
          </p>
          <label className="field">
            <span>الاسم الكامل</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label className="field">
            <span>رقم الجوال</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="field">
            <span>حالة ترخيص الهيئة العامة للطيران المدني</span>
            <select name="license" defaultValue="">
              <option value="" disabled>
                يُرجى الاختيار
              </option>
              <option>مرخّص — مستوى معتمد</option>
              <option>شهادات معتمدة أخرى</option>
              <option>قيد الإصدار</option>
            </select>
          </label>
          <label className="field">
            <span>مجال التخصص</span>
            <select name="spec" defaultValue="">
              <option value="" disabled>
                يُرجى الاختيار
              </option>
              <option>FPV</option>
              <option>تصوير داخلي</option>
              <option>سينمائي</option>
              <option>Mavic / Inspire</option>
              <option>رصد واستطلاع</option>
            </select>
          </label>
          <label className="field">
            <span>رابط معرض الأعمال (اختياري)</span>
            <input name="portfolio" type="url" placeholder="https://" />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            إرسال طلب الانضمام
          </button>
        </form>
      </div>
    </section>
  )
}
