"use client";
import React from "react";
import { trans } from "@/app/libs/i18n.lib";
import { ImSpinner10 } from "react-icons/im";
import { useApp } from "@/app/contexts/app.context";
import { Inputs } from "@/app/entities/inputs.entitie";
import * as FaIcons from "react-icons/fa";

const IconsMapSubmit = {
  FaStar: FaIcons.FaStar,
  FaArrowRight: FaIcons.FaArrowRight,
  FaHome: FaIcons.FaHome,
};

export function InputSubmit(data: Inputs.SubmitPropsI) {
  const Icon = IconsMapSubmit[data.icon];
  const { loading } = useApp();
  return (
    <button type={data.type} className={` ${data.classname} relative group bg-none border-[1px] border-custom-accentColor flex justify-center text-custom-textColor py-1.5 rounded text-xl hover-effect ${!loading && "hover-bg-accent"} shadow-lg items-center`} disabled={loading}>
      {trans.t(data.content)}
      {loading ? (
        <span className="absolute right-5 animate-spin text-custom-accentColor">
          <ImSpinner10 size={20} />
        </span>
      ) : (
        <span className="absolute right-[7%] top-1/2 -translate-y-1/2 hover-effect -translate-x-7 hover-submit duration-1000">
          <Icon size={20} />
        </span>
      )}
    </button>
  );
}
