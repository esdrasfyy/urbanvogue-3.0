import { trans } from "@/app/libs/i18n.lib";
import React from "react";

export function MenuList() {
  return (
    <ul className="flex gap-4 font-semibold tracking-widest max-md:hidden">
      <li className="hover-effect hover-link">{trans.t("home")}</li>
      <li className="hover-effect hover-link">{trans.t("about")}</li>
      <li className="hover-effect hover-link">{trans.t("contact")}</li>
    </ul>
  );
}
