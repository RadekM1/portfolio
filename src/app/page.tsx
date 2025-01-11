import Navbar from "../components/navbar";
import React from "react";
import LandingPage from "../components/sections/landingPage";
import SecondPage from "../components/sections/secondPage";
import Reference from "../components/sections/reference";
import StepByStep from "../components/sections/stepByStep";
import TechStack from "../components/sections/techStack";
import AboutMe from "../components/sections/aboutMe";
import Form from "../components/sections/form";
import Footer from "../components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-auto mx-1 font-roboto text-center overflow-hidden flex-col">
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
