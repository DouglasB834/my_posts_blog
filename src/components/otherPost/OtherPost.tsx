import React from "react";
import { Title } from "../title/Title";
import { OtherListCard } from "../otherListCard/OtherListCard";
import Image from "next/image";
import nextLogo from "../../../public/assets/log-nextjs.png";

type TargetLink = "_self" | "_blank" | "_parent" | "_top" | undefined;

export interface OtherProps {
  title: string;
  date?: string;
  content?: string;
  link: string;
  linkText?: string;
  target?: TargetLink;
}

export const OtherPost = ({ title, link, target }: OtherProps) => {
  return (
    <div className="bg-[#9CA3AF] p-2">
      <figure className="flex justify-center">
        <Image
          alt="logo next,js"
          src={nextLogo}
          about="Title post"
          width={50}
          height={50}
          sizes="100vw"
          loading={"lazy"}
          className="rounded-full bg-red-300 self-  translate-y-5"
        />
      </figure>

      <div className=" bg-white p-4">
        <Title
          title="How do to use the noStore API in Nextjs?"
          className="text-[15px] font-bold text-gray-900 "
        />
        <OtherListCard title={title} link={link} target={target} />
      </div>
    </div>
  );
};
