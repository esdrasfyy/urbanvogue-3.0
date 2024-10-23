"use client";

import { Input } from "@chakra-ui/react";
import React from "react";
import { InputPropsI } from "./types/types-inputs";
import { trans } from "@/app/libs/i18n.lib";
import { AlertInput } from "../alerts/alert-input";
import { useApp } from "@/app/contexts/app.context";
import { theme } from "../theme/theme";

export function InputDefault(data: InputPropsI) {
  const { loading } = useApp();
  return (
    <>
      <label className={`mb-2 text-sm text-custom-textColor uppercase max-md:text-[10px] max-md:mb-1`} htmlFor={data.name}>
        {trans.t(data.label)}
      </label>
      <input
        type={data.type}
        defaultValue={data.defaultvalue}
        value={data.value}
        id={data.name}
        className="font-semibold bg-transparent border-custom-accentColor rounded-sm px-3 py-2 w-full duration-500 input-effect mb-5 max-sm:text-sm"
        {...data.register(data.name, {
          required: data.required,
          maxLength: data.maxlength,
          minLength: data.minlength,
          onChange: data.change,
        })}
        disabled={loading}
        placeholder={trans.t(data.placeholder)}
      />
      {data.error && <AlertInput content={data.error} />}
    </>
  );
}
