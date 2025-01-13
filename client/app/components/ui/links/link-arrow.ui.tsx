"use client";
import React from "react";
import { trans } from "@/app/libs/i18n.lib";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export function LinkArrow({ href, content }: { href: string; content: string }) {
  return (
    <Link href={href} className="relative group bg-none border-[1px] border-custom-accentColor flex justify-center text-custom-textColor py-1.5 rounded text-xl hover-effect shadow-lg items-center">
      {trans.t(content)}
      <span className="absolute right-[7%] top-1/2 -translate-y-1/2 hover-effect -translate-x-7 hover-submit duration-1000">
        <FaArrowRight size={20} />
      </span>
    </Link>
  );
}
