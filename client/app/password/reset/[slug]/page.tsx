import { trans } from "@/app/libs/i18n.lib";
import Image from "next/image";
import Link from "next/link";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { FormResetPassword } from "./sub-components/form-register";

export default function PasswordReset({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-28 w-full flex items-center justify-center">
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
          <h1 className="text-center text-3xl text-custom-accentColor my-5 max-sm:xl uppercase max-sm:text-2xl">{trans.t("reset your password")}</h1>
          <FormResetPassword token={params.slug} />
        </main>
      </div>
    </div>
  );
}
