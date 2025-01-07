import Navbar from "../components/navbar";
import React from "react";
import LandingPage from "../components/landingPage";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen dark:bg-slate-900 items-center font-roboto  text-gray-600 font-semibold  min-h-screen">
        <Navbar />
        <main className="flex text-[2rem] flex-grow text-center  w-full flex-col gap-8 row-start-2 items-center sm:items-start">
          <LandingPage />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
      </div>
      <div className="h-[200rem] relative bg-black z-10">second site</div>
    </>
  );
}
