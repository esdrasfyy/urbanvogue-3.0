import { trans } from "@/app/libs/i18n.lib";
import React from "react";

export function AlertInput({ content }: { content: string }) {
  return <span className="absolute -bottom-5 right-0 text-custom-error pt-0.5 italic text-right text-[10px]">{trans.t(content)}</span>;
}
