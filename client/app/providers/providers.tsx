"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "../contexts/user-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </UserProvider>
  );
}
