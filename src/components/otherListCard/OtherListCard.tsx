import React from "react";
import { OtherProps } from "../otherPost/OtherPost";

export const OtherListCard = ({ title, link, target }: OtherProps) => {
  return (
    <li className="flex flex-col ">
      <a
        href={link}
        target={target}
        rel="noopener"
        title="Read more"
        className="font-serif text-sky-600 hover:text-gray-400"
      >
        {title} <span>Dezembre, 12, 2023</span>
      </a>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
        assumenda itaque, blanditiis a impedit ad quod placeat enim dignissimos?
        Quae!
      </p>
      <a
        href={link}
        target={target}
        rel="noopener"
        title="Read more"
        className="font-serif text-white  py-2 px-4  bg-slate-600 self-start rounded-[4px] hover:bg-sky-600 transition-all mt-2"
      >
        Read more
      </a>
    </li>
  );
};
