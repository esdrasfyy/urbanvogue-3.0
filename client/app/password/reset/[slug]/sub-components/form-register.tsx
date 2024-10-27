"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputPassword } from "@/app/components/ui/inputs/input-password";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { Auth } from "@/app/api/auth/auth.api";
import { useApp } from "@/app/contexts/app.context";
import { useRouter } from "next/navigation";
import { InputsResetPasswordI, SchemaResetPasswordI } from "@/app/entities/schemas.entitie";

export function FormResetPassword({ token }: { token: string }) {
  const { register, handleSubmit, formState: { errors } } = useForm<InputsResetPasswordI>({ resolver: yupResolver(SchemaResetPasswordI) });

  const { setLoading, ShowToast } = useApp();
  const router = useRouter();

  const onSubmit: SubmitHandler<InputsResetPasswordI> = async (data) => {
    try {
      setLoading(true);
      const status = await Auth.resetPassword({...data, token});

      if (status !== 200) {
        throw new Error("the link is expired or invalid.");
      }

      router.push("/login");

      ShowToast("password changed!", "Your new password is now available.", "success");

      return;
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
      <InputDefault type="email" label="email" placeholder="jhondoe@gmail.com" name="email" register={register} error={errors?.email?.message} />
      <InputPassword label="password" name="password" register={register} error={errors?.password?.message} />
      <InputPassword label="repeat password" name="repeat_password" register={register} error={errors?.repeat_password?.message} />
      <InputSubmit type="submit" content="reset" icon="FaArrowRight" classname="mt-6 mb-6" />
    </form>
  );
}
