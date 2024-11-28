"use client"
import { theme } from "@/app/components/ui/theme/theme";
import { Button, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { TbChevronDown } from "react-icons/tb";

export function MenuAdmin() {
  return (
    <menu className="flex justify-between gap-1 max-w-[1250px] w-full mx-auto py-28 pb-14 px-2 uppercase font-semibold">
      <li>
        <Link href="/admin">dashboard</Link>
      </li>
      <li>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} color={theme.colors.text} rightIcon={<TbChevronDown />} background="none" padding="0" margin="0 0 4px 0" _hover={{ color: theme.colors.accent }} _active={{ color: theme.colors.accent }} height="fit-content">
            PRODUCT
          </MenuButton>
          <MenuList minWidth="180px" backgroundColor={theme.colors.secondary} border={0}>
            <MenuItemOption backgroundColor={theme.colors.secondary} padding="0">
              <Link href="/admin/product">LIST</Link>
            </MenuItemOption>
            <MenuDivider backgroundColor={theme.colors.tertiary} />
            <MenuItemOption backgroundColor={theme.colors.secondary} padding="0">
              <Link href="/admin/product/create">CREATE</Link>
            </MenuItemOption>
          </MenuList>
        </Menu>
      </li>
      <li>
        <Link href="/admin">orders</Link>
      </li>
      <li>
        <Link href="/admin">orders</Link>
      </li>
      <li>
        <Link href="/admin">orders</Link>
      </li>
      <li>
        <Link href="/admin">orders</Link>
      </li>
      <li>
        <Link href="/admin">orders</Link>
      </li>
      <li>
        <Link href="/admin">orders</Link>
      </li>
      <li>
        <Link href="/admin">orders</Link>
      </li>
    </menu>
  );
}