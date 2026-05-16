export type RegistrationRole = 'pilot' | 'client' | 'partner'

export type RegistrationTermsConfig = {
  checkboxLabel: string
  placeholderNote: string
}

/** نصوص الموافقة — يُستبدل لاحقاً بروابط شروط فعلية لكل فئة */
export const REGISTRATION_TERMS: Record<RegistrationRole, RegistrationTermsConfig> = {
  pilot: {
    checkboxLabel:
      'أوافق على شروط وأحكام انضمام طيّاري الدرون وسياسة الخصوصية (يُحدَّث لاحقاً)',
    placeholderNote: 'سيتم نشر شروط الطيّارين واتفاقية التشغيل قريباً.',
  },
  client: {
    checkboxLabel:
      'أوافق على شروط وأحكام خدمة العملاء وسياسة الخصوصية (يُحدَّث لاحقاً)',
    placeholderNote: 'سيتم نشر شروط الحجز والاستخدام قريباً.',
  },
  partner: {
    checkboxLabel:
      'أوافق على شروط وأحكام شراكة القاعات والمنسّقين وسياسة الخصوصية (يُحدَّث لاحقاً)',
    placeholderNote: 'سيتم نشر اتفاقية الشركاء قريباً.',
  },
}
