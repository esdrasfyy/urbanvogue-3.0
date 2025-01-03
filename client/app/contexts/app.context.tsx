"use client";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { trans } from "../libs/i18n.lib";
import { Contexts } from "../entities/contexts.entitie";
import { CartApi } from "../api/cart/cart.api";
import { useQuery } from "@tanstack/react-query";

export const ContextApp = createContext<Contexts.AppProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen: isOpenForgotPassword, onOpen: onOpenForgotPassword, onClose: onCloseForgotPassword } = useDisclosure();
  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();
  const [cart, setCart] = useState<Cart.I>();
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
  const { data, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: CartApi.get,
  });
  useEffect(() => {
    if (data) {
      setCart(data);
    }
  }, [data]);

  useEffect(() => {
    if (addingItem) {
      refetch();
    }
  }, [addingItem, refetch]);

  const AddItemToCart = async ({ ...dto }: { product_id: number; quantity: number; variation_id: number }) => {
    if (addingItem === null) {
      try {
        setAddingItem(dto.product_id);
        // if (data?.items.find((e) => e.variation_id === dto.variation_id)) {
        //   alert("ja tem");
        // }
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
    cart,
    setCart,
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
