"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputsRegisterI, SchemaRegisterI } from "../types/types-register";
import { InputPassword } from "@/app/components/ui/inputs/input-password";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import Link from "next/link";
import { InputCheckbox } from "@/app/components/ui/inputs/input-checkbox";
import { trans } from "@/app/libs/i18n.lib";
import { Auth } from "@/app/api/auth/auth.api";
import { useUser } from "@/app/contexts/user.context";
import { useApp } from "@/app/contexts/app.context";
import { useRouter } from "next/navigation";

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsRegisterI>({ resolver: yupResolver(SchemaRegisterI) });

  const { setLoading, ShowToast } = useApp();
  const { setUser } = useUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<InputsRegisterI> = async ({ terms, ...data }) => {
    try {
      setLoading(true);

      if (!terms) {
        throw new Error("it is necessary to sign the terms to proceed");
      }

      const response = await Auth.register(data);

      if (response.status !== 201) {
        throw new Error(response?.message);
      }

      setUser(response.user!);

      router.push("/account");

      ShowToast("user logged in!", "take advantage of our innovative promotions.", "success");
    } catch (err) {
      if (err instanceof Error) {
        ShowToast("an error occurred!", err.message, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex w-full flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
      <InputDefault type="text" label="Username" placeholder="johndoe" name="username" register={register} error={errors?.username?.message} />
      <InputDefault type="email" label="Email" placeholder="jhondoe@gmail.com" name="email" register={register} error={errors?.email?.message} />
      <InputPassword label="Password" name="password" register={register} error={errors?.password?.message} />
      <InputCheckbox error={errors.terms?.message} register={register} classname={errors?.password?.message && "mt-3"} name="terms">
        {trans.t("I agree to the")}
        <Link href="https://www.snapic.com.br/pages/terms-and-conditions" className="font-semibold text-custom-accentColor mx-1 hover:underline">
          {trans.t("terms of use")}
        </Link>
        e
        <Link href="https://www.snapic.com.br/pages/privacy" className="font-semibold text-custom-accentColor mx-1 hover:underline">
          {trans.t("privacy police")}
        </Link>
      </InputCheckbox>
      <InputSubmit type="submit" content="register" icon="FaArrowRight" classname="mt-6" />
    </form>
  );
}
