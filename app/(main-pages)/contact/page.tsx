import React from "react";
import Link from "next/link";
import { FaArtstation } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="flex flex-col text-center">
        <h1 className="text-4xl text-[#b0b0b0] font-bold tracking-widest mb-10">
          Let&apos;s Talk
        </h1>
        <div className="w-80 h-[1px] bg-[#38bdda] mx-auto mb-10"></div>
        <div className="mb-16">
          <p className="text-[#b0b0b0] text-xl font-light tracking-widest mb-2">
            +972 527 980 449
          </p>
          <p className="text-[#b0b0b0] text-xl font-light tracking-widest mb-2">
            bolt68@walla.com
          </p>
          <p className="text-[#b0b0b0] text-xl font-light tracking-widest mb-2">
            Israel
          </p>
        </div>

        <div className="flex justify-center">
          <div className="space-x-4 text-white  w-[50%] flex justify-around ">
            <Link
              href="https://gili_akashi66.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArtstation className="hover:opacity-80 block" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gili-lipschitz-4b5479233"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:opacity-80 block" />
            </Link>
            <Link
              href="https://www.facebook.com/people/%D7%92%D7%99%D7%9C%D7%99-%D7%9C%D7%99%D7%A4%D7%A9%D7%99%D7%A5/pfbid0ybse66N7BxEpVo7vnk8eo5GvWzRBy3N2zSVwcadEemzPgdubjf93bsKQrXFJB9fbl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:opacity-80 block" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
