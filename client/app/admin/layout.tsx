import React from "react";
import { LinkScale } from "../components/ui/links/link-scale";
import { GoChecklist } from "react-icons/go";
import { TbHexagons, TbHome } from "react-icons/tb";
export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen h-full relative py-28">
      <aside className="fixed bg-custom-secondaryBrand w-[310px] rounded-md shadow-md p-5 flex flex-col gap-3 ml-6">
        <div className="flex items-center border-b pb-3 border-custom-tertiaryBrand">
          <figure className="min-w-[40px] h-[40px] bg-custom-tertiaryBrand rounded-full"></figure>
          <span className="w-full text-center text-xl font-semibold mr-6">esdrasfyy</span>
        </div>
        <menu className="flex flex-col gap-1">
          <LinkScale content="Dashboard" href="/admin">
            <TbHome />
          </LinkScale>{" "}
          <LinkScale content="Produto" href="/admin/product">
            <TbHexagons />
          </LinkScale>{" "}
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>{" "}
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>{" "}
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>
          <LinkScale content="orders" href="/my/orders">
            <GoChecklist />
          </LinkScale>
        </menu>
      </aside>
      {children}
    </div>
  );
}
