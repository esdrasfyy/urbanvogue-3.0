"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { useApp } from "@/app/contexts/app.context";
import { ImSpinner10 } from "react-icons/im";

export function CardProduct({ product }: { product: Product.Mini }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { AddItemToCart, addingItem } = useApp();
  return (
    <li className="group rounded-md mr-3 shadow-md transform translate-x-0 translate-y-0 translate-z-0 flex-shrink-0 max-w-[225px] max-sm:max-w-[185px] w-full bg-custom-secondaryBrand h-fit" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative h-64 max-sm:h-48 shadow-[inset_0_0_0_0.2rem_var(--detail-medium-contrast)] rounded-[1.8rem] text-[4rem] font-semibold flex items-center justify-center select-none">
        {product?.targets.length > 0 && <span className="absolute text-sm px-3 py-1 tracking-tighter rounded-r-md top-4 left-0 bg-[var(--accent-color)] z-20 font-semibold">{product.targets[0]}</span>}
        <div className={`absolute z-20 top-4 gap-2 right-1.5 ${addingItem === product.id ? "flex" : "hidden group-hover:flex"} flex-col text-2xl max-sm:flex`}>
          <button className={`w-10 h-10 rounded-full shadow-md bg-custom-accentColor duration-200 ease-linear ${addingItem === product.id ? "opacity-30" : "opacity-80"} flex items-center justify-center text-custom-textColor font-medium hover-no-opacity cursor-pointer max-sm:flex`} onClick={() => AddItemToCart({ product_id: product.id, quantity: 1, variation_id: 9 })}>
            {addingItem === product.id ? <ImSpinner10 size={20} className="animate-spin" /> : <PiShoppingCartSimple />}
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
        <h4 className="font-semibold h-12 line-clamp-2 tracking-tight px-2 max-sm:px-0 max-md:text-sm max-md:h-10">{product.title}</h4>
        <div className="flex gap-3 items-center mt-2">
          <p className="text-xl font-semibold text-custom-accentColor max-md:text-base">R$ {Number(product.price).toFixed(2)}</p>
          <span className="text-sm opacity-40 line-through">R$ {Number(product.last_price).toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
}
