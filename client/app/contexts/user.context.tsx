"use client";
import React, { createContext, useEffect, useState, ReactNode, useCallback, useContext } from "react";
import { UserI } from "@/app/interfaces/user/user";
import { ContextUserProps } from "./contexts";
import { Auth } from "../api/auth/auth.api";

export const ContextUser = createContext<ContextUserProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserI | null>(null);

  const FetchUser = useCallback(async () => {
    const response = await Auth.getMe();
    if (response) {
      setUser(response);
    }
  }, []);

  useEffect(() => {
    FetchUser();
  }, [FetchUser]);

  const contextValue: ContextUserProps = {
    user,
    setUser
  };

  return <ContextUser.Provider value={contextValue}>{children}</ContextUser.Provider>;
};

export const useUser = () => {
  const context = useContext(ContextUser);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
