import {
  extractYoutubeId,
  FLEET_SHOWCASE_VIDEOS,
} from '../../data/fleetShowcaseVideos'

type YoutubeEmbedProps = {
  videoId: string
  title: string
}

function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  if (!videoId) return null

  return (
    <iframe
      className="fleet-showcase__iframe"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}

export function FleetShowcaseSection() {
  const videos = FLEET_SHOWCASE_VIDEOS.map((video) => ({
    ...video,
    videoId: extractYoutubeId(video.youtube),
  })).filter((video) => video.videoId)

  return (
    <section
      id="showcase"
      className="section fleet-showcase"
      data-reveal
      aria-labelledby="showcase-title"
    >
      <div className="shell fleet-showcase-shell">
        <header className="fleet-showcase-intro">
          <p className="section-kicker">الشو</p>
          <h2 id="showcase-title" className="fleet-showcase-title">
            شاهد إبداعات سربنا
          </h2>
          <p className="section-lead fleet-showcase-lead">
            فيديوهات قصيرة من أعمال طيّاري السرب — أو أعمال بإذن المصوّرين إلى أن
            يكتمل الأرشيف الرسمي.
          </p>
        </header>

        {videos.length > 0 ? (
          <ul className="fleet-showcase-grid" role="list">
            {videos.map((video) => (
              <li key={video.id} className="fleet-showcase-card">
                <div className="fleet-showcase-embed">
                  <YoutubeEmbed videoId={video.videoId} title={video.title} />
                </div>
                <div className="fleet-showcase-card__body">
                  <h3 className="fleet-showcase-card__title">{video.title}</h3>
                  {video.pilotName ? (
                    <p className="fleet-showcase-card__meta">{video.pilotName}</p>
                  ) : null}
                  <a
                    className="fleet-showcase-card__link"
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    مشاهدة على YouTube
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="fleet-showcase-empty">
            قريباً — نضيف هنا أعمال السرب. يمكنك تحديث الروابط في ملف البيانات.
          </p>
        )}
      </div>
    </section>
  )
}
