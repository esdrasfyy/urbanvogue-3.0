import React from "react";

export function MenuList() {
  return (
    <ul className="flex gap-4 font-semibold tracking-widest max-md:hidden">
      <li className="hover-effect hover-link">Inicio</li>
      <li className="hover-effect hover-link">Sobre</li>
      <li className="hover-effect hover-link">Contato</li>
    </ul>
  );
}
