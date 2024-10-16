import React from "react";
import Image from "next/image";
import { BackToTop } from "./sub-components/back-to-top";
import { trans } from "@/app/libs/i18n.lib";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <BackToTop />
      <footer className="flex justify-center items-center w-full text-custom-textColor bg-custom-secondaryBrand py-5 border-y border-solid border-custom-textColor/35">
        <div className="flex justify-between w-full items-start max-w-[1050px] max-md:flex-col mx-4">
          <section className="w-full border-custom-textColor/30 max-md:border-b max-md:mb-4 max-md:pb-4">
            <h3 className="text-custom-accentColor font-medium mb-3 uppercase">
              {trans.t("account")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("your account")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("edit account")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("wallet")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("orders")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("gifts")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("help")}
              </li>
            </ul>
          </section>
          <section className="w-full border-custom-textColor/30 max-md:border-b max-md:mb-4 max-md:pb-4">
            <h3 className="text-custom-accentColor font-medium mb-3 uppercase">
              {trans.t("who we are")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("about urban vogue")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("accessibility")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("policies")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("cookies policy")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("privacy policy")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("urban vogue awards")}
              </li>
            </ul>
          </section>
          <section className="w-full border-custom-textColor/30 max-md:border-b max-md:mb-4 max-md:pb-4">
            <h3 className="text-custom-accentColor font-medium mb-3 uppercase">
              {trans.t("faqs")}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("how to buy")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("it's trustable")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("shipping and deadlines")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("devolution")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("methods payment")}
              </li>
              <li className="text-sm text-custom-textColor/60 uppercase cursor-pointer hover-effect hover-no-opacity max-md:text-xs">
                {trans.t("contact us")}
              </li>
            </ul>
          </section>
          <section className="w-full">
            <div>
              <h3 className="text-custom-accentColor font-medium mb-3 uppercase">
                {trans.t("contacts")}
              </h3>
              <ul>
                <li>
                  <h4 className="text-xs font-semibold uppercase mb-1 mt-2">
                    Central SAC:
                  </h4>
                  <p className="text-xs text-custom-textColor/60 mb-3">
                    +55 (11) 2557-6909
                  </p>
                </li>
                <li>
                  <h4 className="text-xs font-semibold uppercase mb-1">
                    {trans.t("email")}:
                  </h4>
                  <p className="text-xs text-custom-textColor/60 mb-1">
                    urbanvogue@cloud.com
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-custom-accentColor font-medium mb-3 uppercase">
                {trans.t("payments")}
              </h3>
              <ul className="flex gap-3 max-w-48 flex-wrap">
                <li className="w-14 h-8 relative bg-custom-tertiaryBrand/20 rounded-md flex justify-center items-center hover-effect hover-bg-tertiaryBrand shadow-lg">
                  <Image fill alt="mastercard" src="/logos/master.svg" />
                </li>
                <li className="w-14 h-8 relative bg-custom-tertiaryBrand/20 rounded-md flex justify-center items-center hover-effect hover-bg-tertiaryBrand shadow-lg">
                  <Image fill alt="elo" src="/logos/elo.webp" />
                </li>
                <li className="w-14 h-8 relative bg-custom-tertiaryBrand/20 rounded-md flex justify-center items-center hover-effect hover-bg-tertiaryBrand shadow-lg">
                  <Image fill alt="visa" src="/logos/visa.png" />
                </li>
                <li className="w-14 h-8 relative bg-custom-tertiaryBrand/20 rounded-md flex justify-center items-center hover-effect hover-bg-tertiaryBrand shadow-lg">
                  <Image fill alt="american" src="/logos/american.webp" />
                </li>
                <li className="w-14 h-8 relative bg-custom-tertiaryBrand/20 rounded-md flex justify-center items-center hover-effect hover-bg-tertiaryBrand shadow-lg">
                  <Image fill alt="pix" src="/logos/pix.png" />
                </li>
                <li className="w-14 h-8 relative bg-custom-tertiaryBrand/20 rounded-md flex justify-center items-center hover-effect hover-bg-tertiaryBrand shadow-lg">
                  <Image fill alt="loterica" src="/logos/loterica.png" />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
      <aside className="flex w-full text-custom-textColor/60 text-sm bg-custom-secondaryBrand/65 justify-center items-center py-3 rounded-md ">
        {trans.t("Developed by")}{" "}
        <Link
          target="_blank"
          href="https://esdras.dev"
          className="ml-1 underline hover-effect hover-link"
        >
          esdrasfyy
        </Link>
      </aside>
    </>
  );
}
