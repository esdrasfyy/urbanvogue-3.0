import React from "react";
import { MenuActions } from "./sub-components/menu-actions";
import Link from "next/link";
import Image from "next/image";
import { MenuList } from "./sub-components/menu-list";
// import { InputSearch } from "../ui/inputs/input-search";

export async function Header() {
  return (
    <header className="fixed flex beforeEffect justify-between py-5 px-8 bg-[var(--header-color)] top-0 left-0 w-full z-50 shadow-md max-md:py-2">
      <div className="flex gap-8 items-center">
        <Link href={"/"} className="flex gap-3 w-fit h-fit">
          <Image src="/brand/bird-logo.png" alt="logo image" width={45} height={45} className="max-md:w-7" />
        </Link>
        <MenuList />
      </div>
      {/* <InputSearch classname="max-md:hidden w-[60%]" /> */}
      <MenuActions />
    </header>
  );
}
