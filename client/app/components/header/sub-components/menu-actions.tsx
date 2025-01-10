"use client";
import React from "react";
import { useNotifications } from "@/app/contexts/notifications.context";
import { AlertItemHeader } from "../../ui/alerts/alert-header";
import { RiSearchEyeFill, RiShoppingCartFill, RiUserAddFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { useApp } from "@/app/contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import { CartApi } from "@/app/api/cart/cart.api";
import { useUser } from "@/app/contexts/user.context";
import Image from "next/image";
import { background, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { theme } from "../../ui/theme/theme";
import { PiUserCirclePlus, PiUserCirclePlusBold } from "react-icons/pi";
import { trans } from "@/app/libs/i18n.lib";

export function MenuActions() {
  const {
    disclosure: { onOpen: onOpenNotifications },
  } = useNotifications();
  const { onOpenCart, cart } = useApp();
  const { user } = useUser();
  return (
    <ul className="flex gap-6 items-center justify-center">
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
          {cart?.items && cart?.items.length > 0 && (
            <AlertItemHeader>
              <span className="w-full h-full text-[11px] flex justify-center items-center font-semibold text-custom-textColor">{cart?.items.reduce((total, item) => total + item.quantity, 0)}</span>
            </AlertItemHeader>
          )}
        </button>
      </li>
      <li className="">
        {user?.avatar ? (
          <Menu>
            <MenuButton>
              <Image src={user?.avatar} alt={user?.avatar} width={30} height={30} className="rounded-full mt-1.5" />
            </MenuButton>
            <MenuList marginTop="30px" background={theme.colors.tertiary} border="none" paddingY="0">
              <MenuItem background={theme.colors.tertiary} _hover={{ background: theme.colors.secondary }} rounded="7px">
                <Link href="/my">My Account</Link>
              </MenuItem>
              <MenuItem background={theme.colors.tertiary} _hover={{ background: theme.colors.secondary }} rounded="7px">
                Payments{" "}
              </MenuItem>
              <MenuItem background={theme.colors.tertiary} _hover={{ background: theme.colors.secondary }} rounded="7px">
                Docs
              </MenuItem>
              <MenuItem background={theme.colors.tertiary} _hover={{ background: theme.colors.secondary }} rounded="7px">
                FAQ
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link href="/login" className="hover-effect hover-link text-3xl">
            <RiUserAddFill size={26} />
          </Link>
        )}
      </li>
    </ul>
  );
}
