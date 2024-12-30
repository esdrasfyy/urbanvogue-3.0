"use client";
import React, { useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./sub-components/carousel-product-dots";
import { PrevButton, NextButton, usePrevNextButtons } from "./sub-components/carousel-product-arrows";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { trans } from "@/app/libs/i18n.lib";
import { CardProduct } from "../../product/card-product";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/app/api/product/product.api";

export const CarouselProducts: React.FC<General.PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { data } = useQuery({
    queryKey: ["products-all"],
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: Product.getProductsAll,
  });
  console.log(data);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    autoplay.play();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla w-full m-auto">
      <div className="mb-16 max-md:mb-6 border-l-4 px-4 py-1 rounded-md border-custom-accentColor bg-[var(--accent-color-10)] flex justify-between w-full items-center">
        <h3 className="text-lg uppercase font-semibold tracking-widest">{trans.t("releases")}</h3>
      </div>
      <div className="overflow-hidden rounded-md" ref={emblaRef}>
        <ul className="embla__container flex">{data && data?.map((product) => <CardProduct product={product} key={product.id} />)}</ul>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} onClick={() => onDotButtonClick(index)} className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")} />
          ))}
        </div>
      </div>
    </section>
  );
};
