"use client";
import React from "react";
import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/app/contexts/app.context";

export function CardProductCart({ isLastItem, product }: { isLastItem: boolean; product: Cart.Items }) {
  const { AddItemToCart } = useApp();

  return (
    <li className={`${!isLastItem && "border-solid border-b-[1px] border-custom-tertiaryBrand"} pb-6 mt-4 flex flex-col items-start gap-2  w-full text-custom-textColor`}>
      <div className="w-full flex gap-3">
        <div className="flex gap-2 max-w-[70px] min-w-[95px] h-[110px] max-sm:h-[100px]">
          <Link href={`/shop/product/`} className="shadow-snipped object-contain">
            <Image src={product.variation.variation.images[0]} alt={product.variation.variation.images[0]} loading="lazy" width={100} height={100} className="h-full rounded-md" />
          </Link>
        </div>
        <div className="flex w-full flex-col justify-between h-[110px]">
          <div className="w-full flex max-sm:flex-col justify-between h-full">
            <div className="flex justify-start mr-5 flex-col max-sm:mr-0 w-full">
              <Link href={`/product/${product.id}`}>
                <h3 className="line-clamp-2 duration-300 ease-linear hover:underline cursor-pointer w-full max-md:line-clamp-1">{product.title}</h3>
              </Link>
              <div>
                <p className="text-custom-accentColor text-xl mt-3">R$ {Number(product.price).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex w-[70%] justify-end items-start gap-[10%] max-sm:justify-between max-sm:items-end max-sm:mb-1 max-sm:w-full">
              <div className="flex items-center">
                <div className="relative flex items-center gap-4">
                  <button disabled={product.quantity < 2} type="button" className={`p-1 rounded-full bg-custom-tertiaryBrand ${product.quantity < 2 && "opacity-30"}`}>
                    <TbMinus size={20} onClick={() => AddItemToCart({ product_id: product.product_id, quantity: -1, variation_id: product.variation_id })} />
                  </button>
                  <span className="text-custom-accentColor font-extrabold border-0 bg-transparent text-lg ">{product.quantity}</span>
                  <button type="button" className="p-1 rounded-full bg-custom-tertiaryBrand">
                    <TbPlus size={20} onClick={() => AddItemToCart({ product_id: product.product_id, quantity: 1, variation_id: product.variation_id })} />
                  </button>
                </div>
              </div>
              <div className="flex items-center max-sm:h-full">
                <button className="flex items-center text-2xl text-custom-tertiaryBrand">
                  <TbTrash />
                </button>
              </div>
            </div>
          </div>
          {/* <div className="flex gap-2 max-sm:hidden">
              <Select
                iconColor="#ed145b"
                icon={arrow1 ? <TbArrowBadgeUp /> : <TbArrowBadgeDown />}
                onBlur={() => setArrow1(false)}
                defaultValue={selectSize}
                onClick={() => setArrow1(!arrow1)}
                onChange={(e) => setSelectSize(e.target.value)}
                _focus={{
                  borderColor: "#ed145b",
                  boxShadow: "0 0 0 1px #ed145b",
                }}
                className="p-0 shadow-snipped border-[10px] border-solid rounded-md outline-none focus:ring-custom-pink cursor-pointer focus:border-custom-pink"
              >
                {dataId?.sizes?.map((size) => (
                  <option defaultValue={size.size} key={size.size}>
                    {size.size}
                  </option>
                ))}
              </Select>
            )}
            {dataId && dataId?.colors?.length !== 0 && (
              <Select
                iconColor="#ed145b"
                icon={arrow2 ? <TbArrowBadgeUp /> : <TbArrowBadgeDown />}
                onBlur={() => setArrow2(false)}
                onClick={() => setArrow2(!arrow2)}
                defaultValue={selectColor}
                onChange={(e) => setSelectColor(e.target.value)}
                _focus={{
                  borderColor: "#ed145b",
                  boxShadow: "0 0 0 1px #ed145b",
                }}
                className="p-0 shadow-snipped border-[10px] border-solid rounded-md outline-none focus:ring-custom-pink cursor-pointer focus:border-custom-pink"
              >
                {dataId?.colors?.map((color) => (
                  <option key={color.name_color} defaultValue={color.name_color}>
                    {color.name_color}
                  </option>
                ))}
              </Select>
            )}
          </div> */}
        </div>
      </div>
      {/* <div className="hidden gap-2 max-sm:flex w-full">
        {dataId && dataId?.sizes?.length !== 0 && (
          <Select
            iconColor="#ed145b"
            icon={arrow1 ? <TbArrowBadgeUp /> : <TbArrowBadgeDown />}
            onBlur={() => setArrow1(false)}
            defaultValue={selectSize}
            onClick={() => setArrow1(!arrow1)}
            onChange={(e) => setSelectSize(e.target.value)}
            _focus={{
              borderColor: "#ed145b",
              boxShadow: "0 0 0 1px #ed145b",
            }}
            className="w-full p-0 shadow-snipped border-[10px] border-solid rounded-md outline-none focus:ring-custom-pink cursor-pointer focus:border-custom-pink"
          >
            {dataId?.sizes?.map((size) => (
              <option defaultValue={size.size} key={size.size}>
                {size.size}
              </option>
            ))}
          </Select>
        )}
        {dataId && dataId?.colors?.length !== 0 && (
          <Select
            iconColor="#ed145b"
            icon={arrow2 ? <TbArrowBadgeUp /> : <TbArrowBadgeDown />}
            onBlur={() => setArrow2(false)}
            onClick={() => setArrow2(!arrow2)}
            defaultValue={selectColor}
            onChange={(e) => setSelectColor(e.target.value)}
            _focus={{
              borderColor: "#ed145b",
              boxShadow: "0 0 0 1px #ed145b",
            }}
            className=" w-full p-0 shadow-snipped border-[10px] border-solid rounded-md outline-none focus:ring-custom-pink cursor-pointer focus:border-custom-pink"
          >
            {dataId?.colors?.map((color) => (
              <option key={color.name_color} defaultValue={color.name_color}>
                {color.name_color}
              </option>
            ))}
          </Select>
        )}
      </div> */}
    </li>
  );
}
