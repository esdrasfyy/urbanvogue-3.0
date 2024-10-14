import React from "react";
import {
  IconsMapSubmit,
  InputSubmitPropsI,
} from "@/app/components/ui/inputs/types/inputs";

export function InputSubmit(data: InputSubmitPropsI) {
  const Icon = IconsMapSubmit[data.icon];

  return (
    <button
      type="submit"
      className={`group bg-none border-[1px] border-custom-accentColor flex text-custom-textColor py-1.5 ${data.classname}  rounded text-xl duration-300 hover:bg-custom-accentColor shadow-lg`}
      disabled={data.disabled}
      onClick={() => onclick}
    >
      <span className="flex justify-between items-center px-3 max-w-[100%] w-full">
        <span className="ml-[45%] max-sm:ml-[15%]">{data.content}</span>
        <span className="transition-all ease-in-out -translate-x-7 group-hover:translate-x-0 duration-1000">
          <Icon size={20} />
        </span>
      </span>
    </button>
  );
}
