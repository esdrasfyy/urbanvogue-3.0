import React from "react";
import { IconsMapSubmit, InputSubmitPropsI } from "@/app/components/ui/inputs/types/types-inputs";
import { trans } from "@/app/libs/i18n.lib";
import { ImSpinner10 } from "react-icons/im";
import { useApp } from "@/app/contexts/app.context";

export function InputSubmit(data: InputSubmitPropsI) {
  const Icon = IconsMapSubmit[data.icon];
  const { loading } = useApp();
  return (
    <button type="submit" className={`group bg-none border-[1px] border-custom-accentColor flex text-custom-textColor py-1.5 ${data.classname}  rounded text-xl hover-effect ${!loading && "hover-bg-accent"} shadow-lg`} disabled={loading}>
      <span className="flex justify-between items-center px-3 max-w-[100%] w-full">
        <span className="ml-[45%] max-sm:ml-[15%] pb-1">{trans.t(data.content)}</span>
        {loading ? (
          <span className="animate-spin text-custom-accentColor">
            <ImSpinner10 size={20} />
          </span>
        ) : (
          <span className="hover-effect -translate-x-7 hover-submit duration-1000">
            <Icon size={20} />
          </span>
        )}
      </span>
    </button>
  );
}
