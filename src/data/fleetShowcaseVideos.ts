/**
 * استبدل روابط YouTube بأعمال الطيارين الفعلية (أو بإذن المصوّر).
 * يقبل معرّف الفيديو فقط، أو الرابط الكامل من youtube.com / youtu.be
 */
export type FleetShowcaseVideo = {
  id: string
  youtube: string
  title: string
  pilotName?: string
}

export function extractYoutubeId(input: string): string {
  const trimmed = input.trim()
  if (!trimmed) return ''

  try {
    const url = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`)
    if (url.hostname.includes('youtu.be')) {
      return url.pathname.slice(1).split('/')[0] ?? ''
    }
    const v = url.searchParams.get('v')
    if (v) return v
    const embed = url.pathname.match(/\/embed\/([^/?]+)/)
    if (embed?.[1]) return embed[1]
  } catch {
    /* معرّف خام */
  }

  return trimmed
}

/** عروض توضيحية — حدّث الروابط عند توفر أعمال السرب */
export const FLEET_SHOWCASE_VIDEOS: FleetShowcaseVideo[] = [
  {
    id: 'demo-1',
    youtube: 'https://www.youtube.com/watch?v=0pOq0WZ3cA0',
    title: 'لقطة جوّية — طبيعة ومناظر',
    pilotName: 'عرض توضيحي',
  },
  {
    id: 'demo-2',
    youtube: 'https://www.youtube.com/watch?v=609393EIpqE',
    title: 'تصوير جوّي سينمائي',
    pilotName: 'عرض توضيحي',
  },
  {
    id: 'demo-3',
    youtube: 'https://www.youtube.com/watch?v=1EiC9bvG4Uo',
    title: 'منظور علوي للفعالية',
    pilotName: 'عرض توضيحي',
  },
]
