"use client";
import { InputRightElement, Button, InputGroup } from "@chakra-ui/react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { trans } from "@/app/libs/i18n.lib";
import { AlertInput } from "../alerts/alert-input";
import { useApp } from "@/app/contexts/app.context";
import { Inputs } from "@/app/entities/inputs.entitie";

export function InputPassword(data: Inputs.PasswordPropsI) {
  const [show, setShow] = React.useState(false);
  const { loading } = useApp();

  return (
    <label className="w-full relative text-sm text-custom-textColor uppercase max-md:text-[10px] flex flex-col gap-0.5" htmlFor={data.name}>
      <span>{trans.t(data.label)}</span>
      <InputGroup>
        <input defaultValue={data.defaultvalue} type={show ? "text" : "password"} id={data.name} disabled={loading} className="font-semibold bg-transparent border-custom-accentColor rounded-sm px-3 py-2 w-full duration-500 input-effect max-sm:text-sm" {...data.register(data.name)} placeholder="••••••••••••" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" background="none" paddingRight={0} onClick={() => setShow(!show)} _hover={{ background: "none" }}>
            <div className={`group -mt-1.5 text-xl text-custom-tertiaryBrand  translate-y-[20%] hover-effect hover-link duration-300 ease-in-out`}>{!show ? <FaEye /> : <FaEyeSlash />}</div>
          </Button>
        </InputRightElement>
      </InputGroup>
      {data.error && <AlertInput content={data.error} />}
    </label>
  );
}
