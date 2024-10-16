import { trans } from "@/app/libs/i18n.lib";
import Link from "next/link";
import React from "react";

export function ForgotPassword() {
  return (
    <div className="mb-6">
      <Link href={"/forgot-password"} className="text-custom-textColor font-light text-sm hover-effect hover-link">{trans.t('forgot your password?')}</Link>
    </div>
  );
}
