"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { trans } from "../libs/i18n.lib";
import { Contexts } from "../entities/contexts.entitie";
import { CartApi } from "../api/cart/cart.api";

export const ContextApp = createContext<Contexts.AppProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen: isOpenForgotPassword, onOpen: onOpenForgotPassword, onClose: onCloseForgotPassword } = useDisclosure();
  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();
  const [loading, setLoading] = useState<boolean>(false);
  const [addingItem, setAddingItem] = useState<number | null>(null);
  const toast = useToast();

  const ShowToast = (title: string, status: "info" | "warning" | "success" | "error") => {
    toast({
      title: trans.t(title),
      description: "",
      status,
      duration: 9000,
      isClosable: true,
      variant: "left-accent",
      position: "top-right",
    });
  };

  const AddItemToCart = async ({ ...dto }: { product_id: number; quantity: number; variation_id: number }) => {
    if (addingItem === null) {
      try {
        setAddingItem(dto.product_id);
        await CartApi.add({ ...dto, cart_id: 1 });
        ShowToast("Product Added!", "success");
      } catch (error) {
        console.log(error);
      } finally {
        setAddingItem(null);
      }
    }
  };
  const contextValue: Contexts.AppProps = {
    loading,
    setLoading,
    ShowToast,
    isOpenForgotPassword,
    onCloseForgotPassword,
    onOpenForgotPassword,
    AddItemToCart,
    addingItem,
    setAddingItem,
    isOpenCart,
    onCloseCart,
    onOpenCart,
  };

  return <ContextApp.Provider value={contextValue}>{children}</ContextApp.Provider>;
};

export const useApp = () => {
  const context = useContext(ContextApp);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
