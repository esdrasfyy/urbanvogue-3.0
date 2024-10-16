import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <h1>404</h1>
      <p>parece q essa pagina nao existe</p>
      <Link href={"/"}>Voltar</Link>
    </div>
  );
}
