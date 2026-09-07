import { useState } from 'react'
import { useLightbox } from './LightboxContext.jsx'
import './Carousel.css'

function Carousel({ slides }) {
  const [index, setIndex] = useState(0)
  const openLightbox = useLightbox()
  const total = slides.length

  const go = (delta) => {
    setIndex((i) => (i + delta + total) % total)
  }

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <button
          className="carousel__nav carousel__nav--prev"
          onClick={() => go(-1)}
          aria-label="Foto anterior"
        >
          ‹
        </button>

        <img
          className="carousel__img"
          src={slides[index].src}
          alt={slides[index].alt}
          loading="lazy"
          onClick={() => openLightbox(slides[index].src, slides[index].alt)}
        />

        <button
          className="carousel__nav carousel__nav--next"
          onClick={() => go(1)}
          aria-label="Próxima foto"
        >
          ›
        </button>
      </div>

      {slides[index].caption ? (
        <p className="carousel__caption">{slides[index].caption}</p>
      ) : null}

      <div className="carousel__dots">
        {slides.map((s, i) => (
          <button
            key={s.src}
            className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
