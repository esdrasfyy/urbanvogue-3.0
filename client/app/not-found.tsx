import React from "react";
import { MdContactSupport } from "react-icons/md";
import { IoHome, IoReloadCircle } from "react-icons/io5";
import { trans } from "./libs/i18n.lib";
import { LinkArrow } from "./components/ui/links/link-arrow.ui";

export default function NotFound() {
  return (
    <main className="min-h-[100vh] w-full flex flex-col gap-10 max-md:pt-[16vh] pt-[25vh] pb-[20vh] max-md:pb-[12vh] px-6 justify-between items-center container-404 max-w-[1250px] mx-auto">
      <section className="flex w-full justify-between items-center max-md:flex-col-reverse">
        <div className="max-w-96 w-full flex flex-col gap-5 max-md:items-center max-md:text-center">
          <h1 className="font-semibold text-3xl w-fit tracking-wider max-sm:text-2xl">{trans.t("page not found")}</h1>
          <p className="max-w-80 tracking-wider">{trans.t("the page you are looking for does not exist or could not be found.")}</p>
          <LinkArrow content="go to home" href="/" />
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
            <h4 className="text-xl font-semibold text-center max-sm:text-base uppercase">{trans.t("return")}</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">{trans.t("if you get lost, go back to the home page and explore all the sections to find what you're looking for.")}</p>
          </div>
        </div>

        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <IoReloadCircle />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base uppercase">{trans.t("reload")}</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">{trans.t("if the information is incorrect or outdated, try reloading the page to see the correct data.")}</p>
          </div>
        </div>

        <div className="w-full h-full border border-custom-accentColor shadow-md rounded-md flex justify-between py-3">
          <div className="text-7xl text-custom-accentColor flex items-center justify-center pl-5 max-sm:text-5xl">
            <MdContactSupport />
          </div>
          <div className=" px-5 flex flex-col items-center justify-center gap-3">
            <h4 className="text-xl font-semibold text-center max-sm:text-base uppercase">{trans.t("support")}</h4>
            <p className="text-sm max-w-80 opacity-60 text-center max-sm:text-xs">{trans.t("if you need assistance, please reach out to our support. We are here to help resolve any issues.")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
