import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.jpg";

export const Header = async () => {
  return (
    <header className=" bg-gray-400 items-center shadow-md mb-4 ">
      <div className="flex justify-between px-4 h-20  max-w-[1200px]  m-auto items-center">
        <a href="/">
          <Image
            src={logo}
            alt="logo, uma canela escrevendo no table saindo varias cores"
            title="logo"
            width={40}
            height={40}
            sizes="100vw"
            className="rounded-full"
          />
        </a>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm">Welcome Douglas</span>
          <figure>
            <Image
              alt="sua foto"
              title="Sua foto"
              src={"https://github.com/DouglasB834.png"}
              width={50}
              height={50}
              sizes="100vw"
              loading={"lazy"}
              className="rounded-full bg-red-300"
            />
          </figure>
        </div>
      </div>
    </header>
  );
};
