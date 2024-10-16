"use client";
// components/no-ssr.js
import React, { useEffect, useState } from "react";

const NoSSR = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Definindo o estado como true quando o componente é montado
    setIsMounted(true);
  }, []);

  // Apenas renderiza o conteúdo se o componente estiver montado
  return isMounted ? <>{children}</> : null;
};

export default NoSSR;
