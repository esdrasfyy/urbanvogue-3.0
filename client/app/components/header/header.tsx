import React from "react";
import { MenuHeader } from "./sub-components/menu-header";
import { LogoHeader } from "./sub-components/link-header";
import { InputSearch } from "../ui/inputs/input-search";

export async function Header() {
  return (
      <header className="flex justify-between items-center bg-custom-secondaryBrand py-4 px-7 beforeEffect afterEffect absolute top-0 left-0 w-full z-50 max-sm:px-3 shadow-snipped">
        <LogoHeader />
        <InputSearch classname="max-md:hidden w-[60%]" />
        <div className="flex gap-6 items-center justify-center"><MenuHeader /></div>
      </header>
  );
}
