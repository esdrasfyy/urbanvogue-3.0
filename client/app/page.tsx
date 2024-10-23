"use client";
import { EmblaOptionsType } from "embla-carousel";
import { CarouselProducts } from "./components/carousel/product/corousel-product";
import { CarouselHomepage } from "./components/carousel/homepage/carousel-homepage";
import { CarouselBrands } from "./components/carousel/homepage/carousel-brands";
import { CarouselCategories } from "./components/carousel/homepage/carousel-categories";
import { TopProducts } from "./components/home/top-products";
import { MiniCardProduct } from "./components/product/mini-card-product";
import { MdBeenhere, MdContactSupport, MdNavigateNext, MdPayments } from "react-icons/md";
import { InputDefault } from "./components/ui/inputs/input-default";
import { useForm } from "react-hook-form";
import { InputsLoginI, SchemaLoginI } from "./login/types/types-login";
import { yupResolver } from "@hookform/resolvers/yup";
import { BackToTop } from "./components/back-to-top/back-to-top";
import { GridCategories } from "./components/home/grid-categories";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 8;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const OPTIONS2: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT2 = 2;
  const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys());

  const OPTIONS3: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT3 = 12;
  const SLIDES3 = Array.from(Array(SLIDE_COUNT3).keys());

  const OPTIONS4: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT4 = 22;
  const SLIDES4 = Array.from(Array(SLIDE_COUNT4).keys());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLoginI>({ resolver: yupResolver(SchemaLoginI) });

  const urls = ["https://static.ecosweb.com.br/public/produtos/plus-size-feminino/conjunto/conjunto-azul-marinho-em-canelado_374121_301_1.webp", "https://static.ecosweb.com.br/public/produtos/plus-size-feminino/conjunto/conjunto-azul-marinho-em-canelado_374121_301_2.webp"];

  return (
    <main className="pt-28 m-auto max-w-[1250px] flex flex-col gap-20 px-3 relative">
      <GridCategories />
      <CarouselCategories slides={SLIDES4} options={OPTIONS4} />
      <CarouselProducts slides={SLIDES} options={OPTIONS} />
      <TopProducts />
      <CarouselBrands slides={SLIDES3} options={OPTIONS3} />
      <CarouselProducts slides={SLIDES} options={OPTIONS} />
      <CarouselHomepage slides={SLIDES2} options={OPTIONS2} />
      <TopProducts />
      <CarouselProducts slides={SLIDES} options={OPTIONS} />
      <section>
        <video src="https://firebasestorage.googleapis.com/v0/b/urban-vogue-br.appspot.com/o/images%2Fslogan.mp4?alt=media&token=f806cf48-9b51-4266-bfaf-ca36ff514ce8" muted playsInline loop autoPlay className="rounded-md shadow-md"></video>
      </section>
      <CarouselProducts slides={SLIDES} options={OPTIONS} />
      <CarouselProducts slides={SLIDES} options={OPTIONS} />
      <section className="w-full gap-6 flex max-md:flex-col">
        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdBeenhere />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base">CONFIDENCE</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">Buyer Protection safeguards your purchase from the moment you order until it reaches your door.</p>
          </div>
        </div>
        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdPayments />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base">SECURE PAYMENT</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">Pay with the world’s most popular and secure payment methods. Return money within 30 days.</p>
          </div>
        </div>
        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdContactSupport />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base">24/7 HELP CENTER</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">Enjoy 24/7 assistance to ensure a hassle-free and smooth shopping experience at any time.</p>{" "}
          </div>
        </div>
      </section>
      <BackToTop />
    </main>
  );
}
