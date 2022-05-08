import React, { FC } from "react";
import Link from "next/link"
interface RegisterProps {
  HeadText: string;
  PText: string;
  CTAText: string;
  position?: string;
  link:string;
  className?:string;
}
export const RegisterComponent: FC<RegisterProps> = ({
  HeadText,
  PText,
  CTAText,
  link,
  className,
  position,
}) => {
  return (
    <div className={className?"md:h-screen col-span-1 bg-black flex justify-center items-center relative " + className:"md:h-screen col-span-1 bg-black flex justify-center items-center relative"}>
      <div className="text-white space-y-4 w-8/12 text-center">
        <h1 className="text-3xl font-bold   ">{HeadText}</h1>
        <p>{PText}</p>
        <Link href={link} passHref>
          <button className="mx-auto block bg-red-400 rounded-3xl px-5 py-2 font-normal">
            {CTAText}
          </button>
        </Link>
      </div>
      <MiniGallery position={position} />
    </div>
  );
};
interface MiniGallery {
  position?: string;
}
const MiniGallery: FC<MiniGallery> = ({ position }) => {
  return (
    <div
      className={
        position === "right"
          ? "grid grid-cols-2 gap-2 absolute bottom-0 left-0 w-28"
          : "grid grid-cols-2 gap-2 absolute bottom-0 right-0 w-28"
      }
    >
      <div className="space-y-1">
        <img src="./images/image1.png" alt="" />
        <img src="./images/image2.png" alt="" />
      </div>
      <div className="pt-4 space-y-1">
        <img src="./images/image3.png" alt="" />
        <img src="./images/image4.png" alt="" />
      </div>
    </div>
  );
};
