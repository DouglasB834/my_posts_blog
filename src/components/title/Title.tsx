import React from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps {
  title: string;
  className?: string;
}

export const Title = ({ className, title }: TitleProps) => {
  return (
    <h3 className={twMerge("text-white text-xl mb-4 ", className)}>{title} </h3>
  );
};
