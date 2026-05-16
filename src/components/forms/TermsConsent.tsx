import type { RegistrationRole } from '../../data/registrationTerms'
import { REGISTRATION_TERMS } from '../../data/registrationTerms'

type TermsConsentProps = {
  role: RegistrationRole
  name?: string
}

export function TermsConsent({ role, name = 'terms' }: TermsConsentProps) {
  const config = REGISTRATION_TERMS[role]

  return (
    <div className="terms-consent">
      <label className="checkbox-field checkbox-field--terms">
        <input type="checkbox" name={name} required />
        <span>{config.checkboxLabel}</span>
      </label>
      <p className="terms-consent__note">{config.placeholderNote}</p>
    </div>
  )
}
