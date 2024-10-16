"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { InputDefault } from "@/app/components/ui/inputs/default/input-default";
import { InputsRegisterI, SchemaRegisterI } from "../../types/types-register";
import { useUser } from "@/app/contexts/user-context";
import { InputPassword } from "@/app/components/ui/inputs/password/input-password";
import { InputSubmit } from "@/app/components/ui/inputs/submit/input-submit";
import Link from "next/link";
import { InputCheckbox } from "@/app/components/ui/inputs/checkbox/input-checkbox";

export function FormRegister() {
  const { register, handleSubmit, formState: { errors }} = useForm<InputsRegisterI>({ resolver: yupResolver(SchemaRegisterI) });

  const onSubmit: SubmitHandler<InputsRegisterI> = async (data) => {};

  return (
    <form className="flex w-full flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
      <InputDefault type="text" label="Username" placeholder="johndoe" name="username" register={register} error={errors?.username?.message}/>
      <InputDefault type="email" label="Email" placeholder="jhondoe@gmail.com" name="email" register={register} error={errors?.email?.message}/>
      <InputPassword label="Password" name="password" register={register} error={errors?.password?.message}/>
      <InputCheckbox error={errors.terms?.message} register={register} classname={errors?.password?.message && "mt-3"}>
        Eu concordo com os
        <Link href="https://www.snapic.com.br/pages/terms-and-conditions" className="font-semibold text-custom-accentColor mx-1 hover:underline">Termos de Uso</Link>
        e
        <Link href="https://www.snapic.com.br/pages/privacy" className="font-semibold text-custom-accentColor mx-1 hover:underline">Política de Privacidade</Link>
      </InputCheckbox>
      <InputSubmit type="submit" content="Register" icon="FaArrowRight" classname="mt-6"/>
    </form>
  );
}
