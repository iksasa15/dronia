export type Partner = {
  id: string
  nameAr: string
  nameEn?: string
  /** اختصار للشعار النصي — يُستبدل لاحقاً بصورة logoSrc */
  monogram: string
  logoSrc?: string
  logoAlt?: string
}

export const PARTNERS: Partner[] = [
  {
    id: 'garage',
    nameAr: 'الكراج',
    nameEn: 'Innovation District',
    monogram: 'الكراج',
  },
  {
    id: 'safcsp',
    nameAr: 'SAFCSP',
    monogram: 'SAFCSP',
  },
  {
    id: 'gaca',
    nameAr: 'GACA',
    nameEn: 'الهيئة العامة للطيران المدني',
    monogram: 'GACA',
  },
]
