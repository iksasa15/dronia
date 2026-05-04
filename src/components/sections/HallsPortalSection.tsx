const BENEFITS = [
  {
    num: '01',
    title: 'تصاريح منظّمة',
    text: 'مسار موحّد للموافقات مع الجهات المختصة لتفادي التعطيل الإداري.',
  },
  {
    num: '02',
    title: 'عائد إضافي دون عبء معدات',
    text: 'إدراج خدمة التصوير الجوّي ضمن الباقات مع استفادة مادية، دون شراء معدات أو تشكيل فريق جوّي كامل.',
  },
  {
    num: '03',
    title: 'دعم تشغيلي للفريق',
    text: 'تنسيق مباشر مع منسّق الفعالية لدى القاعة لضمان انسيابية يوم المناسبة.',
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
            إن كنت ترغب في إضافة التصوير الجوّي إلى باقاتك، فتتولى درونيا تنسيق
            الطيّار والتصاريح والتشغيل بما يخفّض الضغط على فريق القاعة.
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
            نموذج طلب تفعيل بوابة القاعة
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
            <span>البريد الإلكتروني</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label className="field">
            <span>عدد المناسبات شهرياً (تقريبي)</span>
            <select name="volume" defaultValue="">
              <option value="" disabled>
                يُرجى الاختيار
              </option>
              <option>من ١ إلى ٥</option>
              <option>من ٦ إلى ١٥</option>
              <option>أكثر من ١٥</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            إرسال طلب التفعيل
          </button>
        </form>
      </div>
    </section>
  )
}
