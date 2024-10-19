"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { ContextAppProps } from "./contexts";
import { useToast } from "@chakra-ui/react";
import { trans } from "../libs/i18n.lib";

export const ContextApp = createContext<ContextAppProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [emailForRecovery, setEmailForRecovery] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const ShowToast = (title: string, description: string, status: "info" | "warning" | "success" | "error") => {
    toast({
      title: trans.t(title),
      description: trans.t(description),
      status,
      duration: 9000,
      isClosable: true,
      variant: "left-accent",
      position: "top-right",
    });
  };

  const contextValue: ContextAppProps = {
    emailForRecovery,
    setEmailForRecovery,
    loading,
    setLoading,
    ShowToast,
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
