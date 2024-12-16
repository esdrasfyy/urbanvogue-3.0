"use client";
import React, { createContext, useState, ReactNode, useContext } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { trans } from "../libs/i18n.lib";
import { Contexts } from "../entities/contexts.entitie";
import { ColorProductCreateI, GeneralProductCreateI, SizesProductCreateI } from "../entities/schemas.entitie";
import { useApp } from "./app.context";

export const ContextAdmin = createContext<Contexts.AdminProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { ShowToast } = useApp();
  
  // START - PRODUCT CREATE
  const [tabProductCreate, setTabProductCreate] = useState<number>(1);
  const [colorsProductCreate, setColorsProductCreate] = useState<ColorProductCreateI[]>([]);
  const [sizesProductCreate, setSizesProductCreate] = useState<SizesProductCreateI[]>([]);
  const [generalProductCreate, setGeneralProductCreate] = useState<GeneralProductCreateI | null>(null);
  // END - PRODUCT CREATE

  const contextValue: Contexts.AdminProps = {
    tabProductCreate,
    setTabProductCreate,
    generalProductCreate,
    setGeneralProductCreate,
    colorsProductCreate,
    setColorsProductCreate,
    sizesProductCreate,
    setSizesProductCreate,
  };

  return <ContextAdmin.Provider value={contextValue}>{children}</ContextAdmin.Provider>;
};

export const useAdmin = () => {
  const context = useContext(ContextAdmin);
  if (!context) {
    throw new Error("useAdmin must be used within a AdminProvider");
  }
  return context;
};
