import Navbar from "../components/navbar";
import React from "react";
import LandingPage from "../components/landingPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  dark:bg-slate-900 items-center font-roboto  text-gray-600 font-semibold ">
        <div
          className={`flex h-screen text-[2rem] flex-grow text-center  w-full flex-col items-center sm:items-start`}
        >
          <LandingPage />
        </div>
      </div>
      <div className="h-[200rem] relative bg-black z-10">second site</div>
    </>
  );
}
