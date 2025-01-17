"use client";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { trans } from "../libs/i18n.lib";
import { Contexts } from "../entities/contexts.entitie";
import { CartApi } from "../api/cart/cart.api";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "./user.context";
import { ProductApi } from "../api/product/product.api";

export const ContextApp = createContext<Contexts.AppProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen: isOpenForgotPassword, onOpen: onOpenForgotPassword, onClose: onCloseForgotPassword } = useDisclosure();
  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();
  const { isOpen: isOpenNeedAuth, onOpen: onOpenNeedAuth, onClose: onCloseNeedAuth } = useDisclosure();
  const [cart, setCart] = useState<Cart.I>();
  const [loading, setLoading] = useState<boolean>(false);
  const [addingItem, setAddingItem] = useState<number | null>(null);
  const [queries, setQueries] = useState<Product.ParametersSearch>({});
  const toast = useToast();
  const { user } = useUser();

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
    enabled: user ? true : false,
  });

  const { data: searchProducts } = useQuery({
    queryKey: [queries],
    staleTime: 24 * 60 * 60 * 1000,
    queryFn: () => ProductApi.getProductsAll({ queries: queries }),
    enabled: queries ? true : false,
  });

  useEffect(() => {
    if (data) {
      setCart(data);
    }
  }, [data]);

  const AddItemToCart = async ({ ...dto }: { product_id: number; quantity: number; variation_id: number }) => {
    if (addingItem === null) {
      try {
        setAddingItem(dto.product_id);
        await CartApi.add({ ...dto, cart_id: 1 });
        ShowToast("Product Added!", "success");
        refetch();
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
    queries,
    setQueries,
    searchProducts,
    setAddingItem,
    isOpenCart,
    onCloseCart,
    onOpenCart,
    cart,
    setCart,
    isOpenNeedAuth,
    onCloseNeedAuth,
    onOpenNeedAuth,
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
