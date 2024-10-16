"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../contexts/user.context";
import { CartProvider } from "../contexts/cart.context";
import { NotificationProvider } from "../contexts/notifications.context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <UserProvider>
        <NotificationProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </NotificationProvider>
      </UserProvider>
    </CartProvider>
  );
}
