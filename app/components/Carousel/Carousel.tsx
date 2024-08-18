'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import './css/embla.css'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type SlideType = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide flex flex-col gap-4" key={index}>
              <Image src={slide.image} alt={slide.title} className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] object-cover" width={1000} height={1000} />
              <div className="embla__slide__content flex flex-col gap-4">
                <h2 className='text-3xl '>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link className="border-b border-black w-fit" href={slide.link}>Voir plus</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel