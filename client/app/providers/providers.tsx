"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../contexts/user.context";
import { CartProvider } from "../contexts/cart.context";
import { NotificationProvider } from "../contexts/notifications.context";
import { AppProvider } from "../contexts/app.context";
import { theme } from "../components/ui/theme/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../libs/react-query.lib";
import { AdminProvider } from "../contexts/admin.context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <AdminProvider>
          <CartProvider>
            <UserProvider>
              <NotificationProvider>
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
              </NotificationProvider>
            </UserProvider>
          </CartProvider>
        </AdminProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}
