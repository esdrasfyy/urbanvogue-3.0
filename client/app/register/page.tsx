import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { OAuth } from "../components/oauth/oauth";
import { FormRegister } from "./sub-components/form-register";
import { trans } from "../libs/i18n.lib";

export default function Register() {
  return (
    <div className="pt-28 pb-7 w-full flex items-center justify-center">
      <div className="bg-custom-secondaryBrand rounded-lg shadow-xl w-full max-w-[1150px] flex mx-2">
        <aside className="w-full max-w-[365px] relative shadow-lg max-md:hidden">
          <Image src="/brand/banner.png" alt="banner" fill className="rounded-lg" />
        </aside>
        <main className="flex flex-col gap-5 pt-8 px-10 max-md:px-6 max-w-[835px] w-full pb-[36px] max-sm:px-4">
          <div className="flex justify-between w-full">
            <Link href="/login" className="text-2xl hover-effect hover-opacity max-sm:text-lg">
              <HiMiniArrowUturnLeft />
            </Link>
          </div>
          <h1 className="text-center text-3xl text-custom-accentColor my-5 max-sm:xl uppercase max-sm:text-2xl">{trans.t("register")}</h1>
          <FormRegister />
          <OAuth />
        </main>
      </div>
    </div>
  );
}
