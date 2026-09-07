import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import './Lightbox.css'

const LightboxContext = createContext(null)

export function LightboxProvider({ children }) {
  const [image, setImage] = useState(null)

  const openLightbox = useCallback((src, alt) => {
    setImage({ src, alt })
  }, [])

  const closeLightbox = useCallback(() => {
    setImage(null)
  }, [])

  useEffect(() => {
    if (!image) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [image, closeLightbox])

  return (
    <LightboxContext.Provider value={openLightbox}>
      {children}
      {image ? (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Fechar">
            ×
          </button>
          <img
            className="lightbox__img"
            src={image.src}
            alt={image.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  return useContext(LightboxContext)
}
