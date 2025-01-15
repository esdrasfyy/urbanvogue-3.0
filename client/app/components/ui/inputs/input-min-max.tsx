"use client";
import { Input } from "@chakra-ui/react";
import React from "react";

export interface MinMaxProps {
  type: string;
  label: string;
  name: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  disabled?: boolean;
  classname?: string;
  pleaceholder: string;
  value?: string;
  defaultvalue?: any;
  handleMinMax: Function;
}
export function MinMaxUi({ type, label, name, pleaceholder, value, disabled, defaultvalue, handleMinMax }: MinMaxProps) {
  return (
    <>
      <label className={` mb-2 text-sm text-custom-textColor max-md:text-[10px] max-md:mb-1`} htmlFor={name}>
        {label}
      </label>
      <Input type="number" placeholder={pleaceholder} id={name} borderWidth="1px" paddingLeft="10px" borderRadius={"4px"} focusBorderColor={"#ed145b"} value={value} min={0} max={999} defaultValue={defaultvalue} disabled={disabled} onChange={(e) => handleMinMax(e.target.value)} />
    </>
  );
}
