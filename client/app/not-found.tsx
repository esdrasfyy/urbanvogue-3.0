import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <p>parece q essa pagina nao existe</p>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}
