import "./ItemCarousel.css"
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

const ItemCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, i) => (
            <Image
            key={i}
            src={src}
            width={500}
            height={500}
            alt={`item-${i}`}
            className=" embla__slide rounded-xl"
          />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ItemCarousel
