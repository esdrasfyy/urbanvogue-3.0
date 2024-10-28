/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";

import { TbClipboardCheck, TbDeviceMobileCog, TbHeart, TbLogout, TbMailCog, TbUserEdit } from "react-icons/tb";
import { useUser } from "@/app/contexts/user.context";
import Image from "next/image";
import Link from "next/link";

export function ProfilePreview() {
  const { user } = useUser();

  return (
    <section className="w-full bg-custom-secondaryBrand shadow-md relative rounded-md flex justify-between gap-10 px-[10%] py-10 max-md:flex-col">
      <span className="absolute w-full left-0 top-0 h-24 bg-custom-tertiaryBrand rounded-md shadow-xl z-0"></span>
      <div className="z-10 flex flex-col items-center my-auto gap-4 text-center">
        <figure className="relative max-w-[120px] min-h-[120px] w-full flex rounded-full border-8 border-custom-primaryBrand shadow-md">
          <Image src={user?.avatar!} alt="user profile" className="rounded-full" fill />
        </figure>
        <h3 className="text-2xl text-custom-textColor max-sm:text-xl font-semibold">{user?.username}</h3>
        <p className="text-sm text-custom-textColor/50 max-sm:text-sm">{user?.email} </p>
      </div>
      <nav className="z-10 w-full rounded-md shadow-snipped max-w-96 text-2xl flex flex-col gap-6 my-auto max-md:m-a">
        <div className="w-full flex justify-between items-center bg-custom-primaryBrand rounded-md shadow-xl px-6 h-20">
          <Link href={"/my/profile"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <TbUserEdit />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>
          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <TbMailCog />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>

          <Link href={"/account/orders"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <TbDeviceMobileCog />
          </Link>
        </div>
        <div className="w-full flex justify-between items-center bg-custom-primaryBrand rounded-md shadow-xl px-6 h-20">
          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <TbClipboardCheck />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>
          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <TbHeart />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>
          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <TbLogout />
          </Link>
        </div>
      </nav>
    </section>
  );
}
