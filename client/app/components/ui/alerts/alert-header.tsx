import React from "react";

export function AlertItemHeader({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute text-[30px] flex items-center justify-center rounded-full bottom-0 -right-1 w-[15px] h-[15px] bg-custom-error">
      {children}
    </span>
  );
}
