import React from "react";
import { MenuHeader } from "./sub-components/menu-header";
import { LogoHeader } from "./sub-components/link-header";
// import { InputSearch } from "../ui/inputs/input-search";

export async function Header() {
  return (
    <header className="flex justify-center bg-[var(--header-color)] py-3 afterEffect absolute top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-[1250px] w-full flex justify-between px-2">
        <LogoHeader />
        {/* <InputSearch classname="max-md:hidden w-[60%]" /> */}
        <div className="flex gap-6 items-center justify-center">
          <MenuHeader />
        </div>
      </div>
    </header>
  );
}
