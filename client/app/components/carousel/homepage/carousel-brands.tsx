"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { SiNike } from "react-icons/si";
import { trans } from "@/app/libs/i18n.lib";

export const CarouselBrands = ({ title }: { queries?: string; title: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
      dragFree: false,
      containScroll: false,
    },
    [AutoScroll({ playOnInit: true, speed: 2 })]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.plugins().autoScroll?.play();
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="mb-16 max-md:mb-6 border-l-4 px-4 py-1 rounded-md border-custom-accentColor bg-[var(--accent-color-10)] flex justify-between w-full items-center z-10">
        <h3 className="text-lg uppercase font-semibold tracking-widest">{trans.t(title)}</h3>
      </div>
      <div className="overflow-hidden rounded-md" ref={emblaRef}>
        <ul className="embla__container flex">
          {Array.from(Array(12).keys()).map((index) => (
            <li key={index} className="mx-3 bg-gradient-to-r from-black to-custom-secondaryBrand text-5xl max-sm:text-3xl text-custom-textColor w-36 max-sm:w-28 flex justify-center items-center rounded-md shadow-md pointer-events-none select-none transform translate-x-0 translate-y-0 translate-z-0 flex-shrink-0">
              <SiNike />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
