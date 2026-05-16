import { GALLERY_IMAGES } from '../../data/galleryImages'

export function GallerySection() {
  return (
    <section id="gallery" className="section gallery" data-reveal aria-labelledby="gallery-title">
      <div className="shell">
        <p className="section-kicker">معرض الأعمال</p>
        <h2 id="gallery-title" className="section-title">
          نماذج من اللقطات الجوّية
        </h2>
        <p className="section-lead gallery-intro">
          لقطات من داخل المملكة — الرياض والعلا وغيرها. يُستبدل لاحقاً بأعمال فعلية
          لطيّاري السرب عند الإطلاق.
        </p>
        <ul className="gallery-grid">
          {GALLERY_IMAGES.map((img) => (
            <li key={img.id} className="gallery-cell">
              <img
                src={img.src}
                alt={img.alt}
                width={720}
                height={480}
                loading="lazy"
                decoding="async"
                className="gallery-img"
              />
              <span className="gallery-cell__location">{img.location}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
