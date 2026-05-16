import { useId, useState, type FormEvent } from 'react'
import { TermsConsent } from './TermsConsent'

const PARTNER_TYPES = [
  'قاعة أفراح',
  'منسّق فعاليات',
  'فندق / منتجع',
  'شركة / جهة',
  'أخرى',
] as const

const VOLUME_OPTIONS = ['من ١ إلى ٥', 'من ٦ إلى ١٥', 'أكثر من ١٥'] as const

type PartnerRegistrationFormProps = {
  successAnchorId?: string
}

export function PartnerRegistrationForm({
  successAnchorId = 'register-success',
}: PartnerRegistrationFormProps) {
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
        <p className="register-form-success__title">تم استلام طلب الشراكة!</p>
        <p className="register-form-success__text">
          فريق درونيا سيراجع طلبك ويتواصل معك خلال 48 ساعة عمل.
        </p>
        <button type="button" className="btn btn-ghost" onClick={() => setSubmitted(false)}>
          طلب جديد
        </button>
      </div>
    )
  }

  return (
    <form
      className="lead-form partner-form"
      onSubmit={onSubmit}
      aria-labelledby={`partner-form-title-${formId}`}
    >
      <header className="pilot-form__header">
        <h3 id={`partner-form-title-${formId}`} className="pilot-form__title">
          تسجيل شريك
        </h3>
        <p className="pilot-form__lead">قاعات، منسّقون، وجهات تشغيلية</p>
      </header>

      <fieldset className="form-section">
        <legend>بيانات المنشأة</legend>
        <label className="field">
          <span>نوع الشريك</span>
          <select name="partnerType" required defaultValue="">
            <option value="" disabled>
              اختر النوع
            </option>
            {PARTNER_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>اسم المنشأة / القاعة</span>
          <input name="organization" type="text" required autoComplete="organization" />
        </label>
        <label className="field">
          <span>اسم المسؤول</span>
          <input name="contactName" type="text" required autoComplete="name" />
        </label>
        <label className="field">
          <span>رقم الجوال</span>
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
        <label className="field">
          <span>عدد المناسبات شهرياً (تقريبي)</span>
          <select name="monthlyVolume" required defaultValue="">
            <option value="" disabled>
              يُرجى الاختيار
            </option>
            {VOLUME_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>ملاحظات (اختياري)</span>
          <textarea name="notes" rows={3} placeholder="نطاق التعاون أو متطلبات خاصة…" />
        </label>
      </fieldset>

      <TermsConsent role="partner" name="partnerTerms" />

      <button type="submit" className="btn btn-primary btn-block btn-lg">
        إرسال طلب الشراكة
      </button>
    </form>
  )
}
