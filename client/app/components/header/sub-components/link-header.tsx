import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

export function LogoHeader() {
  return (
    <Link href={"/"} className='flex gap-3'>
      <Image src='/brand/bird-logo.png' alt="logo image" width={35} height={35}/>
      <p className="max-w-[80px] leading-5 text-[15px] tracking-widest text-white max-md:text-base max-sm:text-sm">URBAN VOGUE</p>
    </Link>
  )
}