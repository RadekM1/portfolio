import Navbar from "../components/ui/menu/navbar";
import React from "react";
import LandingPage from "../components/sections/landing-page";
import SecondPage from "../components/sections/second-page";
import Reference from "../components/sections/reference";
import StepByStep from "../components/sections/step-by-step";
import TechStack from "../components/sections/tech-stack";
import AboutMe from "../components/sections/about-me";
import Form from "../components/sections/form";
import Footer from "../components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-auto font-roboto text-center overflow-hidden flex-col">
        <LandingPage />
        <article className="flex flex-col w-full items-center text-center">
          <SecondPage />
          <Reference />
          <StepByStep />
          <TechStack />
          <AboutMe />
          <Form />
        </article>
      </main>
      <Footer />
    </>
  );
}
