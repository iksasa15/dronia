const PILLS = ['مرخّص', 'GACA', 'شراكات B2B'] as const

const STATS = [
  { value: '+120', label: 'طيّار مسجّل' },
  { value: '45', label: 'قاعة شريك' },
  { value: '2000+', label: 'فعالية موثّقة' },
] as const

export function TrustRibbon() {
  return (
    <div className="trust-ribbon shell" aria-label="مؤشرات الثقة">
      <ul className="trust-pills" role="list">
        {PILLS.map((label) => (
          <li key={label}>
            <span className="trust-pill">{label}</span>
          </li>
        ))}
      </ul>
      <div className="trust-stats" role="group" aria-label="أرقام تقريبية — قابلة للربط بالبيانات الفعلية">
        {STATS.map(({ value, label }) => (
          <div key={label} className="trust-stat">
            <span className="trust-stat__value">{value}</span>
            <span className="trust-stat__label">{label}</span>
          </div>
        ))}
      </div>
      <p className="trust-ribbon-note">الأرقام أعلاه للعرض التوضيحي ويمكن ربطها لاحقاً بالبيانات الحقيقية.</p>
    </div>
  )
}
