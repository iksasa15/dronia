import { ThemeToggle } from '../ui/ThemeToggle'
import { DroniaMark } from '../ui/DroniaMark'

const NAV_LINKS = [
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#gallery', label: 'معرض الأعمال' },
  { href: '#pilots', label: 'الطيّارون' },
  { href: '#halls', label: 'بوابة القاعات' },
  { href: '#faq', label: 'الأسئلة الشائعة' },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#" className="logo-block logo-block--row" aria-label="درونيا — الصفحة الرئيسية">
        <DroniaMark className="logo-mark-svg" size={38} />
        <span className="logo-text-stack">
          <span className="logo-mark">DRONIA</span>
          <span className="logo-tag">
            التوثيق الجوّي للمناسبات — بمعايير الترخيص والتنسيق
          </span>
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
