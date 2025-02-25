"use client";
import { useState } from "react";
import Logo from "./logo";
import MobileMenu from "./mobileMenu";
import DayNightToggle from "./btns/dayNightToggle";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {/*<!-- Component: Navbar with Icons --> */}
      <header className=" fixed z-40 w-full dark:text-white flex-grow justify-center flex font-roboto dark:bg-slate-800/90 border-b border-b-gray-300 dark:border-b-gray-700 bg-white/90 backdrop-blur-sm ">
        <div className="flex relative w-full max-w-screen-2xl mx-4 ">
          <nav
            aria-label="main navigation"
            className="flex sticky top-0  h-[4rem] w-full flex-grow justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Logo />
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-12 w-12 self-center lg:hidden
              ${
                isSideNavOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsSideNavOpen(!isSideNavOpen)}
              aria-expanded={isSideNavOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full dark:bg-white bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 dark:bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full dark:bg-white bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <div className="flex-grow text-base items-center justify-end flex-row"></div>

            <div className="flex-grow text-base items-center justify-end flex-row">
              <div className="flex items-center  dark:text-white h-full justify-end flex-row">
                <div className="mx-3 hidden lg:block self-center">
                  Krok za krokem
                </div>
                <div className="mx-3 hidden lg:block self-center">Skills</div>
                <div className="mx-3 hidden lg:block self-center">
                  Reference
                </div>
                <div className="mx-3 hidden lg:block self-center">O mně</div>
                <button className="inline-flex mr-2 ml-2  h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-500 hover:to-orange-700 px-4 text-sm font-medium tracking-wide hover: text-white shadow-md focus:bg-red-700 focus:shadow-sm focus:shadow-red-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300  disabled:shadow-none">
                  <span>Kontakt</span>
                </button>
                <div className="border-l-[1px] mx-2 pl-4 gap-4 flex flex-row border-gray-300 dark:border-gray-600">
                  <DayNightToggle />
                </div>
                <div className="border-l-[1px] mx-2 gap-4 px-4 flex flex-row border-gray-300 dark:border-gray-600">
                  <AiFillGithub className="h-6 w-6 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white text-gray-600" />
                  <FaLinkedin className="h-6 w-6 dark:text-gray-200 text-gray-600 dark:hover:text-white" />
                  <FaFacebook className="h-6 w-6 dark:text-gray-200 text-gray-600 dark:hover:text-white" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu
        setIsSideNavOpen={setIsSideNavOpen}
        isSideNavOpen={isSideNavOpen}
      />
      <div className="h-[4rem]"></div>

      {/*<!-- End Navbar with Icons --> */}
    </>
  );
};
export default Navbar;
