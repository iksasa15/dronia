const PILLARS = [
  {
    num: '01',
    title: 'تمكين القاعات والمنسّقين',
    text: 'إمكانية إدراج التصوير الجوّي ضمن الباقات لرفع قيمة العرض، مع مراعاة اشتراطات الجهات المختصة.',
  },
  {
    num: '02',
    title: 'دعم الطيّارين',
    text: 'طلبات أوضح، وضوح في المسار القانوني والتأميني، ليتفرّغ الطيّار للإخراج الفني.',
  },
  {
    num: '03',
    title: 'ثقة العميل',
    text: 'ربط العميل بشركاء موثوقين، وتجربة استخدام مريحة وآمنة للتوثيق الجوّي.',
  },
] as const

export function WhoWeAreSection() {
  return (
    <section id="about" className="section who" data-reveal aria-labelledby="who-title">
      <div className="shell">
        <p className="section-kicker section-kicker-en">WHO WE ARE</p>
        <h2 id="who-title" className="section-title">
          درونيا — بنية تحتية ذكية تربط الأطراف
        </h2>
        <div className="who-intro">
          <p>
            منصة تقنية تشغيلية تعمل على رفع معايير التوثيق الجوّي والرصد في
            المملكة العربية السعودية، وبما يسهّل على مقدّم الخدمة والمستفيد معاً.
          </p>
          <p>
            <strong className="text-accent">درونيا (Dronia)</strong> تهدف إلى
            سدّ الفجوة بين منظمي الفعاليات والمناسبات وبين نخبة طيّاري الدرون
            المرخّصين، من خلال تكامل منظم وتنسيق أخف بين الطرفين، وبنية تشغيل
            تدعم السوق بشكل عملي.
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
