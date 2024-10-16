"use client";

import { Input } from "@chakra-ui/react";
import React from "react";
import { InputPropsI } from "./types/types-inputs";
import { useUser } from "@/app/contexts/user.context";
import { trans } from "@/app/libs/i18n.lib";
import { AlertInput } from "../alerts/alert-input";

export function InputDefault(data: InputPropsI) {
  const { loading } = useUser();
  return (
    <>
      <label
        className={`mb-2 text-sm text-custom-textColor uppercase max-md:text-[10px] max-md:mb-1`}
        htmlFor={data.name}
      >
        {trans.t(data.label)}
      </label>
      <Input
        type={data.type}
        placeholder={trans.t(data.placeholder)}
        id={data.name}
        borderWidth="1px"
        paddingLeft="10px"
        borderRadius="4px"
        focusBorderColor="#ed145b"
        onFocus={data.focus}
        value={data.value}
        defaultValue={data.defaultvalue}
        maxLength={data.maxlength}
        disabled={loading}
        className={`${data.classname} ${!data.error && "mb-6"} py-5 shadow-lg`}
        {...data.register(data.name, {
          required: data.required,
          maxLength: data.maxlength,
          minLength: data.minlength,
          onChange: data.change,
        })}
      />
      {data.error && <AlertInput content={data.error} />}
    </>
  );
}
