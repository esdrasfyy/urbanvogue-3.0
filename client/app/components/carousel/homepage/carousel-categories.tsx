"use client";
import React, { useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "../product/sub-components/carousel-product-arrows";
import { trans } from "@/app/libs/i18n.lib";
import Image from "next/image";

export const CarouselCategories: React.FC<General.PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla w-full m-auto relative overflow-hidden">
      <div className="mb-16 max-md:mb-6 border-l-4 px-4 py-1 rounded-md border-custom-accentColor bg-[var(--accent-color-10)] flex justify-between w-full items-center z-10">
        <h3 className="text-lg uppercase font-semibold tracking-widest">{trans.t("categories")}</h3>
      </div>
      <div className="overflow-hidden mx-8 rounded-md" ref={emblaRef}>
        <div className="embla__container flex ml-3">
          {slides.map((index) => (
            <div className="mx-3 transform translate-x-0 translate-y-0 translate-z-0 flex-shrink-0 max-w-fit relative" key={index}>
              <Image className="rounded-full shadow-md text-[4rem] font-semibold flex items-center justify-center select-none w-[90px] h-[90px] border" src="https://ph-cdn3.ecosweb.com.br/Web/posthaus/mobile/menu/06_128.png" alt="image" width={90} height={90} />
              <h4 className="text-center uppercase mt-4 font-semibold text-sm">category</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-[60%] -left-4 z-0">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>
      <div className="absolute top-[60%] -right-4 z-0">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};
