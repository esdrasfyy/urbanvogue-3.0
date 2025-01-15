"use client";
import { CarouselProductLoading } from "@/app/components/product/card-product.loading";
import { useSearchParams } from "next/navigation";
import React, { Ref, useEffect, useRef, useState } from "react";

interface IntersectionProps {
  componentRef: React.RefObject<any>;
  offsetRef: React.MutableRefObject<number>;
  limitRef: React.MutableRefObject<number>;
  count: React.MutableRefObject<number>;
}

export function IntersectionSearch() {
  const componentRef = useRef(null);
  const offsetRef = useRef<number>(1);
  const limitRef = useRef<number>(100);
  const count = useRef<number>(0);
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        count.current += 1;
        offsetRef.current = count.current * limitRef.current;

        // Adiciona o console.log para mostrar que o elemento foi visível
        console.log("Elemento passou pela interseção");
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

    const currentComponentRef = componentRef.current;

    if (currentComponentRef) observer.observe(currentComponentRef);

    return () => {
      if (currentComponentRef) observer.unobserve(currentComponentRef);
    };
  }, [componentRef]);

  return (
    <div ref={componentRef} role="status" className={`shadow-md rounded-lg animate-pulse bg-custom-secondaryBrand min-w-[225px] h-[387px] max-md:h-[375px] max-sm:h-[295px] max-sm:min-w-[185px]`}>
      <div className="flex rounded-lg items-center justify-center bg-custom-tertiaryBrand dark:bg-custom-tertiaryBrand h-2/3">
        <svg className="rounded-md w-10 h-10 text-custom-primaryBrand dark:text-custom-primaryBrand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="h-2.5 mx-auto mt-2 w-16 bg-custom-tertiaryBrand rounded-full dark:bg-custom-tertiaryBrand"></div>
      <div className="h-4 mx-4 mt-5 bg-custom-tertiaryBrand rounded-full dark:bg-custom-tertiaryBrand"></div>
      <div className="h-4 w-1/2 ml-4 mt-3 bg-custom-tertiaryBrand rounded-full dark:bg-custom-tertiaryBrand"></div>
      <div className="h-4 mt-5 mx-4 bg-custom-tertiaryBrand rounded-full dark:bg-custom-tertiaryBrand"></div>
    </div>
  );
}
