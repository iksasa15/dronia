import { useTheme } from '../../theme/useTheme.ts'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={
        isDark ? 'بدّل للوضع الفاتح' : 'ارجع للوضع الغامق'
      }
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀️' : '🌙'}
      </span>
      <span className="theme-toggle__label">{isDark ? 'فاتح' : 'غامق'}</span>
    </button>
  )
}
