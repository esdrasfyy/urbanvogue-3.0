import Image from "next/image";
import React from "react";
import Link from "next/link";

export function LogoHeader() {
  return (
    <Link href={"/"} className="flex gap-3">
      <Image src="/brand/bird-logo.png" alt="logo image" width={25} height={25} />
    </Link>
  );
}
