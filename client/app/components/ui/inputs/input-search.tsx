"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@chakra-ui/react";

export function InputSearch({classname}:{classname:string}) {
    
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string>("");
  const toast = useToast();

  useEffect(() => {
    setValue(searchParams.get("query") || "");
  }, [searchParams]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(value);
  };

  const handleSubmit = (value: string) => {
    if (value) {
      const newValue = value.split(" ").join("-");
      return router.push(`/search?query=${newValue}&page=1`);
    }
    toast({
      title: "Speak your research.",
      description: "You need to say something before searching.",
      status: "error",
      duration: 9000,
      isClosable: true,
      variant: "left-accent",
      position: "top-right",
    });
  };

  return (
    <form  className={`relative ${classname} shadow-snipped rounded-full `} onSubmit={(e) => onSubmit(e)}>
      <div className={`relative w-full`}>
        <input type="search" className={`duration-300 shadow-lg relative bg-custom-tertiaryBrand border-custom-tertiaryBrand border-2 rounded-3xl py-[3px] pl-16 text-custom-textColor transition-all hover-effect hover-opacity w-full outline-none text-lg max-[400px]:pl-12 focus:outline-none focus:ring-0 focus:border-custom-accentColor focus:border-2  ring-0`} placeholder="ex: Camisa" onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} value={value.split("-").join(" ")}/>
        <button type="submit" className="duration-300 absolute left-0 top-[50%] -translate-y-1/2 bg-custom-textColor text-custom-secondaryBrand hover-effect hover-opacity z-10 p-[6px] text-2xl rounded-full"><HiSearch /></button>
        {/* <Voice handleSubmit={handleSubmit} /> */}
      </div>
    </form>
  );
}
