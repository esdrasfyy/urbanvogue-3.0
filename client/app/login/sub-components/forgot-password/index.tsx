import Link from "next/link";
import React from "react";

export function ForgotPassword() {
  return (
    <div>
      <Link
        href={"/forgot-password"}
        className="text-custom-textColor pb-2 font-light text-sm duration-300 ease-linear hover:text-custom-pink hover-effect hover-link"
      >
        Forgot your password?
      </Link>
    </div>
  );
}
