"use client";
import { useState, useEffect } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const irParaOTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={irParaOTopo} className="fixed right-5 bottom-5 border-custom-accentColor border bg-custom-primaryBrand rounded-full flex items-center justify-center w-14 h-14 text-2xl text-custom-accentColor duration-300">
          <span className="back-to-top">
            <RiArrowUpDoubleFill />
          </span>
        </button>
      )}
    </>
  );
};
