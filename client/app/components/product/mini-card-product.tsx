import React, { useState } from "react";
import Image from "next/image";

interface MiniCardProductProps {
  url: string[];
  brand: string;
  title: string;
  price: string;
  last_price: string;
}

export function MiniCardProduct(data: MiniCardProductProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <li className="w-full h-44 flex bg-custom-secondaryBrand shadow-md rounded-md max-md:h-24" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative w-1/3 h-full">
        <Image className={`rounded-md hover-effect ${isHovered && "z-10"}`} src={data.url[1]} alt={data.url[1]} fill />
        <Image className={`rounded-md duration-500 ease-linear ${isHovered && "z-10 opacity-0"}`} src={data.url[0]} alt={data.url[0]} fill />
      </div>
      <div className="flex flex-col justify-around my-3 px-6 max-md:px-3 max-sm:my-1 ">
        <h5 className="text-xs uppercase font-semibold -tracking-tighter">{data.brand}</h5>
        <h4 className="font-semibold line-clamp-2 tracking-tight max-sm:line-clamp-1">{data.title}</h4>
        <div className="flex gap-3 items-center">
          <p className="text-xl font-semibold text-custom-accentColor">R$ {data.price}</p>
          <span className="text-sm opacity-40">R$ {data.last_price}</span>
        </div>
      </div>
    </li>
  );
}
