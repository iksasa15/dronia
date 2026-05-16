/**
 * لقطات جوّية من مواقع داخل المملكة العربية السعودية (مصداقية محلية).
 * استبدل الروابط لاحقاً بأعمال فعلية من طيّاري درونيا عند توفرها.
 */
export type GalleryImage = {
  id: string
  src: string
  alt: string
  location: string
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'riyadh-aerial',
    src: 'https://images.unsplash.com/photo-1492763204268-fa0b1a55f143?auto=format&fit=crop&w=720&h=480&q=80',
    alt: 'منظر جوّي لمدينة الرياض، السعودية',
    location: 'الرياض',
  },
  {
    id: 'riyadh-skyline',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Riyadh_Skyline.jpg/1280px-Riyadh_Skyline.jpg',
    alt: 'أفق الرياض — حي العليا، السعودية',
    location: 'الرياض',
  },
  {
    id: 'al-ula',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/View_of_southern_Al_Ula_from_the_mountaintop_-_panoramio.jpg/1280px-View_of_southern_Al_Ula_from_the_mountaintop_-_panoramio.jpg',
    alt: 'منظر علوي لمنطقة العلا، السعودية',
    location: 'العلا',
  },
  {
    id: 'al-ula-elephant',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Elephant_rock%2C_Al-%27Ula.jpg/1280px-Elephant_rock%2C_Al-%27Ula.jpg',
    alt: 'صخرة الفيل في العلا، السعودية',
    location: 'العلا',
  },
]
