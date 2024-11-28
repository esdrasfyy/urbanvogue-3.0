import React from "react";
import { MenuAdmin } from "./sub-components/menu-admin";
export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
