import './embla.css';
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, i) => (
            <div key={i} className="embla__slide flex flex-col lg:flex-row items-center w-full gap-5 bg-gradient-to-r from-[#2A2A2A] to-[#161A2C] p-4 rounded-3xl z-10">
              <Image
                src={slide.img}
                alt="Episode"
                width={300}
                height={300}
                className="w-56 h-56 object-cover"
              />
              <div className="flex flex-col gap-4 justify-around md:w-[400px] 2xl:w-[600px]">
                <div className="bg-gradient-to-t from-[#379AE1] to-[#69BF77] bg-clip-text">
                  <p className="text-2xl md:text-4xl text-transparent font-medium">
                    {slide.title}
                  </p>
                </div>
                <p className="text-white font-medium text-sm md:text-base">
                  {slide.description}
                </p>
                <div className="flex text-white gap-5 items-center">
                  <div className="rounded-full bg-[#69BF77]">
                    <PlayCircleIcon className="h-8 w-8" />
                  </div>
                  <p>
                    <strong>Published:</strong> {slide.date.toDateString()}
                  </p>
                  <p>
                    <strong>Length:</strong> {slide.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
