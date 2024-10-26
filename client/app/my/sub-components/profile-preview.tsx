"use client";
import Image from "next/image";
import { useUser } from "@/app/contexts/user.context";
import Link from "next/link";
import { IoIosHeartEmpty, IoMdNotificationsOutline } from "react-icons/io";
import { IoGiftOutline, IoWalletOutline } from "react-icons/io5";
import { AlertItemHeader } from "@/app/components/ui/alerts/alert-header";
import { LiaUserEditSolid } from "react-icons/lia";
import { GoChecklist } from "react-icons/go";

export function ProfilePreview() {
  const { user } = useUser();

  return (
    <section className="w-full bg-custom-secondaryBrand shadow-md relative rounded-md flex justify-between gap-10 px-[10%] py-10 max-md:flex-col">
      <span className="absolute w-full left-0 top-0 h-24 bg-custom-tertiaryBrand rounded-md shadow-xl z-0"></span>
      <div className="z-10 flex flex-col items-center my-auto gap-4 text-center">
        <figure className="relative max-w-[120px] min-h-[120px] w-full flex rounded-full border-8 border-custom-primaryBrand shadow-md">
          <Image src={"https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg"} alt="user profile" className="rounded-full" fill />
        </figure>
        <h3 className="text-2xl text-custom-textColor max-sm:text-xl font-semibold">esdrasfyy</h3>
        <p className="text-sm text-custom-textColor/50 max-sm:text-sm">fernaando.esdras@gmail.com</p>
      </div>
      <nav className="z-10 w-full rounded-md shadow-snipped max-w-96 text-2xl flex flex-col gap-6 my-auto max-md:m-a">
        <div className="w-full flex justify-between items-center bg-custom-primaryBrand rounded-md shadow-xl px-6 h-20">
          <Link href={"/account/orders"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <GoChecklist />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>

          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            {" "}
            <IoIosHeartEmpty />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>

          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <IoMdNotificationsOutline />
          </Link>
        </div>
        <div className="w-full flex justify-between items-center bg-custom-primaryBrand rounded-md shadow-xl px-6 h-20">
          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <IoWalletOutline />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>

          <Link href={"/teste"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <IoGiftOutline />
          </Link>
          <span className="flex w-[1px] h-8 bg-custom-tertiaryBrand"></span>

          <Link href={"/account/edit"} className="relative text-custom-accentColor navigation-top rounded-md hover-effect p-2">
            <LiaUserEditSolid />
            {(!user?.email || !user.verify_email || !user.phone || !user.verify_phone || !user.password_hash) && (
              <AlertItemHeader>
                <span className="w-full h-full text-[11px] flex justify-center items-center font-semibold text-custom-textColor">!</span>
              </AlertItemHeader>
            )}
          </Link>
        </div>
      </nav>
    </section>
  );
}
