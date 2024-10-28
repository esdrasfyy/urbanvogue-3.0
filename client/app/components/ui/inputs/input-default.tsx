"use client";
import React from "react";
import { trans } from "@/app/libs/i18n.lib";
import { AlertInput } from "../alerts/alert-input";
import { useApp } from "@/app/contexts/app.context";
import { Inputs } from "@/app/entities/inputs.entitie";

export function InputDefault(data: Inputs.DefaultPropsI) {
  const { loading } = useApp();
  return (
    <label className="w-full relative text-sm text-custom-textColor uppercase max-md:text-[10px] flex flex-col gap-0.5" htmlFor={data.name}>
      <span>{trans.t(data.label)}</span>
      <input
        type={data.type}
        defaultValue={data.defaultvalue}
        value={data.value}
        id={data.name}
        className="font-semibold bg-transparent border-custom-accentColor rounded-sm px-3 py-2 w-full duration-500 input-effect max-sm:text-sm"
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
    </label>
  );
}
