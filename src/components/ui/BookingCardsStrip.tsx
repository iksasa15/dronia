import { useId } from 'react'
import type { DemoPhotographer } from '../../data/demoPhotographers'
import { PhotographerCard } from './PhotographerCard'

type BookingCardsStripProps = {
  heading: string
  description?: string
  cards: readonly DemoPhotographer[]
}

/** نماذج اختيار مصوّر (عرض منتج: صورة، اسم، سعر، تفاصيل). */
export function BookingCardsStrip({ heading, description, cards }: BookingCardsStripProps) {
  const headingId = useId().replace(/:/g, '')

  return (
    <div className="booking-cards-strip" aria-labelledby={`booking-strip-${headingId}`}>
      <div className="booking-cards-strip__head">
        <h3 id={`booking-strip-${headingId}`} className="booking-cards-strip__title">
          {heading}
        </h3>
        {description ? <p className="booking-cards-strip__desc">{description}</p> : null}
      </div>
      <ul className="photographers-grid" role="list">
        {cards.map((ph) => (
          <PhotographerCard key={ph.id} photographer={ph} nameHeadingLevel="h4" />
        ))}
      </ul>
    </div>
  )
}
