"use client";
import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FcLeftUp2 } from "react-icons/fc";

interface IpropsBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  //   className: string;
}

export const ButtonBackUp = ({ ...props }: IpropsBtn) => {
  const [isBtn, setIsbtn] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setIsbtn(true);
      } else {
        setIsbtn(false);
      }
    });
  }, [isBtn]);

  return (
    <>
      {isBtn && (
        <button
          className={twMerge(
            "inline-block fixed bottom-[1rem] right-4 z-10 text-[2rem] bg-white rounded-full hover:bg-sky-500",
            props.className
          )}
          {...props}
          onClick={scrollUp}
        >
          <FcLeftUp2 />
        </button>
      )}
    </>
  );
};
