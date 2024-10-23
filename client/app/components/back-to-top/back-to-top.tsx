"use client";
import { RiArrowUpDoubleFill } from "react-icons/ri";

export const BackToTop = () => {
  const irParaOTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={irParaOTopo} className="fixed right-5 bottom-5 border-custom-accentColor border bg-custom-primaryBrand rounded-full flex items-center justify-center w-14 h-14 text-2xl text-custom-accentColor">
      <span className="back-to-top">
        <RiArrowUpDoubleFill />
      </span>
    </button>
  );
};
