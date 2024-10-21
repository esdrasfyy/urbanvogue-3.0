"use client";
import { InputPassword } from "@/app/components/ui/inputs/input-password";
import React from "react";
import { useRouter } from "next/navigation";
import { InputsLoginI, SchemaLoginI } from "../types/types-login";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { useUser } from "@/app/contexts/user.context";
import { Auth } from "@/app/api/auth/auth.api";
import { ForgotPassword } from "./forgot-password";
import { useApp } from "@/app/contexts/app.context";

export function FormLogin() {
  const router = useRouter();
  const { setUser } = useUser();
  const { setLoading, ShowToast } = useApp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLoginI>({ resolver: yupResolver(SchemaLoginI) });

  const onSubmit: SubmitHandler<InputsLoginI> = async (data) => {
    try {
      setLoading(true);

      const response = await Auth.login(data);

      if (response.status !== 200) {
        throw new Error(response?.message);
      }

      setUser(response.user!);

      router.back();

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
    <form className="flex w-full flex-col justify-center pb-3" onSubmit={handleSubmit(onSubmit)}>
      <InputDefault type="text" label="email or username" placeholder="enter you email or username" name="credential" register={register} error={errors?.credential?.message} autofocus={true} />
      <InputPassword label="password" name="password" register={register} error={errors?.password?.message} />
      <ForgotPassword />
      {/* <Recaptcha /> */}
      <InputSubmit type="submit" content="login" icon="FaArrowRight" />
    </form>
  );
}
