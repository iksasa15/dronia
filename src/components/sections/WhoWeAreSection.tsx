const PILLARS = [
  {
    num: '01',
    title: 'نقوّي شغل القاعات والمنسّقين',
    text: 'تقدر تضيف التصوير الجوّي ضمن باقاتك وترفع قيمة العرض — وإحنا نساعدك تمشي على اشتراطات الجهات بشكل مرتب.',
  },
  {
    num: '02',
    title: 'نرتّب يوم الطيّار',
    text: 'طلبات أوضح، تغطية تأمينية ومسار قانوني أوضح — عشان الطيّار يركّز على الإخراج مو على الضغط الإداري.',
  },
  {
    num: '03',
    title: 'راحة بال للعميل',
    text: 'العميل يبغى لقطات حلوة وآمنة؛ نربطه بشركاء نثق فيهم ونخلي التجربة مريحة.',
  },
] as const

export function WhoWeAreSection() {
  return (
    <section id="about" className="section who" aria-labelledby="who-title">
      <div className="shell">
        <p className="section-kicker section-kicker-en">WHO WE ARE</p>
        <h2 id="who-title" className="section-title">
          درونيا — الطبقة الذكية اللي تربط الكل
        </h2>
        <div className="who-intro">
          <p>
            إحنا منصة تشغيلية تشتغل على موضوع التوثيق الجوّي والرصد في السعودية —
            نبغى المعيار يكون أعلى وأبسط للي يقدّم الخدمة وللي يستقبلها.
          </p>
          <p>
            <strong className="text-accent">درونيا (Dronia)</strong> جت تسدّ فجوة
            بين من يدير الفعاليات والمناسبات، وبين نخبة طيّاري الدرون المرخّصين:
            نخلي التكامل سهل، والتنسيق بين الطرفين أخف — مو بس «تطبيق»، بل بنية
            تشغيل تخدم السوق فعلاً.
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
