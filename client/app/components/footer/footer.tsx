import React from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { trans } from "@/app/libs/i18n.lib";

export function Footer() {
  return (
    <footer className="afterEffect relative bg-custom-secondaryBrand p-10 rounded-md shadow-md flex flex-col gap-10">
      <ul className="flex gap-5 w-full px-2">
        <li>
          <Link href="#" className="text-2xl hover-effect hover-link">
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link href="#" className="text-2xl hover-effect hover-link">
            <FaWhatsapp />
          </Link>
        </li>
        <li>
          <Link href="#" className="text-2xl hover-effect hover-link">
            <BiSupport />
          </Link>
        </li>
      </ul>
      <div className="flex justify-between items-center w-full px-2 max-lg:flex-col-reverse max-lg:items-start gap-5">
        <h4 className="font-semibold">© 2024 - Urban Vogue - CNPJ 13.555.994/0001-54</h4>
        <ul className="flex gap-3 font-semibold text-xl tracking-wide max-md:flex-col">
          <li>
            <Link href="#" className="hover-effect hover-link">
             {trans.t("cookies policy")}
            </Link>
          </li>
          <li>
            <Link href="#" className="hover-effect hover-link">
             {trans.t("terms of use")}
            </Link>
          </li>
          <li>
            <Link href="#" className="hover-effect hover-link">
             {trans.t("privacy police")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
