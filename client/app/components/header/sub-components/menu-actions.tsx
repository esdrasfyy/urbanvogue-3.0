"use client";
import React from "react";
import { useNotifications } from "@/app/contexts/notifications.context";
import { AlertItemHeader } from "../../ui/alerts/alert-header";
import { ButtonMenu } from "../../ui/buttons/button-menu";
import { RiSearchEyeFill, RiShoppingCartFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { useApp } from "@/app/contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import { CartApi } from "@/app/api/cart/cart.api";

export function MenuActions() {
  const {
    disclosure: { onOpen: onOpenNotifications },
  } = useNotifications();
  const { onOpenCart } = useApp();
  const { data } = useQuery({ queryKey: ["cart"], queryFn: CartApi.get });
  return (
    <ul className="flex gap-6 items-center justify-center">
      <li className="relative w-10 h-10 flex justify-center items-center">
        <button className="hover-effect hover-link text-[28px]">
          <RiSearchEyeFill />
        </button>
      </li>
      <li className="relative w-10 h-10 flex justify-center items-center" onClick={onOpenNotifications}>
        <button className="hover-effect hover-link text-[28px]">
          <FaBell />
        </button>
        <AlertItemHeader>
          <span className="w-full h-full text-[11px] flex justify-center items-center font-semibold text-custom-textColor">9</span>
        </AlertItemHeader>
      </li>
      <li className="relative w-10 h-10 flex justify-center items-center">
        <button className="hover-effect hover-link text-3xl" onClick={onOpenCart}>
          <RiShoppingCartFill />
        {data?.items && data?.items.length > 0 && (
          <AlertItemHeader>
            <span className="w-full h-full text-[11px] flex justify-center items-center font-semibold text-custom-textColor">{data?.items.length}</span>
          </AlertItemHeader>
        )}
        </button>
      </li>
      <li className="hover-effect hover-link">
        <ButtonMenu />
      </li>
    </ul>
  );
}
