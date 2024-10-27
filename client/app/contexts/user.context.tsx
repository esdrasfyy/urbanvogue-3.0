"use client";
import React, { createContext, useEffect, useState, ReactNode, useCallback, useContext } from "react";
import { Auth } from "../api/auth/auth.api";
import { Contexts } from "../entities/contexts.entitie";

export const ContextUser = createContext<Contexts.UserProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Account.UserI | null>(null);

  const FetchUser = useCallback(async () => {
    const response = await Auth.getMe();
    if (response) {
      setUser(response);
    }
  }, []);

  useEffect(() => {
    FetchUser();
  }, [FetchUser]);

  const contextValue: Contexts.UserProps = {
    user,
    setUser,
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
