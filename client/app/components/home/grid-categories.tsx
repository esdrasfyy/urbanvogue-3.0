import React from "react";

export function GridCategories() {
  return (
    <section className="h-[430px] w-full flex gap-6 text-2xl max-sm:flex-col max-sm:h-fit">
      <a href="#" className="w-1/4 h-full relative overflow-hidden group max-sm:w-full max-sm:h-40">
        <span className="max-sm:hidden absolute top-0 left-0 bg-custom-tertiaryBrand writing h-full w-8 rounded-l-md shadow-md text-center uppercase tracking-widest duration-300 group-hover-grid-w">Woman</span>
        <div className="bg-[url('/images/fem-model.jpg')] bg-cover bg-center w-full h-full rounded-md shadow-md"></div>
        <span className="hidden max-sm:inline absolute bottom-0 left-0 bg-custom-tertiaryBrand w-full h-8 rounded-b-md shadow-md text-center uppercase tracking-widest duration-300 group-hover-grid-h">Woman</span>
      </a>

      <div className="w-2/4 h-full flex flex-col gap-6 max-md:flex-row max-sm:flex-col max-sm:w-full">
        <a href="#" className="w-full h-full relative overflow-hidden group max-sm:w-full max-sm:h-40">
          <span className="hidden max-md:inline max-sm:hidden absolute top-0 left-0 bg-custom-tertiaryBrand writing h-full w-8 rounded-l-md shadow-md text-center uppercase tracking-widest duration-300 group-hover-grid-w">Children</span>
          <div className="bg-[url('/images/kid-model.webp')] bg-cover bg-center w-full h-full rounded-md shadow-md"></div>
          <span className="inline max-md:hidden max-sm:inline absolute bottom-0 left-0 bg-custom-tertiaryBrand w-full h-8 rounded-b-md shadow-md text-center uppercase tracking-widest duration-300 group-hover-grid-h">Children</span>
        </a>

        <a href="#" className="w-full h-full relative overflow-hidden group max-sm:w-full max-sm:h-40">
          <span className="hidden max-md:inline max-sm:hidden absolute top-0 left-0 bg-custom-tertiaryBrand writing h-full w-8 rounded-l-md shadow-md text-center uppercase tracking-widest duration-300 group-hover-grid-w">Accessories</span>
          <div className="bg-[url('/images/accessories-model.jpg')] bg-cover w-full h-full rounded-md shadow-md"></div>
          <span className="inline max-md:hidden max-sm:inline absolute bottom-0 left-0 bg-custom-tertiaryBrand w-full h-8 rounded-b-md shadow-md text-center uppercase tracking-widest duration-300 group-hover-grid-h">Accessories</span>
        </a>
      </div>

      <a href="#" className="w-1/4 h-full relative overflow-hidden group max-sm:w-full max-sm:h-40">
        <span className="max-sm:hidden absolute top-0 left-0 bg-custom-tertiaryBrand writing h-full w-8 rounded-l-md shadow-md text-center uppercase tracking-widest flex justify-center duration-300 group-hover-grid-w">Man</span>
        <div className="bg-[url('/images/man-model.jpg')] bg-cover bg-center w-full h-full rounded-md shadow-md"></div>
        <span className="hidden max-md:inline absolute bottom-0 left-0 bg-custom-tertiaryBrand w-full h-8 rounded-b-md shadow-md text-center uppercase tracking-widest duration-300 group-hover-grid-h">Man</span>
      </a>
    </section>
  );
}
