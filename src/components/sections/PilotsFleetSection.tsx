const BENEFITS = [
  {
    num: '01',
    title: 'طلبات مجدولة',
    text: 'تركيزك على الإخراج الفني بينما ننسّق الطلبات.',
  },
  {
    num: '02',
    title: 'حماية قانونية',
    text: 'مسار واضح للتصاريح والغطاء التأميني حسب السياسات.',
  },
  {
    num: '03',
    title: 'دخل مستدام',
    text: 'عوائد تتناسب مع خبرتك ومعداتك وباقات الخدمة.',
  },
] as const

export function PilotsFleetSection() {
  return (
    <section id="pilots" className="section pilots" aria-labelledby="pilots-title">
      <div className="shell halls-layout pilots-layout">
        <div className="halls-copy">
          <p className="section-kicker section-kicker-en">ELITE FLEET</p>
          <h2 id="pilots-title" className="section-title">
            أسطول طيّاري النخبة
          </h2>
          <p className="halls-lead">
            انضمّ إلى شبكة درونيا للحصول على طلبات مجدولة ودعم مؤسسي يرفع
            جودة تجربتك للعميل.
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
            نموذج انضمام الطيّارين
          </p>
          <label className="field">
            <span>الاسم</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label className="field">
            <span>الجوال</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label className="field">
            <span>شهادة GACA</span>
            <select name="license" defaultValue="">
              <option value="" disabled>
                اختر الحالة
              </option>
              <option>مرخّص (مستوى معتمد)</option>
              <option>شهادات معتمدة أخرى</option>
              <option>قيد الإصدار</option>
            </select>
          </label>
          <label className="field">
            <span>التخصص</span>
            <select name="spec" defaultValue="">
              <option value="" disabled>
                فئة الخبرة
              </option>
              <option>FPV</option>
              <option>تصوير داخلي</option>
              <option>سينمائي</option>
              <option>Mavic / Inspire</option>
              <option>رصد واستطلاع</option>
            </select>
          </label>
          <label className="field">
            <span>Portfolio</span>
            <input name="portfolio" type="url" placeholder="https://" />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            تقديم الطلب
          </button>
        </form>
      </div>
    </section>
  )
}
