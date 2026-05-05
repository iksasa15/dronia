/** مصورون وهميون للعرض — غير مرتبطين بحسابات فعلية. */

export type DemoPhotographer = {
  id: string
  name: string
  priceFrom: string
  portfolioSrc: string
  portfolioAlt: string
  details: string
  /** نص إضافي يظهر في نافذة التفاصيل عند الضغط على البطاقة. */
  detailMore: string
}

export const DEMO_PHOTOGRAPHERS: readonly DemoPhotographer[] = [
  {
    id: 'p1',
    name: 'سعد محمد الحربي',
    priceFrom: 'يبدأ من ٩٠٠ ر.س للجلسة',
    portfolioSrc:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=640&q=80',
    portfolioAlt: 'لقطة جويّة لمنطقة طبيعية — نموذج أعمال',
    details:
      'الرياض · أكثر من ٥ سنوات · ترخيص ساري · تركيز على الزفاف والسينمائي · معدات Mavic 3 Pro',
    detailMore:
      'يقدّم جلسات تصوير جوّي منظّمة مع القاعة، مع التزام بوقت الدخول والخروج وبنود السلامة. يشمل التنسيق المبدئي مع منسّق الفعالية ومراجعة نطاق الطيران قبل اليوم بـ ٤٨ ساعة على الأقل (نموذج للعرض).',
  },
  {
    id: 'p2',
    name: 'نورة عبدالله القحطاني',
    priceFrom: 'يبدأ من ٧٥٠ ر.س للجلسة',
    portfolioSrc:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=640&q=80',
    portfolioAlt: 'منظر علوي لساحل — نموذج أعمال',
    details:
      'جدة · تصوير ملكات وأفراح · Inspire 2 · تأمين وتصاريح وفق الإجراءات المعتمدة للمنصة',
    detailMore:
      'تغطية ملتقطة للحفل مع التركيز على لحظات الدخول والتفاصيل الديكورية. يمكن تخصيص مدة الجلسة ضمن باقة القاعة بعد التنسيق مع الطرفين (نموذج للعرض).',
  },
  {
    id: 'p3',
    name: 'فيصل ماجد الدوسري',
    priceFrom: 'يبدأ من ١١٠٠ ر.س للجلسة',
    portfolioSrc:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=640&q=80',
    portfolioAlt: 'منظر ليلي من الأعلى — نموذج أعمال',
    details:
      'الدمام والمنطقة الشرقية · لقطات ليلية وإضاءة احتفالية · FPV وطيران منظّم داخل نطاق القاعة',
    detailMore:
      'مناسب للجولات القصيرة بعد العشاء مع التقيد بإضاءة القاعة وتعليمات السلامة. السعر يتغيّر حسب مدة الجولة والموقع ضمن نطاق التصريح (نموذج للعرض).',
  },
] as const
