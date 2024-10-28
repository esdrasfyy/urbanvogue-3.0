"use client";

import { Inputs } from "@/app/entities/inputs.entitie";
import { AlertInput } from "../alerts/alert-input";
import { useApp } from "@/app/contexts/app.context";
import { trans } from "@/app/libs/i18n.lib";
import { format } from "date-fns";

export function InputDate(data: Inputs.DatePropsI) {
  const { loading } = useApp();
  return (
    <label className="relative text-sm text-custom-textColor uppercase max-md:text-[10px] flex flex-col gap-0.5" htmlFor={data.name}>
      <span>{trans.t(data.label)}</span>
      <input
        type="date"
        defaultValue={data.defaultvalue && format(new Date(data.defaultvalue), "yyyy-MM-dd")}
        id={data.name}
        className="font-semibold bg-transparent border-custom-accentColor rounded-sm px-3 py-2 w-full duration-500 input-effect max-sm:text-sm"
        {...data.register(data.name, {
          required: data.required,
        })}
        disabled={loading}
      />
      {data.error && <AlertInput content={data.error} />}
    </label>
  );
}
