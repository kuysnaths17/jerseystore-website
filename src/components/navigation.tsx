"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { NavContext } from "@/app/navcontex";

import jslogo from "@/app/jslogo.png";

//pages
import Homepage from "@/pages/homepage";
import About from "@/pages/about";
import Product from "@/pages/products";
import Register from "@/pages/register";
import Preview from "@/pages/preview";

function Navigation() {
  const { activeLink, setActiveLink, isNavOpen, setIsNavOpen } = useContext(NavContext);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsNavOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[9999] bg-[#dbdbdb] flex justify-between items-center p-2 shadow-lg">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <Image src={jslogo} alt="primo" width={65} height={65} />
          </a>
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`fixed lg:static lg:flex lg:items-center lg:w-auto lg:bg-transparent bg-[#dbdbdb] lg:bg-none w-full transition-all duration-300 ${
            isNavOpen ? "block" : "hidden"
          }`}
          style={{ top: "4rem", left: 0, zIndex: 9998 }}
        >
          <ul className="flex flex-col lg:flex-row lg:justify-around gap-2 p-4 lg:p-0">
            <li>
              <a
                href="#Home"
                onClick={() => handleLinkClick("Homepage")}
                className={`text-xl py-4 px-8 rounded-md block ${
                  activeLink === "Homepage"
                    ? "bg-[#343434] text-[#dbdbdb]"
                    : "hover:bg-[#343434] hover:text-[#dbdbdb]"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Product"
                onClick={() => handleLinkClick("Product")}
                className={`text-xl py-4 px-8 rounded-md block ${
                  activeLink === "Product"
                    ? "bg-[#343434] text-[#dbdbdb]"
                    : "hover:bg-[#343434] hover:text-[#dbdbdb]"
                }`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#About"
                onClick={() => handleLinkClick("About")}
                className={`text-xl py-4 px-8 rounded-md block ${
                  activeLink === "About"
                    ? "bg-[#343434] text-[#dbdbdb]"
                    : "hover:bg-[#343434] hover:text-[#dbdbdb]"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Register"
                onClick={() => handleLinkClick("Register")}
                className={`text-xl py-4 px-8 rounded-md block ${
                  activeLink === "Register"
                    ? "bg-[#343434] text-[#dbdbdb]"
                    : "hover:bg-[#343434] hover:text-[#dbdbdb]"
                }`}
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[80px]">
        <div className="content-container">
          {activeLink === "Homepage" && <Homepage />}
          {activeLink === "Product" && <Product />}
          {activeLink === "About" && <About />}
          {activeLink === "Register" && <Register />}
          {activeLink === "Preview" && <Preview />}
        </div>
      </div>
      <div className="bg-zinc-800 w-full p-[7rem]">
        <div className="logo mr-[80]">
          <Image src={jslogo} alt="primo" width={150} height={150} />
        </div>
        <div className="flex flex-col gap-1 mb-3">
          <a className="text-[#dbdbdb] text-md hover:text-slate-400">
            Eastwood, Rodriguez Rizal
          </a>
          <a className="text-[#dbdbdb] text-md hover:text-slate-400">
            primosportwear@
          </a>
          <a className="text-[#dbdbdb] text-md hover:text-slate-400">
            010-020-3040
          </a>
        </div>
        <div className="border-[1px] border-solid border-white" />
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-xl font-extrabold text-slate-50 mb-4 mt-3">
            Useful Links
          </p>
          <div className="flex flex-row gap-3 items-center justify-center">
            <a
              href="https://www.facebook.com/primossportswear"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[#dbdbdb] text-4xl hover:text-blue-600" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#dbdbdb] text-4xl hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
