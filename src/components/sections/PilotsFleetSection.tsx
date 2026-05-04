const BENEFITS = [
  {
    num: '01',
    title: 'طلبات تجيك جاهزة',
    text: 'أقل دوران على البحث عن عميل؛ نساعد يوصلك شغل منظم يوم الفعالية.',
  },
  {
    num: '02',
    title: 'غطاء قانوني أوضح',
    text: 'مسار التصاريح والتأمين يتبلور معاك حسب السياسات — عشان تطير براحة بال.',
  },
  {
    num: '03',
    title: 'دخل يثبت مع خبرتك',
    text: 'عوائد تتناسب مع مستواك ومعداتك ونوع الخدمة اللي تقدّمها.',
  },
] as const

export function PilotsFleetSection() {
  return (
    <section id="pilots" className="section pilots" aria-labelledby="pilots-title">
      <div className="shell halls-layout pilots-layout">
        <div className="halls-copy">
          <p className="section-kicker section-kicker-en">ELITE FLEET</p>
          <h2 id="pilots-title" className="section-title">
            شبكة طيّارين نخبة
          </h2>
          <p className="halls-lead">
            إذا أنت مرخّص وتبي شغل أنظف وطلبات أقلّ لفّة، انضم لشبكة درونيا — ندعمك
            تشغيلياً ونخلي تركيزك على الإخراج الفني.
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
            طلب انضمام طيّار
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
            <span>حالة ترخيص GACA</span>
            <select name="license" defaultValue="">
              <option value="" disabled>
                اختَر…
              </option>
              <option>مرخّص — مستوى معتمد</option>
              <option>شهادات ثانية معتمدة</option>
              <option>لسه قيد الإصدار</option>
            </select>
          </label>
          <label className="field">
            <span>تخصّصك</span>
            <select name="spec" defaultValue="">
              <option value="" disabled>
                وش أغلب شغلك؟
              </option>
              <option>FPV</option>
              <option>تصوير داخلي</option>
              <option>سينمائي</option>
              <option>Mavic / Inspire</option>
              <option>رصد واستطلاع</option>
            </select>
          </label>
          <label className="field">
            <span>رابط أعمالك (بورتفوليو)</span>
            <input name="portfolio" type="url" placeholder="https://" />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            أرسل طلب الانضمام
          </button>
        </form>
      </div>
    </section>
  )
}
