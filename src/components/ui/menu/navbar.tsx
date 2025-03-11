"use client";
import { useState } from "react";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import ThemeToggle from "../../btns/day-night-toggle";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { ToggleBtn } from "./toggle-btn";
import { menuItems } from "@/src/lib/menu-object";

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <header className=" fixed z-40 w-full dark:text-white flex-grow justify-center flex font-roboto dark:bg-slate-800/90 border-b border-b-gray-300 dark:border-b-gray-700 bg-white/90 backdrop-blur-sm ">
        <div className="flex relative w-full max-w-screen-2xl mx-1 sm:mx-4 ">
          <nav
            aria-label="main navigation"
            className="flex sticky top-0  h-[4rem] w-full flex-grow justify-between font-medium text-slate-700"
            role="navigation"
          >
            <Logo />
            <ToggleBtn
              isSideNavOpen={isSideNavOpen}
              setIsSideNavOpen={setIsSideNavOpen}
            />
            <div className="flex-grow lg:text-base items-center justify-end flex-row">
              <ul className="flex items-center  dark:text-white h-full justify-end flex-row">
                {menuItems.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="mx-3 hidden hover:text-black dark:hover:text-gray-300 duration-300 ease-in-out transition-all lg:block self-center"
                    >
                      <a href={item.link}>{item.label}</a>
                    </li>
                  );
                })}
                <li className="lg:border-l-[1px] mr-1 gap-4 px-4 flex flex-row border-gray-300 dark:border-gray-600">
                  <ul className="w-full flex flex-row gap-4 h-full">
                    <li>
                      <a
                        aria-label="Github account link"
                        href="https://github.com/RadekM1"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <AiFillGithub className="h-6 w-6  duration-300 ease-in-out transition-all dark:text-gray-200 hover:text-black dark:hover:text-white text-gray-600" />
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="LinkedIn account link"
                        href="https://www.linkedin.com/in/radek-morong/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaLinkedin className="h-6 w-6  dark:text-gray-200 duration-300 ease-in-out transition-all text-gray-600 hover:text-black dark:hover:text-white" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="border-l-[1px] border-r-[1px] lg:border-r-0 px-4 mr-2 gap-4 flex flex-row border-gray-300 dark:border-gray-600">
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu
        menuItems={menuItems}
        setIsSideNavOpen={setIsSideNavOpen}
        isSideNavOpen={isSideNavOpen}
      />
      <div className="h-[4rem]"></div>
    </>
  );
};
export default Navbar;
