import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { FormLogin } from "./sub-components/form-login/form-login";
import Image from "next/image";
import Link from "next/link";
import { OAuth } from "../components/oauth/oauth";

export default function Login() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="bg-custom-secondaryBrand rounded-lg shadow-xl w-full max-w-[1150px] flex mx-2">
        <main className="flex flex-col gap-5 pt-8 px-10 max-md:px-6 max-w-[835px] w-full">
          <div className="flex justify-between w-full">
            <Link href="/" className="text-2xl hover-effect hover-opacity">
              <HiMiniArrowUturnLeft />
            </Link>
            <Link
              href="/register"
              className="text-xl tracking-[1px] hover-effect hover-link"
            >
              REGISTER
            </Link>
          </div>
          <h1 className="text-center text-3xl text-custom-accentColor my-5">
            LOGIN
          </h1>
          <FormLogin />
          <OAuth />
          <div className="w-full flex flex-col justify-end items-center text-custom-textColor pb-5">
            <p className="mt-8 pb-3 flex gap-3">
              <Link href="/forgot-password" className="hover-effect hover-link">
                forgot password
              </Link>
              •
              <Link href="/privacy" className="hover-effect hover-link">
                privacy policy
              </Link>
            </p>
          </div>
        </main>
        <aside className="w-full max-w-[365px] relative shadow-lg max-md:hidden">
          <Image
            src="/brand/banner.png"
            alt="banner"
            fill
            className="rounded-lg"
          />
        </aside>
      </div>
    </div>
  );
}
