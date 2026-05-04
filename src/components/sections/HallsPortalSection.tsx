const BENEFITS = [
  {
    num: '01',
    title: 'تصاريح جوية معتمدة',
    text: 'مسار واضح للموافقات مع الجهات المختصة.',
  },
  {
    num: '02',
    title: 'هامش ربح مجزٍ',
    text: 'دخل إضافي على كل فعالية دون التزامات تشغيلية ثقيلة.',
  },
  {
    num: '03',
    title: 'دعم تشغيلي كامل',
    text: 'تنسيق مباشر مع طاقم القاعة لضمان تجربة سلسة.',
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
            أضف التصوير الجوي لباقاتك وارفع عوائدك دون تكاليف معدات أو ضغط
            تشغيلي على فريقك.
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
            نموذج تفعيل بوابة القاعات
          </p>
          <label className="field">
            <span>اسم القاعة</span>
            <input name="hall" type="text" autoComplete="organization" />
          </label>
          <label className="field">
            <span>المسؤول</span>
            <input name="contact" type="text" autoComplete="name" />
          </label>
          <label className="field">
            <span>الجوال</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="field">
            <span>البريد الإلكتروني</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label className="field">
            <span>الفعاليات شهرياً</span>
            <select name="volume" defaultValue="">
              <option value="" disabled>
                اختر…
              </option>
              <option>١ إلى ٥ فعاليات</option>
              <option>٦ إلى ١٥ فعالية</option>
              <option>أكثر من ١٥ فعالية</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            تفعيل البوابة
          </button>
        </form>
      </div>
    </section>
  )
}
