"use client";
import React from "react";
import { useApp } from "@/app/contexts/app.context";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Auth } from "@/app/api/auth/auth.api";
import { InputDefault } from "../../ui/inputs/input-default";
import { InputSubmit } from "../../ui/inputs/input-submit";
import { trans } from "@/app/libs/i18n.lib";
import { SchemaForgotPasswordI, ForgotPasswordI } from "@/app/entities/schemas.entitie";

export function ModalForgotPassword() {
  const { setLoading, ShowToast, onCloseForgotPassword, isOpenForgotPassword } = useApp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordI>({ resolver: yupResolver(SchemaForgotPasswordI) });

  const onSubmit: SubmitHandler<ForgotPasswordI> = async (data) => {
    try {
      setLoading(true);

      const status = await Auth.forgotPassword(data);

      if (status === 500) {
        throw new Error("contact support!");
      }

      ShowToast("email sent!", "success");
    } catch (err) {
      if (err instanceof Error) {
        ShowToast("an error occurred!", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpenForgotPassword} onClose={onCloseForgotPassword} isCentered>
      <ModalOverlay bg="none" backdropFilter="saturate(150%) blur(4px)" backdropInvert="50%" backdropBlur="3px" />
      <ModalContent backgroundColor="var(--primary-brand-color)" textColor="var(--text-color)" borderRadius={"7px"} position={"relative"} margin={"0px 14px"}>
        <ModalHeader>{trans.t("change your password")}</ModalHeader>
        <ModalBody>
          <p className="mb-4 text-sm text-custom-textColor">{trans.t("enter your email address and we'll send you a code to reset your password.")}</p>
          <form className="flex w-full flex-col justify-center pb-3" onSubmit={handleSubmit(onSubmit)}>
            <InputDefault type="text" label="email" placeholder="enter you email" name="email" register={register} error={errors?.email?.message} autofocus={true} />
            <InputSubmit type="submit" content="login" icon="FaArrowRight" classname="mt-5" />
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
