"use client";
import { useApp } from "@/app/contexts/app.context";
import { trans } from "@/app/libs/i18n.lib";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import React from "react";

export const NeedAuth = () => {
  const { isOpenNeedAuth, onCloseNeedAuth } = useApp();
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpenNeedAuth} onClose={onCloseNeedAuth} isCentered>
      <ModalOverlay bg="none" backdropFilter="saturate(150%) blur(4px)" backdropInvert="50%" backdropBlur="3px" />
      <ModalContent backgroundColor="var(--primary-brand-color)" textColor="var(--text-color)" borderRadius={"7px"} position={"relative"} margin={"0px 14px"}>
        <ModalHeader>{trans.t("change your password")}</ModalHeader>
        <ModalBody>
          <p className="mb-4 text-sm text-custom-textColor">need login</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
