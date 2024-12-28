"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";

export function CardProduct({ product }: { product: Product.Mini }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <li className="group rounded-md mr-3 shadow-md transform translate-x-0 translate-y-0 translate-z-0 flex-shrink-0 max-w-[225px] max-sm:max-w-[185px] w-full bg-custom-secondaryBrand" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative h-64 max-sm:h-48 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-[4rem] font-semibold flex items-center justify-center select-none">
        <span className="absolute text-sm px-3 py-1 tracking-tighter rounded-r-md top-4 left-0 bg-[var(--accent-color)] z-20 font-semibold">NEW</span>
        <div className="soft-entry absolute z-20 top-4 gap-2 right-1.5 hidden group-hover:flex flex-col text-2xl max-sm:flex">
          <button className="w-10 h-10 rounded-full shadow-md bg-custom-accentColor opacity-80 flex items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity cursor-pointer max-sm:flex">
            <PiShoppingCartSimple />
          </button>
          <button className="w-10 h-10 rounded-full shadow-md bg-custom-primaryBrand opacity-80 flex items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity cursor-pointer max-sm:flex">
            <IoIosHeartEmpty />
          </button>
        </div>
        <Image className={`rounded-md hover-effect ${isHovered && "z-10"}`} src={product.images[0]} alt={`Image 1 of ${product.title}`} fill />
        {product.images[1] && <Image className={`rounded-md duration-500 ease-linear ${isHovered && "z-10 opacity-0"}`} src={product.images[1]} alt={`Image 2 of ${product.title}`} fill />}
      </div>
      <div className="flex flex-col justify-center items-center p-2 gap-2 max-sm:gap-0">
        <h5 className="text-[10px] uppercase font-semibold -tracking-tighter">{product.brand}</h5>
        <h4 className="font-semibold line-clamp-2 tracking-tight px-2 max-sm:px-0">{product.title}</h4>
        <div className="flex gap-3 items-center">
          <p className="text-xl font-semibold text-custom-accentColor">R$ {Number(product.price).toFixed(2)}</p>
          <span className="text-sm opacity-40">R$ {Number(product.last_price).toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
}
