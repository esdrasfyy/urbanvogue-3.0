"use client";
import { Input, InputRightElement, Button, InputGroup } from "@chakra-ui/react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InputPasswordPropsI } from "../types/inputs";
import { useUser } from "@/app/contexts/user-context";

export function InputPassword(data: InputPasswordPropsI) {

  const [show, setShow] = React.useState(false);
  const { loading } = useUser();

  return (
    <>
      <label className="mb-2 text-sm text-custom-textColor uppercase max-md:text-[10px] max-md:mb-1" htmlFor={data.name}> {data.label}</label>
      <InputGroup>
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="••••••••••••"
          borderWidth="1px"
          borderRadius={"4px"}
          id={data.name}
          name={data.name}
          defaultValue={data.defaultvalue}
          focusBorderColor={"#ed145b"}
          className={`${data.classname} ${!data.error && "mb-6"} text-3xl py-5 shadow-lg`}
          {...data.register(`${data.name}`)}
          disabled={loading}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" background="none" paddingRight={0} onClick={() => setShow(!show)} _hover={{ background: "none" }}>
            <div className={`group -mt-1.5 text-xl text-custom-tertiaryBrand  translate-y-[20%] hover:text-custom-accentColor duration-300 ease-in-out`}>{!show ? <FaEye /> : <FaEyeSlash />}</div>
          </Button>
        </InputRightElement>
      </InputGroup>
      <span className="text-custom-error pt-2 text-sm italic text-right mr-2">{data?.error}</span>
    </>
  );
}
