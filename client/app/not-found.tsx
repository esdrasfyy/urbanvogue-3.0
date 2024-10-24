import React from "react";
import { MdContactSupport } from "react-icons/md";
import { InputSubmit } from "./components/ui/inputs/input-submit";
import { IoHome, IoReloadCircle } from "react-icons/io5";

export default function NotFound() {
  return (
    <main className="min-h-[100vh] w-full flex flex-col gap-10 max-md:pt-[16vh] pt-[25vh] pb-[20vh] max-md:pb-[12vh] px-6 justify-between items-center container-404 max-w-[1250px] mx-auto">
      <section className="flex w-full justify-between items-center max-md:flex-col-reverse">
        <div className="max-w-96 w-full flex flex-col gap-5">
          <h1 className="font-semibold text-3xl w-fit tracking-wider max-sm:text-2xl">Página não encontrada</h1>
          <p className="max-w-80 tracking-wider max-md:text-center">A página que você está buscando não existe ou não foi encontrada.</p>
          <InputSubmit type="submit" content="Ir para o inicio" icon="FaArrowRight" classname="w-full " />
        </div>
        <div title="404" id="page-404">
          404
        </div>
      </section>
      <section className="w-full gap-6 flex max-md:flex-col">
        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <IoHome />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base">Retorne</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">Se estiver perdido, volte para a página inicial e explore todas as seções para localizar o que você está procurando.</p>
          </div>
        </div>

        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <IoReloadCircle />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base">Atualize</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">Se a informação estiver errada ou desatualizada, tente recarregar a página para ver os dados corretos.</p>
          </div>
        </div>

        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdContactSupport />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base">Suporte</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">Se precisar de ajuda, entre em contato com nosso suporte. Estamos aqui para resolver qualquer problema.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
