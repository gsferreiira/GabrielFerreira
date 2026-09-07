import { useLightbox } from './LightboxContext.jsx'

function Figure({ src, alt, caption }) {
  const openLightbox = useLightbox()

  return (
    <figure className="cs-figure">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="cs-figure__img"
        onClick={() => openLightbox(src, alt)}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export default Figure
