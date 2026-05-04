import { ThemeToggle } from '../ui/ThemeToggle'

const NAV_LINKS = [
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#gallery', label: 'معرض الأعمال' },
  { href: '#pilots', label: 'الطيّارون' },
  { href: '#partners', label: 'شركاؤنا' },
  { href: '#halls', label: 'بوابة القاعات' },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#" className="logo-block" aria-label="درونيا — الصفحة الرئيسية">
        <span className="logo-mark">DRONIA</span>
        <span className="logo-tag">
          التوثيق الجوّي للمناسبات — بمعايير الترخيص والتنسيق
        </span>
      </a>
      <div className="site-header-actions">
        <nav className="site-nav" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="site-nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="site-header-tools">
          <button
            type="button"
            className="lang-btn"
            aria-label="النسخة الإنجليزية (قيد الإتاحة)"
          >
            EN
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
