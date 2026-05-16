import { useId, useState, type FormEvent } from 'react'
import { TermsConsent } from './TermsConsent'

const OCCASION_TYPES = ['عرس', 'فعالية', 'مؤتمر', 'حفلة'] as const

type ClientConsultationFormProps = {
  successAnchorId?: string
}

export function ClientConsultationForm({
  successAnchorId = 'register-success',
}: ClientConsultationFormProps) {
  const formId = useId().replace(/:/g, '')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setSubmitted(true)
    form.reset()
    requestAnimationFrame(() => {
      document.getElementById(successAnchorId)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  }

  if (submitted) {
    return (
      <div id={successAnchorId} className="register-form-success" role="status">
        <p className="register-form-success__title">تم استلام طلبك!</p>
        <p className="register-form-success__text">
          بنتواصل معك خلال 24 ساعة لترتيب جلسة الاستشارية المجانية.
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setSubmitted(false)}>
          طلب جديد
        </button>
      </div>
    )
  }

  return (
    <form
      className="lead-form client-form"
      onSubmit={onSubmit}
      aria-labelledby={`client-form-title-${formId}`}
    >
      <header className="pilot-form__header">
        <h3 id={`client-form-title-${formId}`} className="pilot-form__title">
          تسجيل عميل
        </h3>
        <p className="pilot-form__lead">احجز جلسة استشارية أو اطلب تغطية جوّية</p>
      </header>

      <label className="field">
        <span>الاسم</span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label className="field">
        <span>رقم الجوال</span>
        <input name="phone" type="tel" required autoComplete="tel" placeholder="05xxxxxxxx" />
      </label>
      <label className="field">
        <span>البريد الإلكتروني (اختياري)</span>
        <input name="email" type="email" autoComplete="email" />
      </label>
      <label className="field">
        <span>نوع المناسبة</span>
        <select name="occasionType" required defaultValue="">
          <option value="" disabled>
            اختر نوع التغطية
          </option>
          {OCCASION_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>المدينة</span>
        <input name="city" type="text" required autoComplete="address-level2" />
      </label>

      <TermsConsent role="client" name="clientTerms" />

      <button type="submit" className="btn btn-primary btn-block btn-lg">
        احجز جلسة استشارية مجانية
      </button>
    </form>
  )
}
