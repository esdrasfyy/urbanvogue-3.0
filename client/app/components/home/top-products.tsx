import Image from "next/image";
import { ButtonPrimary } from "../ui/buttons/button-primary";
import { trans } from "@/app/libs/i18n.lib";

export function TopProducts() {
  return (
    <section className="w-full">
      <div className="mb-16 max-md:mb-6 border-l-4 px-4 py-1 rounded-md border-custom-accentColor bg-[var(--accent-color-10)] flex justify-between w-full items-center z-10">
        <h3 className="text-lg uppercase font-semibold tracking-widest">{trans.t("today's top 3")}</h3>
      </div>
      <div className="w-full h-64 flex gap-6 max-lg:flex-col max-lg:h-full">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-full h-full bg-custom-secondaryBrand rounded-md flex">
            <div className="min-h-full min-w-48 relative max-sm:min-w-36">
              <Image className="rounded-md shadow-md w-48 max-sm:w-36" src="https://static.ecosweb.com.br/public/produtos/plus-size-feminino/conjunto/conjunto-azul-marinho-em-canelado_374121_301_1.webp" alt="image" fill />
            </div>
            <div className="px-3 py-4 w-full flex flex-col gap-3 justify-between max-sm:p-2 max-sm:gap-0 max-sm:px-6">
              <h5 className="text-[10px] uppercase -tracking-tighter font-semibold">LOUISE VUITTON</h5>
              <h4 className="font-semibold line-clamp-2">Vestido Curto Rendeira Azul</h4>
              <p className="line-clamp-2 text-balance opacity-60 text-sm max-sm:text-xs">Deslumbre com nosso vestido curto em viscose estampada! Seu modelo evasê proporciona fluidez e conforto. Com decote frontal quadrado e alças ajustáveis para o ajuste perfeito...</p>
              <div className="flex gap-3 items-center w-full justify-center">
                <p className="text-xl font-semibold text-custom-accentColor">R$ 100,99</p>
                <span className="text-sm opacity-40 line-through">R$ 120,99</span>
              </div>
              <ButtonPrimary classname="max-sm:hidden" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
