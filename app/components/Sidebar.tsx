"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaArtstation } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsWorkOpen(false); // Close work dropdown when pathname changes
  }, [pathname]);

  return (
    <>
      {/* Desktop Sidebar */}

      <div className="hidden lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-80 lg:flex-col lg:bg-[rgb(24,24,24)] lg:pt-16 lg:px-14 lg:text-white">
        <Image
          src="/images/logo/secondary-logo.png"
          alt="Gili Lipschitz Logo"
          width={250}
          height={120}
          className="mb-12"
        />

        {/* Navigation Links */}

        <nav className="space-y-6 font-['Helvetica']">
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
              <div className="mt-2 py-2 px-4 bg-[rgb(44,44,44)] rounded-lg">
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
                <Link
                  href="/illustrations"
                  className="block text-[#b0b0b0] hover:opacity-60 py-2 font-light"
                >
                  Illustrations
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

        {/* Social Media Icons */}

        <div className="mt-auto pb-14">
          <div className="flex  ">
            <Link
              href="https://gili_akashi66.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-12 "
            >
              <FaArtstation className="hover:opacity-80 block" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gili-lipschitz-4b5479233"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-12"
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

      {/* Mobile/Tablet Header */}

      <div className="fixed top-0 w-full bg-[rgb(24,24,24)] p-4 lg:hidden">
        <div className="flex items-center justify-between">
          <Image
            src="/images/logo/secondary-logo.png"
            alt="Gili Lipschitz Logo"
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
          <nav className="mt-4 space-y-4 p-4 font-['Helvetica']">
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
                  pathname === "/work" ? "text-[#38bdda]" : "text-[#b0b0b0]"
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
