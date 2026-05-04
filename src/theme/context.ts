import { createContext } from 'react'

export type Theme = 'dark' | 'light'

export type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export const THEME_STORAGE_KEY = 'dronia-theme'
