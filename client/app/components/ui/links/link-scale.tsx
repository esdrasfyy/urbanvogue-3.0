import { trans } from "@/app/libs/i18n.lib";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export function LinkScale({ children, content, href, blank = "_self" }: { children: React.ReactNode; content: string; href: string; blank?: "_blank" | "_self" }) {
  return (
    <li className="py-2 rounded-md hover-effect navigation-top text-lg font-semibold">
      <Link target={blank} href={href} className="flex w-full justify-between items-center px-4">
        <span className="flex gap-4 items-center">
          <span className="p-2 rounded-full bg-[--text-color-30]"> {children}</span>
          <span>{trans.t(content)}</span>
        </span>{" "}
        <span>
          <IoIosArrowForward />
        </span>
      </Link>
    </li>
  );
}
