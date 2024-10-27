import { Inputs } from "@/app/entities/inputs.entitie";
import React from "react";

export function InputCheckbox(data: Inputs.CheckboxPropsI) {
  return (
    <div className={`flex w-fit container items-center ${data.classname}`}>
      <input type="checkbox" className="cursor-pointer relative m-auto w-[18px] h-[18px] " id="checkbox" style={{ display: "none" }} disabled={data.disabled} {...data.register(data.name)} />
      <label htmlFor="checkbox" className="check">
        <svg className="relative z-10 fill-none transition-all duration-200 ease-in-out hover:stroke-custom-accentColor" width="18px" height="18px" viewBox="0 0 18 18" strokeWidth={1.5}>
          <path strokeDasharray={60} strokeDashoffset={0} d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
          <polyline strokeDasharray={22} strokeDashoffset={66} points="1 9 7 14 15 4"></polyline>
        </svg>
      </label>
      <label htmlFor="checkbox" className="flex flex-wrap w-full items-center cursor-pointer ml-5 max-sm:text-sm">
        {data.children}
      </label>
    </div>
  );
}
