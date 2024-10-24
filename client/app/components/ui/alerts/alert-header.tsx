import React from "react";

export function AlertItemHeader({ children }: { children: React.ReactNode }) {
  return <span className="absolute flex items-center justify-center rounded-full top-1 right-1 w-[15px] h-[15px] bg-custom-error">{children}</span>;
}
