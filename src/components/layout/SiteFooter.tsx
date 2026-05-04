const FOOTER_LINKS = [
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#gallery', label: 'معرض الشغل' },
  { href: '#pilots', label: 'الطيّارين' },
  { href: '#halls', label: 'بوابة القاعات' },
] as const

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <span className="logo-mark footer-logo">DRONIA</span>
          <p className="footer-tag">نخلي التصوير الجوّي سهل على القاعة والعميل</p>
        </div>
        <nav className="footer-nav" aria-label="روابط سفلية">
          {FOOTER_LINKS.map(({ href, label }, i) => (
            <span key={href}>
              <a href={href}>{label}</a>
              {i < FOOTER_LINKS.length - 1 ? (
                <span className="footer-sep" aria-hidden="true">
                  {' '}
                  /{' '}
                </span>
              ) : null}
            </span>
          ))}
        </nav>
        <p className="footer-copy">© 2026 درونيا DRONIA — كل الحقوق لنا.</p>
      </div>
    </footer>
  )
}
