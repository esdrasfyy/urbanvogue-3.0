import { useApp } from "@/app/contexts/app.context";
import { trans } from "@/app/libs/i18n.lib";
import React from "react";

export function ForgotPassword() {
  const { onOpenForgotPassword } = useApp();
  return (
    <button type="button" onClick={onOpenForgotPassword} className="text-custom-textColor text-start font-light text-sm hover-effect hover-link">
      {trans.t("forgot your password?")}
    </button>
  );
}
