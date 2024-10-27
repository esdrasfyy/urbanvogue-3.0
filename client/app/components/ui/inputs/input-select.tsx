import React from "react";
import CreatableSelect from "react-select/creatable";
import { customStylesSelect } from "@/app/utils/constants.util";
import { trans } from "@/app/libs/i18n.lib";
import { Inputs } from "@/app/entities/inputs.entitie";

export function InputSelectSingle(data: Inputs.SelectPropsI) {
  return (
    <>
      <label className="text-sm text-custom-textColor uppercase max-md:text-[10px] flex flex-col gap-0.5">
        <span>{trans.t(data.label)}</span>
        <CreatableSelect
          isClearable
          options={data.list}
          styles={customStylesSelect}
          onChange={(selectedOption) => {
            data.onchange(selectedOption);
          }}
        />
      </label>
    </>
  );
}
