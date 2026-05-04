const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=720&q=80',
    alt: 'لقطة جويّة لمنطقة طبيعية',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=720&q=80',
    alt: 'منظر علوي لساحل',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=720&q=80',
    alt: 'منظر جوّي لغابة وجبال',
  },
  {
    src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=720&q=80',
    alt: 'منظر ليلي من الأعلى',
  },
] as const

export function GallerySection() {
  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
      <div className="shell">
        <p className="section-kicker">معرض الأعمال</p>
        <h2 id="gallery-title" className="section-title">
          نماذج من اللقطات الجوّية
        </h2>
        <p className="section-lead gallery-intro">
          صور توضيحية من أرشيف نمطي للعرض؛ يُستبدل لاحقاً بأعمال فعلية للمنصة.
        </p>
        <ul className="gallery-grid">
          {IMAGES.map((img) => (
            <li key={img.src} className="gallery-cell">
              <img
                src={img.src}
                alt={img.alt}
                width={720}
                height={480}
                loading="lazy"
                decoding="async"
                className="gallery-img"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
