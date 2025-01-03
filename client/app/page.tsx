import { CarouselProducts } from "./components/carousel/product/corousel-product";
import { CarouselHomepage } from "./components/carousel/homepage/carousel-homepage";
import { CarouselBrands } from "./components/carousel/homepage/carousel-brands";
import { CarouselCategories } from "./components/carousel/homepage/carousel-categories";
import { TopProducts } from "./components/home/top-products";
import { MdBeenhere, MdContactSupport, MdPayments } from "react-icons/md";
import { GridCategories } from "./components/home/grid-categories";
import { trans } from "./libs/i18n.lib";

export default function Home() {
  return (
    <main className="pt-32 pb-14 m-auto max-w-[1250px] flex flex-col gap-20 px-3 relative">
      <GridCategories />
      <CarouselCategories />
      <CarouselProducts title="releases" queries="orderBy=created_at%asc&limit=10" />
      <TopProducts />
      <CarouselBrands title="brands" />
      <CarouselProducts title="popular" />
      <CarouselHomepage />
      <TopProducts />
      <CarouselProducts title="releases 2" />
      <section>
        <video src="https://firebasestorage.googleapis.com/v0/b/urban-vogue-br.appspot.com/o/images%2Fslogan.mp4?alt=media&token=f806cf48-9b51-4266-bfaf-ca36ff514ce8" muted playsInline loop autoPlay className="rounded-md shadow-md"></video>
      </section>
      <CarouselProducts title="releases 3" />
      <CarouselProducts title="releases 4" />
      <section className="w-full gap-6 flex max-md:flex-col">
        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdBeenhere />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base uppercase">{trans.t("confidence")}</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">{trans.t("buyer protection safeguards your purchase from the moment you order until it reaches your door.")}</p>
          </div>
        </div>
        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdPayments />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base uppercase">{trans.t("secure payment")}</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">{trans.t("pay with the world’s most popular and secure payment methods. Return money within 30 days.")}</p>
          </div>
        </div>
        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdContactSupport />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base uppercase">{trans.t("24/7 help center")}</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">{trans.t("enjoy 24/7 assistance to ensure a hassle-free and smooth shopping experience at any time.")}</p>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}
