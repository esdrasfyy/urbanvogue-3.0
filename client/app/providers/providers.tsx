"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../contexts/user.context";
import { CartProvider } from "../contexts/cart.context";
import { NotificationProvider } from "../contexts/notifications.context";
import { AppProvider } from "../contexts/app.context";
import { theme } from "../components/ui/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <CartProvider>
        <UserProvider>
          <NotificationProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
          </NotificationProvider>
        </UserProvider>
      </CartProvider>
    </AppProvider>
  );
}
