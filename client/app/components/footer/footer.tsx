import React from "react";
import Image from "next/image";
import { BackToTop } from "../back-to-top/back-to-top";
import { trans } from "@/app/libs/i18n.lib";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer></footer>
      <aside className="flex w-full text-custom-textColor text-sm bg-custom-primaryBrand justify-center items-center py-3 rounded-md ">
        {trans.t("Developed by")}{" "}
        <Link target="_blank" href="https://esdras.dev" className="ml-1 underline hover-effect hover-link">
          esdrasfyy
        </Link>
      </aside>
    </>
  );
}
