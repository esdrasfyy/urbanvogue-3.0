"use client";
import { InputPassword } from "@/app/components/ui/inputs/input-password";
import React from "react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { InputsLoginI, SchemaLoginI } from "../types/types-login";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { useUser } from "@/app/contexts/user.context";
import { Auth } from "@/app/api/auth/auth.api";
import { ForgotPassword } from "./forgot-password";

export function FormLogin() {
  const toast = useToast();
  const router = useRouter();
  const { setUser, setLoading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLoginI>({ resolver: yupResolver(SchemaLoginI) });

  const onSubmit: SubmitHandler<InputsLoginI> = async (data) => {
    const credential = data.credential;
    const password = data.password;
    // const token = window.grecaptcha.execute();
    // const secretKey = "YOUR_SECRET_KEY";
    // const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
      setLoading(true);
      const response = await Auth.login({ credential, password });

      if (response.status === 200) {
        setUser(response.user);
        toast({
          title: "Logged in user!",
          description: `Welcome back, enjoy the varieties!`,
          status: "success",
          duration: 9000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
        setInterval(() => {
          if (router) {
            router.push("/account");
          }
        }, 2000);
      }
      if (response.status !== 200 && response.status !== 401) {
        toast({
          title: "Error unknown.",
          description: "error when logging in, try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
        setLoading(false);
      }
      if (response.status === 401) {
        toast({
          title: "Invalid Credentials!",
          description: "Incorrect credential or password.",
          status: "error",
          duration: 9000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
        setLoading(false);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message || "Erro ao buscar usuário");
      } else {
        throw new Error("Erro ao buscar usuário");
      }
    }
  };

  return (
    <form
      className="flex w-full flex-col justify-center pb-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputDefault
        type="text"
        label="Email or username"
        placeholder="Enter you email or username"
        name="credential"
        register={register}
        error={errors?.credential?.message}
        autofocus={true}
      />
      <InputPassword
        label="Password"
        name="password"
        register={register}
        error={errors?.password?.message}
      />
      <ForgotPassword />
      {/* <Recaptcha /> */}
      <InputSubmit type="submit" content="Login" icon="FaArrowRight" />
    </form>
  );
}
