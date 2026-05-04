const FOOTER_LINKS = [
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#gallery', label: 'معرض الأعمال' },
  { href: '#pilots', label: 'الطيّارون' },
  { href: '#halls', label: 'بوابة القاعات' },
] as const

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <span className="logo-mark footer-logo">DRONIA</span>
          <p className="footer-tag">
            منصة تسهّل التصوير الجوّي المرخّص للقاعات والمنسّقين والعملاء
          </p>
        </div>
        <nav className="footer-nav" aria-label="روابط ذيل الصفحة">
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
        <p className="footer-copy">© 2026 درونيا DRONIA. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
