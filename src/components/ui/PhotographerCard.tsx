import { useCallback, useId, useRef, type KeyboardEvent, type MouseEvent } from 'react'
import type { DemoPhotographer } from '../../data/demoPhotographers'

type PhotographerCardProps = {
  photographer: DemoPhotographer
  /** عند وجود عنوان h3 فوق القائمة (مثل شريط الحجز) استخدم h4 للاسم. */
  nameHeadingLevel?: 'h3' | 'h4'
  /** إن كان false لا يُفتح حوار التفاصيل (عرض للقراءة فقط). */
  interactive?: boolean
}

export function PhotographerCard({
  photographer: ph,
  nameHeadingLevel = 'h3',
  interactive = true,
}: PhotographerCardProps) {
  const NameTag = nameHeadingLevel
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogTitleId = useId().replace(/:/g, '')

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal()
  }, [])

  const closeDialog = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  const onDialogClick = useCallback((e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      closeDialog()
    }
  }, [closeDialog])

  const onKeyTrigger = useCallback(
    (e: KeyboardEvent) => {
      if (!interactive) return
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        openDialog()
      }
    },
    [interactive, openDialog]
  )

  const body = (
    <>
      <div className="photographer-card__media">
        <img
          src={ph.portfolioSrc}
          alt={ph.portfolioAlt}
          width={640}
          height={400}
          loading="lazy"
          decoding="async"
          className="photographer-card__img"
        />
      </div>
      <div className="photographer-card__body">
        <NameTag className="photographer-card__name">{ph.name}</NameTag>
        <p className="photographer-card__price">{ph.priceFrom}</p>
        <p className="photographer-card__details">{ph.details}</p>
        {interactive ? (
          <span className="photographer-card__hint">اضغط للتفاصيل</span>
        ) : null}
      </div>
    </>
  )

  return (
    <li
      className={`photographer-card${interactive ? ' photographer-card--interactive' : ''}`}
    >
      {interactive ? (
        <button
          type="button"
          className="photographer-card__trigger"
          onClick={openDialog}
          onKeyDown={onKeyTrigger}
          aria-haspopup="dialog"
          aria-controls={`photographer-dialog-${ph.id}`}
        >
          {body}
        </button>
      ) : (
        <div className="photographer-card__static">{body}</div>
      )}

      {interactive ? (
        <dialog
          ref={dialogRef}
          id={`photographer-dialog-${ph.id}`}
          className="photographer-dialog"
          aria-labelledby={`photographer-dialog-title-${dialogTitleId}`}
          onClick={onDialogClick}
        >
          <div
            className="photographer-dialog__panel"
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <button type="button" className="photographer-dialog__close" onClick={closeDialog}>
              إغلاق
            </button>
            <div className="photographer-dialog__media">
              <img
                src={ph.portfolioSrc}
                alt=""
                width={960}
                height={600}
                loading="lazy"
                decoding="async"
                className="photographer-dialog__img"
              />
            </div>
            <div className="photographer-dialog__body">
              <h2
                id={`photographer-dialog-title-${dialogTitleId}`}
                className="photographer-dialog__title"
              >
                {ph.name}
              </h2>
              <p className="photographer-dialog__price">{ph.priceFrom}</p>
              <p className="photographer-dialog__lead">{ph.details}</p>
              <p className="photographer-dialog__more">{ph.detailMore}</p>
              <div className="photographer-dialog__actions">
                <a
                  className="btn btn-primary btn-block"
                  href="#halls"
                  onClick={closeDialog}
                  autoFocus
                >
                  احجز الآن
                </a>
              </div>
            </div>
          </div>
        </dialog>
      ) : null}
    </li>
  )
}
