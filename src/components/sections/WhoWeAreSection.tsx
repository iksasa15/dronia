const PILLARS = [
  {
    num: '01',
    title: 'تمكين قطاع الأعمال',
    text: 'تكامل سلس للقاعات والمنسّقين لإضافة التصوير الجوي كخدمة ترفع العوائد مع الالتزام باشتراطات الجهات.',
  },
  {
    num: '02',
    title: 'دعم الكفاءات',
    text: 'طلبات مجدولة، حماية قانونية، ودخل مستدام — ليركّز الطيّار على جودة الإخراج الفني.',
  },
  {
    num: '03',
    title: 'الموثوقية للعميل',
    text: 'توثيق احترافي وآمن للحظات الكبرى عبر شركاء يثق بهم العميل.',
  },
] as const

export function WhoWeAreSection() {
  return (
    <section id="about" className="section who" aria-labelledby="who-title">
      <div className="shell">
        <p className="section-kicker section-kicker-en">WHO WE ARE</p>
        <h2 id="who-title" className="section-title">
          درونيا — البنية التحتية الذكية
        </h2>
        <div className="who-intro">
          <p>
            منصة تقنية تشغيلية تُعيد صياغة معايير التوثيق الجوي والرصد في
            المملكة العربية السعودية.
          </p>
          <p>
            <strong className="text-accent">«درونيا (Dronia)»</strong> منصة
            تشغيلية متقدّمة تسدّ الفجوة بين تنظيم الفعاليات والمناسبات، وبين
            نخبة طيّاري الدرون المحترفين والمرخّصين — نمثّل البنية التحتية
            الذكية التي تضمن التكامل بين الجميع.
          </p>
        </div>
        <ul className="pillars-grid">
          {PILLARS.map((p) => (
            <li key={p.num} className="pillar-card">
              <span className="pillar-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
