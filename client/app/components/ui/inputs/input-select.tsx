import React from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { customStylesSelect } from "@/app/utils/constants.util";
import { trans } from "@/app/libs/i18n.lib";
import { Inputs } from "@/app/entities/inputs.entitie";

export function InputSelect(data: Inputs.SelectPropsI) {
  return (
    <>
      <label className="w-full text-sm text-custom-textColor uppercase max-md:text-[10px] flex flex-col gap-0.5">
        <span>{trans.t(data.label)}</span>
        <Select
          isMulti={data.isMulti}
          options={data.list}
          styles={customStylesSelect}
          defaultValue={data.list.find((option) => option.value === data?.defaultvalue)}
          onChange={(selectedOption) => {
            data.onchange(selectedOption);
          }}
        />
      </label>
    </>
  );
}

export function InputSelectCreatable(data: Inputs.SelectPropsI) {
  return (
    <>
      <label className="w-full text-sm text-custom-textColor uppercase max-md:text-[10px] flex flex-col gap-0.5">
        <span>{trans.t(data.label)}</span>
        <CreatableSelect
          isMulti={data.isMulti}
          options={data.list}
          styles={customStylesSelect}
          defaultValue={data.list.find((option) => option.value === data?.defaultvalue)}
          onChange={(selectedOption) => {
            data.onchange(selectedOption);
          }}
        />
      </label>
    </>
  );
}
