"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";

export default function NavBar() {
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsWorkOpen(false); // Close work dropdown when pathname changes
  }, [pathname]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-0 w-full bg-[rgb(24,24,24)] p-4 z-40 hidden md:block">
        <div className="flex items-center justify-between px-10 mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src="/images/logo/secondary-logo.png"
              alt="Gili Giammona Logo"
              width={150}
              height={40}
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-8 font-['Helvetica']">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-[#38bdda]" : "text-[#b0b0b0]"
              } hover:opacity-60 font-light`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-[#38bdda]" : "text-[#b0b0b0]"
              } hover:opacity-60 font-light`}
            >
              ABOUT
            </Link>

            {/* Work Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsWorkOpen(!isWorkOpen)}
                className={`flex items-center ${
                  pathname === "/3d" || pathname === "/storyboard"
                    ? "text-[#38bdda]"
                    : "text-[#b0b0b0]"
                } hover:opacity-60 font-light`}
              >
                <div className="flex items-center">
                  WORK <MdArrowDropDown size={20} />
                </div>
              </button>

              {isWorkOpen && (
                <div className="absolute mt-2 py-2 px-4 bg-[rgb(44,44,44)] rounded-lg w-fit">
                  <Link
                    href="/3d"
                    className="block text-[#b0b0b0] hover:opacity-60 py-2 font-light whitespace-nowrap"
                  >
                    3D
                  </Link>
                  <Link
                    href="/storyboard"
                    className="block text-[#b0b0b0] hover:opacity-60 py-2 font-light whitespace-nowrap"
                  >
                    Storyboard
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "text-[#38bdda]" : "text-[#b0b0b0]"
              } hover:opacity-60 font-light`}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="fixed top-0 w-full bg-[rgb(24,24,24)] p-4 md:hidden z-[100]">
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo/secondary-logo.png"
            alt="Gili Giammona Logo"
            width={200}
            height={60}
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <div className="space-y-2">
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-8 bg-white"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 space-y-4 p-4 font-['Helvetica'] bg-[rgb(24,24,24)] z-[100]">
            <Link
              href="/"
              className={`block ${
                pathname === "/" ? "text-[#38bdda]" : "text-[#b0b0b0]"
              } hover:opacity-60 font-light`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`block ${
                pathname === "/about" ? "text-[#38bdda]" : "text-[#b0b0b0]"
              } hover:opacity-60 font-light`}
            >
              ABOUT
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsWorkOpen(!isWorkOpen)}
                className={`flex items-center ${
                  pathname === "/3d" || pathname === "/storyboard"
                    ? "text-[#38bdda]"
                    : "text-[#b0b0b0]"
                } hover:opacity-60 font-light`}
              >
                <div className="flex items-center">
                  WORK <MdArrowDropDown size={20} />
                </div>
              </button>

              {isWorkOpen && (
                <div className="mt-2 py-2 px-4 bg-[rgb(44,44,44)] rounded-lg w-fit">
                  <Link
                    href="/3d"
                    className="block text-[#b0b0b0] hover:opacity-60 py-2 font-light"
                  >
                    3D
                  </Link>
                  <Link
                    href="/storyboard"
                    className="block text-[#b0b0b0] hover:opacity-60 py-2 font-light"
                  >
                    Storyboard
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`block ${
                pathname === "/contact" ? "text-[#38bdda]" : "text-[#b0b0b0]"
              } hover:opacity-60 font-light`}
            >
              CONTACT
            </Link>
          </nav>
        )}
      </div>
    </>
  );
}
