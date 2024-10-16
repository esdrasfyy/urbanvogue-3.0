import React from "react";
import {
  IconsMapSubmit,
  InputSubmitPropsI,
} from "@/app/components/ui/inputs/types/types-inputs";

export function InputSubmit(data: InputSubmitPropsI) {
  const Icon = IconsMapSubmit[data.icon];

  return (
    <button
      type="submit"
      className={`group bg-none border-[1px] border-custom-accentColor flex text-custom-textColor py-1.5 ${data.classname}  rounded text-xl hover-effect hover-bg-accent shadow-lg`}
      disabled={data.disabled}
    >
      <span className="flex justify-between items-center px-3 max-w-[100%] w-full">
        <span className="ml-[45%] max-sm:ml-[15%] pb-1">{data.content}</span>
        <span className="hover-effect -translate-x-7 hover-submit duration-1000">
          <Icon size={20} />
        </span>
      </span>
    </button>
  );
}
