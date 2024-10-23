"use client";
import { PiShoppingCartSimple, PiUserCirclePlus } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaUserCircle } from "react-icons/lia";
import React from "react";
import Link from "next/link";
import { useUser } from "@/app/contexts/user.context";
import { useCart } from "@/app/contexts/cart.context";
import { useNotifications } from "@/app/contexts/notifications.context";
import { TbAlertSmall } from "react-icons/tb";
import { AlertItemHeader } from "../../ui/alerts/alert-header";

export function MenuHeader() {
  const { user } = useUser();

  const {
    disclosure: { onOpen: onOpenCart },
  } = useCart();

  const {
    disclosure: { onOpen: onOpenNotifications },
    notifications,
  } = useNotifications();
  return (
    <ul className="flex gap-6 items-center justify-center">
      <li className="relative text-3xl h-[30px] text-custom-textColor duration-200 transition-all ease-linear hover-effect hover-item-header group cursor-pointer max-md:text-[28px]" onClick={onOpenNotifications}>
        <button className="hover-effect group-hover:hover-link">
          <IoMdNotificationsOutline />
        </button>
        {notifications && (
          <AlertItemHeader>
            <span className="text-[10px] flex justify-center items-center font-bold pb-0.5">{notifications.length}</span>
          </AlertItemHeader>
        )}
      </li>
      <li className="relative h-[30px] text-3xl text-custom-textColor duration-200 transition-all ease-linear hover-effect hover-item-header group cursor-pointer max-md:text-[28px]" onClick={onOpenCart}>
        <button className="hover-effect group-hover:hover-link text-[29px]">
          <PiShoppingCartSimple />
        </button>
        <AlertItemHeader>
          <span className="w-full h-full text-[10px] flex justify-center items-center font-bold pb-0.5">9</span>
        </AlertItemHeader>
      </li>
      <li className="relative text-[29px] h-[30px] text-custom-textColor duration-200 transition-all ease-linear hover-effect hover-item-header cursor-pointer max-md:text-[28px] group">
        <Link href={user ? "/account" : "/login"} className="hover-effect group-hover:hover-link">
          {user ? <LiaUserCircle className="pt-[1px]" /> : <PiUserCirclePlus className="pt-[1px]" />}
        </Link>
        {(!user?.email || !user.verify_email || !user.phone || !user.verify_phone || !user.password_hash) && (
          <AlertItemHeader>
            <TbAlertSmall />
          </AlertItemHeader>
        )}
      </li>
    </ul>
  );
}
