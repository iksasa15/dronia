import { useId, useState, type FormEvent } from 'react'
import { TermsConsent } from './TermsConsent'

const GACA_LICENSE_TYPES = [
  'رخصة GACA — فئة تجارية',
  'فئة 107 / ما يعادلها دولياً',
  'تصريح تشغيل GACA',
  'أخرى',
] as const

const DRONE_TYPES = [
  'DJI Mavic / Air / Mini Pro',
  'DJI Inspire',
  'FPV مخصّص',
  'Autel',
  'أخرى',
] as const

const SPECIALTIES = [
  { id: 'weddings', label: 'أعراس' },
  { id: 'events', label: 'فعاليات' },
  { id: 'conferences', label: 'مؤتمرات' },
  { id: 'real-estate', label: 'عقاري' },
  { id: 'construction', label: 'إنشاءات' },
  { id: 'agriculture', label: 'زراعي' },
  { id: 'other', label: 'أخرى' },
] as const

const WEEK_DAYS = [
  'الأحد',
  'الإثنين',
  'الثلاثاء',
  'الأربعاء',
  'الخميس',
  'الجمعة',
  'السبت',
] as const

const EXPERIENCE_YEARS = ['أقل من سنة', '1–2 سنة', '3–5 سنوات', 'أكثر من 5 سنوات'] as const

type PilotRegistrationFormProps = {
  successAnchorId?: string
}

export function PilotRegistrationForm({
  successAnchorId = 'register-success',
}: PilotRegistrationFormProps) {
  const formId = useId().replace(/:/g, '')
  const [submitted, setSubmitted] = useState(false)
  const [showOtherSpecialty, setShowOtherSpecialty] = useState(false)
  const [formError, setFormError] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const specialties = form.querySelectorAll<HTMLInputElement>(
      'input[name="specialties"]:checked',
    )
    if (specialties.length === 0) {
      setFormError('اختَر مجالاً واحداً على الأقل.')
      return
    }
    setFormError('')
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setSubmitted(true)
    form.reset()
    setShowOtherSpecialty(false)
    requestAnimationFrame(() => {
      document.getElementById(successAnchorId)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  }

  if (submitted) {
    return (
      <div id={successAnchorId} className="register-form-success" role="status">
        <p className="register-form-success__title">شكراً لك كابتن!</p>
        <p className="register-form-success__text">
          سنراجع طلبك خلال 48 ساعة ونتواصل معك على واتساب.
        </p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setSubmitted(false)}
        >
          تقديم طلب آخر
        </button>
      </div>
    )
  }

  return (
    <form
      className="lead-form pilot-form"
      onSubmit={onSubmit}
      aria-labelledby={`pilot-form-title-${formId}`}
    >
      <header className="pilot-form__header">
        <h3 id={`pilot-form-title-${formId}`} className="pilot-form__title">
          مرحبًا طيارنا!
        </h3>
        <p className="pilot-form__lead">املأ البيانات لتنضم لسربنا</p>
      </header>

      <fieldset className="form-section">
        <legend>البيانات الأساسية</legend>
        <label className="field">
          <span>الاسم الكامل</span>
          <input name="fullName" type="text" required autoComplete="name" />
        </label>
        <label className="field">
          <span>رقم الجوال (واتساب)</span>
          <input name="phone" type="tel" required autoComplete="tel" placeholder="05xxxxxxxx" />
        </label>
        <label className="field">
          <span>البريد الإلكتروني</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field">
          <span>المدينة</span>
          <input name="city" type="text" required autoComplete="address-level2" />
        </label>
      </fieldset>

      <fieldset className="form-section">
        <legend>البيانات المهنية</legend>
        <label className="field">
          <span>رخصة GACA (نوع الرخصة — ليس صورة الرخصة)</span>
          <select name="gacaLicenseType" required defaultValue="">
            <option value="" disabled>
              اختر نوع الرخصة
            </option>
            {GACA_LICENSE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>تاريخ انتهاء الرخصة</span>
          <input name="licenseExpiry" type="date" required />
        </label>
        <label className="field">
          <span>نوع الدرون الأساسي</span>
          <select name="droneType" required defaultValue="">
            <option value="" disabled>
              اختر نوع الدرون
            </option>
            {DRONE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </fieldset>

      <fieldset className="form-section">
        <legend>الخبرة</legend>
        <label className="field">
          <span>سنوات الخبرة في التصوير الجوّي</span>
          <select name="experienceYears" required defaultValue="">
            <option value="" disabled>
              اختر المدة
            </option>
            {EXPERIENCE_YEARS.map((years) => (
              <option key={years} value={years}>
                {years}
              </option>
            ))}
          </select>
        </label>
        <div className="field">
          <span className="field__label">المجالات</span>
          <div className="checkbox-grid" role="group" aria-label="مجالات التصوير">
            {SPECIALTIES.map(({ id, label }) => (
              <label key={id} className="checkbox-field">
                <input
                  type="checkbox"
                  name="specialties"
                  value={id}
                  onChange={(e) => {
                    if (id === 'other') setShowOtherSpecialty(e.target.checked)
                  }}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {showOtherSpecialty ? (
            <label className="field field--nested">
              <span>حدّد المجال الآخر</span>
              <input name="specialtyOther" type="text" placeholder="مثال: رياضة، سياحة…" />
            </label>
          ) : null}
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>السوشال والأعمال</legend>
        <label className="field">
          <span>رابط الانستقرام أو الموقع</span>
          <input name="socialLink" type="url" placeholder="https://" />
        </label>
        <p className="field__hint">أفضل أعمالك (3–5 روابط)</p>
        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} className="field">
            <span>رابط عمل {n}</span>
            <input
              name={`portfolio${n}`}
              type="url"
              placeholder="https://"
              required={n <= 3}
            />
          </label>
        ))}
      </fieldset>

      <fieldset className="form-section">
        <legend>التوفر</legend>
        <div className="field">
          <span className="field__label">الأيام المتاحة في الأسبوع</span>
          <div className="checkbox-grid checkbox-grid--days">
            {WEEK_DAYS.map((day) => (
              <label key={day} className="checkbox-field">
                <input type="checkbox" name="availableDays" value={day} />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>
        <fieldset className="radio-group">
          <legend className="radio-group__legend">هل أنت متفرّغ كلياً أم جزئياً؟</legend>
          <label className="radio-field">
            <input type="radio" name="availability" value="full" required />
            <span>متفرّغ كلياً</span>
          </label>
          <label className="radio-field">
            <input type="radio" name="availability" value="part" />
            <span>متفرّغ جزئياً</span>
          </label>
        </fieldset>
      </fieldset>

      <TermsConsent role="pilot" name="pilotTerms" />

      {formError ? (
        <p className="pilot-form__error" role="alert">
          {formError}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary btn-block btn-lg">
        سجّل الآن
      </button>
    </form>
  )
}
