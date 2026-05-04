import { ThemeToggle } from '../ui/ThemeToggle'

const NAV_LINKS = [
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#gallery', label: 'معرض الشغل' },
  { href: '#pilots', label: 'الطيّارين' },
  { href: '#partners', label: 'شركائنا' },
  { href: '#halls', label: 'بوابة القاعات' },
] as const

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#" className="logo-block" aria-label="درونيا — الصفحة الرئيسية">
        <span className="logo-mark">DRONIA</span>
        <span className="logo-tag">تصوير مناسباتك من فوق — بترتيب وترخيص</span>
      </a>
      <div className="site-header-actions">
        <nav className="site-nav" aria-label="تنقل رئيسي">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="site-nav-link">
              {label}
            </a>
          ))}
        </nav>
        <div className="site-header-tools">
          <button type="button" className="lang-btn" aria-label="نسخة إنجليزية (قريباً)">
            EN
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
