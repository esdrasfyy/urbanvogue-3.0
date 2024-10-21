import { trans } from "@/app/libs/i18n.lib";
import React from "react";

export function AlertInput({ content }: { content: string }) {
  return <span className="text-custom-error pt-2 text-sm italic text-right mr-2 max-sm:text-[10px]">{trans.t(content)}</span>;
}
