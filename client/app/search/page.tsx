import React from "react";
import { GridSearch } from "./sub-components/grid-search";
import { FilterSearch } from "./sub-components/filter-search";

export default function Search() {
  return (
    <main className="pt-28 pb-7">
      <GridSearch />
      <FilterSearch/>
      {/* {filters && <Filter isOpen={isOpen} onClose={onClose} onOpen={onOpen} filters={filters} />} */}
      {/* <PaginationUi /> */}
      {/* <PaginationUi /> */}
      {/* <aside className="z-20 fixed border-[1px] border-custom-pink shadow-snipped bottom-5 right-5 bg-custom-grayThree/20 duration-300 ease-linear cursor-pointer hover:bg-custom-grayTwo rounded-full w-16 h-16 flex items-center justify-center" onClick={onOpen}> */}
      {/* <RiFilterLine className="text-4xl text-custom-pink" /> */}
      {/* </aside> */}
    </main>
  );
}
