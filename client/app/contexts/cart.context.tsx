import React, { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { CartSummary, ContextCartProps, ProductCartI, UpdateItemQuantityParamsProps } from "./contexts";

export const ContextCart = createContext<ContextCartProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState<ProductCartI[]>([]);
  const [cartResume, setCartResume] = useState<CartSummary | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem("MyCart");
    if (storedCart) {
      const cartItems = Array.isArray(JSON.parse(storedCart))
        ? (JSON.parse(storedCart) as ProductCartI[])
        : [];

      setProductsInCart(cartItems);
      setCartResume(calcCartSum(cartItems));
    } else {
      setProductsInCart([]);
      setCartResume({ totalPrice: 0, totalQuantity: 0, products: [] });
    }
  }, []);

  const addItemToCart = (data: ProductCartI) => {
    let updatedCart: ProductCartI[];
    let existingProductIndex: number;

    if (!productsInCart || !Array.isArray(productsInCart)) {
      updatedCart = [{ ...data, quantity: data.quantity }];
    } else {
      existingProductIndex = productsInCart.findIndex(
        (product) =>
          product.id === data.id &&
          product.color === data.color &&
          product.size === data.size
      );

      if (existingProductIndex !== -1) {
        updatedCart = [...productsInCart];
        updatedCart[existingProductIndex].quantity += data.quantity;
      } else {
        updatedCart = [...productsInCart, { ...data, quantity: data.quantity }];
      }
    }

    localStorage.setItem("MyCart", JSON.stringify(updatedCart));
    setProductsInCart(updatedCart);
    setCartResume(calcCartSum(updatedCart));
  };

  const calcCartSum = (cartItems: ProductCartI[] | null | undefined): CartSummary => {
    const defaultSummary: CartSummary = {
      totalPrice: 0,
      totalQuantity: 0,
      products: [],
    };

    if (!cartItems || !Array.isArray(cartItems)) {
      return defaultSummary;
    }

    const { totalPrice, totalQuantity } = cartItems.reduce(
      (acc, { price, quantity }) => {
        return {
          totalPrice: +price * quantity + acc.totalPrice,
          totalQuantity: quantity + acc.totalQuantity,
        };
      },
      { totalPrice: 0, totalQuantity: 0 }
    );

    return { totalPrice, totalQuantity, products: cartItems};
  };

  const updateItemQuantity = (data: UpdateItemQuantityParamsProps) => {
    const updatedCart = productsInCart.map((product, i) =>
      i === data.index && product.id === data.id
        ? { ...product, quantity: data.quantity,size: data.size,color: data.color }
        : product
    );

    setProductsInCart(() => updatedCart);
    localStorage.setItem("MyCart", JSON.stringify(updatedCart));
    setCartResume(calcCartSum(updatedCart));
  };

  const removeItemFromCart = async (id: number, index: number) => {
    const updatedCart = await productsInCart.filter(
      (item, indexItem) => item.id !== id || indexItem !== index
    );
    setProductsInCart(() => updatedCart);
    localStorage.setItem("MyCart", JSON.stringify(updatedCart));
    setCartResume(calcCartSum(updatedCart));
    return;
  };

  const disclosure = useDisclosure();
  const contextValue: ContextCartProps = {
    disclosure,
    cartResume,
    setCartResume,
    productsInCart,
    setProductsInCart,
    addItemToCart,
    updateItemQuantity,
    removeItemFromCart,
  };

  return <ContextCart.Provider value={contextValue}>{children}</ContextCart.Provider>;
};

export const useCart = () => {
  const context = useContext(ContextCart);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

