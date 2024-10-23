"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { PropType } from "../types/carousel-types";

export const CarouselHomepage: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section>
      <div className="w-full h-[450px] flex max-sm:flex-col max-sm:h-[380px] max-sm:gap-3">
        <div className="w-3/4 overflow-hidden h-full mr-5 max-sm:w-full rounded-md" ref={emblaRef}>
          <ul className="h-full embla__container flex">
            {slides.map((index) => (
              <li className="relative h-full mr-6 transform translate-x-0 translate-y-0 translate-z-0 flex-shrink-0 w-full" key={index}>
                <Image className="rounded-md shadow-md" src="https://urbanvogue.cloud/_next/static/media/propaganda1.72ee171a.webp" alt="image" fill />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4 h-full flex flex-col gap-6 max-sm:flex-row max-sm:gap-3 max-sm:w-full">
          <div className="relative w-full h-full max-sm:max-h-[185px]">
            <Image className="rounded-md shadow-md" src="https://urbanvogue.cloud/_next/static/media/propaganda2.4f4e6096.webp" fill alt="image" />
          </div>
          <div className="relative w-full h-full max-sm:max-h-[185px]">
            <Image className="rounded-md shadow-md" src="https://urbanvogue.cloud/_next/static/media/propaganda1.72ee171a.webp" fill alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};
