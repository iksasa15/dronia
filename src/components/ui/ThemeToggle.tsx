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
        isDark
          ? 'التبديل إلى المظهر الفاتح'
          : 'التبديل إلى المظهر الداكن'
      }
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '☀️' : '🌙'}
      </span>
      <span className="theme-toggle__label">
        {isDark ? 'مظهر فاتح' : 'مظهر داكن'}
      </span>
    </button>
  )
}
