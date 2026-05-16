import { useLayoutEffect, useState } from 'react'
import type { RegistrationRole } from '../../data/registrationTerms'
import { ClientConsultationForm } from '../forms/ClientConsultationForm'
import { PartnerRegistrationForm } from '../forms/PartnerRegistrationForm'
import { PilotRegistrationForm } from '../forms/PilotRegistrationForm'

const ROLES: {
  id: RegistrationRole
  title: string
  description: string
  hash: string
}[] = [
  {
    id: 'pilot',
    title: 'مصوّر / طيّار درون',
    description: 'انضم لسرب الكباتن المرخّصين',
    hash: 'register-pilot',
  },
  {
    id: 'client',
    title: 'عميل',
    description: 'احجز تصويراً جوّياً لمناسبتك',
    hash: 'register-client',
  },
  {
    id: 'partner',
    title: 'شريك',
    description: 'قاعات، منسّقون، وجهات تشغيلية',
    hash: 'register-partner',
  },
]

function roleFromHash(hash: string): RegistrationRole {
  if (hash.includes('pilot')) return 'pilot'
  if (hash.includes('partner')) return 'partner'
  if (hash.includes('client')) return 'client'
  return 'client'
}

export function RegistrationHubSection() {
  const [role, setRole] = useState<RegistrationRole>(() =>
    roleFromHash(typeof window !== 'undefined' ? window.location.hash : ''),
  )

  useLayoutEffect(() => {
    const syncRoleFromHash = () => setRole(roleFromHash(window.location.hash))
    syncRoleFromHash()
    window.addEventListener('hashchange', syncRoleFromHash)
    window.addEventListener('popstate', syncRoleFromHash)
    return () => {
      window.removeEventListener('hashchange', syncRoleFromHash)
      window.removeEventListener('popstate', syncRoleFromHash)
    }
  }, [])

  const selectRole = (next: RegistrationRole, hash: string) => {
    setRole(next)
    const base = window.location.pathname + window.location.search
    window.history.replaceState(null, '', `${base}#${hash}`)
  }

  return (
    <section
      id="register"
      className="section register-hub"
      data-reveal
      aria-labelledby="register-title"
    >
      <div className="shell register-hub-shell">
        <div className="register-hash-anchors" aria-hidden="true">
          {ROLES.map((item) => (
            <div key={item.id} id={item.hash} className="register-hash-anchor" />
          ))}
        </div>

        <header className="register-hub-intro">
          <p className="section-kicker">التسجيل</p>
          <h2 id="register-title" className="register-hub-title">
            سجّل مع درونيا
          </h2>
          <p className="section-lead register-hub-lead">
            اختر نوع تسجيلك — لكل فئة نموذج وشروط خاصة (تُستكمل لاحقاً)
          </p>
        </header>

        <div className="register-tabs" role="tablist" aria-label="نوع التسجيل">
          {ROLES.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`register-tab-${item.id}`}
              aria-selected={role === item.id}
              aria-controls={`register-panel-${item.id}`}
              className={`register-tab${role === item.id ? ' register-tab--active' : ''}`}
              onClick={() => selectRole(item.id, item.hash)}
            >
              <span className="register-tab__title">{item.title}</span>
              <span className="register-tab__desc">{item.description}</span>
            </button>
          ))}
        </div>

        <div
          id={`register-panel-${role}`}
          role="tabpanel"
          aria-labelledby={`register-tab-${role}`}
          className="register-panel"
        >
          {role === 'pilot' ? (
            <PilotRegistrationForm successAnchorId="register-success" />
          ) : null}
          {role === 'client' ? (
            <ClientConsultationForm successAnchorId="register-success" />
          ) : null}
          {role === 'partner' ? (
            <PartnerRegistrationForm successAnchorId="register-success" />
          ) : null}
        </div>
      </div>
    </section>
  )
}
